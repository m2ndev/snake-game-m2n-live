import { SnakeGame } from 'snake-game-m2n';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',        
        justifyContent: 'center',    
        width: '100vw',           
        height: '100vh',          
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflow: 'hidden',       
        background: '#0f172a',
        color: '#fff'
      }}
    >
      <SnakeGame
        width={500}
        height={500}
        setting="on"
        snakeHeadColor="#4ade80"
        snakeBodyColor="#22c55e"
        bgOpacity={0.9}
        onScoreChange={(score, level) => console.log('Score:', score, 'Level:', level)}
      />
    </div>
  );
}

export default App;
