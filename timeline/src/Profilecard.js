import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import CardMedia from 'material-ui/Card'
import './profilecard.css'

const styleCard = {
  height: '300px',
  width: '280px',
  marginTop: '0px',
  marginBottom: '0px',
  marginRight: '5px',
  marginLeft: '0px',
  paddingRight: '10px',
  float: 'left',
  clear: 'right'
};


const ProfileCard = () => (
  <div>
    <Paper style={styleCard} zDepth={3} >
        <div>
        <img src="https://vignette.wikia.nocookie.net/batman/images/0/06/Gotham_skyline1.jpg/revision/latest/scale-to-width-down/250?cb=20160927182822" className="imgstyle"/>
        <div className="containerdiv">    
          <Avatar src="https://visualpharm.com/assets/718/Batman-595b40b65ba036ed117d3c1f.svg" size={35} />
          <p className="headerstyle"> Batman <br />  <p className="handlestyle"> @capedcrusader </p>  </p>
        </div>
        <div className="statContainer">
          <div className="Button">
            <p className="title">Tweets</p>
            <p className="statnumber">1.2K</p>
          </div>
          <div className="Button">
            <p className="title">Following</p>
            <p className="statnumber">7</p>
          </div>
          <div className="Button">  
            <p className="title">Followers</p>
            <p className="statnumber">14.7M</p>
          </div> 
        </div>  
        </div>
    </Paper>
  </div>
);

export default ProfileCard;