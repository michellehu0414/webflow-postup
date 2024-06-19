import React from "react";
import styles from "./LowFidelity.module.scss";
import Link from "next/link";
import Image from "next/image";

const LowFidelity = () => {
	return (
		<section
			id="low-fidelity"
			className="section-container">
			<header className="header-container">
				<h2>
					<span>design iterations</span>
					<br />
					Low-fidelity wireframes
				</h2>
			</header>
			{/* Route 1 low fidelity wireframes */}
			<section className="content">
				<p>
					Using my testing insights, I iterated my sketches into
					low-fidelity wireframes.
				</p>
				<p className="section-subheading">
					Route 1: Diner signs up and sets up account
				</p>
				<p>
					While I didn’t test this route, I made some improvements to
					improve clarity and flow!
				</p>
				<div className="design-walkthrough_wrapper mt-32">
					<p className="subheading">
						Streamline onboarding with a linear flow and progress bar
					</p>
					<Image
						fill={true}
						className="mb-24"
						src="/assets/images/tastebuds/route-1-low-fidelity-food-preferences-01.png"
						alt=""
					/>
					<p className="span-fw-medium mb-0">
						I decided to abandon the onboarding flow I sketched for a
						linear process to streamline the experience. I also added a
						progress bar and a modal checkpoint to boost completion rates!
					</p>
				</div>
				<div className="design-walkthrough_wrapper mt-32 mb-0 pb-0 border-0">
					<p className="subheading">
						Enhancing recommendations with additional diner preferences
					</p>
					<Image
						fill={true}
						className="mb-24"
						src="/assets/images/tastebuds/route-1-low-fidelity-food-preferences-02.png"
						alt=""
					/>
					<p className="span-fw-medium mb-0">
						My participants mentioned avoiding ingredients that aren't
						technically allergies, so I added a step to input ingredients
						they simply dislike—"Disliked Ingredients".
					</p>
					<div>
						<p className="subheading mt-32 mb-24 dark-grey">
							Complete wire flow
						</p>
						<Image
							fill={true}
							alt=""
							loading="lazy"
							sizes="90vw"
							src="/assets/images/tastebuds/route-1-low-fidelity-wire-flow.png"
						/>
					</div>
				</div>
			</section>
			{/* Route 2 low fidelity wireframes */}
			<section className="content-wrapper">
				<p className="section-subheading mb-32">
					Route 2: Diner searches for dining options
				</p>
				<div className="design-walkthrough_wrapper mb-0 border-0">
					<div className="design-walkthrough_grid-container">
						<Image
							fill={true}
							alt=""
							loading="lazy"
							className="featured-media low-fidelity"
							src="/assets/images/tastebuds/route-2-low-fidelity-search-results.mp4"
						/>
						<div>
							<header className="design-walkthrough_header">
								<p className="subheading">Search results</p>
							</header>
							<p>
								I changed the first screen of results to a split view and
								added "Offers". I wanted to explore additional ideas to
								help diners efficiently compare restaurants, so I designed
								a way for diners to preview listings in a swipeable
								carousel.
							</p>
							<div className="design-walkthrough_card">
								<ul className="card_list mt-0">
									<li className="card_headline">New features</li>
									<li>Map button at the bottom of list</li>
									<li>Offers displayed in results</li>
									<li>Split view displaying map and list</li>
									<li>Preview listings in a carousel</li>
								</ul>
							</div>
						</div>
					</div>
					<p className="subheading">Restaurant listing</p>
					<div className="route-2-low-fidelity-all_grid-container">
						<Image
							fill={true}
							src="/assets/images/tastebuds/route-2-low-fidelity-listing-home.png"
							alt=""
						/>
						<Image
							fill={true}
							src="/assets/images/tastebuds/route-2-low-fidelity-listing-info.png"
							alt=""
						/>
						<Image
							fill={true}
							src="/assets/images/tastebuds/route-2-low-fidelity-listing-menu.png"
							alt=""
						/>
						<Image
							fill={true}
							src="/assets/images/tastebuds/route-2-low-fidelity-listing-photos.png"
							alt=""
						/>
						<Image
							fill={true}
							src="/assets/images/tastebuds/route-2-low-fidelity-listing-reviews.png"
							alt=""
						/>
					</div>
					<p className="span-fw-medium mb-32">
						Throughout designing the remaining listing pages, I struggled
						the most with the reviews page due to the amount of information
						I wanted to display. The wireframe I chose organizes essential
						information that prioritizes scannability and facilitates quick
						navigation to restaurant lists, menu items, as well as
						community engagement. This was the point I began to brainstorm
						the social aspect of the app, exploring how user engagement
						with friends' reviews could enhance tailored recommendations. I
						planned to develop these ideas further in my high-fidelity
						wireframes and implement them in my social feed page!
					</p>
					<p>
						The only other changes I made were restructuring the home page
						to display more essential information above the fold by
						displaying order recommendations in a carousel to enhance
						scannability.
					</p>
					<p className="subheading">Iteration process</p>
					<p>Here's a quick overview of my iteration process!</p>
					<div className="r2-lowfi-design-evolution_grid-container">
						<p className="medium-grey lowfi-design-evolution_heading-01">
							Previous
						</p>
						<p className="black lowfi-design-evolution_heading-02">
							Iteration
						</p>
						<Image
							fill={true}
							alt=""
							className="img-1"
							loading="lazy"
							src="/assets/images/tastebuds/route-2-sketch-restaurant-listing.png"
						/>
						<Image
							fill={true}
							alt=""
							className="img-2"
							loading="lazy"
							src="/assets/images/tastebuds/route-2-sketch-restaurant-listing-menu.png"
						/>
						<Image
							fill={true}
							alt=""
							className="img-design-evolution-arrow"
							loading="lazy"
							src="/assets/images/tastebuds/artwork-arrow-right-blue.png"
						/>
						<Image
							fill={true}
							alt=""
							className="img-3"
							loading="lazy"
							src="/assets/images/tastebuds/route-2-low-fidelity-listing-home.png"
						/>
						<Image
							fill={true}
							alt=""
							className="img-4"
							loading="lazy"
							src="/assets/images/tastebuds/route-2-low-fidelity-listing-menu.png"
						/>
					</div>
				</div>
				<div className="content">
					<p className="section-subheading">
						Route 3: Diner reviews a dining experience
					</p>
					<div className="design-walkthrough_wrapper mb-0 border-0">
						<p className="subheading">Streamlined restaurant review</p>
						<Image
							fill={true}
							alt=""
							className="hide"
							loading="lazy"
							sizes="100vw"
							src="/assets/images/tastebuds/illustration-sketches-route-1-review-iteration.png"
						/>
						<div className="design-walkthrough_grid-container mb-0">
							<Image
								fill={true}
								alt=""
								loading="lazy"
								className="featured-media low-fidelity"
								src="/assets/images/tastebuds/route-3-low-fidelity-restaurant-rating.mp4"
							/>
							<video
								className="autoplay-video"
								loop
								muted>
								<source
									src="/assets/images/tastebuds/route-3-low-fidelity-restaurant-rating.mp4"
									type="video/mp4"
								/>
							</video>
							<div>
								<p className="span-fw-medium mb-32">
									I streamlined the flow further and enhanced visual
									feedback, information architecture, and system status. To
									increase trust among diners with reviews and address
									potential issues with subjectivity, I implemented a
									standardized rating system!
								</p>
								<div className="design-walkthrough_card">
									<ul className="card_list mt-0">
										<p className="card_headline">New features</p>
										<li>Clear copy with more natural language</li>
										<li>Progress bar</li>
										<li>Standardized tiered rating system</li>
										<li>
											Mutually exclusive strengths and weaknesses selection
										</li>
										<li>Drag interaction to rate stars</li>
										<li>Reset & finish later option</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<p className="section-subheading">Review flow iteration</p>
					<p>
						The low-fidelity flow streamlined from 7 screens to 4 screens!
					</p>
					<p className="medium-grey lowfi-design-evolution_heading-01 mb-8">
						Previous
					</p>
					<Image
						fill={true}
						alt=""
						loading="lazy"
						src="/assets/images/tastebuds/route-3-sketches-wireflow-labeled.png"
					/>
					<br />
					<br />
					<p className="black lowfi-design-evolution_heading-02 mb-8">
						Iteration
					</p>
					<Image
						fill={true}
						alt=""
						loading="lazy"
						src="/assets/images/tastebuds/route-3-low-fidelity-wireflow-labeled.png"
					/>
				</div>
			</section>
		</section>
	);
};

export default LowFidelity;
