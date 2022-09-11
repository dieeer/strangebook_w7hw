import React from 'react';

const Character =({character, onFollowedToggle }) => {
    const handleClick = function () {
        onFollowedToggle(character._id)
    };

    const followedBtnText = character.isFollowed ? 'unfollow' : 'follow'

    return 
    (
    <>
    <li onClick={handleClick}>{character.name}</li>
    <button onClick={handleClick}>{followedBtnText}</button>;
    </>
    )
};

export default Character;