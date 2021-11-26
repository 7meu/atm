import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MoneyType } from './interfaces/money';

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
              <p className="circle" onClick={() => setAmount(amount + '1')}>1</p>
              <p className="circle" onClick={() => setAmount(amount + '2')}>2</p>
              <p className="circle" onClick={() => setAmount(amount + '3')}>3</p>
            </div>
          </div>

          <div className="line">
            <div className="center">
              <p className="circle" onClick={() => setAmount(amount + '4')}>4</p>
              <p className="circle" onClick={() => setAmount(amount + '5')}>5</p>
              <p className="circle" onClick={() => setAmount(amount + '6')}>6</p>
            </div>
          </div>

          <div className="line">
            <div className="center">
              <p className="circle" onClick={() => setAmount(amount + '7')}>7</p>
              <p className="circle" onClick={() => setAmount(amount + '8')}>8</p>
              <p className="circle" onClick={() => setAmount(amount + '9')}>9</p>
            </div>
          </div>

          <div className="line">
            <div className="center">
              <p className="circle" onClick={() => setAmount(amount.slice(0, -1))}>*</p>
              <p className="circle" onClick={() => setAmount(amount + '0')}>0</p>
              <p className="circle">#</p>
            </div>
          </div>

          <div className="line">
            <div className="center">
              <div className="submit" onClick={() => setView(2)}>submit</div>
            </div>
          </div>
        </body>
      )

    case 2:
      const moneyTypes = [[1000, MoneyType.Note],
                          [500, MoneyType.Note],
                          [200, MoneyType.Note],
                          [100, MoneyType.Note],
                          [50, MoneyType.Note],
                          [20, MoneyType.BigCoin],
                          [10, MoneyType.SmallCoin],
                          [5, MoneyType.BigCoin],
                          [2, MoneyType.BigCoin],
                          [1, MoneyType.SmallCoin]];

      // distributing the user's amount in a list
      // of tuples of form [note value, number of notes, note type]
      const distribution = [] as [number, number, MoneyType][];
      
      let finalAmount = Number(amount);
      moneyTypes.forEach(it => {
        if (finalAmount >= it[0])
          distribution.push([it[0], Math.floor(finalAmount / it[0]), it[1]]);
          finalAmount %= it[0];
      });

      return (
        <div>
          <div className="line">
            <div className="circle" onClick={() => setView(1)}>V</div>
          </div>

          <div className="line">
            <div className="center">
              <p>Depositing</p>
            </div>
          </div>

          <div className="line">
            <div className="center">
                <p>£ {amount}</p>
            </div>
          </div>
          
          {distribution.map(it => <p>{it[0]}x{it[1]}+</p>)}
        </div>
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
