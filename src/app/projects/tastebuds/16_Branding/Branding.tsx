import React from "react";
import styles from "./Branding.module.scss";
import Link from "next/link";
import Image from "next/image";

const Branding = () => {
	return (
		<section
			id="branding"
			className="section-container">
			<header className="header-container">
				<h2>
					<span>branding</span>
					<br />
					Style guide
				</h2>
			</header>
			<div className="content">
				<p>
					My next round of designs were low-fidelity wireframes, where I
					implemented the recommendations I made as a result of my first
					usability test.
				</p>
				<p className="subheading mb-16">Color Palette</p>
				<p className="span-fw-medium">
					In crafting my color palette,{" "}
					<span>
						my goal was to address diners' mistrust and lack of confidence,
						so I wanted to foster warmth, friendliness, trust, excitement,
						and a sense of community.
					</span>
					<br />
					<br />
					At first, I heavily considered the color red, which is used by
					major competitors in the consumer dining industry, such as
					McDonald's, Doordash, Yelp, and Open Table, to stimulate appetite
					and spending. However, I realized that my mobile solution aims to
					leverage personal recommendations to build trust and confidence,
					not drive consumer spending. Therefore,{" "}
					<span>
						I chose a sunflower yellow to encourage social interaction and
						exploration, complemented by a sky blue to provide a sense of
						familiarity, as it is commonly used in interactive icons across
						social media apps.
					</span>
				</p>
				<div className="mb-32">
					<Image
						fill={true}
						className="img-branding-colors"
						src="/assets/images/tastebuds/branding-colors.png"
						alt=""
					/>
				</div>
				<div className="flex-row gap-40 align-center mb-32">
					<div>
						<p className="subheading mb-24">Typography</p>
						<Image
							fill={true}
							className="img-branding-typography"
							src="/assets/images/tastebuds/branding-typography.png"
							alt=""
						/>
					</div>
					<p className="notes text-small">
						Spoiler Alert: Yes, I shortly realized this type was too small.
						And yes, it was a pain to readjust all of my designs because I
						didn't know to use Figma's public library tool. This was one
						hard lesson to learn 😭
					</p>
				</div>
				<div className=" flex-row gap-40 mb-32">
					<div>
						<p className="subheading mb-16">Buttons</p>
						<Image
							fill={true}
							className="img-branding-buttons"
							src="/assets/images/tastebuds/branding-buttons.png"
							alt=""
						/>
					</div>
					<div>
						<div className="mb-24">
							<p className="subheading mb-24">Search bar</p>
							<Image
								fill={true}
								className="img-branding-search-bar"
								src="/assets/images/tastebuds/branding-search-bar.png"
								alt=""
							/>
						</div>
						<div>
							<p className="subheading mb-24">Badges</p>
							<Image
								fill={true}
								className="img-branding-badges"
								src="/assets/images/tastebuds/branding-badges.png"
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="mb-32">
					<p className="subheading mb-24">8-point-grid</p>
					<Image
						fill={true}
						className="img-branding-8-point-grid"
						src="/assets/images/tastebuds/branding-8-point-grid.png"
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default Branding;
