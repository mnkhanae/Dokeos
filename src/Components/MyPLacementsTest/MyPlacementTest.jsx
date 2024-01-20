import { useLocation } from "react-router-dom";
import CardTemplate from "../../Global/Card";
import Col from "react-bootstrap/Col";
import myPlacements from "../../Data/myPlacements";

export default function MyPlacementTest() {
  return (
    <>
      {myPlacements.map((course, index) => (
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
