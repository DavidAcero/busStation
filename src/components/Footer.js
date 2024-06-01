import React from "react";
import logo from "../images/bus-side-view-grey.svg";
import github from "../images/github.svg";
import moment from "moment";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src={logo} className="footer-logo" />
        <p className="footer-para">
          QA On Wheels Bus offers bus ticket booking through its website for all major routes.
        </p>
        <p className="footer-para">
          Routes:[Phoenix, Las Vegas, Tucson, San Francisco, Los Angeles].
        </p>
        <div className="footer-media-box">
          <a target="_blank" href="https://github.com/DavidAcero">
            <button className="footer-media">
              <img src={github} className="footer-media-logo"></img>
            </button>
          </a>
        </div>
        <p className="footer-para">
          {" "}
          Ⓒ {moment().format("YYYY")} QA Team All rights reserved{" "}
        </p>
      </div>
    </div>
  );
}
