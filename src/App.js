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
  // padding: 20px;
}`

const Header = styled.div`{
  position:fixed;
  right:0px;
  top: 20px;
  padding: 0px 20px;
  border-radius: 30px 0px 0px 30px;
  background-color:transparent;
  z-index:999; 
  display: flex;
  justify-content: right;
  background-color: #f7d716;
  color: #fff;
  li{
    display:inline-block;
    font-weight : bold;
    padding : 20px;
    cursor:pointer;
    font-family: "SCDream-bold";
  };
  a{
    color: #fff;
  }
  
}`;
const anchors = ["homeArea", "aboutmeArea", "experienceArea", "developArea", "skillArea", "touchArea"];

function App() {
  return (
    <Wrap>
      <Header>
        <ul>
          <li><a href='#homeArea'>Home</a></li>
          <li><a href='#aboutmeArea'>About me</a></li>
          <li><a href='#experienceArea'>Experience</a></li>
          <li><a href='#developArea'>Develop</a></li>
          <li><a href='#skillArea'>Skill</a></li>
          <li><a href='#touchArea'>Get In Touch</a></li>
        </ul>
      </Header>

      <ReactFullpage
        licenseKey={'MY_KEY'}
        scrollingSpeed={1000} /* Options here */
        anchors={anchors}
        navigation={true}
        scrollBar={true}

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section bgColor1">
                <Home/>
              </div>

              <div className="section">
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

              <div className="section">
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
