import React from "react";
import styles from "./UsabilityTest1.module.scss";
import Link from "next/link";
import Image from "next/image";

const UsabilityTest1 = () => {
	return (
		<section
			id="usability-testing-2"
			className="section-container">
			<header className="header-container">
				<span>test</span>
				<h2>Usability testing II: High-fidelity prototype</h2>
			</header>
			<div className="content-wrapper  mb-16">
				<p className="section-subheading">Methodology</p>
				<p>
					I conducted moderated usability testing with
					<span className="fw-medium">5 participants </span>for remotely.
					Each test included the following tasks:
				</p>
				<ol>
					<li>
						<span className="fw-medium">Route 1</span>: Create an account
						using your Facebook login.
					</li>
					<li>
						<span className="fw-medium">Route 2</span>: Find a restaurant
						to dine at within 3 miles of your current location.
					</li>
					<li>
						<span className="fw-medium">Route 3</span>: Write a 4.5-star
						review with a photo for Olives Branch Bistro, where you had a
						Mixed Kebab Plate.
					</li>
				</ol>
			</div>
			<div className="content-wrapper mb-16">
				<h3 className="section-subheading">Participant characteristics</h3>
				<ul>
					<li>Ages 21-30</li>
					<li>
						Uses at least one online method to find a restaurant to dine at
					</li>
					<li>Dines out at least once a week</li>
				</ul>
			</div>
			<div className="content">
				<h3 className="section-subheading">Outcomes</h3>
				<div className="testing-outcomes_grid">
					<div className="testing-outcomes-card">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon-category"
							loading="lazy"
							src="/assets/images/tastebuds/icon-checkmark-circle-filled-green.png"
						/>
						<div className="card__content validation">
							<Image
								fill={true}
								alt=""
								className="testing-outcomes-icon hide"
								loading="lazy"
								src="/assets/svg/tastebuds/ic-discount-tag.svg"
							/>
							<p>
								All diners praised the UI design and prefer it over
								existing tools like Yelp.
							</p>
						</div>
					</div>
					<div className="testing-outcomes-card">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon-category"
							loading="lazy"
							src="/assets/images/tastebuds/icon-checkmark-circle-filled-green.png"
						/>
						<div className="card__content validation">
							<Image
								fill={true}
								alt=""
								className="testing-outcomes-icon hide"
								loading="lazy"
								src="/assets/svg/tastebuds/ic-discount-tag.svg"
							/>
							<p>
								Diners find the personalization and customization features
								very helpful.
							</p>
						</div>
					</div>
					<div className="testing-outcomes-card">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon-category"
							loading="lazy"
							src="/assets/images/tastebuds/icon-checkmark-circle-filled-green.png"
						/>
						<div className="card__content validation">
							<Image
								fill={true}
								alt=""
								className="testing-outcomes-icon hide"
								loading="lazy"
								src="/assets/svg/tastebuds/ic-discount-tag.svg"
							/>
							<p>
								3 diners utilized alternative routes to explore dining
								options.
							</p>
						</div>
					</div>
					<div className="testing-outcomes-card">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon-category"
							loading="lazy"
							src="/assets/images/tastebuds/icon-checkmark-circle-filled-green.png"
						/>
						<div className="card__content validation">
							<Image
								fill={true}
								alt=""
								className="testing-outcomes-icon hide"
								loading="lazy"
								src="/assets/svg/tastebuds/ic-map-with-location-icon.svg"
							/>
							<p>
								All diners found the content informative, diverse, and
								inclusive.
							</p>
						</div>
					</div>
					<div className="testing-outcomes-card">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon-category"
							loading="lazy"
							src="/assets/images/tastebuds/icon-cancel-circle-filled-red.png"
						/>
						<div className="card__content invalidation">
							<Image
								fill={true}
								alt=""
								className="testing-outcomes-icon hide"
								loading="lazy"
								src="/assets/svg/tastebuds/ic-not-visible.svg"
							/>
							<p>
								4 diners struggled to comprehend the on-page explanations.
							</p>
						</div>
					</div>
					<div className="testing-outcomes-card">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon-category"
							loading="lazy"
							src="/assets/images/tastebuds/icon-cancel-circle-filled-red.png"
						/>
						<div className="card__content invalidation">
							<Image
								fill={true}
								alt=""
								className="testing-outcomes-icon hide"
								loading="lazy"
								src="/assets/svg/tastebuds/ic-star-rating-slider.svg"
							/>
							<p>
								3 diners struggled with the interaction design of rating
								stars.
							</p>
						</div>
					</div>
					<div className="testing-outcomes-card">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon-category"
							loading="lazy"
							src="/assets/images/tastebuds/icon-cancel-circle-filled-red.png"
						/>
						<div className="card__content invalidation">
							<Image
								fill={true}
								alt=""
								className="testing-outcomes-icon hide"
								loading="lazy"
								src="/assets/svg/tastebuds/ic-star-rating-slider.svg"
							/>
							<p>
								The navigation to write a review was somewhat unclear to
								diners.
							</p>
						</div>
					</div>
					<div className="testing-outcomes-card">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon-category"
							loading="lazy"
							src="/assets/images/tastebuds/icon-cancel-circle-filled-red.png"
						/>
						<div className="card__content invalidation">
							<Image
								fill={true}
								alt=""
								className="testing-outcomes-icon hide"
								loading="lazy"
								src="/assets/svg/tastebuds/ic-star-rating-slider.svg"
							/>
							<p>
								Everyone overlooked significance of the social media
								functionality.
							</p>
						</div>
					</div>
					<div className="testing-outcomes-card">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon-category"
							loading="lazy"
							src="/assets/images/tastebuds/icon-cancel-circle-filled-red.png"
						/>
						<div className="card__content invalidation">
							<Image
								fill={true}
								alt=""
								className="testing-outcomes-icon hide"
								loading="lazy"
								src="/assets/svg/tastebuds/ic-star-rating-slider.svg"
							/>
							<p>A few diners found the review process lengthy.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="content-wrapper">
				<h3 className="section-subheading">Highlights</h3>
				<p>
					Overall, participants found the prototype very informative and
					intuitive. By the end of the onboarding process, when asked what
					they think the purpose of the app is, most participants mistaken
					it as a food ordering app. However, they still found the solution
					very informative and highly prefer it over their current tools.
					The visual aids were frequently affirmed in its impact on
					scanability, which they expressed significantly helped them
					complete the onboarding process. Finally, I was pleased to learn
					that my findings were very consistent with my primary and
					secondary research!
				</p>
			</div>
			<div className="content-wrapper">
				<p className="section-subheading">Recommendations</p>
				<p>
					Given my findings, here are a few improvements and changes I
					planned to iterate:
				</p>
				<p className="subheading">Route 1</p>
				<ul className="mb-32">
					<li>
						Condense and enhance copy on explanations and directions to
						improve clarity.
					</li>
					<li>Design captivating visual aids to improve comprehension.</li>
					<li>
						Integrate adding friends to onboarding process to emphasize
						social media focus.
					</li>
				</ul>
				<p className="subheading">Route 3</p>
				<ul>
					<li>Redesign the star rating component to be more intuitive.</li>
					<li>Streamline the review process.</li>
				</ul>
			</div>
		</section>
	);
};

export default UsabilityTest1;
