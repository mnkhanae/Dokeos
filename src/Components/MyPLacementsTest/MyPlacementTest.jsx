import CardPlacements from "../../Global/CardPlacements/CardPlacements";
import Col from "react-bootstrap/Col";
import myPlacements from "../../Data/myPlacements";

export default function MyPlacementTest() {
  return (
    <>
     <div className="d-flex justify-content-start gap-5 px-5">
      {myPlacements.map((placement, index) => (
         <Col xs={12} md={6} lg={4} key={index}>
          <CardPlacements
            title={placement.title}
            subtitle={placement.subtitle}
            text={placement.text}
            progress={placement.progress}
            key={index}
          />
        </Col>
      ))}
        </div>
    </>
  );
}
