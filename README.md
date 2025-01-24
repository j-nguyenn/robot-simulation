### Description
1. React Application
- Bootstrap a React/Typescript application. You may use any CSS framework (Tailwind for
example) or just vanilla CSS. Feel free to use any library.
- Display a grid that visually represents the Martian surface/dimensions.
- Create an Input field where the instructions can be provided for the robot.
- Create a button that transmits the instructions to the robot.
- Show the robot's movement step-by-step.
- Highlight the robot's final position.

2. Movement
- Robots must execute one command per second ( L , R , or F ).
- Visually rotate the robot when turning ( L / R ).
- Move the robot to the correct location when given the F command.
- Rotation and movement can occur instantly. If you have time, animate the robot’s movement
with CSS transitions.

4. Extensibility
Design the code so it’s easy to add new features (e.g., multiple robots, obstacles, or additional
commands).

5. Testing
Write unit tests for the core logic (in priority order):
Parsing input.
Robot movement.
Grid boundary checks.



### Code structure
- Technologies used: Next.js, Shadcn, TailwindCSS
- Robot logic in robot.ts

![image info](./1.png)

