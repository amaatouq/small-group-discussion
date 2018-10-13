import React from "react";

import PlayerProfile from "./PlayerProfile";
import SocialExposure from "./socialExposure.jsx";
import Task from "./Task";
import Outcome from "./Outcome";

export default class Round extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;

    return (
      <div className="round">
        <div className="content">
          <PlayerProfile player={player} stage={stage} game={game} />
          <Task round={round} stage={stage} player={player} game={game} />
          {/*only show the social exposure when it is not the initial response*/}
          {stage.name === "response" ||
          stage.name === "outcome" ||
          game.treatment.playerCount === 1 ? null : (
            <SocialExposure stage={stage} player={player} game={game} />
          )}

          {stage.name === "outcome" ? (
            <Outcome stage={stage} player={player} game={game} />
          ) : null}
        </div>
      </div>
    );
  }
}
