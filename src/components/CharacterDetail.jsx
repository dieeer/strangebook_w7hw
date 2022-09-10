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

const CharacterDetail = function ({character}) {
    if (!character) return null;
    const { name, photo, residence, occupation, otherRelations } = character;
    return (
        <div className='profile'>
                <div className='profile-header'>
                <img id='character-photo' alt='image of {name}'src={photo}/>
                <p className='profile-name'>{name}</p>
            </div>
            <div>
                <table className='further-info'>
                    <tr>
                        <th></th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td><li>🏠 lives in: {residence[0]}</li></td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td><li>💼 works as: {occupation[0]}</li></td>
                        <td> </td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>
                        <th>
                            friends
                        </th>
                    </tr>
                    <tr>
                        <td>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default CharacterDetail;

