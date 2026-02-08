import React from 'react';
import MouseTracker from './components/MouseTracker';

const App = () => {
  return (
    <div>
      <h1>Render Props </h1>

      {/* Representação Textual */}
      <MouseTracker render={({ x, y }) => (
        <p>Coordenadas X: {x}, Y: {y}</p>
      )} />

      {/* Representação Visual */}
      <MouseTracker render={({ x, y }) => (
        <div
          style={{
            position: 'absolute',
            top: y,
            left: x,
            width: '20px',
            height: '20px',
            backgroundColor: 'red',
            borderRadius: '50%',
          }}
        />
      )} />
    </div>
  );
};

export default App;
