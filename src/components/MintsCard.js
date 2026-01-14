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
              border: "1px solid #e0e0e0",
              position: "relative",
            }}
          >
            <div
              style={{
                flex: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
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
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
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
                Reimagining Seafood Sales
              </p>
              <p
                style={{
                  fontSize: "1.3rem",
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
              border: "1px solid #e0e0e0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "1",
                justifyContent: "space-between",
              }}
            >
              {/* Top: Enter to Win! */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingTop: "0.5rem",
                }}
              >
                <h1
                  style={{
                    fontSize: "1.9rem",
                    fontWeight: "600",
                    color: colors.primary.dark,
                    margin: "0",
                    lineHeight: "1.2",
                    letterSpacing: "-0.3px",
                    textTransform: "none",
                    textAlign: "center",
                  }}
                >
                  Enter the GSMC 2026 Sweepstakes!
                </h1>
              </div>

              {/* Middle: Prize Info, Logos, and QR Code */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1",
                  gap: "1.5rem",
                }}
              >
                {/* Prize Info - Centered */}
                <p
                  style={{
                    fontSize: "1rem",
                    color: colors.text.dark,
                    margin: "0",
                    fontWeight: "500",
                    letterSpacing: "0.2px",
                    lineHeight: "1.4",
                    textAlign: "center",
                  }}
                >
                  Win an iPad, $100 Gift Cards, and more!
                </p>

                {/* Logos and QR Code Row */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    gap: "1rem",
                  }}
                >
                  {/* Left: Nammu Logo */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      flex: "1",
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
                  </div>

                  {/* Center: QR Code */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
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

                  {/* Right: NFI Logo */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      flex: "1",
                    }}
                  >
                    <img
                      src={nfiLogo}
                      alt="NFI"
                      style={{
                        height: "56px",
                        width: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintsCard;
