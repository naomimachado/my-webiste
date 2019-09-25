import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        Hi, I'm Naomi!
      </div>
      <div className="row">
        <span className="col-md-4 col-xs-6">Developer.</span>
        <span className="col-md-4 col-xs-6">Dancer.</span>
        <span className="col-md-4 col-xs-6">Amature Data Scientist.</span>
      </div>
      <div className="row">
        About Me
        <p>
          I am currently a student at Northeastern University pursuing my Master's in Computer Science. I am a Full stack Developer with a bias towards React.js for the front-end. In my free time I like dancing and exploring new places. 
          I like exploring new things and am currently exploring system programming and data science stuff.
          <br/>
          You can find my detailed resume here.
        </p>
      </div>
      <div className="row">
      Contact Details
       <div>
      Email
      </div> 
      <div>
        Social
      </div>
      <div>
        Nerd stuff
      </div>
      </div>
    </div>
  );
}

export default App;
