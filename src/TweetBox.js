import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material'

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox_input'>
            <Avatar src='https://media.licdn.com/dms/image/D4D03AQHiI9-Um2VXDA/profile-displayphoto-shrink_100_100/0/1672516290001?e=1684368000&v=beta&t=e8bP3Wh8oKqHWTkiMIkNNeSvCuTmdyu-l1o3zl3qpKw'></Avatar>
            <input placeholder='what is happening?' type='text'/>
        </div>
        <input className='input_inputImage' placeholder='Optional: Enter Image URL' type='Text'/>

        <Button className='tweetBox_tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
