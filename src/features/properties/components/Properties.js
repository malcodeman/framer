import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route } from "react-router-dom";

import {
  setWidth,
  setHeight,
  setColor,
  setOpacity,
  setRotation,
  setBlur
} from "../actions/propertiesActionCreators";
import Modes from "./Modes";
import Dimensions from "./Dimensions";
import Fill from "./Fill";
import Blur from "./Blur";
import Code from "./Code";

const PropertiesPanel = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: ${props => props.theme.backgroundPrimary};
  transition: ${props => props.theme.backgroundColorTransition};
  border-left: ${props =>
    `${props.theme.borderWidth} solid  ${props.theme.borderColor};`};
`;

function Properties(props) {
  function renderDesignMode() {
    return (
      <>
        <Dimensions
          width={props.width}
          height={props.height}
          opacity={props.opacity}
          rotation={props.rotation}
          setWidth={props.setWidth}
          setHeight={props.setHeight}
          setOpacity={props.setOpacity}
          setRotation={props.setRotation}
        />
        <Fill color={props.color} setColor={props.setColor} />
        <Blur blur={props.blur} setBlur={props.setBlur} />
      </>
    );
  }

  function renderCodeMode() {
    return (
      <Code
        width={props.width}
        height={props.height}
        color={props.color}
        opacity={props.opacity}
        rotation={props.rotation}
        blur={props.blur}
      />
    );
  }

  return (
    <PropertiesPanel>
      <Modes />
      <Route exact path="/" render={() => renderDesignMode()} />
      <Route path="/code" render={() => renderCodeMode()} />
    </PropertiesPanel>
  );
}

const mapStateToProps = state => {
  return {
    color: state.properties.color,
    width: state.properties.width,
    height: state.properties.height,
    opacity: state.properties.opacity,
    rotation: state.properties.rotation,
    blur: state.properties.blur
  };
};

export default connect(
  mapStateToProps,
  { setWidth, setHeight, setColor, setOpacity, setRotation, setBlur }
)(Properties);
