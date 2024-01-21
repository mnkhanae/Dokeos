import CardTemplate from "../../global/CardTemplate/CardTemplate";
import Col from "react-bootstrap/Col";
import myCourses from "../../data/myCourses";

export default function MyCourses() {
  return (
    <>
      {myCourses.map((course, index) => (
        <Col xs={12} md={6} lg={4} key={index}>
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
