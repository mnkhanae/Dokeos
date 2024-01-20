import { LuBookMarked } from "react-icons/lu";
import { GrCatalog, GrBladesVertical, GrAchievement, GrBarChart } from "react-icons/gr";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <nav className="sidbar bg-white pt-lg-5">
      <ul className="sidbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link sidbar_link">
            <span>
              <LuBookMarked className="nav-link_icon-active" />
            </span>
            <span className="link-text link-text-active">My Courses</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span>
              <GrCatalog className="nav-link_icon" />
            </span>
            <span className="link-text">My Catalog</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span>
              <GrBladesVertical className="nav-link_icon" />
            </span>
            <span className="link-text">My Placement Test</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span>
              <GrAchievement className="nav-link_icon" />
            </span>
            <span className="link-text">My Certificates</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <span>
              <GrBarChart className="nav-link_icon" />
            </span>
            <span className="link-text">My Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}