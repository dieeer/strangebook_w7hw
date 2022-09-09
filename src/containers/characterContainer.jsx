import React, {useState, useEffect } from 'react';

const CharacterContainer = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacters, setSelectedCharacters] = useState(null);

    // fetching characters and parsing into usable objects

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = function () {
        fetch('http://stranger-things-api.herokuapp.com/api/v1/characters').then((results) => results.json()).then((characters) => setCharacters(characters));
    };

    return (
        <>
            <p>yello 2</p>
        </>
    )
}

export default CharacterContainer;