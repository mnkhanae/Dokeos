import logo from "../Assets/Media/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaUser } from 'react-icons/fa';
import { BiBell } from 'react-icons/bi'
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="top-bar">
      <div className="d-flex justify-content-between align-items-center px-5 py-4 shadow">
        <div className="d-flex align-items-center justi gap-5">
          <div className="nav-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="top-bar__logo">
            <a className="logo" aria-label="home" href="/">
              <img src={logo} alt="website logo" />
            </a>
          </div>
        </div>

        <div>
          <DropdownButton id="dropdown-basic-button" className="dropdown-role" title={<><FaUser /> Learner</>}>
            <Dropdown.Item className="role-title text-center" href="#/action-1">Learner</Dropdown.Item>
            <Dropdown.Item className="role-title text-center" href="#/action-2">Trainer</Dropdown.Item>
            <Dropdown.Item className="role-title text-center" href="#/action-3">Groupe Manager</Dropdown.Item>
            <Dropdown.Item className="role-title text-center" href="#/action-3">Manager</Dropdown.Item>
            <Dropdown.Item className="role-title text-center" href="#/action-3">Administrator</Dropdown.Item>
          </DropdownButton>
         
        </div>

        <div>
        <div>
          <DropdownButton id="dropdown-basic-button" className="Bell-icon" title={<><BiBell size={36}/></>}>
            <Dropdown.Item className="role-title text-center" href="#/action-1">Learner</Dropdown.Item>
          </DropdownButton>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
