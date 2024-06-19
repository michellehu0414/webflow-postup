import React from "react";
import styles from "./HighFidelity.module.scss";
import Link from "next/link";
import Image from "next/image";

const HighFidelity = () => {
	return (
		<section
			id="high-fidelity"
			className="section-container">
			<header className="header-container">
				<span>design</span>
				<h2>High-fidelity prototype</h2>
			</header>
			<div className="content-grid mt-24 mb-0">
				<div>
					<p>
						With my new style guide, I designed high-fidelity wireframes
						and prototyped them for my next round of usability tests. A key
						objective in my high-fidelity explorations was enhancing
						accessibility, so I reviewed{" "}
						<Link
							className="link-blue"
							href="https://developer.apple.com/design/human-interface-guidelines/accessibility">
							Apple's Human Interface Guidelines for Accessibility
						</Link>{" "}
						and{" "}
						<Link
							className="link-blue"
							href="https://www.w3.org/TR/WCAG22/">
							Web Content Accessibility Guidelines (WCAG)
						</Link>
						.
					</p>
					<p className="span-fw-medium">
						My learnings guided me to{" "}
						<span>
							significantly increase spacing and physical interactions when
							possible
						</span>
						, supporting both users with limited mobility and power users.
					</p>
				</div>
				<aside>
					<p>
						This reinforced my dedication to accessibility, one of my core
						design values!
					</p>
				</aside>
			</div>
			<div className="mv-48 content-wrapper">
				<h3 className="section-subheading">
					Route 1: Sign up + onboarding
				</h3>
				<p>
					Given how essential food preferences are to curate accurate
					dining recommendations, my goal was to make onboarding more
					engaging to encourage users to input preferences now than later.
					Therefore,{" "}
					<span className="fw-medium">
						I implemented more conversational UI and visual aids and
						further streamlined the user flow.
					</span>
				</p>
			</div>
			<div className="content-wrapper mb-16">
				<div className="design-walkthrough_wrapper border-0 mb-0">
					<div className="flex-row gap-24 pb-0">
						<div className="design-walkthrough_grid-1-col">
							<video
								className="autoplay-video"
								loop
								muted>
								<source
									src="/assets/images/tastebuds/prototype-high-fidelity-route-1-v1-intro.mp4"
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
									src="/assets/images/tastebuds/prototype-high-fidelity-v1-route-1-food-preferences.mp4"
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
								developing my business goals by conceptualizing restaurant
								partnerships and their role in the diner journey! This
								revamp took some time since I struggled to balance
								accommodating mental models and innovative features, so I
								planned on refining this balance after testing.
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
						src="/assets/images/tastebuds/route-2-low-fidelity-home.png"
					/>
					<Image
						fill={true}
						alt=""
						className="img-2 img-wireframe-border"
						loading="lazy"
						src="/assets/images/tastebuds/route-2-low-fidelity-listing-reviews.png"
					/>
					<Image
						fill={true}
						alt=""
						className="img-design-evolution-arrow"
						loading="lazy"
						src="/assets/images/tastebuds/artwork-arrow-right-blue.png"
					/>
					<video
						className="autoplay-video img-3"
						loop
						muted>
						<source
							src="/assets/images/tastebuds/prototype-route-2-high-fidelity-v1-home.mp4"
							type="video/mp4"
						/>
					</video>
					<div className="grid-content flex-row gap-40">
						<div>
							<p className="fw-medium mb-8">For You</p>
							<p className="mb-0">
								I wanted to enhance engagement and personalization, so I
								reorganized the layout to improve the info and content
								hierarchy, redesigned the navigation tabs to be more
								distinct, and revised label copy using conversational UI.
							</p>
						</div>
						<div>
							<p className="fw-medium mb-8">Following</p>
							<p className="mb-0">
								Understanding how diners engage with reviews, I designed
								the "Following" page and refined its role in the ecosystem.
								In addition to standard social interactive features, diners
								can easily navigate to the restaurant and menu items.
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
						src="/assets/images/tastebuds/route-2-low-fidelity-search-preferences.png"
					/>
					<Image
						fill={true}
						alt=""
						className="img-2"
						loading="lazy"
						src="/assets/images/tastebuds/route-2-low-fidelity-search-new.png"
					/>
					<Image
						fill={true}
						alt=""
						className="img-design-evolution-arrow"
						loading="lazy"
						src="/assets/images/tastebuds/artwork-arrow-right-blue.png"
					/>
					<video
						className="autoplay-video img-3"
						loop
						muted>
						<source
							src="/assets/images/tastebuds/prototype-route-2-high-fidelity-v1-search.mp4"
							type="video/mp4"
						/>
					</video>
				</div>
				<p className="span-fw-medium mb-0">
					I added the option to <span>select up to 3 key qualities</span>{" "}
					in the filters. After realizing that the{" "}
					<span>2-column layout was too crowded</span> in other categories,
					I reduced it to 1-column and increased spacing between elements.
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
						src="/assets/images/tastebuds/route-2-sketch-search-results-list.png"
					/>
					<Image
						fill={true}
						alt=""
						className="img-2"
						loading="lazy"
						src="/assets/images/tastebuds/route-2-sketch-search-results-card-carousel.png"
					/>
					<Image
						fill={true}
						alt=""
						className="img-design-evolution-arrow"
						loading="lazy"
						src="/assets/images/tastebuds/artwork-arrow-right-blue.png"
					/>
					<video
						className="autoplay-video img-3"
						loop
						muted>
						<source
							src="/assets/images/tastebuds/prototype-route-2-high-fidelity-v1-search-results.mp4"
							type="video/mp4"
						/>
					</video>
				</div>
				<p className="mb-0">
					I forfeited "Listing previews" since my test participants did not
					engaged with it. I also redesigned the bottom sheet to be more
					consistent with the list view.
				</p>
			</div>
			<div className="design-walkthrough_wrapper pb-0 mb-0 border-0">
				<div className="design-walkthrough_grid-container pb-0 mb-0">
					<video
						className="autoplay-video"
						loop
						muted>
						<source
							src="/assets/images/tastebuds/prototype-route-2-high-fidelity-v1-listing.mp4"
							type="video/mp4"
						/>
					</video>
					<div>
						<header className="design-walkthrough_header">
							<p className="subheading">Restaurant listing</p>
						</header>
						<p>
							I wanted to further amplify social engagement and
							conceptualize restaurant partnerships, so I enhanced social
							proof elements, added more engagement features, and developed
							the 'Redeem offer' screen.
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
			<div className="content-wrapper">
				<div className="mb-40">
					<h3 className="section-subheading black">
						Route 3: Diner reviews a restaurant
					</h3>
					<p>
						I adapted this route to the changes I made in routes 1 and 2,
						streamlined the process, and enhanced its usability.
					</p>
				</div>
				<div className="design-walkthrough_wrapper">
					<header className="design-walkthrough_header">
						<p className="subheading">Reviewing menu items</p>
					</header>
					<div className="design-evolution_grid-container-3-col mb-40">
						<p className="medium-grey hf-heading-01 hide">Previous</p>
						<p className="black hf-heading-02 hide">Iteration</p>
						<Image
							fill={true}
							alt=""
							className="img-1"
							loading="lazy"
							src="/assets/images/tastebuds/route-3-low-fidelity-06-menu-items-blank.png"
						/>
						<Image
							fill={true}
							alt=""
							className="img-2"
							loading="lazy"
							src="/assets/images/tastebuds/route-3-low-fidelity-07-menu-item-blank.png"
						/>
						<Image
							fill={true}
							alt=""
							className="img-design-evolution-arrow"
							loading="lazy"
							src="/assets/images/tastebuds/artwork-arrow-right-blue.png"
						/>
						<video
							className="autoplay-video img-3"
							loop
							muted>
							<source
								src="/assets/images/tastebuds/prototype-high-fidelity-v1-route-3-menu-item.mp4"
								type="video/mp4"
							/>
						</video>
					</div>
					<p className="mb-0">
						I removed the "What was it like?" section, added a search bar
						and filters to find menu items, simplified the list layout, and
						added a number badge that indicates how many items have been
						reviewed.
					</p>
				</div>
				<div className="design-walkthrough_wrapper mb-0 border-0  pb-0">
					<header className="design-walkthrough_header"></header>
					<div className="design-walkthrough_grid-container mb-0">
						<video
							className="autoplay-video"
							loop
							muted>
							<source
								src="/assets/images/tastebuds/prototype-high-fidelity-v1-route-3-tag-photo.mp4"
								type="video/mp4"
							/>
						</video>
						<div>
							<header className="design-walkthrough_header">
								<p className="subheading">
									Adding media content and tagging menu items
								</p>
							</header>
							<p>
								This is the flow for diners to add photos and videos to
								their review! Since diners have the habit of searching up
								specific menu items, I designed a feature for diners to tag
								their photos with the respective menu item(s) and/or
								friends.
							</p>
							<div className="design-walkthrough_card">
								<ul className="card_list mt-0">
									<p className="card_headline">New features</p>
									<li>Tag menu item</li>
									<li>Tag people</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HighFidelity;
