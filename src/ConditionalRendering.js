import React from 'react';
import ConditionalRendering from './ConditionalRendering';

function MainComponent() {
  return (
    <div>
      <h1>Main Component</h1>
      <ConditionalRendering number={7} /> {/* Example: Greater than 5 */}
      <ConditionalRendering number={3} /> {/* Example: Less than 5 */}
      <ConditionalRendering /> {/* Example: Undefined */}
    </div>
  );
}

export default MainComponent;