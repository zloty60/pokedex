import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const StatisticsBar = ({ size, statValue }) => {
  const classes = useStyles();
  return (
    <div className={classes.statisticsBar}>
      <div className={classes.statisticsBarValue} style={{ width: `${size}%` }}>
        {statValue}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  statisticsBar: {
    backgroundColor: "#e6e6e6",
    height: 27,
    width: "100%",
    borderRadius: 4,
  },
  statisticsBarValue: {
    backgroundColor: "#006c74",
    height: "100%",
    padding: "2px 10px",
    color: "#e6e6e6",
    boxSizing: "border-box",
    borderRadius: 4,
  },
}));

export default StatisticsBar;
