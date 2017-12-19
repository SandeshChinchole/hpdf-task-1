import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Search from 'material-ui/svg-icons/action/search'
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import NotificationSms from 'material-ui/svg-icons/notification/sms';
import './Appbar.css';

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

const followdiv = {
  borderRadius: '25px',
  width: '50px',
  fontSize: '10px',
  textAlign: 'center',
  marginLeft: '35px',
  marginTop: '8px'
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

const MainAppBar = () => (
  <div>
    <Paper className="Appbarstyle" zDepth={2} >
      <div className="containerdiv">
        <div className="buttons">
          <FlatButton label="home"  labelStyle={labelstyle} style={Buttonstyle} disableTouchRipple='true' hoverColor="#E1F5FE" icon={<ActionHome viewBox="0 0 28 28" color="#9E9E9E" />}  />                        
          <FlatButton label="notifs" labelStyle={labelstyle} style={Buttonstyle} disableTouchRipple='true' hoverColor="#E1F5FE" icon={<NotificationsIcon viewBox="0 0 28 28" color="#9E9E9E"/>} />             
          <FlatButton label="messages" labelStyle={labelstyle} style={Buttonstyle} disableTouchRipple='true' hoverColor="##E1F5FE" icon={<NotificationSms viewBox="0 0 28 28" color="#9E9E9E"/>} />           
        </div>
        <Avatar
              src="https://vignette.wikia.nocookie.net/meatsleep/images/9/99/Twitterbird.jpg/revision/latest?cb=20151231235040"
              size={30}
              className="mainicon"
        />
        <div className="searchcontainer">
          <TextField height="5px" className="Textfieldstyle" underlineShow={false} >  
          </TextField>
          <a href="./searchpage/searchpage.js">
          <Search viewBox="0 0 28 28" color="#1565C0" className="searchbutton"/>
          </a>
        </div>
        <Avatar
              src="https://visualpharm.com/assets/718/Batman-595b40b65ba036ed117d3c1f.svg"
              size={30}
              className="usericon"
        />
        <div style={followdiv}>
          <FlatButton label="Follow" labelStyle={labelstyletweet} style={follow} disableTouchRipple='true' hoverColor="white" />
        </div> 
      </div>
    </Paper>
  </div>
);

export default MainAppBar;








