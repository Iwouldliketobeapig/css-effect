import React, { PureComponent } from 'react';
const scss = require('./header.module.scss');
const logImg = require('./white-logo.png');

export default class Header extends PureComponent {
  render () {
    return (
      <div className={scss['header']}>
        <img className={scss['header-img']} src={logImg} alt="dt" />
        <h1>css-effect</h1>
      </div>
    )
  }
}