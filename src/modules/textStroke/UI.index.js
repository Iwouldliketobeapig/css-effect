import React, { PureComponent } from 'react';
import outerPackage from 'src/component/package';
const scss = require('./index.module.scss');

class TextStroke extends PureComponent {
  render () {
    return (
      <div className={scss['stroke']}>
        <span>-webkit-text-stroke</span>
        <span>webkit-text-stroke</span>
        <span>webkit-text-stroke</span>
      </div>
    )
  }
};

export default outerPackage(TextStroke, 'text-stroke');
