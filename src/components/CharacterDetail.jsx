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
    const { name, photo } = character;
    return (
        <>
            <p>{name}</p>
            <img id='character-photo' alt='image of {name}'src={photo}/>
        </>
    )
}

export default CharacterDetail;

