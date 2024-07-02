import React from "react";
import { AppProps } from "next/app";
import styles from "./Hero.module.scss";
import "@/styles/globals.scss";
import Image from "next/image";

const Hero: React.FC = () => {
	return (
		<section
			id="hero"
			className="hero hero--bg-tastebuds">
			<div className="hero__content">
				<img
					alt=""
					className="hero__image"
					loading="eager"
					src="assets/images/tastebuds/hero-image.png"
				/>
				{/* <div className="hero__image-wrapper">
                </div> */}
			</div>
		</section>
	);
};

export default Hero;
