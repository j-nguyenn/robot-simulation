import { moveForward, moveRobot } from './robot';


describe("moveRobot", () => {
  const initialPosition = { x: 2, y: 2, direction: 0 }; // Starting at (2,2) facing up

  it("should rotate left", () => {
    const newPosition = moveRobot("L", initialPosition);
    expect(newPosition).toEqual({ x: 2, y: 2, direction: 270 });
  });

  it("should rotate right", () => {
    const newPosition = moveRobot("R", initialPosition);
    expect(newPosition).toEqual({ x: 2, y: 2, direction: 90 });
  });

  it("should move forward", () => {
    const newPosition = moveRobot("F", initialPosition);
    expect(newPosition).toEqual({ x: 1, y: 2, direction: 0 }); // Moved up
  });

  it("should throw error for invalid command", () => {
    expect(() => moveRobot("X", initialPosition)).toThrow("Invalid command");
  });
});


describe("moveForward", () => {
  const gridSize = 5;

  it("should not move outside the top boundary", () => {
    const position = { x: 0, y: 2, direction: 0 }; // Facing up at top edge
    const newPosition = moveForward(position, gridSize);
    expect(newPosition).toEqual(position); // No movement
  });

  it("should not move outside the bottom boundary", () => {
    const position = { x: 4, y: 2, direction: 180 }; // Facing down at bottom edge
    const newPosition = moveForward(position, gridSize);
    expect(newPosition).toEqual(position); // No movement
  });

  it("should not move outside the left boundary", () => {
    const position = { x: 2, y: 0, direction: 270 }; // Facing left at left edge
    const newPosition = moveForward(position, gridSize);
    expect(newPosition).toEqual(position); // No movement
  });

  it("should not move outside the right boundary", () => {
    const position = { x: 2, y: 4, direction: 90 }; // Facing right at right edge
    const newPosition = moveForward(position, gridSize);
    expect(newPosition).toEqual(position); // No movement
  });
});
