import React from 'react';
import Icon from '@material-ui/core/Icon';

function SidebarItem(props){	
	return (
	  	<div className={props.item.active ? 'sidebarItem active' : 'sidebarItem'}>
		  	<a href={props.item.url}>
		  		<div className="icon">
					<Icon>{props.item.icon}</Icon>
		  		</div>
		  		<div className="title">{props.item.title}</div>
		  	</a>
	  	</div>
	)
}

export default SidebarItem;