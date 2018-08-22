import React, { Component } from 'react';

const sliderWrapperStyle = {
	backgroundColor: "#292929"
}

class Slider extends Component {
	
	render() {
		return(
			<div className="slider-wrapper" style={sliderWrapperStyle}>
				<div className="slider">
					<div className="slider__back-img"></div>
					<div className="container visible">
			         	<div className="slider__header">
			         		Быстрая доставка
						</div>
						<div className="slider__info">
			         		бетона, щебня, песка <br />
			         		и других нерудных материалов <br />
			         		по Москве и Московской области
						</div>
						<div className="slider__buttons">
			         		<div className="slider__buttons-more-details">
								Подробнее о доставке
			         		</div>
			         		{'или'}
			         		<div className="slider__buttons-see-catalog">
			         			перейти в каталог
			         		</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Slider;