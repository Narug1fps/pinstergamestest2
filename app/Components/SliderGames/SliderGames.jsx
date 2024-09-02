'use client'
import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon,ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from "next/image";
import Link from "next/link";

const SliderGames = () => {
	//Array of Images
	const images = [
		
		"images/Image1.png",
		"images/Image2.png",
		"images/Image3.png",
		"images/Image4.png",
		"images/Image5.png",
		"images/Image6.png",
		"images/Image7.png",
		"images/Image8.png",
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
                        <div className="absolute bottom-48 left-2 inset-x-1/4 items-center  z-10 w-full h-full hidden md:block ">
					  	<Image alt=" " width={1920} height={1080}  src="/Mary Slide.png"/>
						</div>
						<div className="absolute left-2 bottom-8 inset-x-1/4 items-center  z-10 w-full h-full md:hidden ">
					  	<Image alt=" " width={1920} height={1080}  src="/Mary Slide.png"/>
						</div>
                        <button className="absolute md:top-80 top-40 inset-x-1/4 text-center z-10 bg-red-600 md:w-48 md:h-12 w-24 h-8 ml-14  md:mb-0 mb-6 md:ml-72 rounded-full md:mt-32 md:text-2xl md:text-xl text-md bold text-white hover:bg-white hover:text-red-600 duration-300 ">
						<Link href="/Games/Mary" className="hover:text-red-600 duration-300">
                        See More{""}
                    </Link>
						</button>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default SliderGames;