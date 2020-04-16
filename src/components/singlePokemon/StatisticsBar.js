import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { POKEMON_MAX_BASE_STATS } from "./../../utils/constants/pokemonBaseStats";
import { calculateStatsToPercentages } from "./../../utils/helperFunctions";

const StatisticsBar = ({ statValue, statName }) => {
  // api dostarcza mi base_stat , w internecie znalazłem maksymalne wartości dla base_stat
  // i za pomocą funkcji calculateStatsToPercentages obliczam procentową wartośc base_stat
  // w komponecie dostarczaną propsem jakos statValue
  const classes = useStyles();
  return (
    <div className={classes.statisticsBar}>
      <div
        className={classes.statisticsBarValue}
        style={{
          width: `${calculateStatsToPercentages(
            statValue,
            POKEMON_MAX_BASE_STATS[statName]
          )}%`,
        }}
      >
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
    padding: "2px 4px",
    color: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: 4,
  },
}));

export default StatisticsBar;
