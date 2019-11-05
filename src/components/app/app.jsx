import React from "react";
import {number} from 'prop-types';
import WelcomeScreen from '../welcome/welcome.jsx';

const App = (props) => {
  const {gameTime, errorCount} = props;

  const onClick = () => {};
  return <WelcomeScreen
    minutes={gameTime}
    mistakes={errorCount}
    onClick={onClick}
  />;
};

App.propTypes = {errorCount: number.isRequired, gameTime: number.isRequired};

export default App;
