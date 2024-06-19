import React from "react";
import styles from "./NextSteps.module.scss";
import Link from "next/link";
import Image from "next/image";

const NextSteps = () => {
	return (
		<div>
			<section className="content">
				<header className="header-container">
					<h2>Next steps</h2>
				</header>
				<p>
					My second usability test taught me a lot about my design
					solutions and design thinking. I uncovered some of my most
					significant mistakes and weaknesses as a designer and as an
					individual that contributed to the issues:
				</p>
				<div className="content gap-16px">
					<p>
						<strong className="p _1-266-rem">
							the final affinity map (until further notice)
						</strong>
					</p>
					<p>
						Since participants during the last usability tests had the most
						trouble with the restaurant listing home page, I went ahead and
						created an affinity map and brainstormed potential solutions:
					</p>
				</div>
			</section>
			<section className="content">
				<Image
					fill={true}
					alt=""
					loading="lazy"
					src="/assets/images/tastebuds/4c0e54e8-7bbf-4500-b75a-5e8fed0bf98a"
				/>
				<div className="flex vertical _24-px">
					<div className="flex-block-14">
						<div className="heading-with-divider">
							<div className="w-layout-vflex">
								<h2 className="p label _1-266-rem">next steps</h2>
							</div>
						</div>
						<div className="header-with-icon">
							<div className="div-block-74">
								<svg
									className="svg-icon"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0 0h24v24H0z"
										fill="none"></path>
									<path
										d="M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z"
										fill="currentColor"></path>
								</svg>
							</div>
							<p className="headline">
								<strong className="medium-blue">
									Reduce the prototype to an MVP by removing unnecessary
									features
								</strong>
							</p>
						</div>
						<div className="header-with-icon">
							<div className="div-block-74">
								<svg
									className="svg-icon"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0 0h24v24H0z"
										fill="none"></path>
									<path
										d="M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z"
										fill="currentColor"></path>
								</svg>
							</div>
							<p className="headline">
								<strong className="medium-blue">
									Figuring out how to maximize diners’ trust in
									word-of-mouth recommendations
								</strong>
							</p>
						</div>
						<div className="header-with-icon">
							<div className="div-block-74">
								<svg
									className="svg-icon"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0 0h24v24H0z"
										fill="none"></path>
									<path
										d="M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z"
										fill="currentColor"></path>
								</svg>
							</div>
							<p className="headline">
								<strong className="medium-blue">
									Simplify the visual layout of reviews the essentials
								</strong>
							</p>
						</div>
						<div className="header-with-icon">
							<div className="div-block-74">
								<svg
									className="svg-icon"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0 0h24v24H0z"
										fill="none"></path>
									<path
										d="M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z"
										fill="currentColor"></path>
								</svg>
							</div>
							<p className="headline">
								<strong className="medium-blue">
									Develop additional routes to explore dining options
								</strong>
							</p>
						</div>
						<div className="header-with-icon">
							<div className="div-block-74">
								<svg
									className="svg-icon"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0 0h24v24H0z"
										fill="none"></path>
									<path
										d="M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z"
										fill="currentColor"></path>
								</svg>
							</div>
							<p className="headline">
								<strong className="medium-blue">
									Redirect the app’s focus to a social recommendation tool,
									such as removing features in the restaurant listing that
									do not relate to diners seeking recommendations from
									friends
								</strong>
							</p>
						</div>
						<div className="header-with-icon">
							<div className="div-block-74">
								<svg
									className="svg-icon"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0 0h24v24H0z"
										fill="none"></path>
									<path
										d="M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z"
										fill="currentColor"></path>
								</svg>
							</div>
							<p className="headline">
								<strong className="medium-blue">
									Remove gamification
								</strong>
							</p>
						</div>
						<div className="header-with-icon">
							<div className="div-block-74">
								<svg
									className="svg-icon"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0 0h24v24H0z"
										fill="none"></path>
									<path
										d="M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z"
										fill="currentColor"></path>
								</svg>
							</div>
							<p className="headline">
								<strong className="medium-blue">
									Develop a new rating system that does not utilize star
									ratings, preferably one that focuses on assessing the
									food and does not prevent diners from posting
									recommendations that might harm the restaurant’s
									reputation. For example, a voting system with thumbs up
									and thumbs down, and only showing its counts, rather than
									a score.
								</strong>
							</p>
						</div>
						<div className="header-with-icon">
							<div className="div-block-74">
								<svg
									className="svg-icon"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0 0h24v24H0z"
										fill="none"></path>
									<path
										d="M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z"
										fill="currentColor"></path>
								</svg>
							</div>
							<p className="headline">
								<strong className="medium-blue">
									Replace the component that shows the total number of
									reviews per star rating in the restaurant’s review page
									with the total number of votes per restaurant attribute
									(i.e. authenticity, quality of ingredients, value, etc.)
								</strong>
							</p>
						</div>
						<div className="header-with-icon">
							<div className="div-block-74">
								<svg
									className="svg-icon"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0 0h24v24H0z"
										fill="none"></path>
									<path
										d="M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z"
										fill="currentColor"></path>
								</svg>
							</div>
							<p className="headline">
								<strong className="medium-blue">
									Simplify the restaurant home page and improve its
									information architecture to reduce information overload
								</strong>
							</p>
						</div>
						<div className="header-with-icon">
							<div className="div-block-74">
								<svg
									className="svg-icon"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M0 0h24v24H0z"
										fill="none"></path>
									<path
										d="M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z"
										fill="currentColor"></path>
								</svg>
							</div>
							<p className="headline">
								<strong className="medium-blue">
									Add tutorials post-onboarding process to see how they
									might change user’s approach to the routes
								</strong>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default NextSteps;
