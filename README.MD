// Example structure for a dynamic profile component
import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import GitHubStats from 'react-github-stats';

const ProfileReadme = ({ username }) => {
  return (
    <div className="cyberpunk-theme">
      <TypingAnimation texts={['WELCOME', 'MAKBEL KEBEDE', 'FULL STACK DEVELOPER']} />
      <GitHubStats username={username} />
      <GitHubCalendar username={username} />
      <SkillIcons skills={['react', 'nodejs', 'python']} />
    </div>
  );
};
