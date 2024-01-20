import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import {
  IoNotificationsOutline,
  IoApps,
  IoChevronDownOutline,
  IoPerson,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { MdCookie } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { GoSignOut } from "react-icons/go";

import logo from "../../Assets/Media/logo.png";
import "../Navbar/Navbar.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function NavbarComponent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [show, setShow] = useState(false);

  const handleNotificationsClick = () => {
    setShow(!show);
  };

  const handleProfileClick = () => {
    setShowProfileModal(!showProfileModal);
  };

  return (
    <Navbar
      expand="lg"
      className="bg-white px-5 d-flex justify-content-between w-100 py-3 shadow z-3"
    >
      <Navbar.Brand
        href="#home"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="navbar_nav_icon me-4">
          <span></span>
          <span className="mb-0"></span>
          <span className="mb-0"></span>
        </div>
        <img src={logo} alt="website logo" className="navbar_logo" />
      </Navbar.Brand>

      <div
        className={`d-flex navbar_roles gap-2 ${isDropdownOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        <span>
          <IoPerson />
        </span>
        <span className="">Learner</span>
        <span>
          <IoChevronDownOutline className="roles_icon" />
        </span>

        {isDropdownOpen && (
          <div className="dropdown-content">
            <ul className="d-flex flex-column gap-3 py-4">
              <li>Learner</li>
              <li>Trainer</li>
              <li>Group Manager</li>
              <li>Manager</li>
              <li>Administrator</li>
            </ul>
          </div>
        )}
      </div>

      <div className="d-flex gap-4">
        <div>
          <Button variant="transparent" onClick={handleNotificationsClick}>
            <IoNotificationsOutline className="navbar_icons_bell" />
          </Button>
          <Modal
            className="modal-notification shadow"
            show={show}
            onHide={() => setShow(false)}
            backdrop={false}
          >
            <div
              onClick={() => setShow(false)}
              className="custom-modal-backdrop"
            ></div>
            <Modal.Header closeButton>
              <Modal.Title>Notifications</Modal.Title>
            </Modal.Header>
            <Modal.Body className="custom-modal-text text-center">
              See notifications
            </Modal.Body>
          </Modal>
        </div>

        <IoApps className="navbar_icons" />

        <div>
          <Button variant="transparent" onClick={handleProfileClick}>
            <img
              src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gAAAA?rs=1&pid=ImgDetMain"
              alt="profile"
              className="rounded-circle navbar_profile"
            />
          </Button>
          <Modal
            className="modal-profile shadow"
            show={showProfileModal}
            onHide={() => setShowProfileModal(false)}
            backdrop={false}
          >
            <div
              onClick={() => setShowProfileModal(false)}
              className="custom-modal-backdrop"
            ></div>
            <Modal.Header closeButton>
              <Modal.Title className="modal-header-profile">
                <p className="modal-profile-title mb-0">admin user</p>
                <p className="modal-profile-subtitle mb-0 fs-6">Learner, Trainer, Leader group, Manager</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-profile-text">
            <p className="d-flex align-items-center gap-2 mb-4 mt-3"><IoIosSettings size={30}/>My settings</p>
            <p className="d-flex align-items-center gap-2 mb-4"><IoDocumentTextOutline size={30} />LMS Terms of use</p>
            <p className="d-flex align-items-center gap-2 mb-4"><MdCookie size={30} />Cookies</p>
            <p className="d-flex align-items-center gap-2 mb-4"><GoSignOut size={30} />Sign Out</p>
            </Modal.Body>
          </Modal>
        </div>

        <div></div>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
