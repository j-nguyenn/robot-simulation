import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import Page from "./page";
import { moveRobot } from "@/lib/robot";
import '@testing-library/jest-dom';

jest.mock("@/lib/robot", () => ({
  moveRobot: jest.fn(),
}));

describe("Page Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test("renders input and button", () => {
    render(<Page />);

    expect(screen.getByPlaceholderText(/enter commands/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("disables button when executing commands", () => {
    render(<Page />);

    const input = screen.getByPlaceholderText(/enter commands/i);
    const button = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(input, { target: { value: "LFR" } });
    fireEvent.click(button);

    expect(button).toBeDisabled();
  });

  test("validates commands input", () => {
    render(<Page />);

    const input = screen.getByPlaceholderText(/enter commands/i);
    const button = screen.getByRole("button", { name: /submit/i });


    fireEvent.change(input, { target: { value: "INVALID" } });

    expect(button).not.toBeDisabled();
    fireEvent.click(button);


    expect(moveRobot).not.toHaveBeenCalled();
  });


  test("stops execution when all commands are executed", async () => {
    render(<Page />);

    const input = screen.getByPlaceholderText(/enter commands/i);
    const button = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(input, { target: { value: "FF" } });
    fireEvent.click(button);

    await act(async () => {
      jest.advanceTimersByTime(2000); // 2 commands * 1000ms interval
    });

    await act(async () => {
      jest.runAllTimers();
    });
    expect(button).not.toBeDisabled();
  });
});
