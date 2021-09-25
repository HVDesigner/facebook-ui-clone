import React from "react";
import HomeOutline from "./svg/home-outline";
// import HomeFill from "./svg/home-fill";
import FriendOutline from "./svg/friend-outline";
// import FriendFill from "./svg/friend-fill";
import PageOutline from "./svg/page-outline";
// import PageFill from "./svg/page-fill";
import WatchOutline from "./svg/watch-outline";
// import WatchFill from "./svg/watch-fill";
import GroupOutline from "./svg/group-outline";
// import GroupFill from "./svg/group-fill";
import "./App.css";

function App() {  
  const [list, _] = React.useState([
    {
      icon: HomeOutline,
    },
    {
      icon: FriendOutline,
    },
    {
      icon: PageOutline,
    },
    {
      icon: WatchOutline,
    },
    { 
      icon: GroupOutline,
    },  
  ]);   
 
  return (
    <div className="main">
      <div className="topbar d-flex">
        {list.map((value, key) => (
          <a
            key={key}
            href="#1"
            className="d-flex flex-grow-1 justify-content-center align-items-center"
          >
            <value.icon />
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
