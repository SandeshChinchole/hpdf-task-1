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
  marginTop: '0.5px',
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
                <Avatar src="https://cf4.s3.souqcdn.com/item/2016/08/16/11/38/79/36/item_L_11387936_15929435.jpg" size={50} />
                <h3 className="usernamestyle" >Joker <span> <p className="handlestyle">@clownprinceofcrime . 7h</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
            </div>
            <div className="contentContainer">
                <p>Let's put a smile on that face #whysoserious </p>
                <img src="https://i.pinimg.com/736x/d9/4e/d7/d94ed7716dbf67923d32c0d36ca02ef6--joker-images-comic-book-covers.jpg" width="100%" />
            </div>
            <div className="buttoncontainer">
                <FlatButton label="6k" />
                <FlatButton label="128k" />
                <FlatButton label="108" />
                <FlatButton  />
            </div>
        </Paper>
        <Paper className="tweetstyle" zDepth={3} rounded={false} >
            <div className="containerdiv">    
                <Avatar src="https://img00.deviantart.net/47bf/i/2010/230/6/a/dick_grayson_robin_by_benjaminjuan.jpg" size={50} />
                <h3 className="usernamestyle" >Robin <span> <p className="handlestyle">@boywonder . 1day ago</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
            </div>
            <div className="contentContainer">
                <p>So excited to join the #JLA #lit <a href="www.JLA.com" >JusticeLeagueofAmerica </a> </p>
                <img src="https://i2.wp.com/batman-news.com/wp-content/uploads/2015/03/Batman-Robin-40.jpg?quality=85&strip=info&ssl=1&w=800" width="100%" />
            </div>
            <div className="buttoncontainer">            
                <FlatButton label="2k" />
                <FlatButton label="213k" />
                <FlatButton label="67k" />
                <FlatButton  />
            </div>
        </Paper>
        <Paper className="tweetstyle" zDepth={3} rounded={false} >
            <div className="containerdiv">    
                <Avatar src="http://www.previewsworld.com/catalogimages/STK_IMAGES/STK640001-660000/STK658731.jpg" size={50} />
                <h3 className="usernamestyle" >Superman <span> <p className="handlestyle">@manofsteel . 2day ago</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
            </div>
            <div className="contentContainer">
                <p> Just flew back from #Antartica It's cold and lonely out there !  </p>
            </div>
            <div className="buttoncontainer">
                <FlatButton label="14k" />
                <FlatButton label="43k" />
                <FlatButton label="560k" />
                <FlatButton  />
            </div>
        </Paper>
        <Paper className="tweetstyle" zDepth={3} rounded={false} >
            <div className="containerdiv">    
                <Avatar src="https://thanley.files.wordpress.com/2014/08/novww36.jpg" size={50} />
                <h3 className="usernamestyle" >Wonder Woman <span> <p className="handlestyle">@dianaprince . 2day ago</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
            </div>
            <div className="contentContainer">
                <p>One of my fans sent me this #thankyou #wonderful #bestfans </p>
                <img src="https://s-media-cache-ak0.pinimg.com/736x/9a/1b/2b/9a1b2bd8e595c1c8ee497547dda53db5.jpg" className="img" />
            </div>
            <div className="buttoncontainer">
                <FlatButton label="14k" />
                <FlatButton label="200k" />
                <FlatButton label="940k" />
                <FlatButton  />
            </div>
        </Paper>
        <Paper className="tweetstyle" zDepth={3} rounded={false} >
            <div className="containerdiv">    
                <Avatar src="https://www.quirkybyte.com/wp-content/uploads/2017/05/Screen-Shot-2017-05-26-at-2.10.44-PM.png" size={50} />
                <h3 className="usernamestyle" >Flash <span> <p className="handlestyle">@scarletspeedster . 3day ago</p> </span><span className="options"> <NavigationExpandMoreIcon /> </span> </h3>
            </div>
            <div className="contentContainer">
                <p>I am going into a different time, so will remain offline for few days but will catch up soon ;) #speedpuns #timetravel </p>
            </ div>
            <div className="buttoncontainer">
                <FlatButton label="88k" />
                <FlatButton label="724k" />
                <FlatButton label="921k" />
                <FlatButton />
            </div>
        </Paper>
    </div>
);

export default OthersTweets;