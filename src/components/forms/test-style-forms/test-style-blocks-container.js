import React from "react";
import "./test-styles.css";
import { Container, Row, Col } from "react-grid-system";
import {
  TestStyleComponent,
  TestStyleComponentSmallBlocks,
} from "./test-style-form";

export const TestStyleComponentContainer = () => {
  return (
    <React.Fragment>
      <div className="main-block-props-container">
        <TestStyleComponentSmallBlocks />
      </div>
      <div className="main-block-props-container">
        <TestStyleComponentSmallBlocks />
      </div>
    </React.Fragment>
  );
};
