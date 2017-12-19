import React from 'react';
import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainBar from './Appbar.js';
import ProfileCard from './Profilecard';
import TrendsCard from './Trends';
import TweetCard from './TweetMaker';
import OthersTweets from './tweets';
import CopyRights from './copyrights';
import FollowerSuggestion from './Followersuggestion';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <MainBar/>
          <div id="containerDiv">
            <ProfileCard />
            <FollowerSuggestion />
            <TrendsCard />
            <CopyRights />
            <TweetCard/>
            <OthersTweets/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
