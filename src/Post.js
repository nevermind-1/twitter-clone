import React, { forwardRef } from 'react';
import './Post.css'
import { Avatar } from '@mui/material'
import verifiedUserIcon from '@mui/icons-material/VerifiedUser'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish'



function Post({ displayName,userName,avatar,image,verified,text }) {
  return (
    <div className='post'>
        <div className='post_avatar'>
            <Avatar src='https://media.licdn.com/dms/image/D4D03AQHiI9-Um2VXDA/profile-displayphoto-shrink_100_100/0/1672516290001?e=1684368000&v=beta&t=e8bP3Wh8oKqHWTkiMIkNNeSvCuTmdyu-l1o3zl3qpKw'></Avatar>
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headerText'>
                    <h3>{displayName} {' '}
                        <span className='post_headerSpecial'>
                            {verified && <verifiedUserIcon className='verification_badge'/>} 
                            @{userName}
                        </span>
                    </h3>
                </div>
                <div className='post_headerDescription'>
                    <p> {text} </p>
                </div>
                <img src='https://media.giphy.com/media/8LD4PEEzUntS2ugspZ/giphy.gif'></img>
            </div>
            <div className='post_footer'>
                <ChatBubbleOutlineIcon fontSize = 'small' />
                <RepeatIcon fontSize='small' />
                <FavoriteBorderIcon fontSize='small'/>
                <PublishIcon fontSize='small' />   
            </div>
        </div>
    </div>
  )
}

export default Post