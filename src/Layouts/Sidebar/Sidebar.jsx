import { LuBookMarked } from "react-icons/lu";
import {
  GrCatalog,
  GrBladesVertical,
  GrAchievement,
  GrBarChart,
} from "react-icons/gr";
import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    icon: <LuBookMarked className="nav-link_icon" />,
    text: "My Courses",
    to: "my-courses",
  },
  {
    icon: <GrCatalog className="nav-link_icon" />,
    text: "My Catalog",
    to: "my-catalog",
  },
  {
    icon: <GrBladesVertical className="nav-link_icon" />,
    text: "My Placement Test",
    to: "my-placement-test",
  },
  {
    icon: <GrAchievement className="nav-link_icon" />,
    text: "My Certificates",
    to: "my-certificates",
  },
  {
    icon: <GrBarChart className="nav-link_icon" />,
    text: "My Profile",
    to: "my-profile",
  },
];

export default function Sidebar() {
  const location = useLocation();
  const path = location.pathname.substring(1);

  return (
    <nav className="sidbar bg-white pt-lg-5 z-2">
      <ul className="sidbar-nav">
        {links.map((link, index) => (
          <li
            className={`nav-item ${link.to == path && "sidebar-item-active"}`}
            key={index}
          >
            <Link to={link.to} className="nav-link sidbar_link">
              <span
                className={`${
                  link.to == path ? "link-icon-active" : "link-icon"
                }`}
              >
                {link.icon}
              </span>
              <span
                className={`${
                  link.to == path ? "link-text-active" : "link-text"
                }`}
              >
                {link.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
