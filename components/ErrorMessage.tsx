"use client";
import { FC } from "react";

interface ErrorMessageProps {
  error: Error | unknown;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  // If error is an Error object, use its message; otherwise, use a default string.
  const errorMessage =
    (error && typeof error === "object" && "message" in error && (error as Error).message) ||
    "Something went wrong.";

  return (
    <div style={errorStyle}>
      <strong>Error:</strong> {errorMessage}
    </div>
  );
};

const errorStyle: React.CSSProperties = {
  backgroundColor: "#ffe0e0",
  color: "#a00",
  padding: "10px",
  border: "1px solid #a00",
  borderRadius: "5px",
  margin: "10px 0",
};

export default ErrorMessage;