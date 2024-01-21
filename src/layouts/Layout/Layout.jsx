import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Layout.css";

export default function Layout(Props) {
  const { children } = Props;

  const location = useLocation();
  const path = location.pathname.substring(1);

  const title = path.split("-").join(" ");

  return (
    <div className="vw-100">
      <Navbar />
      <div className="w-100 vh-100 d-flex flex-column flex-sm-row">
        <Sidebar/>
        <div className="py-5 h-100 d-flex w-100">
          <Container className="h-100 bg-white py-4 px-5 content pb-5">
            <div className="w-full px-2">
              <h1 className="fw-bold text-capitalize">{title}</h1>
            </div>
            <div className="w-full pb-5 mb-5">
              <Row className="d-flex justify-content-md-center pb-5 gy-5">{children}</Row>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
