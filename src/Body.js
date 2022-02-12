import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import SongRow from './SongRow';

function Body({ spotify }) {

    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    console.log("discover_weekly", discover_weekly);

    return (
        <div className="body">
           <Header spotify={spotify} />

            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body_infoText">
                    <h2>Playlist</h2>
                    <strong>Discover Weekly</strong>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilled className="body_shuffle" />
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>

                {discover_weekly?.tracks.items.map((item) => (

                        <SongRow track={item.track} />

                ))}

            </div>


        </div>
    )
}

export default Body
