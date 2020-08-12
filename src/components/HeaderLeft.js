import React from 'react';
import logo from '../youtube-logo.png';

function sidebarClick() {
  var div_width = document.getElementById("sidebar").style.width;
  if(div_width === "240px"){
  	document.getElementById("sidebar").style.width = "0px";
  }else{
  	document.getElementById("sidebar").style.width = "240px";  	
  }
}

function HeaderLeft(){
	return (
		<div className="HeaderSection HeaderLeft">
			<div className="youtube-icon youtube-notifications">
				<a href="#" onClick={sidebarClick}>
					<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
					  <g>
	        			<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
	      			  </g>
	      			</svg>
	  			</a>
			</div>
			<a href="/">
				<img className="youtube-logo" src={logo} alt="youtube" />
				<span className="country-code">IN</span>
			</a>
		</div>
	)
}

export default HeaderLeft;