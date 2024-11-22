import React, { useContext } from 'react';
import './App.scss';
import Card from './components/Card';
import Mode from './components/Mode';
import { ThemeMode } from './utlits/ThemeModeContext';

function App() {
  const { nightMode ,setnightMode } = useContext(ThemeMode);

  return (
    <>
    <div className={`container ${nightMode ? 'dark' : ''}`}>

<div className="card">
  <div className="card_logo"></div>
  <div className="card_title">Codv Academy</div>
  <div className="card_sub-title">learn UI Development</div>
  <form className="card_form">
    <div className="fields">
      <div className="username">
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-mail"
        >
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          ></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>

        <input
          type="username"
          className="user-input"
          placeholder="username"
        />
      </div>
      <div className="password">
       
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="feather feather-lock"
>

          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>

        <input
          type="password"
          className="pass-input"
          placeholder="password"
        />
      </div>
    </div>
    <button className="btn">Login</button>
  </form>
  <div className="link">
    <a href="#">Forgot password?</a> or <a href="#">Sign up</a>
  </div>
</div>
</div>

<div className="toggle" onClick={()=>setnightMode(!nightMode)}>
<input type="checkbox" id="toggleBtn" />
<label htmlFor="toggleBtn" >
  <span className="toggle-icon">
    <img src="src/assets/sun.svg"  alt="sun icon" className="icon sun" />
    <img src="src/assets/moon.svg" alt="moon icon" className="icon moon" />
  </span>
</label>
</div>
{/* 
<script>
let toggleBtn = document.querySelector("#toggleBtn");

let bodyEl = document.querySelector("body");

let darkMode = false;

toggleBtn.addEventListener('change', (event) => {
  darkMode = event.target.checked;
  if(darkMode) {
    bodyEl.classList.add("dark");
  } else {
    bodyEl.classList.remove("dark");
  }
})


</script> */}
    
    
    </>
    // <div classNameName={`theme--mode ${nightMode ? 'dark' : ''}`}>
    //   <Mode />
    //   <Card />
    // </div>

  );
}

export default App;