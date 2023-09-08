import React from 'react';
import ConditionalRendering from './ConditionalRendering';

function MainComponent() {
  return (
    <div>
      <h1>Main Component</h1>
      <ConditionalRendering number={7} />
    </div>
  );
}

export default MainComponent;