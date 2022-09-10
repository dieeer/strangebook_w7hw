import React, {useState, useEffect } from 'react';
import Character from '../components/Character';
import CharacterDetail from '../components/CharacterDetail'
import CharacterList from '../components/CharacterList';
import CharacterSelect from '../components/CharacterSelect';
import Autocomplete from '../components/Autocomplete';

const CharacterContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [suggestions, setSuggestions] = useState(null);

    // fetching characters and parsing into usable objects

    useEffect(() => {
        getCharacters();
    });

    const getCharacters = function () {
        fetch('http://stranger-things-api.herokuapp.com/api/v1/characters').then((results) => results.json()).then((characters) => setCharacters(characters))
    };

    const onCharacterSelect = function (character) {
        setSelectedCharacter(character);
    }

    return (
        <>
            <div className='main-container'>
        <header>
                <CharacterSelect  characters = {characters} onCharacterSelect={onCharacterSelect}/>
        </header>
                <CharacterDetail character={selectedCharacter}/>
            </div>
        </>
    )
}

export default CharacterContainer;