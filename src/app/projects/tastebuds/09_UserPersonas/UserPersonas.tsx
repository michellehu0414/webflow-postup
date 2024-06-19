import React from "react";
import styles from "./UserPersonas.module.scss";
import Link from "next/link";
import Image from "next/image";

const UserPersonas = () => {
	return (
		<section
			id="user-personas"
			className="section-container">
			<header className="header-container">
				<h2>
					<span>user personas</span>
					<br />
					Meet the diners: <br /> Alex, Brandon, and Cleo
				</h2>
			</header>
			<div className="content">
				<p>
					Given the diversity of diners' needs and behaviors, I created 3
					user personas to better understand my target audience and guide
					my ideation phase: Alex, Brandon, and Cleo.
				</p>
			</div>
			<div
				className="user-persona_tabs tabs-container content mb-32"
				data-current="Tab 1"
				data-duration-in="300"
				data-duration-out="100"
				data-easing="ease">
				<div className="tabs-menu">
					<button
						className="tab-button active"
						data-tab="tab1">
						<p>Alex</p>
					</button>
					<button
						className="tab-button"
						data-tab="tab2">
						<p>Brandon</p>
					</button>
					<button
						className="tab-button"
						data-tab="tab3">
						<p>Cleo</p>
					</button>
				</div>
				<div
					className="tab-content active"
					id="tab1">
					<Image
						fill={true}
						alt=""
						className="img-user-persona"
						src="/assets/images/tastebuds/user-persona-alex.png"
					/>
				</div>
				<div
					className="tab-content"
					id="tab2">
					<Image
						fill={true}
						alt=""
						className="img-user-persona"
						src="/assets/images/tastebuds/user-persona-brandon.png"
					/>
				</div>
				<div
					className="tab-content"
					id="tab3">
					<Image
						fill={true}
						alt=""
						className="img-user-persona"
						src="/assets/images/tastebuds/user-persona-cleo.png"
					/>
				</div>
			</div>
			<div className="content mb-32">
				<div className="user-persona_container">
					<div className="user-persona_heading-container">
						<Image
							fill={true}
							alt=""
							className="user-persona_icon"
							loading="lazy"
							src="/assets/images/tastebuds/user-persona-icon-alex.png"
						/>
					</div>
					<div>
						<p className="user-persona_title">Alex</p>
						<div className="user-persona_content">
							<p>
								I enjoy dining out because I can spend quality time with my
								friends and family, eat delicious food, and discover new
								restaurants.
								<span>
									I use Yelp and Google Maps but trust word-of-mouth
									recommendations over online reviews to know what's
									<em>actually good</em>
								</span>
								. Therefore, I want to see customer photos of food not
								professional photos because they're more accurate.
							</p>
						</div>
					</div>
				</div>
				<div className="user-persona_container">
					<div className="user-persona_heading-container">
						<Image
							fill={true}
							alt=""
							className="user-persona_icon"
							loading="lazy"
							src="/assets/images/tastebuds/user-persona-icon-brandon.png"
						/>
					</div>
					<div>
						<p className="user-persona_title">Brandon</p>
						<div className="user-persona_content">
							<p>
								I couldn't care less about discovery. Given my hectic work
								schedule, I dine out and order takeout for the
								<span>convenience</span>, especially when I'm working late.
								I just want to
								<span>
									quickly find dining options with good value that make my
									life easier
								</span>
								, such as when I don’t have time to cook or simply don't
								want to cook.
							</p>
						</div>
					</div>
				</div>
				<div className="user-persona_container">
					<div className="user-persona_heading-container">
						<Image
							fill={true}
							alt=""
							className="user-persona_icon"
							loading="lazy"
							src="/assets/images/tastebuds/user-persona-icon-cleo.png"
						/>
					</div>
					<div>
						<p className="user-persona_title">Cleo</p>
						<div className="user-persona_content">
							<p>
								Like Alex, I enjoy discovery and spending quality time with
								friends and family, but I am more inclined to visit new,
								trendy places. However, unlike Brandon, convenience is not
								my priority if the place is worth visiting, so I'm more
								willing to travel for the experience! Also, dining out
								isn't limited to dining: As a remote worker, I like to work
								at aesthetic coffee shops with WiFi and outlets, so it’s
								important that restaurant provide high quality pictures and
								accurate, relevant information online.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="content">
					<p className="mb-32">
						Despite their differences, Alex, Brandon, and Cleo have
						something in common: They feel overwhelmed by endless search
						results that are irrelevant to their needs and desire more
						personalization in their search methods.
					</p>
					<p className="secondary-text mt-16"></p>
				</div>
				<p className="secondary-text mb-0">
					How might I empower diners to confidently discover dining options
					and make decisions?
				</p>
			</div>
		</section>
	);
};

export default UserPersonas;
