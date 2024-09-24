import { Team } from "./Rally";

export type ScoreProps = {
  team: Team;
  opponent: Team;
};

export function Score({ team, opponent }: ScoreProps) {
  const getShortName = (name: string) => name.slice(0, 3).toUpperCase();

  return (
    <div className="score">
      <div className="score__team">
        <div className="score__team__name">{getShortName(team.name)}</div>
        <div className="score__team__points">{team.points}</div>
      </div>
      <div className="score__team">
        <div className="score__team__name">{getShortName(opponent.name)}</div>
        <div className="score__team__points">{opponent.points}</div>
      </div>
    </div>
  );
}
