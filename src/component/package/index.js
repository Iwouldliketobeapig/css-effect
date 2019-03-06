import React, { PureComponent } from 'react';
import scss from './index.scss';

function outerPackage (Component, title) {
  return class Package extends PureComponent {
    render () {
      return (
        <div className={scss['packages']}>
          <h2>{title}</h2>
          <Component {...this.props}/>
        </div>
      )
    }
  }
}

export default outerPackage;

