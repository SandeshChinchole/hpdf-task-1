import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton';
import NavigationExpandMoreIcon  from 'material-ui/svg-icons/navigation/expand-more';
import './tweets.css';
import { ToggleStar } from 'material-ui/svg-icons/toggle/star';
import { SocialShare } from 'material-ui/svg-icons/social/share';
import { NotificationSms, AvReplay } from 'material-ui/svg-icons';

const style = {
  height: '1000px',
  marginTop: '15px',
  marginLeft: '310px',
  marginRight: '310px',
  marginBottom: '25px'
}

const labelstyle = {
    fontFamily: 'helvetica',
    fontSize: '15px',
    textAlign: 'left',
    padding: '0px',
    fontWeight: 'bold',
    color: '#9E9E9E'
}
  
  const Buttonstyle = {
    width: '140px',
    height: '100%',
    display: 'block',
    margin: '0px',
    marginTop: '3px'
}
  
const OthersTweets = () => (
  <div style={style}>
    <Paper className="tweetstyle" zDepth={3} rounded={false} >
      <div className="containerdiv">    
          <Avatar src="https://t4.ftcdn.net/jpg/01/12/09/17/500_F_112091769_vWEmDiwVIpO4H1plGuhYgnmduTuiGUh2.jpg" size={50} />
          <h3 className="usernamestyle" >Amit Kola <span> <p className="handlestyle">@amitk . 4h</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
      </div>
      <div className="contentContainer">
          <p>@UIDAI respected sir I have a adhar no. But there is no mobile no. is resitered in my adhar.
Kindly tell me how can I redirected my mobile no. </p>
      </div>
      <div className="buttoncontainer">
          <FlatButton label="32k" />
          <FlatButton label="128k" />
          <FlatButton label="64k" />
          <FlatButton  />
      </div>
  </Paper>
  <Paper className="tweetstyle" zDepth={3} rounded={false} >
      <div className="containerdiv">    
          <Avatar src="https://www.shareicon.net/download/2015/08/23/89547_person.svg" size={50} />
          <h3 className="usernamestyle" >Prasad Rawal <span> <p className="handlestyle">@rawalp . 6 days ago</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
      </div>
      <div className="contentContainer">
          <p>Can you update your fingerprint without any ID? Looks like you've fell through a crack in the system. </p>
          
      </div>
      <div className="buttoncontainer">            
          <FlatButton label="24k" />
          <FlatButton label="360k" />
          <FlatButton label="600k" />
          <FlatButton  />
      </div>
  </Paper>
  <Paper className="tweetstyle" zDepth={3} rounded={false} >
      <div className="containerdiv">    
          <Avatar src="https://avatars0.githubusercontent.com/u/207720?s=400&v=4" size={50} />
          <h3 className="usernamestyle" >Aadhaar <span> <p className="handlestyle">@UIDAI . 10 days ago</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
      </div>
      <div className="contentContainer">
          <p>To open new bank account, a person not having Aadhaar will need to produce proof of having enrolled for Aadhaar & will need to link Aadhaar to the bank account by 31st March 2018  </p>
      <img src="https://pbs.twimg.com/media/DRZsGdMVwAEacc4.jpg:large" className="img" />
      </div>
      <div className="buttoncontainer">
          <FlatButton label="10k" />
          <FlatButton label="33k" />
          <FlatButton label="480k" />
          <FlatButton  />
      </div>
  </Paper>
  <Paper className="tweetstyle" zDepth={3} rounded={false} >
      <div className="containerdiv">    
          <Avatar src="https://d2gg9evh47fn9z.cloudfront.net/thumb_COLOURBOX15744459.jpg" size={50} />
          <h3 className="usernamestyle" >Ramesh shrivastava <span> <p className="handlestyle">@rameshsri . Dec 11</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
      </div>
      <div className="contentContainer">
          <p>Tell me one thing. Why is the Aadhaar HQ in Connaught Place, and not in Linking Road?
#ImportantQuestions </p>
          
      </div>
      <div className="buttoncontainer">
          <FlatButton label="1k" />
          <FlatButton label="11k" />
          <FlatButton label="21k" />
          <FlatButton  />
      </div>
  </Paper>
  </div>
);

export default OthersTweets;