import React, { useState } from "react";

const players = [
  { id: 1, name: "Virat Kohli", role: "Batsman" },
  { id: 2, name: "Rashid Khan", role: "Bowler" },
  { id: 3, name: "Ben Stokes", role: "All-Rounder" },
  { id: 4, name: "MS Dhoni", role: "Wicket-Keeper" },
  { id: 5, name: "Jasprit Bumrah", role: "Bowler" },
];

const PlayerList = () => {
  const [searchName, setSearchName] = useState("");

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        style={{ padding: "8px", width: "200px", marginBottom: "20px" }}
      />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{player.name}</td>
              <td>{player.role}</td>
            </tr>
          ))}
          {filteredPlayers.length === 0 && (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No players found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;
