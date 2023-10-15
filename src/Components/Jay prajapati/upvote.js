
import React, { useState } from 'react';

const Upvote = () => {
  const [isUpvoted, setIsUpvoted] = useState(false);

  const toggleUpvote = () => {
    setIsUpvoted(!isUpvoted);
  };

  function upvote_icon() {
    return (
      <svg width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15"fill="#ffffff"></path></g></svg>
    )
  }

  function upvoted_icon() {
    return (
      <svg fill="#ffffff" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z"></path></g></svg>
    )
  }

  return (
    <button
      className={`upvote-button ${isUpvoted ? 'upvoted' : ''}`}
      onClick={toggleUpvote}
    >
      {isUpvoted ? upvoted_icon() : upvote_icon()}
    </button>
  );
};

export default Upvote;
