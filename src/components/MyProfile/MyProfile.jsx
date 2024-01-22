import "./MyProfile.css";
import { MdEdit } from "react-icons/md";
import { FaCalendarPlus } from "react-icons/fa6";
import { TfiTimer } from "react-icons/tfi";
import { TbDropletStar } from "react-icons/tb";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const MyProfile = () => {
  const percentage = 77;
  const percent= 23;
  return (
    <div className="pb-5 mb-5">
      <div className="d-flex flex-column flex-sm-row gap-4 pt-5">
        <div
          className="d-flex flex-column flex-sm-row gap-3 align-items-center shadow rounded-3"
          style={{ padding: "5rem 6rem" }}
        >
          <div className="position-relative">
            <img
              src="https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gAAAA?rs=1&pid=ImgDetMain"
              alt="profile"
              className="rounded-circle photo-profile"
            />
            <MdEdit
              className="edit-icon text-white rounded-circle p-2 position-absolute"
              size={40}
              style={{ backgroundColor: "#767676" }}
            />
          </div>
          <div>
            <p className="fs-1 mb-0">admin user</p>
            <p className="text-secondary mb-0">Login: Arthur@dokeos.com</p>
            <p className="text-secondary">Since: 23 May 2019</p>
          </div>
        </div>

        <div className="text-secondary">
          <div className="row gy-5">
            <div className="col-12 col-sm-6">
              <div
                className="shadow rounded-3 py-4"
                style={{ padding:'6rem 4rem'}}
              >
                <div className="d-flex align-items-center gap-3">
                  <FaCalendarPlus
                    size={90}
                    style={{ backgroundColor: "#f4f4f4" }}
                    className="rounded-circle p-4 w-50 h-50"
                  />
                  <div className="d-flex flex-column gx-1 pt-3">
                    <p className="mb-0 fs-5">Sessions</p>
                    <p className="fs-1 fw-bold">13</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div
                className="shadow rounded-3 py-4"
                style={{ paddingLeft:'3rem', paddingRight:"3rem"}}
              >
                <div className="d-flex align-items-center gap-3">
                  <TfiTimer
                    style={{ backgroundColor: "#f4f4f4", width:"50px", height:"50px"  }}
                    className="rounded-circle p-3 w-50 h-50"
                  />
                  <div className="d-flex flex-column gx-1 pt-3">
                    <p className="mb-0 fs-5">Time course</p>
                    <p className="fs-1 fw-bold">02h37</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div
                className="shadow rounded-3 py-4"
                style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
              >
                <div className="d-flex align-items-center gap-3">
                  <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "butt",
                      textSize: "70px",
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(0, 178, 68, ${percentage / 100})`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#00a84e",
                    })}
                  > <TbDropletStar className=""/>
                  </CircularProgressbar>

                  <div className="d-flex flex-column gap-1 pt-3">
                    <p className="mb-0 fs-5">Engagement</p>
                    <p className="fs-1 fw-bold">77%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div
                className="shadow rounded-3 py-4"
                style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
              >
                <div className="d-flex align-items-center gap-3">
                <CircularProgressbar
                    value={percent}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "butt",
                      textSize: "70px",
                      pathTransitionDuration: 0.5,
                      pathColor: `rgba(255, 79, 1, ${percentage / 100})`,
                      textColor: "#f88",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#00a84e",
                    })}
                  > <TbDropletStar className=""/>
                  </CircularProgressbar>

                  <div className="d-flex flex-column gap-1 pt-3">
                    <p className="mb-0 fs-5">Completion</p>
                    <p className="fs-1 fw-bold">23%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
