
import { Octokit } from '@octokit/rest';
import { Buffer } from 'buffer';

// Helper to handle Base64 encoding in Node.js
const toBase64 = (str: string) => {
  return Buffer.from(str).toString('base64');
};

const publishToGitHub = async (
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
      // @ts-ignore - Octokit types can be tricky with union returns
      if (data && data.sha) {
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
      content: toBase64(JSON.stringify(postsManifest, null, 2)),
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
      // @ts-ignore
      if (data && data.sha) {
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
      content: toBase64(newPostHtml),
      sha: postSha,
    });
  } catch (e) {
    console.error('Failed to create HTML file:', e);
    throw new Error('HTML file creation failed');
  }

  return { success: true };
};

// Standard Vercel Serverless Function Signature (Node.js)
export default async function handler(req: any, res: any) {
  // Set CORS headers just in case
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Vercel automatically parses JSON body for us
    const { manifest, html, slug, password } = req.body;

    // Secure check
    if (password !== 'iE04103') {
       return res.status(401).json({ error: 'Unauthorized: Incorrect password' });
    }

    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;

    if (!token || !owner || !repo) {
      console.error('Missing Env Vars:', { hasToken: !!token, owner, repo });
      return res.status(500).json({ error: 'Server misconfiguration: Missing GitHub env vars' });
    }

    await publishToGitHub(token, owner, repo, manifest, html, slug);

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('API Error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
