import React from 'react';
import Character from './Character';

const CharacterList = ({characters, onCharacterClick }) => {
    const Character = characters.map((character, _id) => {
        return <Character character={character} key={_id} onCharacterClick={onCharacterClick}/>;
    });
    return (
        <div>
            <ul>{Character}</ul>
        </div>
    );
};

export default CharacterList;