import React from 'react';
import useStyles from './app.styles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.AppHeader}>
      </header>
    </div>
  );
}

export default App;