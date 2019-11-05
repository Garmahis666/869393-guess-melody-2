import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome/welcome.jsx';

const App = (props) => {
  const {errorCount, gameTime} = props;

  const onClick = () => {};
  return <WelcomeScreen
    mistakes={errorCount}
    minutes={gameTime}
    onClick={onClick}
  />;
};

App.propTypes = {errorCount: PropTypes.number.isRequired, gameTime: PropTypes.number.isRequired};

export default App;
