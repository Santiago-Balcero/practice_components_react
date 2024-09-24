import { useState } from "react";
import "./stylesheets/app.scss";
import { Score } from "./Score";
import { ActionButton } from "./ActionButton";

export interface Team {
  name: string;
  points: number;
}

export function Rally() {
  const [teamPoints, setTeamPoints] = useState(0);
  const [opponentPoints, setOpponentPoints] = useState(0);

  const handleTeamPoint = () => {
    setTeamPoints(teamPoints + 1);
  };

  const handleOpponentPoint = () => {
    setOpponentPoints(opponentPoints + 1);
  };

  const team: Team = {
    name: "Colombia",
    points: teamPoints,
  };

  const opponent: Team = {
    name: "Brasil",
    points: opponentPoints,
  };

  return (
    <>
      <Score team={team} opponent={opponent} />
      <div className="row">
        <ActionButton onClick={handleTeamPoint} type="team">
          Team 1
        </ActionButton>
        <ActionButton onClick={handleOpponentPoint} type="opponent">
          Team 2
        </ActionButton>
      </div>
    </>
  );
}
