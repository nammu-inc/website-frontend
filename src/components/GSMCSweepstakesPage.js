import React from "react";
import {
  Container,
  Card,
  Form,
  Button,
  Alert,
  Carousel,
} from "react-bootstrap";
import { sharedStyles } from "../styles";
import "bootstrap/dist/css/bootstrap.min.css";
import nfiLogo from "../assets/NFI Logo.jpg";
import iPadImage from "../assets/iPad.jpg";
import giftCardImage from "../assets/GiftCard.jpg";
import { db } from "../firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

const GSMCSweepstakesPage = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    title: "",
  });
  const [hasSubmitted, setHasSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [textOpacity, setTextOpacity] = React.useState(1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (hasSubmitted || error) {
      setHasSubmitted(false);
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Check if email already exists
      const emailDocRef = doc(db, "gsmc", formData.email);
      const emailDoc = await getDoc(emailDocRef);

      if (emailDoc.exists()) {
        setError(
          "This email has already been entered. Each email can only enter once."
        );
        setIsLoading(false);
        return;
      }

      // Write to Firestore
      await setDoc(emailDocRef, {
        name: formData.name,
        title: formData.title,
        company: formData.company,
        submissionTime: serverTimestamp(),
      });

      setHasSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        title: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An error occurred while submitting. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const { colors } = sharedStyles;

  return (
    <>
      <style>{`
        .carousel-fade .carousel-item {
          transition: opacity 0.15s linear !important;
        }
        .carousel-fade .carousel-item:not(.active) {
          opacity: 0 !important;
        }
        .carousel-fade .carousel-item.active {
          opacity: 1 !important;
        }
      `}</style>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center min-vh-100 py-5 px-3"
        style={{
          background: `radial-gradient(circle at top left, ${colors.primary.light}, ${colors.secondary.light})`,
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        }}
      >
        <Card
          className="w-100"
          style={{ maxWidth: "560px", borderRadius: "16px" }}
        >
          <Card.Body style={{ paddingTop: "2rem" }}>
            <Card.Title
              as="h1"
              className="mb-4 text-center"
              style={{
                color: colors.primary.dark,
                fontWeight: "700",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontSize: "2rem",
              }}
            >
              GSMC Sweepstakes
            </Card.Title>
            <div
              className="d-flex align-items-center justify-content-center gap-4 mb-4"
              style={{ flexWrap: "wrap" }}
            >
              <img
                src="/logo.png"
                alt="Nammu Logo"
                style={{ maxHeight: "30px", width: "auto" }}
              />
              <span
                style={{
                  fontSize: "24px",
                  color: colors.text.medium,
                  fontWeight: "bold",
                }}
              >
                ×
              </span>
              <img
                src={nfiLogo}
                alt="NFI Logo"
                style={{ maxHeight: "60px", width: "auto" }}
              />
            </div>
            <hr
              style={{
                borderColor: colors.primary.medium,
                opacity: 0.3,
                margin: "0 auto 1.5rem auto",
                maxWidth: "80%",
              }}
            />
            <Card.Text
              className="mb-4 text-center"
              style={{ color: colors.text.medium }}
            >
              Nammu is the first sales platform purpose-built for the seafood
              industry. Enter your details below for a chance to win.
            </Card.Text>

            <div
              className="mb-4 mx-auto"
              style={{
                backgroundColor: colors.gray.light,
                borderRadius: "16px",
                maxWidth: "90%",
                padding: "1.5rem",
              }}
            >
              <div className="mb-3">
                <h4
                  className="mb-1 text-center"
                  style={{ color: colors.primary.dark }}
                >
                  100 Total Winners
                </h4>
              </div>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <Carousel
                  fade
                  interval={3000}
                  controls={false}
                  indicators={false}
                  onSelect={(selectedIndex) => {
                    setTextOpacity(0);
                    setTimeout(() => {
                      setActiveSlide(selectedIndex);
                      setTextOpacity(1);
                    }, 150);
                  }}
                  style={{ marginBottom: "0", paddingBottom: "0" }}
                >
                  <Carousel.Item>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0.5rem",
                        paddingBottom: "0",
                      }}
                    >
                      <img
                        src={iPadImage}
                        alt="iPad Grand Prize"
                        style={{
                          maxHeight: "180px",
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0.5rem",
                        paddingBottom: "0",
                      }}
                    >
                      <img
                        src={giftCardImage}
                        alt="Gift Card Prize"
                        style={{
                          maxHeight: "180px",
                          width: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </Carousel.Item>
                </Carousel>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "0.5rem",
                    minHeight: "2rem",
                    opacity: textOpacity,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {activeSlide === 0 ? (
                    <div style={{ fontSize: "1.1rem" }}>
                      <strong
                        style={{
                          color: colors.primary.medium,
                          fontSize: "1.15rem",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Grand Prize:
                      </strong>{" "}
                      <span
                        style={{
                          color: colors.text.dark,
                          fontWeight: "600",
                          fontSize: "1.1rem",
                        }}
                      >
                        iPad
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span style={{ color: colors.text.dark }}>
                        $100 Amazon gift cards and more
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: colors.text.dark }}>
                  Full name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: colors.text.dark }}>
                  Title
                </Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Your job title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: colors.text.dark }}>
                  Company
                </Form.Label>
                <Form.Control
                  type="text"
                  name="company"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: colors.text.dark }}>
                  Work email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                className="w-100"
                disabled={isLoading}
                style={{
                  backgroundColor: colors.primary.medium,
                  borderColor: colors.primary.medium,
                }}
              >
                {isLoading ? "Submitting..." : "Enter sweepstakes"}
              </Button>
            </Form>

            <Card.Text
              className="small mt-3 mb-0"
              style={{ color: colors.text.light }}
            >
              By entering, you confirm you attended GSMC 2026 and consent to be
              contacted by Nammu regarding this giveaway and related updates.
            </Card.Text>

            {error && (
              <Alert
                variant="danger"
                className="mt-3"
                onClose={() => setError("")}
                dismissible
              >
                {error}
              </Alert>
            )}
            {hasSubmitted && (
              <Alert
                className="mt-3"
                style={{
                  backgroundColor: colors.accent.successBg,
                  color: colors.accent.success,
                  borderColor: colors.accent.success,
                }}
              >
                Thank you for entering! Your submission has been received.
              </Alert>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default GSMCSweepstakesPage;
