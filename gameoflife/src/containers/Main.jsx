import React from 'react';
import Grid from '../components/Grid.jsx'

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      generation: 0,
    }
  }

  render() {
    return (
      <div>
        <h1>Game of Life</h1>
        <Grid />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    );
  }
}

export default Main;
