import React, { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// components
import Home from './renewal/Home';
import AboutMe from './renewal/AboutMe';
import Experience from './renewal/Experience';
import RecentWorks from './renewal/RecentWorks';
import Skill from './renewal/Skill';


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
  } 
}`;
const anchors = ["Main", "Experience", "Skill"];

function App() {
  return (
    <Wrap>
      <Header className='header'>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Experience</li>
          <li>Skill</li>
        </ul>
      </Header>

      <ReactFullpage
        licenseKey={'MY_KEY'}
        scrollingSpeed={1000} /* Options here */
        anchors={anchors}
        navigation
        navigationTooltips={anchors}



        render={({ state, fullpageApi }) => {

          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Home />
              </div>

              <div className="section">
                <AboutMe />
              </div>

              <div className="section">
                <Experience />
              </div>

              <div className="section">
                <RecentWorks />
              </div>

              <div className="section">
                <Skill />
              </div>

            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Wrap>
  );
}

export default App;
