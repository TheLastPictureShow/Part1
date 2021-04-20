import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./app.css";

const Statistic = ({ name, value }) => (
  <div>
    <p>
      {name}: {value}
    </p>
  </div>
);

const Statistics = ({
  good,
  neutral,
  bad,
  allClicks,
  calcAverage,
  calcPositive,
}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div className="cyan">
      <h2>Statistics</h2>
      <Statistic name="Good" value={good} />
      <Statistic name="Neutral" value={neutral} />
      <Statistic name="Bad" value={bad} />
      <Statistic name="All" value={allClicks.length} />
      <Statistic name="Average" value={calcAverage()} />
      <Statistic name="Positive" value={calcPositive()} />
    </div>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [text] = useState(["Good", "Neutral", "Bad"]);

  const handleGoodClick = () => {
    setAll(allClicks.concat(1));
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setAll(allClicks.concat(0));
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setAll(allClicks.concat(-1));
    setBad(bad + 1);
  };

  const calcAverage = () => {
    let sum = 0;
    allClicks.forEach((value) => (sum += value));
    return sum / allClicks.length;
  };

  const calcPositive = () => <span>{(good / allClicks.length) * 100}%</span>;

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={handleGoodClick} text={text[0]} />
      <Button onClick={handleNeutralClick} text={text[1]} />
      <Button onClick={handleBadClick} text={text[2]} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allClicks={allClicks}
        calcAverage={calcAverage}
        calcPositive={calcPositive}
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
