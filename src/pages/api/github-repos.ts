import type { APIRoute } from 'astro';
export interface Env {
  GH_TOKEN: string;
}

export const GET: APIRoute = async ({ url, env }) => {
  const username = 'jallox';
  const token = env.GH_TOKEN;

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    const data = await res.json();

    if (!Array.isArray(data)) {
      return new Response(JSON.stringify({ error: 'Invalid GitHub response' }), { status: 500 });
    }

    const publicRepos = data
      .filter(repo => !repo.private)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .map(repo => ({
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        url: repo.html_url,
        language: repo.language,
        image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`
      }));

    return new Response(JSON.stringify(publicRepos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
};
