import { Octokit } from '@octokit/rest';

declare var Buffer: any;

// Helper to handle Buffer in Vercel/Node environment
const getBuffer = (str: string) => {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(str).toString('base64');
  } else {
    // Fallback for browser-like environments (unlikely in Vercel API but safe)
    return btoa(unescape(encodeURIComponent(str)));
  }
};

export const publishToGitHub = async (
  token: string,
  owner: string,
  repo: string,
  postsManifest: any[],
  newPostHtml: string,
  slug: string
) => {
  const octokit = new Octokit({ auth: token });
  const manifestPath = 'public/posts.json';
  const postPath = `public/posts/${slug}.html`;

  // 1. Update (or Create) the Manifest JSON
  try {
    let sha;
    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path: manifestPath,
      });
      if (!Array.isArray(data)) {
        sha = data.sha;
      }
    } catch (e) {
      // File doesn't exist yet, that's fine
    }

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: manifestPath,
      message: `Update blog manifest for ${slug}`,
      content: getBuffer(JSON.stringify(postsManifest, null, 2)),
      sha,
    });
  } catch (e) {
    console.error('Failed to update manifest:', e);
    throw new Error('Manifest update failed');
  }

  // 2. Create (or Update) the HTML file
  try {
    let postSha;
    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path: postPath,
      });
      if (!Array.isArray(data)) {
        postSha = data.sha;
      }
    } catch (e) {
      // File doesn't exist yet
    }

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: postPath,
      message: `Publish post content: ${slug}`,
      content: getBuffer(newPostHtml),
      sha: postSha,
    });
  } catch (e) {
    console.error('Failed to create HTML file:', e);
    throw new Error('HTML file creation failed');
  }

  return { success: true };
};

// Vercel Serverless Handler
export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { manifest, html, slug, password } = await request.json();

    // Secure check
    if (password !== 'iE04103') {
       return new Response('Unauthorized', { status: 401 });
    }

    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;

    if (!token || !owner || !repo) {
      return new Response('Server misconfiguration: Missing GitHub env vars', { status: 500 });
    }

    await publishToGitHub(token, owner, repo, manifest, html, slug);

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}