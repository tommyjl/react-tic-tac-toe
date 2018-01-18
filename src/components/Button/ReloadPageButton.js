import React from "react";
import Button from "./Button";

const ReloadPageButton = ({ text }) => (
  <Button onClick={() => window.location.reload()}>{text}</Button>
);

export default ReloadPageButton;
