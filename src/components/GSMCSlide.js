import React from "react";
import { Container } from "react-bootstrap";
import { sharedStyles } from "../styles";
import "bootstrap/dist/css/bootstrap.min.css";
import iPadImage from "../assets/iPad.jpg";
import giftCardImage from "../assets/GiftCard.jpg";
import qrCodeImage from "../assets/QRCode.png";
import gsmcLogo from "../assets/GSMC Logo.png";
import gsmcWave from "../assets/GSMC Wave.png";
import socksImage from "../assets/Socks.png";

const GSMCSlide = () => {
  const { colors } = sharedStyles;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: colors.white,
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          padding: "2rem 3rem",
          width: "1400px",
          maxWidth: "90vw",
          height: "auto",
          minHeight: "700px",
          overflow: "hidden",
          border: "3px solid #000000",
          boxSizing: "border-box",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        {/* GSMC Wave Background */}
        <img
          src={gsmcWave}
          alt=""
          style={{
            position: "absolute",
            bottom: "-10%",
            left: 0,
            width: "100%",
            height: "auto",
            opacity: 0.3,
            zIndex: 0,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            gap: "3rem",
            alignItems: "stretch",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Left Column: Logos and Text Content */}
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            {/* Logos */}
            <div
              className="d-flex align-items-center gap-4"
              style={{
                justifyContent: "flex-start",
                marginBottom: "2rem",
                flexWrap: "wrap",
              }}
            >
              <img
                src="/logo.png"
                alt="Nammu Logo"
                style={{ maxHeight: "60px", width: "auto" }}
              />
              <span
                style={{
                  fontSize: "36px",
                  color: colors.text.medium,
                  fontWeight: "bold",
                }}
              >
                ×
              </span>
              <img
                src={gsmcLogo}
                alt="GSMC Logo"
                style={{ maxHeight: "140px", width: "auto" }}
              />
            </div>

            {/* Text Content - Centered */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                flex: "1",
                justifyContent: "center",
              }}
            >
              {/* Main Title */}
              <h1
                style={{
                  color: colors.primary.dark,
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                  fontSize: "5rem",
                  marginBottom: "0",
                  lineHeight: "1.1",
                }}
              >
                Sweepstakes
              </h1>

              {/* Prize Images */}
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  gap: "2rem",
                  marginTop: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "600",
                      color: colors.primary.dark,
                      marginBottom: "0.5rem",
                    }}
                  >
                    iPad Air
                  </div>
                  <img
                    src={iPadImage}
                    alt="iPad"
                    style={{
                      maxHeight: "120px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "600",
                      color: colors.primary.dark,
                      marginBottom: "0.5rem",
                    }}
                  >
                    $100 Gift Cards
                  </div>
                  <img
                    src={giftCardImage}
                    alt="Gift Card"
                    style={{
                      maxHeight: "120px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "600",
                      color: colors.primary.dark,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Branded Merch
                  </div>
                  <img
                    src={socksImage}
                    alt="Socks"
                    style={{
                      maxHeight: "120px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* 100 Guaranteed Winners - Bottom aligned */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p
                style={{
                  color: colors.primary.dark,
                  fontSize: "3rem",
                  fontWeight: "600",
                  margin: "0",
                }}
              >
                100 Guaranteed Winners
              </p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div
            style={{
              width: "2px",
              backgroundColor: "#000000",
              alignSelf: "stretch",
            }}
          />

          {/* Right Column: Enter to win, QR Code, and Link */}
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            {/* Top Section: Enter to win! */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "2.5rem",
                  color: colors.primary.dark,
                  fontWeight: "700",
                  margin: "0",
                  textAlign: "center",
                }}
              >
                Enter to win!
              </p>
            </div>

            {/* Middle Section: QR Code */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
                flex: "1",
              }}
            >
              <div
                style={{
                  width: "380px",
                  height: "380px",
                  backgroundColor: colors.white,
                  borderRadius: "16px",
                  border: "2px solid #000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px",
                }}
              >
                <img
                  src={qrCodeImage}
                  alt="QR Code"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            {/* Bottom Section: Link */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.nammu.ai/gsmc"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "3rem",
                  color: colors.primary.dark,
                  textDecoration: "none",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                }}
              >
                www.nammu.ai/gsmc
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GSMCSlide;
