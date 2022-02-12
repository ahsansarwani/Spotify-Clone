import React from 'react'
import './Footer.css'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from "@mui/material";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumLogo" src="" alt="" />
                <div className="footer_songInfo">
                    <h4>Yeah bumpy dam</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistAddIcon />
                    </Grid>
                    <Grid item>
                        <VolumeUpIcon />
                    </Grid>
                    <Grid item xs> 
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
