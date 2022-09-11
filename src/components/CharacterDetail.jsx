import './CharacterDetail.css'

// * API info v

// "_id": "5e77d8d2caf0952a9c8499bf",
// "aliases": [],
// "otherRelations": [],
// "affiliation": [],
// "occupation": [],
// "residence": [],
// "appearsInEpisodes": [],
// "photo": "https://vignette.wikia.nocookie.net/strangerthings8338/images/3/37/Agent_Repairman.png/revision/latest/scale-to-width-down/310?cb=20170303105021",
// "name": "Agent Repairman",
// "status": "Unknown",
// "gender": "Male",
// "eyeColor": "Blue",
// "portrayedBy": "Robert Walker Branchaud"

const CharacterDetail = function ({character, onFollowedToggle}) {
    if (!character) {
        return null;
    }

    const { name, photo, residence, occupation} = character;

    // const friendsList = otherRelations.map((otherRelations) => (
    //     <li className='friends-list' key={character._id}>👥 {otherRelations}</li>
    // ));
    
    const handleClick = () => {
        onFollowedToggle(character._id)
    }

    const followBtnText = character.isFollowed ? 'unfollow' : 'follow'

    return (
        <div className='profile'>
                <div className='profile-header'>
                <img id='character-photo' alt='image of {name}'src={photo}/>
                <p className='profile-name'>{name}</p>
            </div>
            <div>
            <>
            <button className='follow-button' onClick={handleClick}>{followBtnText}</button>
            </>
                <table className='further-info'>
                    <tbody>
                        <th></th>
                        <th> </th>
                    </tbody>
                    <tbody>
                        <td><li>🏠 lives in: {residence[0]}</li></td>
                        <td> </td>
                    </tbody>
                    <tbody>
                        <td><li>💼 works as: {occupation[0]}</li></td>
                        <td> </td>
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <tbody>
                        <th>
                            friends
                        </th>
                    </tbody>
                    <tbody>
                        <td>
                        {/* {friendsList} */}
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CharacterDetail;

