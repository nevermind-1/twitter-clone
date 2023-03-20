import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed_header'>
            <h1>Home</h1>
        </div>

        {/* Tweet/Post */}
        <TweetBox />

        {/*post */}
        <Post />
        <Post />
        <Post />
        <Post />

    </div>
  )
}

export default Feed
