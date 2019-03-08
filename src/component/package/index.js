import React, { PureComponent } from 'react';
import scss from './index.module.scss';

function outerPackage (Component, title) {
  return class Package extends PureComponent {
    render () {
      return (
        <div className={scss['package']}>
          <h2>{title}</h2>
          <Component {...this.props}/>
        </div>
      )
    }
  }
}

export default outerPackage;

