import React from "react";
import "./HowItWorks.scss";
import joinPool from "../../assets/joinpool.png";
import joinRaffle from "../../assets/joinraffle.png";
import goToPool from "../../assets/gotopool.png";
const HowItWorks = () => {
  return (
    <div className="howItWorks">
      <h1>How it works</h1>
      <div className="how">
        <div className="col">
          <h2>Stake to join pool raffle</h2>
          <p>
            Stake & win on omega today by locking in OM3 tokens to any pool on
            our no-loss game engine and stand a chance to win weekly rewards in
            OM3 + DAP tokens.
          </p>
          <h3>1</h3>
        </div>
        <div className="img-container">
          <img src={joinPool} alt="join pool" />
        </div>
      </div>
      <div className="how rev">
        <div className="col ">
          <h2>Confirm pool details</h2>
          <p>
            Confirm all the pool and staking details, get your raffle ticket
            number saved!
          </p>
          <h3>2</h3>
        </div>
        <div>
          <img src={joinRaffle} alt="join raffle" />
        </div>
      </div>
      <h1 style={{ marginBottom: "80px" }}>Voilla! You’re in the raffle!</h1>
      <div className="goto">
        <img src={goToPool} alt="goto pool" />
      </div>
    </div>
  );
};

export default HowItWorks;
