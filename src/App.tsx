import React from 'react';
import Card, { CardVariant } from './components/Card';

const App = () => {
  return (
    <div >
      <Card variant={CardVariant.primary} width='200px' height='200px' onClick={() => console.log('hey')}>
        <button>Click</button>
      </Card>
    </div>
  );
};

export default App;
