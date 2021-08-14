import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Statewise from './components/Statewise'
import './App.css'
let App = () => {

  const [data, setdata] = useState([]);
  const getdata = async () => {
    const res = await fetch('https://api.covid19india.org/data.json');
    let actual = await res.json();
    setdata(actual.statewise[0])
    console.log(data);
  }

  useEffect(() => {
    getdata();
  }, [])
  return (
    <Router>
      <Switch>
        <Route path="">
          <ul>


            <li className="card" >
              <div className="card__main" >
                <div className="card__inner" >
                  <p className="card__name" ><span>OUR </span>COUNTRY</p>
                  <p className="card__total card__small" >INDIA</p>

                </div>
                <div className="card__inner" >
                  <p className="card__name" ><span>TOTAL </span>RECOVERED</p>
                  <p className="card__total card__small" >{data.recovered}</p>

                </div>
                <div className="card__inner" >
                  <p className="card__name" ><span>TOTAL </span>CONFIRMED</p>
                  <p className="card__total card__small" >{data.confirmed}</p>

                </div>
                <br />

                <div className="card__inner" >
                  <p className="card__name" ><span>TOTAL </span>DEATH</p>
                  <p className="card__total card__small" >{data.deaths}</p>

                </div>
                <div className="card__inner" >
                  <p className="card__name" ><span>TOTAL </span>ACTIVE</p>
                  <p className="card__total card__small" >{data.active}</p>

                </div>
                <div className="card__inner" >
                  <p className="card__name" ><span>LAST </span>UPDATED</p>
                  <p className="card__total card__small" >{data.lastupdatedtime}</p>

                </div>
                <button>STATE - WISE COVID STATS</button>

              </div>
            </li>

          </ul>
        </Route>
        <Route path="/states" >
          <Statewise />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

