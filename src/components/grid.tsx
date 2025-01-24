import { Position } from "@/app/types";
import { ArrowUp } from "lucide-react";
import React from "react";

const Grid = ({ robotPosition }: { robotPosition: Position }) => {
  const GRID_SIZE = 5;
  const { x, y, direction } = robotPosition || {};

  const renderGrid = () => {
    return Array.from({ length: GRID_SIZE }, (_, rowIndex) => (
      <div key={rowIndex} className="flex">
        {Array.from({ length: GRID_SIZE }, (_, colIndex) => (
          <div
            key={colIndex}
            className={`w-12 h-12 m-1 border ${rowIndex === x && colIndex === y ? "bg-green-500" : "bg-gray-200"
              }`}
          >
            {rowIndex === x && colIndex === y && (
              <ArrowUp
                className="w-full h-full text-green-700 transition-transform duration-500"
                style={{
                  transform: `rotate(${direction}deg)`,
                }}
              />
            )}
          </div>
        ))}
      </div>
    ));
  };

  return <div className="space-y-1">{renderGrid()}</div>;
};

export default Grid;
