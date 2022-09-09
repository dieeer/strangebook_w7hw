import React, {useState, useEffect } from 'react';
import Character from '../components/Character';
import CharacterDetail from '../components/CharacterDetail'
import CharacterList from '../components/CharacterList';
import CharacterSelect from '../components/CharacterSelect';
import Autocomplete from '../Autocomplete.js'

const CharacterContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    // fetching characters and parsing into usable objects

    useEffect(() => {
        getCharacters();
    });

    const getCharacters = function () {
        fetch('http://stranger-things-api.herokuapp.com/api/v1/characters').then((results) => results.json()).then((characters) => setCharacters(characters));
    };

    const onCharacterSelect = function (character) {
        setSelectedCharacter(character);
    }

    return (
        <>
            <div className='main-container'>
                <CharacterDetail character={selectedCharacter}/>
                <Autocomplete characters={characters}  onCharacterSelect={onCharacterSelect}
                    suggestions={['characters']}
                />
            </div>
        </>
    )
}

export default CharacterContainer;