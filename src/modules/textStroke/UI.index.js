import React, { PureComponent } from 'react';
import outerPackage from 'src/component/package';

class TextStroke extends PureComponent {
  render () {
    return (
      <div>
        <span>Css-Effect</span>
      </div>
    )
  }
};

export default outerPackage(TextStroke, 'test-Stroke');
