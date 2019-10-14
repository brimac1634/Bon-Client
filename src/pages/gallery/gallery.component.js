import React, { Component } from 'react';
import { connect } from 'react-redux';

import GalleryContainer from '../../components/gallery-collection/gallery-collection.container';

import { fetchGalleryStart } from '../../redux/gallery/gallery.actions';

import './gallery.styles.scss';

const mapDispatchToProps = dispatch => ({
	fetchGalleryStart: () => dispatch(fetchGalleryStart())
})

class Gallery extends Component {
	componentDidMount() {
		const { fetchGalleryStart } = this.props;
		fetchGalleryStart()
	}

	render() {
		return (
			<div className='gallery-page'>
				<h2>
					Follow us on Instagram&nbsp;-&nbsp; 
					<a 
						href='https://www.instagram.com/bonvivantcollection/' 
						target='_blank' 
						rel='noopener noreferrer'
					>
						@bonvivantcollection
					</a>
				</h2>
				<GalleryContainer />
			</div>
		)
	}
}

export default connect(null, mapDispatchToProps)(Gallery);