import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import Directory from '../../components/directory/directory.component';
import CollectionContainer from '../collection/collection.container';
import InStoreShop from '../in-store/in-store.component';

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

const ShopPage = ({ fetchCollectionsStart, match }) => {
	useEffect(()=>{
		fetchCollectionsStart();
	}, [fetchCollectionsStart])

	return (
		<div className='shop-page'>
			<Route 
				exact 
				path={`${match.path}`} 
				component={Directory} 
			/>
			<Route 
				path={`${match.path}/online`} 
				component={CollectionContainer} 
			/>
			<Route 
				path={`${match.path}/in-store`} 
				component={InStoreShop} 
			/>
		</div>
	)
} 

export default connect(null, mapDispatchToProps)(ShopPage);