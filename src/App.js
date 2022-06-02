import React, { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// components
import Home from './renewal/Home';
import AboutMe from './renewal/AboutMe';
import Experience from './renewal/Experience';
import Develop from './renewal/DevelopMe';
import Skill from './renewal/Skill';
import Touch from './renewal/Touch';


import './css/style.css';
import styled from "styled-components";

const Wrap = styled.div`{
  padding: 20px
}`

const Header = styled.div`{
  display: flex;
  justify-content: right;
  li{
    display:inline-block;
    font-weight : bold;
    padding : 20px;
    z-index:999; 
    cursor:pointer;
  };
  
}`;
// const anchors = ["Main", "Experience", "Skill"];
const anchors = ["Home", "Aboutme", "Experience", "Develop", "Skill", "Get In Touch"];

function App() {
  function goPage(e){
    console.log("target---");
    console.log(e.target);
    console.log(e.currentTarget);

  }
  return (
    <Wrap>
      <Header>
        <ul onClick={goPage}>
          <li><a href='#homeArea'>Home</a></li>
          <li>About me</li>
          <li>Experience</li>
          <li>Develop</li>
          <li>Skill</li>
          <li>Get In Touch</li>
        </ul>
      </Header>

      <ReactFullpage
        licenseKey={'MY_KEY'}
        scrollingSpeed={1000} /* Options here */
        anchors={anchors}
        navigation={true}
        // navigationTooltips={anchors}



        render={({ state, fullpageApi }) => {

          return (
            <ReactFullpage.Wrapper>
              <div className="section" id='homeArea'>
                <Home />
              </div>

              <div className="section" id='AboutArea'>
                <AboutMe />
              </div>

              <div className="section">
                <Experience />
              </div>

              <div className="section">
                <Develop />
              </div>

              <div className="section">
                <Skill />
              </div>

              <div className='section'>
                <Touch />
              </div>

            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Wrap>
  );
}

export default App;
