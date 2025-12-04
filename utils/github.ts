
export const publishChanges = async (manifest: any[], html: string, slug: string) => {
  try {
    const response = await fetch('/api/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        manifest,
        html,
        slug,
        password: 'iE04103' // Internal auth token for API
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || 'Failed to publish');
    }

    return true;
  } catch (e) {
    console.error('Publishing error:', e);
    throw e;
  }
};
