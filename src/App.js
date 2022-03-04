import React, { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// components
import Main from './renewal/Home';

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
  useEffect(() => {
    document.title = "Eunjeong";

  }, []);

  return (
    <Wrap>
      <Header className='header'>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Portfolio</li>
          <li>Project</li>
          <li>Resume</li>
          <li>More</li>
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
                <Main />
              </div>

            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Wrap>
  );
}

export default App;
