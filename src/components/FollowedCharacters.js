const FollowedCharacters = ({ characters, onCharacterSelected }) => {
    const followedCharacters = characters.filter(character => character.isFollowed)
    return (
        <>
            <h1>following:</h1>
            <ul>{followedCharacters.map(character => {
                return (
                    <li key={character._id}><button onClick={() => onCharacterSelected(character.name)}>{character.name}</button>
                    </li>
                    )
            })}
                </ul>
        </>
                )

        }

export default FollowedCharacters;