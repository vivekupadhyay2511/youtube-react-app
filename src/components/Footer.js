import React from 'react'
import FooterLogo from '../youtube-BW-logo.png'


function Footer(){
	return (
		<div className="Footer">
			<img src={FooterLogo}  alt="youtube" />
			<p>YouTube is an American online video-sharing platform headquartered in San Bruno, California. Three former PayPal employees—Chad Hurley, 
			<br/> 
			Steve Chen, and Jawed Karim—created the service in February 2005.</p>
		</div>
	)
}

export default Footer