"use client";

import React, { useState } from "react";
import Grid from "../components/grid";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { moveRobot } from "@/lib/robot";

export default function Page() {
  const [commands, setCommands] = useState("");
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0, direction: 0 }); // direction in degrees: 0 (Up), 90 (Right), 180 (Down), 270 (Left)
  const [isExecuting, setIsExecuting] = useState(false);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommands(e.target.value.toUpperCase());
  };

  // Parse and execute commands
  const executeCommands = () => {
    if (isExecuting || !commands.match(/^[LFR]*$/)) return;
    setIsExecuting(true);

    const commandList = commands.split("");
    let index = 0;

    const interval = setInterval(() => {
      if (index >= commandList.length) {
        clearInterval(interval);
        setIsExecuting(false);
        return;
      }

      const command = commandList[index];
      setRobotPosition((prev) => moveRobot(command, prev));
      index++;
    }, 1000);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="flex flex-col">
          <div className="pb-4 flex flex-col items-center gap-4">
            <Input
              value={commands}
              onChange={handleInputChange}
              placeholder="Enter commands (L, R, F)"
            />
            <Button onClick={executeCommands} disabled={isExecuting}>
              {isExecuting ? "Executing..." : "Submit"}
            </Button>
          </div>
          <Grid robotPosition={robotPosition} />
        </div>
      </main>
    </div>
  );
};

