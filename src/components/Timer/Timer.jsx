import React from "react";
import ColoredText from "../ColoredText/ColoredText";
import "./Timer.scss";
import om3 from "../../assets/om3.png";
import om3dap from "../../assets/om3dap.png";
import right from "../../assets/right.png";
const Timer = () => {
  return (
    <div className="timer">
      <div className="time">
        <div className="time-value">
          <div className="value">
            <ColoredText>00</ColoredText>
          </div>
          <div className="measure">HR</div>
        </div>
        <div className="col">
          <ColoredText>:</ColoredText>
        </div>
        <div className="time-value">
          <div className="value">
            <ColoredText>00</ColoredText>
          </div>
          <div className="measure">MINS</div>
        </div>
        <div className="col">
          <ColoredText>:</ColoredText>
        </div>
        <div className="time-value">
          <div className="value">
            <ColoredText>00</ColoredText>
          </div>
          <div className="measure">SEC</div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="details">
        <div className="detail">
          <p>stake</p>
          <div>
            <img src={om3} alt="logo" />
            <span>OM3</span>
          </div>
        </div>
        <div className="detail">
          <p>earn</p>
          <div>
            <img src={om3dap} alt="logo" />
            <span>OM3+DAP</span>
          </div>
        </div>
        <div className="detail">
          <p>Est APY</p>
          <div>
            <span>% X</span>
          </div>
        </div>
        <div className="detail">
          <p>TVL</p>
          <div>
            <span>-</span>
          </div>
        </div>
        <img width="37px" height="37px" src={right} alt="logo" />
      </div>
    </div>
  );
};

export default Timer;
