import React, { useEffect, useRef } from "react";

const SnakeGame = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const COLS = 26,
      ROWS = 26,
      EMPTY = 0,
      SNAKE = 1,
      FRUIT = 2,
      LEFT = 0,
      UP = 1,
      RIGHT = 2,
      DOWN = 3,
      KEY_LEFT = 37,
      KEY_UP = 38,
      KEY_RIGHT = 39,
      KEY_DOWN = 40;

    let canvas, ctx, keystate, frames, score, gameOver;

    class Grid {
      constructor() {
        this.width = null;
        this.height = null;
        this._grid = null;
      }

      init(d, c, r) {
        this.width = c;
        this.height = r;

        this._grid = [];
        for (let x = 0; x < c; x++) {
          this._grid.push([]);
          for (let y = 0; y < r; y++) {
            this._grid[x].push(d);
          }
        }
      }

      set(val, x, y) {
        this._grid[x][y] = val;
      }

      get(x, y) {
        return this._grid[x][y];
      }
    }

    class Snake {
      constructor() {
        this.direction = null;
        this.last = null;
        this._queue = null;
      }

      init(d, x, y) {
        this.direction = d;

        this._queue = [];
        this.insert(x, y);
      }

      insert(x, y) {
        this._queue.unshift({ x: x, y: y });
        this.last = this._queue[0];
      }

      remove() {
        return this._queue.pop();
      }
    }

    let grid = new Grid();
    let snake = new Snake();

    function setFood() {
      let empty = [];
      for (let x = 0; x < grid.width; x++) {
        for (let y = 0; y < grid.height; y++) {
          if (grid.get(x, y) === EMPTY) {
            empty.push({ x: x, y: y });
          }
        }
      }
      let randpos = empty[Math.round(Math.random() * (empty.length - 1))];
      grid.set(FRUIT, randpos.x, randpos.y);
    }

    function startGame() {
      gameOver = false;

      canvas = canvasRef.current;
      canvas.width = COLS * 20;
      canvas.height = ROWS * 20;
      ctx = canvas.getContext("2d");

      ctx.font = "12px Helvetica";

      frames = 0;
      keystate = {};

      window.addEventListener("keydown", function (evt) {
        keystate[evt.keyCode] = true;
      });
      window.addEventListener("keyup", function (evt) {
        delete keystate[evt.keyCode];
      });

      init();
      loop();
    }

    function init() {
      score = 0;

      grid.init(EMPTY, COLS, ROWS);

      let sp = { x: Math.floor(COLS / 2), y: ROWS - 1 };
      snake.init(UP, sp.x, sp.y);
      grid.set(SNAKE, sp.x, sp.y);

      setFood();
    }

    function loop() {
      update();
      draw();

      if (!gameOver) {
        window.requestAnimationFrame(loop);
      }
    }

    function update() {
      frames++;

      if (keystate[KEY_LEFT] && snake.direction !== RIGHT)
        snake.direction = LEFT;
      if (keystate[KEY_UP] && snake.direction !== DOWN) snake.direction = UP;
      if (keystate[KEY_RIGHT] && snake.direction !== LEFT)
        snake.direction = RIGHT;
      if (keystate[KEY_DOWN] && snake.direction !== UP) snake.direction = DOWN;

      if (frames % 7 === 0) {
        let nx = snake.last.x;
        let ny = snake.last.y;

        switch (snake.direction) {
          case LEFT:
            nx--;
            break;
          case UP:
            ny--;
            break;
          case RIGHT:
            nx++;
            break;
          case DOWN:
            ny++;
            break;
        }

        if (
          0 > nx ||
          nx > grid.width - 1 ||
          0 > ny ||
          ny > grid.height - 1 ||
          grid.get(nx, ny) === SNAKE
        ) {
          gameOver = true;
          return;
        }

        if (grid.get(nx, ny) === FRUIT) {
          score++;
          setFood();
        } else {
          let tail = snake.remove();
          grid.set(EMPTY, tail.x, tail.y);
        }

        grid.set(SNAKE, nx, ny);
        snake.insert(nx, ny);
      }
    }

    function draw() {
      let tw = canvas.width / grid.width;
      let th = canvas.height / grid.height;

      for (let x = 0; x < grid.width; x++) {
        for (let y = 0; y < grid.height; y++) {
          switch (grid.get(x, y)) {
            case EMPTY:
              ctx.fillStyle = "#fff";
              break;
            case SNAKE:
              ctx.fillStyle = "#333";
              break;
            case FRUIT:
              ctx.fillStyle = "#009BFF";
              break;
          }
          ctx.fillRect(x * tw, y * th, tw, th);
        }
      }

      ctx.fillStyle = "#000";
      ctx.fillText("SCORE: " + score, 10, canvas.height - 10);
    }

    startGame();
  }, []);

  return (
    <div>
      <button onClick={() => setGameState("start")}>Start Game</button>
      <button onClick={() => setGameState("restart")}>Restart Game</button>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default SnakeGame;
