import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderCenter from './HeaderCenter';
import HeaderRight from './HeaderRight';

function Header(){
	return (
		<div className="Header">
			<HeaderLeft />
			<HeaderCenter />
			<HeaderRight />
		</div>
	)
}

export default Header;