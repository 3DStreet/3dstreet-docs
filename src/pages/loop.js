import React, { useRef } from "react";

export default function LoopPage() {
  const containerRef = useRef(null);

  const handleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="noindex, nofollow" />
      <title>3DStreet</title>

      <div
        ref={containerRef}
        style={{
          minHeight: "100vh",
          width: "100%",
          background: "#0c011e",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src="/img/website/header_ellipse.png"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <button
          onClick={handleFullscreen}
          title="Toggle fullscreen"
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            zIndex: 2,
            width: "40px",
            height: "40px",
            padding: 0,
            background: "rgba(123, 70, 246, 0.2)",
            border: "1px solid rgba(123, 70, 246, 0.5)",
            borderRadius: "8px",
            color: "#fff",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
            <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
            <path d="M3 16v3a2 2 0 0 0 2 2h3" />
            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
          </svg>
        </button>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Row: logo centered, QR on the right */}
          <div
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "32px",
            }}
          >
            <img
              src="/img/3dstreet-logo.svg"
              alt="3DStreet"
              style={{
                maxWidth: "420px",
                width: "50%",
                height: "auto",
              }}
            />

            <div
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "6px 12px 6px 6px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(123, 70, 246, 0.3)",
                borderRadius: "10px",
              }}
            >
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=https%3A%2F%2F3dstreet.com"
                alt="QR code for 3dstreet.com"
                width="64"
                height="64"
                style={{ display: "block", borderRadius: "4px", background: "#fff" }}
              />
              <div style={{ color: "#fff", fontSize: "12px", lineHeight: 1.3 }}>
                <div style={{ opacity: 0.7 }}>Scan to visit</div>
                <div style={{ fontWeight: 600, fontSize: "14px" }}>3dstreet.com</div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              padding: "56.25% 0 0 0",
              position: "relative",
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/1165500149?h=cfdbdf4076&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="3DStreet Demo Scenes"
            />
          </div>
        </div>
      </div>
    </>
  );
}
