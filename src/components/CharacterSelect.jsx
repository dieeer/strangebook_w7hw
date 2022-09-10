import './CharacterSelect.css'

const CharacterSelect = ({ characters, onCharacterSelect }) => {
    if (!characters.length) return null;
    const optionElements = characters.map((character) => {
        return (<option value={character._id} key={character._id}>{character.name}</option>
        )
    })

    const handleSelectChange = (ev) => {
        const _id = ev.target.value;
        const character = characters.find((character) => character._id === _id);
        onCharacterSelect(character);
    };

    return (
        <div className='title-bar'>
            <p>strangebook</p>
                <select defaultValue='start typing' onChange={handleSelectChange}>
                    <option disabled>start typing</option>
                    <option></option>
                    {optionElements}
                </select>
        </div>
    );
};

export default CharacterSelect;
