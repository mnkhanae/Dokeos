
import CardCatalog from "../../global/CardCatalog/CardCatalog";
import Col from "react-bootstrap/Col";
import myCatalog from "../../data/myCatalog";


export default function MyCatalog() {
  
  return (
    <>
    <div className="d-flex flex-column flex-sm-row justify-content-start gap-5 pb-5 mb-5">
    {myCatalog.map((catalog, index) => (
        <Col xs={12} md={6} lg={4} key={index}>
          <CardCatalog
            title={catalog.title}
            image={catalog.image}
            key={index}
            subtitle={catalog.subtitle}
          />
        </Col>
      ))}
    </div>
 
    </>
  );
}
