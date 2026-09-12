# 🐍 Snake Game M2N

A customizable Snake Game built with React, TypeScript, and HTML5 Canvas.

This project is the live demo application for the [`snake-game-m2n`](https://www.npmjs.com/package/snake-game-m2n) React component library.

## 🚀 Live Demo

Play the game online:

👉 [snake-game-m2n-live.vercel.app](https://snake-game-m2n-live.vercel.app/)

## 📦 npm Package

Install and use the Snake Game component in your React project:

👉 [snake-game-m2n on npm](https://www.npmjs.com/package/snake-game-m2n)
```bash
npm install snake-game-m2n

## ✨ Features

- Built with React and TypeScript
- HTML5 Canvas-based game rendering
- Customizable game width and height
- Custom snake head and body colors
- Custom background color
- Optional background image
- Background image opacity control
- Score and level tracking
- Game-over and victory callbacks
- Keyboard controls
- Responsive and interactive gameplay
- ESM and CommonJS support through the npm package

## 🎮 Controls

Use the following keyboard controls to play:

| Key | Action |
|---|---|
| `Arrow Up` | Move up |
| `Arrow Down` | Move down |
| `Arrow Left` |Arrow Down` | Move down |
| `Arrow Left` | `W` | Move up |
| `A` | Move left |
| `S` | Move down |
| `D` | Move right |
| `Space` | Start or control the game |
| `Escape` | Open the settings menu |

The game starts when you press a movement key or the `Space` key.

## 🛠️ Technologies

- React
- TypeScript
- Vite
- HTML5 Canvas
- ESLint
- JavaScript

## 📋 Requirements

Before running the project, make JavaScript

## 📋 Requirements

Before running the project, make- npm, Yarn, or pnpm

## 📥 Installation

Clone the repository:

bash
git clone https://github.com/m2ndev/snake-game-m2n-live.git

Navigate to the project directory:

bash
cd snake-game-m2n-live

Install the dependencies:

bash
npm install

## ▶️ Run the Development Server

Start the local development server:

bash
npm run dev

Then open the local URL shown in your terminal. Usually, Vite runs the project at:

text
http://localhost:5173

## 🏗️ Build for Production

Create an optimized production build:

bash
npm run build

## 🔍 Preview the Production Build

Preview the production build locally:

bash
npm run preview

## 📦 Using the `snake-game-m2n` Component

The component can be imported from the npm package using a default import:

tsx
import SnakeGame from "snake-game-m2n";

function App() {
  return (
<SnakeGame
width={600}
height={400}
backgroundColor="#111827"
snakeHeadColor="#22c55e"
snakeBodyColor="#86efac"
/>
  );
}

export default App;

You can also use a named import:

tsx
import { SnakeGame }function App() {
-m2n";

function App() {
  return <SnakeGame />;
}

export default App;

## 🎨 Customization Example

tsx
import SnakeGame from "snake-game-m2n";

function App() {
  return (
<SnakeGame
width={800}
height={500}
setting="on"
backgroundColor="#020617"
backgroundImage="https://example.com/background.jpg"
bgOpacity={0.4}
snakeHeadColor="#facc15"
snakeBodyColor="#4ade80"
/>
  );
}

export default App;

## ⚙️ Component Props

| Prop | Type | Description |
|---|---|---|
| `width` | `number` | Width of the game canvas in pixels |
| `height` | `number` | Height of the game canvas in pixels |
| `setting` | `"on" \| "off"` | Enables or disables the settings menu |
| `backgroundImage` | `string` | URL of the background image |
| `backgroundColor` | `string` | Background color of the game |
| `snakeHeadColor` | `string` | Color of the snake's head |
| `snakeBodyColor` | `string` | Color of the snake's body |
| `bgOpacity` | `number` | Opacity of the background image |
| `onScoreChange` | `(score: number, level: number) => void` | Called when the score or level changes |
| `onGameOver` | `(finalScore: number) => void` | Called when the game ends |
| `onVictory` | `() => void` | Called when the player wins |

## 🏆 Game Events Example

tsx
import SnakeGame from "snake-game-m2n";

function App() {
  const handleScoreChange = (score: number, level: number) => {
console.log("Score:", score);
console.log("Level:", level);
  };

  const handleGameOver = (finalScore: number) => {
console.log("Game over!");
console.log("Final score:", finalScore);
  };

  const handleVictory = () => {
console.log("Congratulations! You won!");
  };

  return (
<SnakeGame
width={600}
height={400}
onScoreChange={handleScoreChange}
onGameOver={handleGameOver}
onVictory={handleVictory}
/>
  );
}

export default App;

## 🔷 TypeScript Support

The project and the npm package support TypeScript.

Available exported types include:

ts
import type {
  SnakeGameProps,
  Direction,
  GameStatus,
  Position,
  Obstacle,
  Food,
} from "snake-game-m2n";

Available game directions:

ts
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

Available game statuses:

ts
type GameStatus =
  | "IDLE"
  | "RUNNING"
  | "PAUSED"
  | "GAME_OVER"
  | "VICTORY";

## 📁 Project Structure

text
snake-game-m2n-live/
├── public/
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md

## 🌐 Deployment

The live version of this project is deployed using Vercel:

👉 [Open Live Demo](https://snake-game-m2n-live.vercel.app/)

## 🔗 Links

- 🎮 [Live Demo](https://snake-game-m2n-live.vercel.app/)
- 📦 [npm Package](https://www.npmjs.com/package/snake-game-m2n)
- 💻 [GitHub Repository](https://github.com/m2ndev/snake-game-m2n-live)
- 🌐 [M2NDev Website](https://m2ndev.ir)

## 👨‍💻 Author

Created and maintained by **M2NDev**.

🌐 [m2ndev.ir](https://m2ndev.ir)

## 📄 License

This project is licensed under the MIT License.

Copyright © M2NDev

🌐 [m2ndev.ir](https://m2ndev.ir)
