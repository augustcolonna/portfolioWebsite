// import React from "react";
import "../stylesheets/main-styles.scss";
import { useState, useEffect } from "react";
import Bio from "./Bio";
import ProfilePicture from "./ProfilePicture";
import TopBanner from "./TopBanner";

function MainPage() {
  const [theme, setTheme] = useState("light")

	function toggleTheme () {
		if(theme === 'light'){
			setTheme('dark')
		}else{
			setTheme('light')
		}
	}

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={"main-container " + {theme}}>
      <TopBanner toggleTheme={toggleTheme}/>
      <ProfilePicture />
      <Bio  toggleTheme={toggleTheme}/>
    </div>
  );
}

export default MainPage;
