import React, { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
// components
import Main from './components/Main';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';


// css
import "./App.css";
import styled from "styled-components";

const Wrap = styled.div`{padding:2rem}`;
const Sidebar = styled.div`{width:30%;float:left}`;
const Topbar = styled.div`{
  width:100%;
  border-bottom:2px solid black;
  h1{
    display:inline-block;
    margin-right:2rem;
  }
  ul{
    display: inline-block;
  
    li{
      display:inline-block;
      font-weight : bold;
      padding : 20px;
    }
  } 
}`;
const anchors = ["Main", "Experience", "Skill"];

function App() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <Wrap className="wrap">
      <Topbar>
        <h1>고은정</h1>
        <ul>
          <li>Home</li>
          <li>About me</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>More</li>
        </ul>
      </Topbar>

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

                {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button> */}
              </div>

              <div className="section">
                <Experience />
              </div>

              <div className="section">
                <Skill />
              </div>

              <div className="section">
                <Portfolio />
              </div>


            </ReactFullpage.Wrapper>
          );
        }}



      />
    </Wrap>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       와  진짜 오랜ㅏ,,,
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;
