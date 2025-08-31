import React from "react";


export const segments = ["a", "b", "c", "d", "e", "f", "g"];

export const digitToSegments = {
  0: [1, 1, 1, 1, 1, 1, 0],
  1: [0, 1, 1, 0, 0, 0, 0],
  2: [1, 1, 0, 1, 1, 0, 1],
  3: [1, 1, 1, 1, 0, 0, 1],
  4: [0, 1, 1, 0, 0, 1, 1],
  5: [1, 0, 1, 1, 0, 1, 1],
  6: [1, 0, 1, 1, 1, 1, 1],
  7: [1, 1, 1, 0, 0, 0, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 0, 1, 1],
};


export function Digit({ number }) {
  return (
    <div className="digit">
      {segments.map((seg, i) => (
        <div
          className={`segment seg-${seg} ${digitToSegments[number][i] ? "on" : ""}`}
        />
      ))}
    </div>
  );
}
