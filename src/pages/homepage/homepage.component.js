import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { isMobileOnly } from 'react-device-detect';

import Directory from '../../components/directory/directory.component';
import JoinMail from '../../components/join-mail/join-mail.component';
import Loader from '../../components/loader/loader.component';

import './homepage.styles.scss';

class HomePage extends Component {
	constructor() {
		super();
		this.state = { isLoadingVideo: true };
		this.videoRef = React.createRef();
	}

	componentDidMount() {
		if (isMobileOnly) this.setState({isLoadingVideo: false})
	}

	videoIsPlaying = () => {
		this.setState({ isLoadingVideo: false })
	}
 
	render() {
		const { isLoadingVideo } = this.state;
		return (
			<div className='homepage'>
				<div className='video-container'>
					{
						!isMobileOnly &&
						<video 
							ref={this.videoRef}
							onPlay={this.videoIsPlaying} 
							loop 
							autoPlay
							muted
						>
						    <source 
						    	src='https://bon-vivant-videos.s3-ap-southeast-1.amazonaws.com/bon-vivant.mp4' 
						    	type='video/mp4' 
						    />
						</video>
					}
				</div>
				<div className='row grey'>
					<div className='col'>
						<Fade bottom>
							<h2 className='center'>
								Men's Haberdashery specialising in handmade tailored clothing for those who live well.
							</h2>
							<p className='center'>
								Bon Vivant is an idea of appreciation - that there exists an intrinsic value to things that give joy in life. These works consist of ideas and memories that bear a connection to the past. What was before considered dated has been transmuted by the mere passing of years to a status at once modern and prevalent.
							</p>
						</Fade>
					</div>
				</div>
				<Fade>
					<div className='row'>
						<Directory />
					</div>
				</Fade>	
				<div className='row grey'>
					<div className='col'>
						<Fade bottom>
							<p className='center'>
								Our experience in the world of menswear has given us the ability to source and produce quality accessories and garments from makers and artisans around the world at a honest and equitable price. For example, each tie we produce is handmade in Ishikawa Prefecture, Japan, using only the finest materials and craftsmanship.
							</p>
						</Fade>
					</div>
				</div>
				<Fade>
					<div className='row'>
						<JoinMail />
					</div>
				</Fade>
				<div className='row grey'>
					<div className='col'>
						<Fade bottom>
							<p className='center'>
								Our leisurewear collection is an amalgamation of tailored smartness and laissez faire elegance. It speaks of modernity and brings together only the best details of classic garments. While the clothes feel relaxed and are never constricting, it maintains a flattering line throughout the body. In essence, it is the ultimate expression of Tailoring.
							</p>
						</Fade>
					</div>
				</div>
				{isLoadingVideo &&
		          <Loader />
		        }
			</div>
		)
	}
}

export default HomePage;