import React, { Component } from 'react';

import logo from './img/logo.svg';

class Header extends Component {

	render() {
		return(
			<div className="header">
	          <div className="container">
	            <div className="row">
	              <div className="col-lg-4">
	              	<div className="header__logo">
	                	<img src={logo} alt="Логотип"/>
	                </div>
	                <div className="wrapper">
		                <div className="header__logo-name">
							Granit
		                </div>
		                <div className="header__logo-text">
							Доставка нерудных материалов
		                </div>
	                </div>
	              </div>
	              <div className="col-lg-6">
	              	<div className="header__info">
	                	<div className="header__info-phone">
		                	8 800 342-13-33
		                </div>
		                <div className="header__info-text">
		                	Бесплатный звонок по России
		                </div>
	                </div>
	              </div>
	              <div className="col-lg-2">
	              	<div className="header__callback">
	                	<div className="header__callback-text">
							Обратный звонок
	                	</div>
	                </div>
	              </div>
	            </div>
	          </div>
			</div>
		);
	}
}

export default Header;