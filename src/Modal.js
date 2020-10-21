import React, { Component } from "react";
import s from "./styles.module.css";

export default class Modal extends Component {
  render() {
    return (
      <div className={s.Overlay}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>
    );
  }
}
