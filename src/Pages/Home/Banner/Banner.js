import React from 'react';
import Slider from "react-slick";
import banner1 from '../../../images/banner/newbannercar.jpg';
import banner2 from '../../../images/banner/banner-bg-2-2.jpg';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
	// banner slider setting
	const settings = {
		dots: true,
		arrows: false,
		fade: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 700,
		autoplay: true,
		autoplaySpeed: 6000,
		cssEase: "linear",
		pauseOnHover: true,
	};

	return (
		<section id="home_banner" className="home-banner">
			<div className="relative">
				<Slider {...settings} className="home-banner-slider">
					<div className="single-slide h-screen pt-16 md:pt-20">
						<div
							style={{ backgroundImage: `url(${banner1})` }}
							className="h-full bg-no-repeat bg-cover bg-center flex items-center"
						>
							<div className="container py-8 mb-12 font-my-title">
								<div className="inline-block lg:pl-28 2xl:pl-60 text-left">
									<p className="mb-2 text-my-primary text-4xl tracking-wider">
										Best Deal {new Date().getFullYear()}
									</p>
									<h3 className="text-white uppercase text-2xl md:text-3xl my-1">
										Elegant-Decorative
									</h3>
									<h2 className="text-white uppercase font-bold text-4xl md:text-6xl">
										The <span className="text-my-primary">CarRev</span>
									</h2>
									<p className="mt-2 text-white font-light text-2xl tracking-wide">
										True CarRev Experience
									</p>
									<div className="mt-8 md:mt-12 animate-myMoveUp">
										<Link to="/all-products" className="btn-regular">
											Explore more
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="single-slide h-screen pt-16 md:pt-20">
						<div
							style={{ backgroundImage: `url(${banner2})` }}
							className="h-full bg-no-repeat bg-cover bg-center flex items-center"
						>
							<div className="container py-8 mb-12 font-my-title">
								<div className="inline-block lg:pl-28 2xl:pl-60 text-left">
									<p className="mb-2 text-my-primary text-4xl tracking-wider">Your Best Choice</p>
									<h2 className="text-white uppercase font-bold text-4xl md:text-6xl">
										The <span className="text-my-primary">CarRev</span>
									</h2>
									<h3 className="text-white uppercase text-2xl md:text-3xl my-1">
										Trustworthy-Secure
									</h3>
									<p className="mt-2 text-white font-light text-2xl tracking-wide">
										Feel The Power
									</p>
									<div className="mt-8 md:mt-12">
										<Link to="/all-products" className="btn-regular">
											Explore more
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</section>
	);
};

export default Banner;
