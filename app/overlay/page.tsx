"use client";

import React from "react";

export default function Overlay() {
  const match = {
    teamA: {
      name: "IND",
      score: "186/4",
      overs: "18.2",
      runRate: "10.15",
      logo: "https://via.placeholder.com/40",
    },
    teamB: {
      name: "AUS",
      score: "—",
      overs: "—",
      runRate: "—",
      logo: "https://via.placeholder.com/40",
    },
    batsmen: [
      { name: "Kohli", runs: 72, balls: 45 },
      { name: "Hardik", runs: 38, balls: 17 },
    ],
    bowler: { name: "Starc", overs: "3.2", runs: 28, wickets: 1 },
    lastBalls: ["4", "6", "1", "W", "2", "4"],
    target: 201,
    status: "IND needs 15 runs in 10 balls",
  };

  return (
    <div className="w-screen h-screen bg-transparent flex items-end justify-center p-4">
      <div className="w-full max-w-6xl bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white rounded-2xl shadow-2xl px-6 py-4 backdrop-blur-md">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Team A */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-3">
              <img src={match.teamA.logo} className="w-10 h-10 rounded-full" />
              <span className="text-2xl font-bold tracking-wide">
                {match.teamA.name}
              </span>
            </div>

            <div className="text-right">
              <div className="text-3xl font-bold">
                {match.teamA.score}
              </div>
              <div className="text-sm text-gray-300">
                Overs: {match.teamA.overs} | RR: {match.teamA.runRate}
              </div>
            </div>
          </div>

          {/* Target */}
          <div className="text-center text-sm md:text-base font-medium text-yellow-400">
            Target: {match.target}
          </div>

          {/* Team B */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="text-left">
              <div className="text-3xl font-bold">
                {match.teamB.score}
              </div>
              <div className="text-sm text-gray-300">
                Overs: {match.teamB.overs} | RR: {match.teamB.runRate}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold tracking-wide">
                {match.teamB.name}
              </span>
              <img src={match.teamB.logo} className="w-10 h-10 rounded-full" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-3"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">

          {/* Batsmen */}
          <div className="flex flex-col gap-1">
            {match.batsmen.map((batsman, index) => (
              <div key={index} className="flex gap-3">
                <span className="font-semibold">{batsman.name}</span>
                <span>
                  {batsman.runs} ({batsman.balls})
                </span>
              </div>
            ))}
          </div>

          {/* Bowler */}
          <div>
            <span className="font-semibold">{match.bowler.name}</span> —{" "}
            {match.bowler.overs} | {match.bowler.runs}/{match.bowler.wickets}
          </div>

          {/* Last Balls */}
          <div className="flex gap-2">
            {match.lastBalls.map((ball, index) => (
              <div
                key={index}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${
                  ball === "W"
                    ? "bg-red-600"
                    : ball === "6"
                    ? "bg-green-600"
                    : "bg-white/20"
                }`}
              >
                {ball}
              </div>
            ))}
          </div>
        </div>

        {/* Match Status */}
        <div className="text-center mt-3 text-yellow-300 font-semibold text-sm md:text-base">
          {match.status}
        </div>
      </div>
    </div>
  );
}
