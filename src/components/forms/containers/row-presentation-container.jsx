import React from "react";
import { Container, Row, Col } from "react-grid-system";
import ProfilePropsEnrichment from "../lists/profile-props-enrichment";

export default class RowPresentationContainer extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>{this.props.children[0]}</Col>
          <Col>
            <label>{this.props.children[1] ? "" : this.props.label}</label>
            {this.props.children[1]}
          </Col>
        </Row>
      </Container>
    );
  }
}
