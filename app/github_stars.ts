const { signal } = new AbortController()

const repo = "https://api.github.com/repos/noter-apps/noter";

async function getGithubStars() {
  const gh_token = process.env.GITHUB_TOKEN;

  if (!gh_token) {
    throw new Error("GITHUB_TOKEN is not set");
  }

  const noterRepo = await fetch(repo, {
    signal,
    headers: {
      Authorization: `token ${gh_token}`,
    },
  });

  const { stargazers_count } = await noterRepo.json();
  return stargazers_count;
}

export default getGithubStars;
