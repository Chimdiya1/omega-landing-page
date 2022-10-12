import React from "react";
import Timer from "../Timer/Timer";
import "./StakingPools.scss";

const StakingPools = () => {
  return (
    <div className="stakingPools">
      <div className="title">
        <h2>Staking pools</h2>
        <span>See all</span>
      </div>
      <div style={{ marginBottom: "51px", width:"100%" }}>
        <Timer />
      </div>
      <div style={{ marginBottom: "51px", width:"100%" }}>
        <Timer />
      </div>
      <div style={{ marginBottom: "51px", width:"100%" }}>
        <Timer />
      </div>
    </div>
  );
};

export default StakingPools;
