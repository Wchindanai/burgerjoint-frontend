import React, { Component } from "react";
import styled from "styled-components";

const Content = styled.div`
  &&& {
    min-height: 280;
    background: #fff;
    padding: 24;
  }
`;
class ContentWrapper extends Component {
  render() {
    return <Content>{this.props.children}</Content>;
  }
}

export default ContentWrapper;
