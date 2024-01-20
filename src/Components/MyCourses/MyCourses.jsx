import { useLocation } from "react-router-dom";
import CardTemplate from "../../Global/Card";
import Col from "react-bootstrap/Col";
import myCourses from "../../Data/myCourses";

export default function MyCourses() {
  return (
    <>
      {myCourses.map((course, index) => (
        <Col xs={3} key={index}>
          <CardTemplate
            title={course.title}
            progress={course.progress}
            image={course.image}
            key={index}
          />
        </Col>
      ))}
    </>
  );
}
