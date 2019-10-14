import React, { Component } from 'react';

import './hover-zoom.styles.scss';

class HoverZoom extends Component {
	state = {
		backgroundPosition: '0% 0%',
		isZoom: false
	}

	handleMouseMove = e => {
	    const { left, top, width, height } = e.target.getBoundingClientRect()
	    const x = (e.pageX - left) / width * 100
	    const y = (e.pageY - top) / height * 100
	    this.setState({ backgroundPosition: `${x}% ${y}%` })
	}

	render() {
		const { src, alt } = this.props;
		const { isZoom } = this.state;
		return (
			<figure 
				className={`hover-zoom fade-in ${isZoom ? 'is-zoomed' : null}`} 
				onMouseMove={isZoom ? this.handleMouseMove : null} 
				onClick={()=>this.setState({ isZoom: !isZoom })}
				style={{ ...this.state, backgroundImage: `url(${src})`}}
			>
				<img src={src} alt={alt} />
		    </figure>
		)
	}
    
}

export default HoverZoom;