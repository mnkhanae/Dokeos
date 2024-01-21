import CardPlacements from "../../Global/CardPlacements/CardPlacements";
import Col from "react-bootstrap/Col";
import myPlacements from "../../Data/myPlacements";

export default function MyPlacementTest() {
  return (
    <>
     <div className="d-flex flex-column flex-sm-row justify-content-start gap-5 pb-5 mb-5">
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
