//Initializing the Canvas
const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;
const cellsHorizontal = 20;
const cellsVertical = 20;
const width = 1280;
const height = 720;
const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;
const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height,
  },
});

//Rendering the Canvas
Render.run(render);
Runner.run(Runner.create(), engine);

//Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 2, height, { isStatic: true }),
];
World.add(world, walls);

// Maze initialization

const grid = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false));

const verticals = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsHorizontal - 1).fill(true));

const horizontals = Array(cellsVertical - 1)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(true));

const startRow = Math.floor(Math.random() * cellsVertical);
const startCol = Math.floor(Math.random() * cellsHorizontal);

// Maze building

// Array cells shuffle function
const shuffle = (arr) => {
  let counter = arr.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
};

const stepThroughCell = (row, col) => {
  // If I have visited the call at [row, col], then return
  if (grid[row][col]) {
    return;
  }

  // Mark this cell as being visited
  grid[row][col] = true;

  // Assemble randomly-ordered list of neighbours
  const neighbours = shuffle([
    [row - 1, col, "up"],
    [row, col + 1, "right"],
    [row + 1, col, "down"],
    [row, col - 1, "left"],
  ]);

  // For each neighbour ...
  for (let neighbour of neighbours) {
    const [nextRow, nextCol, direction] = neighbour;

    // Check to see if this neighbour is out of bounds
    if (
      nextRow < 0 ||
      nextRow >= cellsVertical ||
      nextCol < 0 ||
      nextCol >= cellsHorizontal
    ) {
      continue;
    }

    // Check to see if we have visited that neighbour, continue to next neighbour
    if (grid[nextRow][nextCol]) {
      continue;
    }

    // Remove a wall from either horizontal or vertical array depending on the direction of movement

    //verticals
    if (direction === "left") {
      verticals[row][col - 1] = false;
    } else if (direction === "right") {
      verticals[row][col] = false;
    } else if (direction === "up") {
      horizontals[row - 1][col] = false;
    } else if (direction === "down") {
      horizontals[row][col] = false;
    }

    stepThroughCell(nextRow, nextCol);
  }
  // Visit that next cell
};

stepThroughCell(startRow, startCol);

// Draw the walls in appropriate places

horizontals.forEach((row, rowIndex) => {
  row.forEach((open, colIndex) => {
    if (open === false) {
      return;
    }

    const wall = Bodies.rectangle(
      colIndex * unitLengthX + unitLengthX / 2,
      rowIndex * unitLengthY + unitLengthY,
      unitLengthX,
      5,
      { label: "wall", isStatic: true }
    );
    World.add(world, wall);
  });
});

verticals.forEach((row, rowIndex) => {
  row.forEach((open, colIndex) => {
    if (open === false) {
      return;
    }

    const wall = Bodies.rectangle(
      colIndex * unitLengthX + unitLengthX,
      rowIndex * unitLengthY + unitLengthY / 2,
      5,
      unitLengthY,
      { label: "wall", isStatic: true }
    );
    World.add(world, wall);
  });
});

//Goal
const goal = Bodies.rectangle(
  width - unitLengthX / 2,
  height - unitLengthY / 2,
  unitLengthX * 0.7,
  unitLengthY * 0.7,
  { label: "goal", isStatic: true, render: { fillStyle: "green" } }
);
World.add(world, goal);

//Ball
const ballRadius = Math.min(unitLengthX, unitLengthY) / 4;
const ball = Bodies.circle(unitLengthX / 2, unitLengthY / 2, ballRadius, {
  label: "ball",
});
World.add(world, ball);

document.addEventListener("keydown", (e) => {
  const { x, y } = ball.velocity;
  if (e.key === "ArrowUp" || e.key === "w") {
    Body.setVelocity(ball, { x: x, y: y - 3 });
  }
  if (e.key === "ArrowDown" || e.key === "s") {
    Body.setVelocity(ball, { x: x, y: y + 3 });
  }
  if (e.key === "ArrowLeft" || e.key === "a") {
    Body.setVelocity(ball, { x: x - 3, y: y });
  }
  if (e.key === "ArrowRight" || e.key === "d") {
    Body.setVelocity(ball, { x: x + 3, y: y });
  }
});

// Win condition

Events.on(engine, "collisionStart", (e) => {
  e.pairs.forEach((collision) => {
    const labels = ["ball", "goal"];
    if (
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      document.querySelector(".winner").classList.remove("hidden");
      world.gravity.y = 1;
      world.bodies.forEach((body) => {
        if (body.label === "wall") {
          Body.setStatic(body, false);
        }
      });
    }
  });
});
