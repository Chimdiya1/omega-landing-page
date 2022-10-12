import React from "react";
import Button from "../Button/Button";
import ColoredText from "../ColoredText/ColoredText";
import InvertedButton from "../InvertedButton/InvertedButton";
import blurredCoin from "../../assets/blurredCoin.png";
import coin from "../../assets/coin.png";
import "./Header.scss";
import Timer from "../Timer/Timer";
const Header = () => {
  return (
    <div className="header">
      <img src={blurredCoin} alt="coin" className="blurredCoin" />
      <img src={coin} alt="coin" className="coin" />
      <h1>
        <ColoredText>No-Loss</ColoredText> staking
      </h1>
      <p className="header-text">
        Stake & win on omega today by locking in OM3 tokens to any pool on our
        no-loss game engine and stand a chance to win weekly rewards in OM3 +
        DAP tokens.
      </p>
      <div className="buttons">
        <Button>Join a pool</Button>
        <InvertedButton>
          <ColoredText>How it works</ColoredText>{" "}
        </InvertedButton>
      </div>
      <div className="timer-container">
        <Timer />
      </div>
      <p style={{ fontFamily: "Space Grotesk", marginTop: "37px" }}>
        Powered by Omega xyz
      </p>
    </div>
  );
};

export default Header;
