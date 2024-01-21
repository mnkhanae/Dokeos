import Card from "react-bootstrap/Card";

const CardCatalog = (Props) => {
    const{ image, title, subtitle } = Props
  return (
    <Card className="rounded-4 border-0 shadow mt-5 h-100">
    <Card.Img style={{height: "12rem", objectFit: "cover"}} variant="top" src={image} />
    <Card.Body>
      <Card.Title className="fs-4 fw-bold">{title}</Card.Title>
    </Card.Body>
    <Card.Body>
    <p className="text-secondary fs-5">{subtitle}</p>
    </Card.Body>
  </Card>
  )
}

export default CardCatalog
