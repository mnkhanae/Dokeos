import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";

const CardPlacements = (Props) => {
  const { title, subtitle, text, progress } = Props;
  return (
    <Card className="rounded-4 border-0 shadow mt-5 h-100 w-100">
      <Card.Body className="p-0">
        <Card.Title
          style={{
            backgroundColor: "var(--primary-color)",
            paddingTop: "4rem",
            paddingBottom: "4rem",
          }}
          className="text-white fs-3 text-center px-3 rounded-top-4"
        >
          {title}
        </Card.Title>
      </Card.Body>
      <Card.Body>
        <p className="text-secondary fs-2 fw-bold">{subtitle}</p>
        <p className="fs-3">{text}</p>
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
    </Card>
  );
};

export default CardPlacements;
