import React from "react";
import { Container } from "react-bootstrap";
import { sharedStyles } from "../styles";
import "bootstrap/dist/css/bootstrap.min.css";
import nfiLogo from "../assets/NFI Logo.jpg";
import iPadImage from "../assets/iPad.jpg";
import giftCardImage from "../assets/GiftCard.jpg";
import qrCodeImage from "../assets/QRCode.png";

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
          border: "8px solid #000000",
          boxSizing: "border-box",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            gap: "3rem",
            alignItems: "stretch",
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
                src={nfiLogo}
                alt="NFI Logo"
                style={{ maxHeight: "70px", width: "auto" }}
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
                SWEEPSTAKES
              </h1>

              {/* Subtitle */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                <p
                  style={{
                    color: colors.text.medium,
                    fontSize: "2.8rem",
                    fontWeight: "600",
                    marginBottom: "0",
                    lineHeight: "1.3",
                  }}
                >
                  100 Winners
                </p>
                <p
                  style={{
                    color: colors.text.medium,
                    fontSize: "2.8rem",
                    fontWeight: "600",
                    marginBottom: "0",
                    lineHeight: "1.3",
                  }}
                >
                  Win an iPad & More!
                </p>
              </div>
            </div>

            {/* Link - Bottom */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "2rem",
              }}
            >
              <a
                href="https://www.nammu.ai/gsmc"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "3rem",
                  color: colors.primary.medium,
                  textDecoration: "none",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                }}
              >
                www.nammu.ai/gsmc
              </a>
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

          {/* Right Column: Prize Images and QR Code */}
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Prize Images */}
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                gap: "3rem",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: "600",
                    color: colors.primary.dark,
                    marginBottom: "0.75rem",
                  }}
                >
                  iPad Air
                </div>
                <img
                  src={iPadImage}
                  alt="iPad"
                  style={{
                    maxHeight: "200px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: "600",
                    color: colors.primary.dark,
                    marginBottom: "0.75rem",
                  }}
                >
                  $100 Gift Cards
                </div>
                <img
                  src={giftCardImage}
                  alt="Gift Card"
                  style={{
                    maxHeight: "200px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            {/* QR Code */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "360px",
                  height: "360px",
                  backgroundColor: colors.white,
                  borderRadius: "16px",
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GSMCSlide;
