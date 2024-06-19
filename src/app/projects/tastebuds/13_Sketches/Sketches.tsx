import React, { useState } from "react";
import styles from "./Sketches.module.scss";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion/Accordion";

const Sketches: React.FC = () => {
	const [open, setOpen] = useState(false);
	return (
		<section
			id="sketches"
			className="section-container border-0 pb-0">
			<header className="header-container">
				<span>designing</span>
				<h2>Sketches</h2>
			</header>
			<div className="content mb-0">
				<p>
					During sketching, I made a few changes to the previous user flows
					and added a few new features!
				</p>
			</div>
			<div className="content">
				<section>
					<div className="sketches-walkthrough__wrapper">
						<p className="section-subheading sketches">
							Route 1: Diner signs up and sets up account
						</p>
						<Image
							fill={true}
							className="mb-24"
							src="/assets/images/tastebuds/route-1-sketches-all-condensed.png"
							alt=""
						/>
						<p className="mb-0">
							In my user flows, diners are prompted to add their friends
							during onboarding. However, while sketching, I realized this
							might make the process too lengthy, so I removed it from the
							flow.
						</p>
					</div>
					<div className="sketches-walkthrough__wrapper border-0 mb-0">
						<div className="sketches-walkthrough_grid-container mb-0">
							<video
								className="autoplay-video featured-media border"
								controls
								autoPlay
								loop
								muted>
								<source
									src="/assets/images/tastebuds/route-1-sketches-preferences.mp4"
									type="video/mp4"
								/>
							</video>
							<div>
								<header className="sketches-walkthrough_grid-container--header">
									<p className="subheading">Food preferences</p>
								</header>
								<p>
									What data sets are necessary for personalized dining
									recommendations? Here's a few I brainstormed:
								</p>
								<div className="sketches-walkthrough__card mb-32">
									<ul className="card--list mt-0">
										<p className="card--headline">Categories</p>
										<li>Cuisines</li>
										<li>Diet</li>
										<li>Dishes</li>
										<li>Ingredients</li>
										<li>Allergies</li>
									</ul>
								</div>
								<p className="medium-grey mb-0">
									*Note: Only dietary preferences would be strictly adhered
									to: Food preferences are prioritized—not restrictive—to
									avoid limiting discovery!
								</p>
							</div>
						</div>
						<div className="mt-32">
							<Accordion
								open={open}
								setOpen={setOpen}
								label="Where would the mobile app obtain information on 'ingredients'?">
								<p>
									With ingredients being the building blocks of food, I
									speculated that these preferences and restrictions would
									be key to generating relevant recommendations by
									targeting specific ingredients in menu item description.
									<br />
									<br /> After some research, I learned that this can be
									engineered using Yelp and Google APIs. However, this idea
									was a key moment in my brainstorming phase because this
									gave me the idea of integrating restaurants into the
									mobile solution as users to update their information and
									menus. This also gave me the idea for a business strategy
									to generate revenue from restaurant partnerships, keeping
									the app free for diners and providing user insights to
									restaurants to enhance their offerings, thus enhancing
									the overall diner journey cycle.
								</p>
							</Accordion>
						</div>
					</div>
				</section>
				<section>
					<p className="section-subheading sketches">
						Route 2: Diner searches for dining options
					</p>
					{/* Search results with gif */}
					<div className="sketches-walkthrough__wrapper">
						<div className="sketches-walkthrough_grid-container mb-0">
							<video
								className="autoplay-video featured-media border"
								controls
								autoPlay
								loop
								muted>
								<source
									src="/assets/images/tastebuds/route-2-sketches-search.mp4"
									type="video/mp4"
								/>
							</video>
							<div>
								<header className="sketches-walkthrough_grid-container--header">
									<p className="subheading">Search</p>
								</header>
								<p>
									To promote search relevance, I placed food preferences
									(filters) on the first search screen prompts users to
									enter preferences before initiating search.
								</p>
								<Accordion
									open={open}
									setOpen={setOpen}
									label="More details">
									<ul className="span-fw-medium list--dark gap--medium">
										<li>
											<span>Top 3 qualities voted by friends</span>
											<br /> When reviewing a dining experience, diners
											select up to 3 qualities that stood out. Qualities
											with the most votes are displayed so they can better
											gauge the restaurant's strengths at a glance.
										</li>
										<li>
											<span>Refresh for a new set of results</span>
											<br /> Earlier, my user flows disallow undoing
											refresh, but I realized like that would limit
											exploration. I decided to allow users to undo their
											last set of results to maintain my initial goal of
											encouraging diners to be more deliverate and
											thoughtful.
										</li>
										<li>
											{" "}
											<span>Commute time</span>
											<br /> Since location is an important factor for
											diners, I speculated displaying the commute time in
											the search results would make their process more
											efficient.
										</li>
									</ul>
								</Accordion>
							</div>
						</div>
					</div>
					<div className="sketches-walkthrough__wrapper">
						<div className="sketches-walkthrough_grid-container">
							<video
								className="autoplay-video featured-media border"
								controls
								autoPlay
								loop
								muted
								controlsList="nodownload">
								<source
									src="/assets/images/tastebuds/route-2-sketches-search-results.mp4"
									type="video/mp4"
								/>
							</video>
							<div>
								<header className="sketches-walkthrough_grid-container--header">
									<p className="subheading">Search results</p>
								</header>
								<p>
									I wanted to help diners easily assess and compare
									restaurants, so my sketches present 3 scannable views:
									List view (default), map view, and bottom sheet
									(carousel).
								</p>
								<div className="sketches-walkthrough__card">
									<ul className="card--list mt-0">
										<p className="card--headline">Features</p>
										<li>Tailored order recommendations</li>
										<li>Top 3 qualities by friends</li>
										<li>Commute time</li>
										<li>Photos posted by friends</li>
										<li>Compatability score</li>
										<li>Refresh results (can undo once)</li>
									</ul>
								</div>
							</div>
						</div>
						<br />
						<div>
							<h3 className="section-subheading">
								Where would the mobile app retrieve restaurant info?
							</h3>
							<p>
								To ensure that my ideas are feasible, I did some research:
							</p>
							<ol>
								<li className="fw-medium black">
									<p className="fw-medium mb-8">
										Using Yelp and Google APIs
									</p>
									<p>
										Leveraging these APIs, engineers can import existing
										data on restaurants from their Yelp and Google
										profiles.
									</p>
								</li>
								<li className="fw-medium black ">
									<p className="fw-medium mb-8">Restaurant partnerships</p>
									<p className="span-fw-medium mb-0">
										Alternatively or supplementally, the mobile solution
										could
										<span>
											integrate restaurants as users to update their info
											and menus
										</span>
										. This gave me the idea for a{" "}
										<span>
											business strategy with business partnerships to keep
											the app free
										</span>{" "}
										for diners and provide user insights for restaurants to
										enhance the overall diner journey!
									</p>
								</li>
							</ol>
						</div>
					</div>
					<div className="sketches-walkthrough__wrapper mb-0 border-0">
						<div className="sketches-walkthrough_grid-container mb-32">
							<Image
								fill={true}
								alt=""
								loading="lazy"
								src="/assets/images/tastebuds/route-2-sketch-restaurant-listing.png"
							/>
							<div>
								<header className="sketches-walkthrough_grid-container--header">
									<p className="subheading">Restaurant listing</p>
								</header>
								<p>
									I focused on presenting essential information above the
									fold and on the first screen. The home page features menu
									items recommended for the diner, as well as bestsellers
									among their friends. I also added 'Deals' because diners
									like Alex and Brandon highly prioritize value!
								</p>
								<div className="sketches-walkthrough__card">
									<ul className="card--list mt-0">
										<p className="card--headline">Features</p>
										<li>Restaurant strengths</li>
										<li>Commute and walk time</li>
										<li>Personalized item recommendations</li>
										<li>Bestsellers among friends</li>
									</ul>
								</div>
							</div>
						</div>
						<p className="subheading mv-24 dark-grey">Sketches flow</p>
						<Image
							fill={true}
							src="/assets/images/tastebuds/route-2-sketches-flow-search-results.png"
							alt="Four sketches of a mobile app interface for finding Taiwanese restaurants."
						/>
					</div>
				</section>
			</div>
			<div className="content mb-0">
				<p className="section-subheading sketches text-center">
					Route 3: Diner reviews a dining experience
				</p>
			</div>
			<div className="content medium-small mt-0 mb-40">
				<Image
					fill={true}
					src="/assets/images/tastebuds/route-3-sketches-02.png"
					alt=""
				/>
				<br />
				<br />
				<Image
					fill={true}
					src="/assets/images/tastebuds/route-3-sketches-01.png"
					alt=""
				/>
			</div>
			<div className="content mt-0">
				<div className="sketches-walkthrough__wrapper">
					<p className="mb-0">
						I wanted to encourage detailed reviews without overwhelming
						users, so I sketched an overview page for more freedom and
						control. To prevent errors, diners can modify their restaurant
						selection. Additionally, I added a slider to clarify the
						unconventional rating system with zero and half stars.
					</p>
				</div>
				<div className="sketches-walkthrough__wrapper">
					<div className="sketches-walkthrough_grid-container mb-32">
						<Image
							fill={true}
							alt=""
							loading="lazy"
							src="/assets/images/tastebuds/route-3-sketch-review-item.png"
						/>
						<div>
							<header className="sketches-walkthrough_grid-container--header">
								<p className="subheading">Review ordered item(s)</p>
							</header>
							<p>
								My goal in requiring diners to review menu items is to
								strengthen the app's food-focused intention and discourage
								fake reviews. By leveraging user data, I added input fields
								for voting on authenticity and flavors, allowing the app to
								tailor recommendations and generate scannable content more
								effectively.
							</p>
							<div className="sketches-walkthrough__card">
								<ul className="card--list mt-0">
									<p className="card--headline">New features</p>
									<li>Edit menu item details</li>
									<li>Food critique (optional)</li>
									<li>Tips on ordering</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="mb-16">
						<Accordion
							open={open}
							setOpen={setOpen}
							label="More details">
							<ul className="span-fw-medium list--dark gap--medium">
								<li>
									<span>Rating menu items</span>
									<br /> I wanted to address skepticism among diners like
									Alex towards low ratings despite good food, catering to
									situations where diners may have had service issues but
									still enjoyed the food.
								</li>
								<li>
									<span>Food critique (optional)</span>
									<br /> I wanted to enhancing reviews and increase
									credibility by offering a template that breaks down
									diners' priorities: taste, portion size, authenticity,
									price, and ordering tips.
								</li>
								<li>
									<span>Tips on ordering (optional)</span>
									<br /> Separate from the written review, I planned on
									designing a section for these tips in my reviews screen
									in low-fidelity. I wanted to help diners distinguish tips
									from main review content.
								</li>
							</ul>
						</Accordion>
					</div>
				</div>
				<div className="sketches-walkthrough__wrapper mb-0 border-0 pb-0">
					<div className="sketches-walkthrough_grid-container mb-0">
						<Image
							fill={true}
							alt=""
							loading="lazy"
							src="/assets/images/tastebuds/route-3-sketch-pros-and-cons.png"
						/>
						<div>
							<header className="sketches-walkthrough_grid-container--header">
								<p className="subheading">Strengths and weaknesses</p>
							</header>
							<p>
								This is another effort to leverage user data to create
								scannable content that efficiently illustrates the
								restaurant's profile. At this stage, I envisioned
								restaurants using the app to enhance its value proposition,
								potentially generating revenue to offer it free to users,
								and improve the entire diner journey.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container-full-width bg-dark-grey">
				<div className="content xxl">
					<p className="section-subheading white mb-32">
						All route 1 sketches
					</p>
					<Image
						fill={true}
						alt=""
						className="route-1-sketches-all_wrapper"
						loading="lazy"
						src="/assets/images/tastebuds/route-1-sketches-all.png"
					/>
				</div>
			</div>
		</section>
	);
};

export default Sketches;
