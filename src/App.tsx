import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [view, setView] = useState(0);
  const [amount, setAmount] = useState('');
  useEffect(() => {
    if (view === 0)
      setView(1)
  })

  switch (view) {
    case 1:
      return (
        <body>
          <div className="line">
            <div className="center">
              <p>Select amount</p>
            </div>
          </div>

          
          <div className="line">
            <div className="center">
                <p>£ {amount}|</p>
            </div>
          </div>

          <div className="line">
            <div className="center">
              <p className="key-digit" onClick={() => setAmount(amount + '1')}>1</p>
              <p className="key-digit" onClick={() => setAmount(amount + '2')}>2</p>
              <p className="key-digit" onClick={() => setAmount(amount + '3')}>3</p>
            </div>
          </div>

          <div className="line">
            <div className="center">
              <p className="key-digit" onClick={() => setAmount(amount + '4')}>4</p>
              <p className="key-digit" onClick={() => setAmount(amount + '5')}>5</p>
              <p className="key-digit" onClick={() => setAmount(amount + '6')}>6</p>
            </div>
          </div>

          <div className="line">
            <div className="center">
              <p className="key-digit" onClick={() => setAmount(amount + '7')}>7</p>
              <p className="key-digit" onClick={() => setAmount(amount + '8')}>8</p>
              <p className="key-digit" onClick={() => setAmount(amount + '9')}>9</p>
            </div>
          </div>

          <div className="line">
            <div className="center">
              <p className="key-digit" onClick={() => setAmount(amount.slice(0, -1))}>*</p>
              <p className="key-digit" onClick={() => setAmount(amount + '0')}>0</p>
              <p className="key-digit">#</p>
            </div>
          </div>

          <div className="line">
            <div className="center">
              <button onClick={() => setView(2)}>submit</button>
            </div>
          </div>
        </body>
      )

    case 2:
      return (
        <p>You have submitted {amount} pounds.</p>
      )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
