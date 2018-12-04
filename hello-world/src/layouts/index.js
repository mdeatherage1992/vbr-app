import React from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';
import { Nav } from '../components/Nav/Nav';
import '../_sass/index.scss';
import ReactPlayer from 'react-player'
import Video  from './Video'
import myVideo from './Trees-Top.mp4'
import SlideCard from './SlideCard';
import Maximus from './maximus';
import Facebook from './facebook';
import Cooper from './cooper';



const faviconSizes = [16, 32, 64];


export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSadNotice: true,
			showSlides: false,
			showOpener: true,
			showFacebook: false,
			showCooper: false,
			showMaximus: false
		};
	}

	componentDidMount() {
		const { location } = this.props;
		ReactGA.initialize('UA-88250609-1');
		ReactGA.pageview(location.pathname + location.search);
	}

	componentDidUpdate() {
		const { location } = this.props;
		ReactGA.pageview(location.pathname + location.search);
	}

	render() {
		var aboutPage = document.getElementsByClassName('nav-links');
		const { children } = this.props;
		return (
			<div>
				<Helmet>
					<link
						href="https://fonts.googleapis.com/css?family=Montserrat"
						rel="stylesheet"
					/>
					{faviconSizes.map(size => (
						<link
							rel="icon"
							type="image/png"
							href={`/social/${size}x${size}.png`}
							sizes={`${size}x${size}`}
							key={`${size}x${size}`}
						/>
					))}
				</Helmet>
				{this.state.showSadNotice && (
					<div className="sad-notice">
						<div className="sad-notice-inner">
							<h3>Welcome to Sequioa.</h3>
							<p>
								Sequoia Capital is an American venture capital firm.
								The firm is located in Menlo Park, California and mainly focuses on
								the technology industry. It has backed companies that now control $1.4 trillion
								of the combined stock market value. Sequoia manages multiple investment
								funds including funds specific to India, Israel, and China.{' '}
								<a href="https://www.sequoiacap.com">
									See our Story
								</a>
								.
							</p>
							<button onClick={() => this.setState({ showSadNotice: false })}>
								Continue to website
							</button>
						</div>
					</div>
				)}
				{this.state.showSlides && this.state.showFacebook && (
					<div className="slideShow">
							<Facebook />
						<div className="slideshow-inner">
						<div className="overlay">
						<button id="next" onClick={() => this.setState({ showCooper:true, showFacebook: false, showOpener: false, showSlides: true })}>
							Next
						</button>
							<button id="back-to-site" onClick={() => this.setState({ showOpener: true, showSlides: false,showCooper:false, showFacebook: false, showMaximus:false })}>
								Home
							</button>
							</div>
						</div>
					</div>
				)}
				{this.state.showSlides && this.state.showCooper && (
					<div className="slideShow">

						<Cooper />
						<div className="slideshow-inner">
						<div className="overlay">
						<button id="next" onClick={() => this.setState({ showFacebook: false,showCooper:false, showMaximus:true, showOpener: false, showSlides: true })}>
							Next
						</button>
							<button  id="back-to-site" onClick={() => this.setState({ showOpener: true, showSlides: false,showCooper:false, showFacebook: false, showMaximus:false  })}>
								Home
							</button>
						</div>
						</div>
					</div>
				)}
				{this.state.showSlides && this.state.showMaximus && (
					<div className="slideShow">

							<Maximus />
						<div className="slideshow-inner">
							<button  id="back-to-site" onClick={() => this.setState({ showOpener: true, showSlides: false,showCooper:false, showFacebook: false, showMaximus:false })}>
								Home
							</button>
						</div>
					</div>
				)}
				{this.state.showOpener && (
					<div className="home">
						<Nav />
						<Video src={myVideo} autoPlay={true} loop={true} />
						{children}
							<div className="intro-headline">We Help the Daring Build Legendary Companies</div>
							<div className="intro-p"></div>
							<button onClick={() => this.setState({showFacebook: true, showSadNotice: false,showOpener:false,showSlides:true})} className="slideshow-button"><span>Who we Work With</span></button>
							</div>
						)}
				</div>
		);
	}
}
