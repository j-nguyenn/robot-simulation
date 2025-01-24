import { Position } from "@/app/types";


export const moveRobot = (command: string, { x, y, direction }: Position, gridSize = 5) => {
  switch (command) {
    case "L":
      return { x, y, direction: (direction + 270) % 360 };
    case "R":
      return { x, y, direction: (direction + 90) % 360 };
    case "F":
      return moveForward({ x, y, direction }, gridSize);
    default:
      throw new Error("Invalid command");
  }
};

export const moveForward = ({ x, y, direction }: Position, gridSize: number = 5) => {
  switch (direction) {
    case 0: // Up
      return { x: Math.max(x - 1, 0), y, direction };
    case 90: // Right
      return { x, y: Math.min(y + 1, gridSize - 1), direction };
    case 180: // Down
      return { x: Math.min(x + 1, gridSize - 1), y, direction };
    case 270: // Left
      return { x, y: Math.max(y - 1, 0), direction };
    default:
      throw new Error("Invalid direction");
  }
};
