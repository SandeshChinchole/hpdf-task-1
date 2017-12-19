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
    float: 'right',
    clear: 'right',
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
            <Avatar src="https://thanley.files.wordpress.com/2014/08/novww36.jpg" size={50} />
            <p className="headerstyle">Wonder Woman <span> <p className="handlestyle"> @dianaprince </p> </span> </p>
        </div>
        <div style={followdiv}>
            <FlatButton label="Follow" labelStyle={labelstyletweet} style={follow} disableTouchRipple='true' hoverColor="white" />
        </div>
        <hr />
        <div className="containerdiv">    
            <Avatar src="http://www.previewsworld.com/catalogimages/STK_IMAGES/STK640001-660000/STK658731.jpg" size={50} />
            <p className="headerstyle"> Superman <span> <p className="handlestyle"> @manofsteel </p> </span> </p>
        </div>
        <div style={followdiv}>
            <FlatButton label="Follow" labelStyle={labelstyletweet} style={follow} disableTouchRipple='true' hoverColor="white" />
        </div>
        <hr />
        <div className="containerdiv">    
            <Avatar src="http://2.bp.blogspot.com/-bc7b6VY6j-8/USztVSsiSHI/AAAAAAAAGZQ/qlYGXQZmBW0/s1600/feb27dcCW_Vol2.jpg" size={50} />
            <p className="headerstyle"> Catwoman <span> <p className="handlestyle"> @catburglar </p> </span> </p>
        </div>
        <div style={followdiv}>
            <FlatButton label="Follow" labelStyle={labelstyletweet} style={follow} disableTouchRipple='true' hoverColor="white" />
        </div>
    </Paper>
  </div>
);

export default FollowerSuggestion;