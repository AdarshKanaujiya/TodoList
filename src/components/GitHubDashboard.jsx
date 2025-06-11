import React, { useState } from "react";

function GitHubDashboard() {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState(""); // input username
  const [error, setError] = useState("");

  const fetchGitHubData = () => {
    if (!username) return;
    // Fetch profile
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        }
        return res.json();
      })
      .then((data) => {
        setProfile(data);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setProfile(null);
        setRepos([]);
      });

    // Fetch repos
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Repos not found");
        }
        return res.json();
      })
      .then((data) => {
        setRepos(data);
      })
      .catch(() => {
        setRepos([]);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchGitHubData();
    }
  };

  return (
    <div className="github-dashboard-container">
      <h2>GitHub Dashboard</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyDown}
        className="github-input"
      />
      <button onClick={fetchGitHubData} className="github-btn">
        Get Profile
      </button>
      {error && <p className="error-message">{error}</p>}
      {profile && (
        <div className="profile-info">
          <img src={profile.avatar_url} alt="avatar" className="avatar" />
          <h3>{profile.name || profile.login}</h3>
          <p>{profile.bio}</p>
          <p>
            Followers: {profile.followers} | Following: {profile.following}
          </p>
          <p>Public Repos: {profile.public_repos}</p>
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            View Profile on GitHub
          </a>
        </div>
      )}
      {repos.length > 0 && (
        <div className="repo-list">
          <h3>Repositories</h3>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id} className="repo-item">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
                <p>{repo.description}</p>
                <p>
                  ⭐ {repo.stargazers_count} | Forks: {repo.forks_count}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GitHubDashboard;
