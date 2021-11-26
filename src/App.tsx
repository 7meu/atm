import './App.css';
import { useEffect, useState } from 'react';
import { moneyTypes, MoneyType } from './interfaces/money';

function App() {
  const [page, setPage] = useState(0); // for changing the displayed page
  const [amount, setAmount] = useState(''); // for changing the amount to deposit
  useEffect(() => { // first called when the page fully loads
    if (page === 0) // when it does
      setPage(1) // move onto the main page
  });

  switch (page) {
    case 0: // loading page - unlikely to be visible if the app loads quickly
      return (
        <body>
          <h1>Enalyzer</h1>
          <h1>ATM</h1>
        </body>
      )

    case 1: // main page
      return (
        <body>
          <div className="line">
            <div className="center">
              <h2>Select amount</h2>
            </div>
          </div>


          <div className="line">
            <div className="center">
              <p className="user-input">£ {amount}|</p>
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
              <p className="circle" onClick={() => setAmount(amount.slice(0, -1))}>←</p>
              <p className="circle" onClick={() => {
                if (amount === '')
                  alert('Amount cannot begin with 0.');
                else if (amount.length === 9)
                  alert('You cannot deposit more than £1.000.000.000');
                else
                  setAmount(amount + '0')
              }}>0</p>
              <p className="circle invisible">#</p>
            </div>
          </div>

          <div className="line">
            <div className="center">
              <div className="submit" onClick={() => setPage(2)}>submit</div>
            </div>
          </div>
        </body>
      )

    case 2: // final page
      // distributing the user's amount in three lists of tuples
      // distribution[MoneyType.x] contains the number and value
      // of notes / coins of type x required to reach the amount
      const distribution = [[], [], []] as [number, number][][];

      let finalAmount = Number(amount);
      moneyTypes.forEach(it => { // for every note / coin type, starting with the highest value ones
        if (finalAmount >= it[0]) { // if we can make use of the current note / coin
          distribution[it[1]].push([Math.floor(finalAmount / it[0]), it[0]]); // use as many as possible
          finalAmount %= it[0]; // continue with the remaining amount
        }
      });

      return (
        <body>
          <div className="line">
            <div className="circle" onClick={() => setPage(1)}>←</div>
          </div>

          <div className="line">
            <div className="center">
              <h2>Depositing</h2>
            </div>
          </div>

          <div className="line">
            <div className="center">
              <h2>£ {amount}</h2>
            </div>
          </div>
          
          <div className="table">
            <div className="column">
              {distribution[MoneyType.Note].map(it =>
                <div className="line item">
                  <div className="white-rectangle">
                    <div className="invisible-dot"></div>

                  </div>
                  <div><p>{it[0]} x {it[1]}</p></div>

                </div>
              )}
            </div>

            <div className="column">
              {distribution[MoneyType.BigCoin].map(it =>
                <div className="line item">
                  <div className="invisible-rectangle">
                    <div className="white-dot"></div>
                  </div>

                  <div><p>{it[0]} x {it[1]}</p></div>
                </div>
              )}
            </div>

            <div className="column">
              {distribution[MoneyType.SmallCoin].map(it =>
                <div className="line item">
                  <div className="invisible-rectangle">
                    <div className="white-dot"></div>
                  </div>

                  <p>{it[0]} x {it[1]}</p>
                </div>
              )}
            </div>
          </div>

          <div className="line">
            <div className="center">
              <p>Thank you for using Enalyzer ATM</p>
            </div>
          </div>
        </body>
      )

    default:
      return (
        <p>Error!</p>
      )
  }
}

export default App;