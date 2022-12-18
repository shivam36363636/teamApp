import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";
import { useAuthContext } from "../hooks/useAuthContext";

//style
import "./Sidebar.css";

function Sidebar() {
  const { user } = useAuthContext();
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/">
                <ion-icon class="link-icon" name="grid-outline"></ion-icon>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <ion-icon class="link-icon" name="add-outline"></ion-icon>
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
