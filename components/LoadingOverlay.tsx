"use client";
import { FC } from "react";

const LoadingOverlay: FC = () => {
  return (
    <>
      <div style={overlayStyle}>
        <div style={spinnerStyle}></div>
      </div>
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(255, 255, 255, 0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backdropFilter: "blur(5px)",
  zIndex: 10,
};

const spinnerStyle: React.CSSProperties = {
  width: "50px",
  height: "50px",
  border: "5px solid #0070f3",
  borderTop: "5px solid transparent",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

export default LoadingOverlay;