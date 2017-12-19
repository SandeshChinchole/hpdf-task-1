import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import './followersuggestion.css';
import Chip from 'material-ui/Chip';

const styleCard = {
    height: '440px',
    width: '280px',
    marginTop: '0px',
    marginBottom: '30px',
    marginRight: '0px',
    marginLeft: '0px',
    float: 'left',
    clear: 'left',
    display: 'block',
  };

const avatarstyle = {
    display: 'inline',
}

const followdiv = {
    borderRadius: '25px',
    width: '50px',
    fontSize: '10px',
    textAlign: 'center',
    marginLeft: '55px',
    marginTop: '8px',
    marginBottom: '8px'
  }

  const labelstyletweet = {
    color: '#039BE5',
    fontSize: '15px',
    fontWeight: 'bold',
    fontFamily: 'helvetica'
  }
  
  const follow = {
    borderRadius: '25px',
    border: '1px solid #039BE5',
    width: '40px',
    fontSize: '10px',
    textAlign: 'center'
  }
  

const FollowerSuggestion = () => (
  <div>
    <Paper style={styleCard} zDepth={3} >
        <h3 className="heading"> who to follow </h3>
        <div className="containerdiv">    
            <Avatar src="http://www.writeups.org/wp-content/uploads/Martian-Manhunter-JLA-DC-Comics-h3.jpg" size={50} />
            <p className="headerstyle"> Martian Manhunter <span> <p className="handlestyle"> @martian </p> </span> </p>
        </div>
        <div style={followdiv}>
            <FlatButton label="Follow" labelStyle={labelstyletweet} style={follow} disableTouchRipple='true' hoverColor="white" />
        </div>
        <hr />
        <div className="containerdiv">    
            <Avatar src="https://www.technobuffalo.com/wp-content/uploads/2015/08/iron-man-bleeding-edge-armor-comic-book-470x310@2x.jpg" size={50} />
            <p className="headerstyle"> Iron Man <span> <p className="handlestyle"> @ironman </p> </span> </p>
        </div>
        <div style={followdiv}>
            <FlatButton label="Follow" labelStyle={labelstyletweet} style={follow} disableTouchRipple='true' hoverColor="white" />
        </div>
        <hr />
        <div className="containerdiv">    
            <Avatar src="http://unmatchedstyle.com/wp-content/uploads/2017/02/Hulk-Needlepointing-825x500-1-e1486736388331.jpg" size={50} />
            <p className="headerstyle"> Hulk <span> <p className="handlestyle"> @hulksmash </p> </span> </p>
        </div>
        <div style={followdiv}>
            <FlatButton label="Follow" labelStyle={labelstyletweet} style={follow} disableTouchRipple='true' hoverColor="white" />
        </div>
    </Paper>
  </div>
);

export default FollowerSuggestion;