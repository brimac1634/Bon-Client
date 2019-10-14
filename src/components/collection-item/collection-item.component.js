import React from 'react';
import { withRouter } from 'react-router-dom';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem, history, match }) => {
	const { name, price, images, productID, quantity } = item;
	return (
		<div 
			className='collection-item'
			onClick={()=>history.push(`${match.url}/${productID}`)}
		>
			<div className='inner-container'>
				{
					images.length
					? 	<div 
							className='image' 
							style={{backgroundImage: `url(${images[0]}`}} 
						/>
					: 	<span className='image'>No Photo</span>
				}
				<div className='collection-footer'>
					<span className='name'>{ name }</span>
					<span className='price'>{`HKD$${price}`}</span>
				</div>
				{
					quantity < 1 &&
					<div className='not-avail'>
						<span>Out of Stock</span>
					</div>
				}
			</div>
		</div>
	)
}

export default withRouter(CollectionItem);