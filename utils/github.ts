
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
      // Try to parse JSON, fall back to text if it fails (e.g. 500 server crash)
      let errorMessage = 'Failed to publish';
      try {
        const err = await response.json();
        errorMessage = err.error || errorMessage;
      } catch (parseError) {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        errorMessage = `Server Error (${response.status}): ${text.substring(0, 100)}`;
      }
      throw new Error(errorMessage);
    }

    return true;
  } catch (e) {
    console.error('Publishing error:', e);
    throw e;
  }
};
