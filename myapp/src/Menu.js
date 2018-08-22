import React, { Component } from 'react';

class Menu extends Component {

	render() {
		return(
			<div className="container">
		        <div className="menu-wrapper">
					<div className="menu">
						<div className="menu__item">
							Главная
						</div>
						<div className="menu__item">
							Каталог
						</div>
						<div className="menu__item">
							Услуги
						</div>
						<div className="menu__item">
							Доставка
						</div>
						<div className="menu__item">
							О компании
						</div>
						<div className="menu__item">
							Контакты
						</div>
					</div>
				</div>
		    </div>
			
		);
	}
}

export default Menu;