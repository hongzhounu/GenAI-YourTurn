// SwarmMember.js
import React, { useState, useEffect } from 'react';
import './SwarmMember.css'; // Import the CSS file for styling

const SwarmMember = ({ members, rotate }) => {
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  useEffect(() => {
    if (rotate) {
      setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % members.length);
    }
  }, [rotate, members.length]);

  return (
    <div className="swarm-container">
      <h2>Current Member</h2>
      <div className="member-display">{members[currentMemberIndex]}</div>
      <h2>All Members</h2>
      <ul className="member-list">
        {members.map((member, index) => (
          <li key={index} className={index === currentMemberIndex ? 'current-member' : ''}>
            {member}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SwarmMember;
