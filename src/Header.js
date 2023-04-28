import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import './header.css'

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header_icon'/>
        </IconButton>
            <img
            src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png'
            className='img_header'
            alt='header'
             />
             <IconButton>
                <ForumIcon/>
             </IconButton>
    </div>
  )
}

export default Header