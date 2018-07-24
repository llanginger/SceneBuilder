import React, { Component } from "react";
import PropTypes from "prop-types";
import * as AFRAME from "aframe";
import { Entity, Scene } from "aframe-react";

class Enviornment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 1000,
      roll: 0,
      pitch: 0,
      yaw: 0,
      x: 0,
      y: 0,
      z: -10,
      pinch: false
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    let { pitch, roll, yaw, x, y, z } = this.state;

    return (
      <Scene vr-mode-ui keyboard-shortcuts leap="vr: false">
        <a-assets>
          <a-image
            id="sky"
            src="https://uploads.codesandbox.io/uploads/user/cf641f2b-3840-4f83-bf5e-dee7737a7432/EB1V-holodeck.png"
          />

          <a-asset-item id="vessel-obj" src="https://raw.githubusercontent.com/roieki/SceneBuilder/5e3b9993e5a9af95316a2716f9da92fd9f54863f/public/enterprise/enterprise1701d.obj" />
          <a-asset-item id="vessel-mtl" src="https://raw.githubusercontent.com/roieki/SceneBuilder/master/public/enterprise/enterprise1701d.mtl" />
        </a-assets>
        <Entity>
          {this.props.children}

          <a-camera
            camera
            far="6000"
            rotation={`${roll} ${yaw} ${pitch}`}
            zoom={`${Math.abs(this.state.zoom / 1000)}`}
          >
            <a-cursor id="cursor">
              <a-animation
                begin="click"
                easing="ease-in"
                attribute="scale"
                fill="backwards"
                from="0.1 0.1 0.1"
                to="1 1 1"
                dur="150"
              />
              <a-animation
                begin="cursor-hovering"
                easing="ease-in"
                attribute="scale"
                from="1 1 1"
                to="0.1 0.1 0.1"
                dur="1500"
              />
            </a-cursor>
          </a-camera>
          <a-sky src="#sky" rotation="0 -270 0" />
        </Entity>
      </Scene>
    );
  }
}

Enviornment.propTypes = {};

export default Enviornment;
