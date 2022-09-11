import React, {useState, useEffect } from 'react';
import Character from '../components/Character';
import CharacterDetail from '../components/CharacterDetail'
import CharacterList from '../components/CharacterList';
import CharacterSelect from '../components/CharacterSelect';
import FollowedCharacters from '../components/FollowedCharacters';

const CharacterContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [selectedCharacterID, setSelectedCharacterID] = useState('')

    // fetching characters and parsing into usable objects

    useEffect(() => {
        getCharacters();
    });

    const getCharacters = function () {
        fetch('http://stranger-things-api.herokuapp.com/api/v1/characters?perPage=${100}').then((results) => results.json()).then((characters) => setCharacters(characters))
    };

    const onCharacterSelect = function (character) {
        setSelectedCharacter(character);
    }

    const handleCharacterSelected = _id => {
        setSelectedCharacterID(_id)
    }

    const handleFollowingToggle = (id) => {
        const followedCharacters = characters.map((character) => {
            return character.id === id ? {...character, isFollowed:!character.isFollowed} : character
        })
        setCharacters(followedCharacters)
    }

    const selectedCharacter_ID = characters.find(character => character._id = selectedCharacterID)

    return (
        <>
            <div className='main-container'>
        <header>
                <CharacterSelect  characters = {characters} onCharacterSelect={onCharacterSelect}/>
        </header>
                <CharacterDetail character={selectedCharacter} onFollowedToggle={handleFollowingToggle}/>
                <FollowedCharacters characters={characters} onCharacterSelected={handleCharacterSelected}/>
            </div>
        </>
    )
}

export default CharacterContainer;