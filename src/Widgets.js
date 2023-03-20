import React from 'react';
import './Widgets.css';
import { 
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import searchIcon from '@mui/icons-material/Search'

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <searchIcon className ='widgets_searchIcon' />
        <input placeholder='Search Twitter'/>
      </div>

      <div className='widgets_widgetContainer'>
        <h2> What's happening </h2>

        <TwitterTweetEmbed tweetId='<blockquote class="twitter-tweet"><p lang="en" dir="ltr">My mother passed away on Monday and I am back to produce a program for international television<br><br>This is what my mother always wanted for me. She went without a lot of things so that I could grow up and achieve my dreams <a href="https://t.co/45h62DL1QK">pic.twitter.com/45h62DL1QK</a></p>&mdash; Blaise Eyong (@BlaiseEyong) <a href="https://twitter.com/BlaiseEyong/status/1637530096956211200?ref_src=twsrc%5Etfw">March 19, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>' />
        
        <TwitterTimelineEmbed 
        sourceType='profile'
        screenName='clevergazi'
        
        />
      </div>
    </div>
  )
}

export default Widgets
