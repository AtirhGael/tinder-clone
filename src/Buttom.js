import React from 'react'
import './Button.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
function Buttom() {
  return (
    <div className='swipeButton'>
        <IconButton className='repeat'>
            <ReplayIcon fontSize='large'/>
        </IconButton>
        <IconButton className='left'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        <IconButton className='star'>
            <StarOutlineIcon fontSize='large'/>
        </IconButton>
        <IconButton className='right'>
            <FavoriteBorderIcon fontSize='large'/>
        </IconButton>
        <IconButton className='lightning'>
            <FlashOnIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default Buttom