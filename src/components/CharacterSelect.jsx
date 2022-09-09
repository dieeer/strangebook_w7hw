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
        <select defaultValue={'5e77d8d2caf0952a9c8499c9'} onChange={handleSelectChange}>
            <option value='default'></option>
            {optionElements}
            </select>
    );
};

export default CharacterSelect;
