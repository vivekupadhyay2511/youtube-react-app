import React from 'react';
import SidebarItem from './SidebarItem';


function Sidebar(){
	return (

		<div className="Sidebar" id="sidebar">

			<SidebarItem item={{ title: "Home", icon: "home", url: "#1", active: "active" }} />
			<SidebarItem item={{ title: "Trending", icon: "local_fire_department", url: "#2", active: "" }} />
			<SidebarItem item={{ title: "Subscriptions", icon: "subscriptions", url: "#3", active: "" }} />
			<div className="saperator"></div>

			<SidebarItem item={{ title: "Library", icon: "video_library", url: "#4", active: "" }} />
			<SidebarItem item={{ title: "History", icon: "history", url: "#5", active: "" }} />
			<SidebarItem item={{ title: "Watch later", icon: "watch_later", url: "#6", active: "" }} />
			<SidebarItem item={{ title: "Liked videos", icon: "thumb_up", url: "#7", active: "" }} />
			<div className="saperator"></div>

			<SidebarItem item={{ title: "YouTube Premium", icon: "block", url: "#8", active: "" }} />
			<SidebarItem item={{ title: "Movies", icon: "local_movies", url: "#9", active: "" }} />
			<SidebarItem item={{ title: "Gaming", icon: "sports_esports", url: "#10", active: "" }} />
			<SidebarItem item={{ title: "Live", icon: "block", url: "#11", active: "" }} />
			<SidebarItem item={{ title: "Fashion & Beauty", icon: "block", url: "#12", active: "" }} />
			<SidebarItem item={{ title: "Learning", icon: "block", url: "#13", active: "" }} />
			<div className="saperator"></div>

			<SidebarItem item={{ title: "Settings", icon: "settings", url: "#14", active: "" }} />
			<SidebarItem item={{ title: "Report history", icon: "flag", url: "#15", active: "" }} />
			<SidebarItem item={{ title: "Help", icon: "help", url: "#16", active: "" }} />
			<SidebarItem item={{ title: "Send feedback", icon: "feedback", url: "#17", active: "" }} />
			<div className="saperator"></div>

		</div>
	)
}

export default Sidebar;