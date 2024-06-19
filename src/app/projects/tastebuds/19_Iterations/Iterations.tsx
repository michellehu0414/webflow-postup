import React from "react";
import styles from "./Iterations.module.scss";
import Link from "next/link";
import Image from "next/image";

const Iterations = () => {
	return (
		<section
			id="design-iterations"
			className="section-container">
			<header className="header-container">
				<span>design</span>
				<h2>Iterations</h2>
			</header>
			<div className="content-wrapper mb-24">
				<p>
					For my final iteration phase, I applied the recommendations I
					made from my previous usability testing. Below were my primary
					goals:
				</p>
				<ul role="list">
					<li>Amplify the social component.</li>
					<li>Enhance visual aids.‍</li>
					<li>
						Ensure users fully understand the app's purpose by the end of
						onboarding.
					</li>
				</ul>
			</div>
			<div className="content-wrapper">
				<h3 className="section-subheading mb-40">
					Route 1: Diner signs up and sets up account
				</h3>
				<ul>
					<li>Welcome screens</li>
					<li>Food preferences</li>
					<li>Add friends</li>
				</ul>
				<h3 className="section-subheading mb-40">
					Route 2: Diner searches for dining options
				</h3>
				<ul>
					<li>New navigation bar</li>
					<li>Home page</li>
					<li>Search results</li>
					<li>Restaurant profile</li>
				</ul>
				<h3 className="section-subheading mb-40">
					Route 3: Diner reviews a dining experience
				</h3>
				<ul>
					<li>New navigation bar</li>
					<li>Home page</li>
					<li>Search results</li>
					<li>Restaurant profile</li>
				</ul>
			</div>
			<div className="hide">
				<div className="design-walkthrough_wrapper border-0 mb-0">
					<div className="flex-row gap-24 pb-0">
						<div className="design-walkthrough_grid-1-col">
							<video
								className="autoplay-video"
								loop
								muted>
								<source
									src="images/tastebuds/prototype-high-fidelity-route-1-v1-intro.mp4"
									type="video/mp4"
								/>
							</video>
							<div>
								<p className="subheading">Introduction screens</p>
								<p>
									I added intro screens to educate users about the app and
									the importance of inputing their food preferences now.
								</p>
							</div>
						</div>
						<div className="design-walkthrough_grid-1-col">
							<video
								className="autoplay-video"
								loop
								muted>
								<source
									src="images/tastebuds/prototype-high-fidelity-v1-route-1-food-preferences.mp4"
									type="video/mp4"
								/>
							</video>
							<div>
								<p className="subheading">Food preferences</p>
								<p>
									I added the option to suggest missing items, implemented
									conversational UI, help icons, and more visual aids.
								</p>
							</div>
						</div>
					</div>
					<div className="mb-40">
						<h3 className="section-subheading content mb-16">
							Route 2: Diner searches for a restaurant
						</h3>
						<div className="content-grid">
							<div>
								<p>
									To improve accessibility, I enlarged and simplified my
									designs and omitted unnecessary info. I also continued
									developing my business goals by conceptualizing
									restaurant partnerships and their role in the diner
									journey! This revamp took some time since I struggled to
									balance accommodating mental models and innovative
									features, so I planned on refining this balance after
									testing.
								</p>
							</div>
							<aside>
								<p>
									Revisiting my diner personas helped me streamline my
									information architecture!
								</p>
							</aside>
						</div>
					</div>
					<div className="design-walkthrough_wrapper">
						<header className="design-walkthrough_header">
							<p className="subheading">Home page</p>
						</header>
						<div className="design-evolution_grid-container-3-col">
							<p className="medium-grey hf-heading-01 hide">Previous</p>
							<p className="black hf-heading-02 hide">Iteration</p>
							<Image
								fill={true}
								alt=""
								className="img-1 img-wireframe-border"
								loading="lazy"
								src="images/tastebuds/route-2-low-fidelity-home.png"
							/>
							<Image
								fill={true}
								alt=""
								className="img-2 img-wireframe-border"
								loading="lazy"
								src="images/tastebuds/route-2-low-fidelity-listing-reviews.png"
							/>
							<Image
								fill={true}
								alt=""
								className="img-design-evolution-arrow"
								loading="lazy"
								src="images/tastebuds/artwork-arrow-right-blue.png"
							/>
							<video
								className="autoplay-video img-3"
								loop
								muted>
								<source
									src="images/tastebuds/prototype-route-2-high-fidelity-v1-home.mp4"
									type="video/mp4"
								/>
							</video>
							<div className="grid-content flex-row gap-40">
								<div>
									<p className="fw-medium mb-8">For You</p>
									<p className="mb-0">
										I wanted to enhance engagement and personalization, so
										I reorganized the layout to improve the info and
										content hierarchy, redesigned the navigation tabs to be
										more distinct, and revised label copy using
										conversational UI.
									</p>
								</div>
								<div>
									<p className="fw-medium mb-8">Following</p>
									<p className="mb-0">
										Understanding how diners engage with reviews, I
										designed the "Following" page and refined its role in
										the ecosystem. In addition to standard social
										interactive features, diners can easily navigate to the
										restaurant and menu items.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="design-walkthrough_wrapper">
						<header className="design-walkthrough_header">
							<p className="subheading">Search process</p>
						</header>
						<div className="design-evolution_grid-container-3-col mb-40">
							<p className="medium-grey hf-heading-01 hide">Previous</p>
							<p className="black hf-heading-02 hide">Iteration</p>
							<Image
								fill={true}
								alt=""
								className="img-1"
								loading="lazy"
								src="images/tastebuds/route-2-low-fidelity-search-preferences.png"
							/>
							<Image
								fill={true}
								alt=""
								className="img-2"
								loading="lazy"
								src="images/tastebuds/route-2-low-fidelity-search-new.png"
							/>
							<Image
								fill={true}
								alt=""
								className="img-design-evolution-arrow"
								loading="lazy"
								src="images/tastebuds/artwork-arrow-right-blue.png"
							/>
							<video
								className="autoplay-video img-3"
								loop
								muted>
								<source
									src="images/tastebuds/prototype-route-2-high-fidelity-v1-search.mp4"
									type="video/mp4"
								/>
							</video>
						</div>
						<p className="span-fw-medium mb-0">
							I added the option to select up to 3 key qualities in the
							filters. After realizing that the 2-column layout was too
							crowded in other categories, I reduced it to 1-column and
							increased spacing between elements.
						</p>
					</div>
					<div className="design-walkthrough_wrapper">
						<header className="design-walkthrough_header">
							<p className="subheading">Search results</p>
						</header>
						<div className="design-evolution_grid-container-3-col mb-40">
							<p className="medium-grey hf-heading-01 hide">Previous</p>
							<p className="black hf-heading-02 hide">Iteration</p>
							<Image
								fill={true}
								alt=""
								className="img-1"
								loading="lazy"
								src="images/tastebuds/route-2-sketch-search-results-list.png"
							/>
							<Image
								fill={true}
								alt=""
								className="img-2"
								loading="lazy"
								src="images/tastebuds/route-2-sketch-search-results-card-carousel.png"
							/>
							<Image
								fill={true}
								alt=""
								className="img-design-evolution-arrow"
								loading="lazy"
								src="images/tastebuds/artwork-arrow-right-blue.png"
							/>
							<video
								className="autoplay-video img-3"
								loop
								muted>
								<source
									src="images/tastebuds/prototype-route-2-high-fidelity-v1-search-results.mp4"
									type="video/mp4"
								/>
							</video>
						</div>
						<p className="mb-0">
							I forfeited "Listing previews" since my test participants did
							not engaged with it. I also redesigned the bottom sheet to be
							more consistent with the list view.
						</p>
					</div>
					<div className="design-walkthrough_wrapper pb-0 mb-0 border-0">
						<div className="design-walkthrough_grid-container pb-0 mb-0">
							<video
								className="autoplay-video"
								loop
								muted>
								<source
									src="images/tastebuds/prototype-route-2-high-fidelity-v1-listing.mp4"
									type="video/mp4"
								/>
							</video>
							<div>
								<header className="design-walkthrough_header">
									<p className="subheading">Restaurant listing</p>
								</header>
								<p>
									I wanted to further amplify social engagement and
									conceptualize restaurant partnerships, so I enhanced
									social proof elements, added more engagement features,
									and developed the 'Redeem offer' screen.
								</p>
								<div className="design-walkthrough_card">
									<ul className="card_list mt-0">
										<p className="card_headline">New features</p>
										<li>Share restaurant (button)</li>
										<li>Save restaurant (button)</li>
										<li>Message restaurant (button)</li>
										<li>Write review (button)</li>
										<li>Offer redemption page</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="flex-block-14">
					<div className="heading-with-divider">
						<div className="w-layout-vflex">
							<div className="header-with-icon">
								<h2 className="p _1-125-rem _1-5-spacing">
									01 WELCOME SCREENS
								</h2>
							</div>
						</div>
					</div>
				</div>
				<Image
					fill={true}
					loading="lazy"
					src="/images/tastebuds/pro.png"
					alt=""
				/>
				<div
					className="tabs iterations w-tabs"
					data-current="Tab 2"
					data-duration-in="300"
					data-duration-out="100"
					data-easing="ease">
					<div
						className="tabs-menu _2-columns w-tab-menu"
						role="tablist">
						<Link
							aria-controls="w-tabs-6-data-w-pane-0"
							aria-selected="false"
							className="container-tab _50 w-inline-block w-tab-link"
							data-w-tab="Tab 1"
							href="https://michelle-portfolio-fc56f5.webflow.io/case-study-tastebuds-2#w-tabs-6-data-w-pane-0"
							id="w-tabs-6-data-w-tab-0"
							role="tab"
							tabIndex={-1}>
							<div>iterations</div>
						</Link>
						<Link
							aria-controls="w-tabs-6-data-w-pane-1"
							aria-selected="true"
							className="container-tab w-inline-block w-tab-link w--current"
							data-w-tab="Tab 2"
							href="https://michelle-portfolio-fc56f5.webflow.io/case-study-tastebuds-2#w-tabs-6-data-w-pane-1"
							id="w-tabs-6-data-w-tab-1"
							role="tab">
							<div className="text-block-5">previous</div>
						</Link>
					</div>
					<div className="w-tab-content">
						<div
							aria-labelledby="w-tabs-6-data-w-tab-0"
							className="tab-pane-tab-1 w-tab-pane"
							data-w-tab="Tab 1"
							id="w-tabs-6-data-w-pane-0"
							role="tabpanel">
							<Image
								fill={true}
								loading="lazy"
								src="/images/tastebuds/route-1_high-fidelity-02_welcome-screens.png"
								alt=""
							/>
						</div>
						<div
							aria-labelledby="w-tabs-6-data-w-tab-1"
							className="tab-pane-tab-3 w-tab-pane w--tab-active"
							data-w-tab="Tab 2"
							id="w-tabs-6-data-w-pane-1"
							role="tabpanel">
							<div className="div-block-154">
								<Image
									fill={true}
									alt=""
									className="image-113"
									loading="lazy"
									src="/images/tastebuds/route-1_high-fi_intros.png"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="flex-block-14">
					<div className="heading-with-divider">
						<div className="w-layout-vflex">
							<div className="header-with-icon">
								<h2 className="p _1-125-rem _1-5-spacing">
									02 ingredients
								</h2>
							</div>
						</div>
					</div>
				</div>
				<Image
					fill={true}
					alt=""
					loading="lazy"
					src="/images/tastebuds/route-1_high-fidelity-2_ingredients.png"
				/>
				<div className="flex vertical _24-px">
					<p className="p _1-266-rem">Changes</p>
					<div className="w-layout-hflex flex horizontal _40-px">
						<div className="div-block-156">
							<ul
								className="list _8px"
								role="list">
								<li>Switched order to eliminate allergies</li>
								<li>Unique title copy in upper-navigation</li>
								<li>Removed yellow background for visual clarity</li>
								<li>Changed typography for visual clarity</li>
							</ul>
						</div>
						<div className="div-block-155">
							<ul
								className="list _8px"
								role="list">
								<li>Changed "Reset" button to blue</li>
								<li>Progress bar increases</li>
								<li>Color coded descriptive heading</li>
								<li>New "Save &amp; finish later" button</li>
							</ul>
						</div>
					</div>
				</div>
				<p>
					During the previous usability test, participants could not detect
					a change in the process to input ingredient preferences. To
					resolve this, I relied on implementing
					<span className="fw-medium">microanimations</span> and enhancing
					<span className="fw-medium">visual feedback and clarity</span> by
					altering elements like
					<span className="fw-medium">
						typography, colors, and content strategy
					</span>{" "}
					to visually communicate the change.
				</p>
			</div>
			<div className="content">
				<div className="flex-block-14">
					<div className="heading-with-divider">
						<div className="w-layout-vflex">
							<div className="header-with-icon">
								<h2 className="p _1-125-rem _1-5-spacing">
									03 Add friends
								</h2>
							</div>
						</div>
					</div>
				</div>
				<Image
					fill={true}
					alt=""
					loading="lazy"
					src="/images/tastebuds/route-1_high-fidelity-2_friends.png"
				/>
			</div>
			<div className="subsection">
				<div>
					<div className="content">
						<div className="heading-secondarytext">
							<p className="section-subheading">
								Route 2: Diner Searches for Dining Options
							</p>
							<p>
								The iterations for this route prioritized boosting the
								social element, increasing user engagement, and enhancing
								personalization. My last usability testing taught me  a lot
								about diners' habits with searching for options online, so
								I wanted to shape my iterations to their mental model and
								logic.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="content">
				<Image
					fill={true}
					alt=""
					loading="lazy"
					sizes="90vw"
					src="/images/tastebuds/route-2_high-fidelity_all_1600.png"
				/>
			</div>
			<div className="content">
				<div>
					<div className="content">
						<div className="flex-block-14">
							<div className="heading-with-divider">
								<div className="w-layout-vflex">
									<div className="header-with-icon">
										<h2 className="p _1-125-rem _1-5-spacing">
											01 Site Map
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex horizontal _64-px">
					<div className="flex vertical _24-px align-left stretch">
						<p className="p _1-266-rem grey">previous</p>
						<Image
							fill={true}
							alt=""
							className="image-115"
							loading="lazy"
							src="/images/tastebuds/peach-coral-simple-ecommerce-sitemap-(1).png"
						/>
						<p className="p _1-266-rem">iteration</p>
						<Image
							fill={true}
							alt=""
							className="image-115"
							loading="lazy"
							src="/images/tastebuds/sitemap-2.png"
						/>
					</div>
					<div className="flex vertical _24-px">
						<p className="p _1-266-rem">Changes</p>
						<div className="w-layout-hflex flex horizontal _40-px"></div>
						<ul
							className="list _8px"
							role="list">
							<li>Re-added "Search"</li>
							<li>Removed "Notifications"</li>
						</ul>
						<p>
							I realized that notifications is not an essential part of the
							user journey, at least for the MVP. As a part of the social
							feed, it's more reasonable to leave it there and prioritize
							the user journey. Therefore, a dedicated search page is much
							more crucial. The order of the navigation buttons reflects
							the user journey.
						</p>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="flex-block-14">
					<div className="heading-with-divider">
						<div className="w-layout-vflex">
							<div className="header-with-icon">
								<h2 className="p _1-125-rem _1-5-spacing">02 home page</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="grid _2-columns">
					<div className="div-block-159">
						<div className="flex vertical _24-px">
							<Image
								fill={true}
								alt=""
								className="image-118"
								loading="lazy"
								src="/images/tastebuds/frame-753.png"
							/>
							<p className="p _1-266-rem grey align-center">previous</p>
						</div>
						<div className="vertical-divider grey"></div>
						<div className="flex vertical _24-px">
							<Image
								fill={true}
								alt=""
								className="image-118"
								loading="lazy"
								src="/images/tastebuds/frame-754.png"
							/>
							<p className="p _1-266-rem align-center">iteration</p>
						</div>
					</div>
					<div className="flex vertical _24-px">
						<p className="p _1-266-rem">Changes</p>
						<div className="w-layout-hflex flex horizontal _40-px">
							<div className="div-block-156">
								<ul
									className="list _8px"
									role="list">
									<li>Added an incentive to review</li>
									<li>Enhanced CTAS</li>
									<li>Changed typography andcolors</li>
								</ul>
							</div>
						</div>
						<p>
							My iterations seek to boost personalization and increase user
							engagement with clearer CTAs and captivating visuals.
						</p>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="flex-block-14">
					<div className="heading-with-divider">
						<div className="w-layout-vflex">
							<div className="header-with-icon">
								<h2 className="p _1-125-rem _1-5-spacing">
									03 restaurant listing home page
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="div-block-159">
						<Image
							fill={true}
							alt=""
							className="image-118"
							loading="lazy"
							src="/images/tastebuds/frame-747.png"
						/>
						<div className="vertical-divider grey"></div>
						<Image
							fill={true}
							alt=""
							className="image-118"
							loading="lazy"
							src="/images/tastebuds/untitled-design-(2).gif"
						/>
					</div>
					<div className="flex vertical _24-px">
						<p className="p _1-266-rem">Changes</p>
						<div className="w-layout-hflex flex horizontal _40-px">
							<div className="div-block-156">
								<ul
									className="list _8px"
									role="list">
									<li>Consolidated Info and Home pages</li>
									<li>Added "Posts" and "Events" pages</li>
									<li>Reordered pagination to reflect diner journey</li>
									<li>
										Reordered information hierarchy in info section to
										reflect diner priorities
									</li>
									<li>Added profile picture and follow button</li>
								</ul>
							</div>
						</div>
						<p>
							The changes I made aim to adhere to diners' decision-making
							journey and priorities, as well as boosting the social and
							community climate of TasteBuds.
						</p>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="flex-block-14">
					<div className="heading-with-divider">
						<div className="w-layout-vflex">
							<div className="header-with-icon">
								<h2 className="p _1-125-rem _1-5-spacing">
									04 search results navigation
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="grid _2-columns">
					<div className="div-block-159">
						<div className="flex vertical _24-px">
							<Image
								fill={true}
								alt=""
								className="image-118"
								loading="lazy"
								sizes="100vw"
								src="/images/tastebuds/route-2-mockup-search-results-list.png"
							/>
							<p className="p _1-266-rem align-center blue">Map button</p>
						</div>
						<div className="flex vertical _24-px">
							<Image
								fill={true}
								alt=""
								className="image-118"
								loading="lazy"
								sizes="100vw"
								src="/images/tastebuds/route-2-mockup-search-results-map.png"
							/>
							<p className="p _1-266-rem align-center blue">list button</p>
						</div>
					</div>
					<div className="flex vertical _24-px">
						<p className="p _1-266-rem">Changes</p>
						<div className="w-layout-hflex flex horizontal _40-px">
							<div className="div-block-156">
								<ul
									className="list _8px"
									role="list">
									<li>
										Added buttons to switch between map and list views
										within thumb zone
									</li>
									<li>Enhanced CTAS</li>
									<li>Changed typography and colors</li>
								</ul>
							</div>
						</div>
						<p>
							My iterations seek to
							<span className="fw-medium">boost personalization </span>
							and
							<span className="fw-medium">
								increase user engagement
							</span>{" "}
							with clearer CTAs and captivating visuals.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Iterations;
