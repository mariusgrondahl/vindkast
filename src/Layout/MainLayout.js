import React from 'react';
import Navbar from "../Components/Navbar";
import TopBar from "../Components/TopBar";
import "../Css/MainLayout.css";
// This component is meant to share 
// a basic layout that is used by multiple pages.
// In this case, the basic layout is very simple: it only adds a navbar.
// However, you could extend it by adding a footer or a sidebar.
// The advantage of using a layout component is that: 
// A) You don't repeat yourself on every page where you're using the same layout. (DRY)
// B) If you decide you want your layout to look slightly different, you only have to make 
//    make changes at 1 place. 
const MainLayout = (props) => {
	return (
		<div>
			<TopBar />
			<div className="Wrapper">
				<div className="Container">
				{props.children}
				</div>
			</div>
			<Navbar />
		</div>
	);
}

export default MainLayout;