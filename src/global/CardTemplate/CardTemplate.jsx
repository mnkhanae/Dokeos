import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";

function CardTemplate(Props) {

  const{ image, title, progress } = Props

  return (
    <Card className="rounded-4 border-0 shadow mt-5 h-100 w-100">
      <Card.Img style={{height: "12rem"}} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Body>
        <p className="text-secondary mb-1 fs-5">
          {progress == null ? "subscribe" : `${progress}% Completed`}
        </p>
        <ProgressBar
          variant="success"
          now={progress}
          visuallyHidden
          label={`${progress}%`}
        />
      </Card.Body>
      <Card.Body>
        <div className="d-flex align-items-center">
          <p className="text-secondary pt-3 me-3 fs-5">Trainers</p>
          <span
            className="rounded-circle text-bg-danger fs-5 py-1 d-flex justify-content-center align-items-center"
            style={{ hight: "2.75rem", width: "2.75rem" }}
          >
            au
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardTemplate;
