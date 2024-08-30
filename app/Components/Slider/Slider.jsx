'use client'
import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from "next/image";

const Slider = () => {
	//Array of Images
	const images = [
		
		"images/Image2.png",
		"images/Image3.png",
		"images/Image4.png",
		"images/Image5.png",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		scale: 1,
		duration: 3000,
		transitionDuration: 300,
		infinite: true,
		prevArrow: (
			<div className="ml-10 top-40 md:top-72">
				<ArrowLeftIcon className="h-8 w-8 text-white cursor-pointer" />
			</div>
		),
		nextArrow: (
				<div className="mr-10 top-40 md:top-72">
				   <ArrowRightIcon className="h-8 w-8 text-white cursor-pointer" />
			    </div>
		),
	};
	return (
		<div className="w-xl h-xl md:h-screen   ">
			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center md:items-center items-start w-screen h-xl md:h-screen relative">
						<img
							className="w-screen"
							src={each}
						/>
                        <div className="absolute md:top-60 top-24 inset-x-1/4 items-center  z-10 md:text-6xl text-4xl bold text-white ">
					  	<Image alt=" " width={200} height={100}  src="/Mary card.png"/>
						</div>
                        <button className="absolute md:top-80 top-40 inset-x-1/4 text-center z-10 md:text-2xl text-xl bold text-white"></button>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Slider;