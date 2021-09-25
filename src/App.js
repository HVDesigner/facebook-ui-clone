import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import "./App.css";
import HomeOutline from "./svg/home-outline";
import HomeFill from "./svg/home-fill";
import FriendOutline from "./svg/friend-outline";
import FriendFill from "./svg/friend-fill";
import PageOutline from "./svg/page-outline";
import PageFill from "./svg/page-fill";
import WatchOutline from "./svg/watch-outline";
import WatchFill from "./svg/watch-fill";
import GroupOutline from "./svg/group-outline";
import GroupFill from "./svg/group-fill";

function App() {
  const list = [
    {
      icon: HomeOutline,
      activeIcon: HomeFill,
      activeOnlyWhenExact: true,
      href: "/",
    },
    {
      icon: FriendOutline,
      activeIcon: FriendFill,
      activeOnlyWhenExact: false,
      href: "/friends",
    },
    {
      icon: PageOutline,
      activeIcon: PageFill,
      activeOnlyWhenExact: false,
      href: "/page",
    },
    {
      icon: WatchOutline,
      activeIcon: WatchFill,
      activeOnlyWhenExact: false,
      href: "/watch",
    },
    {
      icon: GroupOutline,
      activeIcon: GroupFill,
      activeOnlyWhenExact: false,
      href: "/groups",
    },
  ];

  return (
    <Router>
      <div className="main">
        <div className="toolbar d-flex justify-content-center shadow-sm">
          {list.map((value, key) => (
            <ListItem key={key} value={value} />
          ))}
        </div>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/friends"></Route>
          <Route path="/pages"></Route>
          <Route path="/watch"></Route>
          <Route path="/groups"></Route>
        </Switch>
      </div>
    </Router>
  );
}

function ListItem({ value }) {
  const [hover, setHover] = React.useState(false);
  let match = useRouteMatch({
    path: value.href,
    exact: value.activeOnlyWhenExact,
  });

  return (
    <Link
      to={value.href}
      className={`toolbar-item ${
        match ? "active" : ""
      } d-flex flex-grow-1 justify-content-center align-items-center position-relative`}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      {match ? (
        <React.Fragment>
          <value.activeIcon />
          <div className="toolbar-bottom-border-active position-absolute"></div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <value.icon />
          <div
            className="toolbar-hover-item position-absolute"
            style={{ opacity: hover ? 1 : 0 }}
          ></div>
        </React.Fragment>
      )}
    </Link>
  );
}

export default App;
