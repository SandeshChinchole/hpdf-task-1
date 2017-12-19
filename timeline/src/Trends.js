import React from 'react';
import Paper from 'material-ui/Paper';
import './Trends.css'

const styleCard = {
  height: '400px',
  width: '280px',
  marginTop: '10px',
  marginBottom: '10px',
  marginRight: '5px',
  marginLeft: '0px',
  float: 'left',
  clear: 'left'
};

const headerstyle = {
    fontSize: '25px',
    fontFamily: 'helvetica',
    fontWeight: 'bold',
    paddingLeft: '10px',
    paddingTop: '10px' 
}
const TrendsCard = () => (
  <div>
    <Paper style={styleCard} zDepth={3} >
      <div id="Trends">
        <h1 style={headerstyle}> Trends for you </h1>
        <ul>
          <li>
            <div>
              <p className="trend">#Unitetheseven</p>
              <p className="tweetcount">43k tweets</p>
            </div>
          </li>
          <li>
            <div>
              <p className="trend">Vigilante</p>
              <p className="tweetcount">31k tweets</p>
            </div>
          </li>
          <li>
            <div>
              <p className="trend">#Batsignal</p>
              <p className="tweetcount">28k tweets</p>
            </div>
          </li>
          <li>
            <div>
              <p className="trend">#GothamStrong</p>
              <p className="tweetcount">25k tweets</p>
            </div>
          </li>
          <li>
            <div>
              <p className="trend">#whysoserious</p>
              <p className="tweetcount">18k tweets</p>
            </div>
          </li>
          <li>
            <div>
              <p className="trend">#riddlemethis</p>
              <p className="tweetcount">14k tweets</p>
            </div>
          </li>
        </ul>
      </div>
    </Paper>
  </div>
);

export default TrendsCard;