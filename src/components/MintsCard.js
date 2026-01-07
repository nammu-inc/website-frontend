import React from "react";
import { sharedStyles } from "../styles";
import qrCodeImage from "../assets/QRCode.png";
import nfiLogo from "../assets/NFI Logo.jpg";

const MintsCard = () => {
  const { colors } = sharedStyles;

  return (
    <>
      <style>{`
        @media print {
          .business-card {
            width: 3.5in !important;
            height: 2in !important;
            maxWidth: 3.5in !important;
            padding: 0.25in !important;
            margin: 0 !important;
            page-break-inside: avoid;
          }
        }
      `}</style>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "2.5rem",
          backgroundColor: "#f5f5f5",
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Front of Card */}
          <div
            className="business-card"
            style={{
              width: "100%",
              maxWidth: "630px",
              aspectRatio: "3.5 / 2",
              backgroundColor: colors.white,
              borderRadius: "10px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #e0e0e0",
              gap: "2rem",
            }}
          >
            <img
              src="/logo.png"
              alt="Nammu"
              style={{
                height: "120px",
                width: "auto",
              }}
            />
            <p
              style={{
                fontSize: "1.5rem",
                color: colors.text.dark,
                margin: "0",
                fontWeight: "500",
                letterSpacing: "0.3px",
                textAlign: "center",
              }}
            >
              Sell Seafood Confidently
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                color: colors.text.medium,
                margin: "0",
                fontWeight: "400",
                letterSpacing: "0.3px",
                textAlign: "center",
              }}
            >
              www.nammu.ai
            </p>
          </div>

          {/* Back of Card */}
          <div
            className="business-card"
            style={{
              width: "100%",
              maxWidth: "630px",
              aspectRatio: "3.5 / 2",
              backgroundColor: colors.white,
              borderRadius: "10px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid #e0e0e0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "2.5rem",
              }}
            >
              {/* Left Section: Logo and Title */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  flex: "1",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="Nammu"
                    style={{
                      height: "35px",
                      width: "auto",
                    }}
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
                    alt="NFI"
                    style={{
                      height: "48px",
                      width: "auto",
                    }}
                  />
                </div>
                <div>
                  <h1
                    style={{
                      fontSize: "2.1rem",
                      fontWeight: "600",
                      color: colors.primary.dark,
                      margin: "0",
                      lineHeight: "1.2",
                      letterSpacing: "-0.3px",
                      textTransform: "none",
                    }}
                  >
                    GSMC 2026 Sweepstakes
                  </h1>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: colors.text.dark,
                      margin: "1rem 0 0 0",
                      fontWeight: "500",
                      letterSpacing: "0.2px",
                      lineHeight: "1.4",
                    }}
                  >
                    Win an iPad, $100 Gift Cards, and more!
                  </p>
                </div>
              </div>

              {/* Right Section: QR Code */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: colors.text.medium,
                    margin: "0 0 0.75rem 0",
                    fontWeight: "400",
                    letterSpacing: "0.3px",
                    textAlign: "center",
                  }}
                >
                  Scan to enter
                </p>
                <div
                  style={{
                    width: "170px",
                    height: "170px",
                    backgroundColor: colors.white,
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                    border: "2px solid #000000",
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

            {/* Website Footer */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid #e0e0e0",
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  color: colors.text.medium,
                  margin: "0",
                  fontWeight: "400",
                  letterSpacing: "0.3px",
                }}
              >
                www.nammu.ai
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintsCard;
