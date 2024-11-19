import React, { Component } from 'react';
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary'; // Make sure the import name matches the file name

class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="joker" />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
