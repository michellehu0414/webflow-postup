import React from "react";
import styles from "./UserFlows.module.scss";
import Link from "next/link";
import Image from "next/image";

const UserFlows = () => {
	return (
		<section
			id="user-flows"
			className="section-container pb-0">
			<header className="header-container">
				<h2>
					<span>user flow</span>
					<br />
					How do I make diner stories a reality?
				</h2>
			</header>
			<div className="content mb-16">
				<p>
					Given diners' habits with using mobile apps for decision-making,
					I decided that my product would also be a mobile application. To
					bring the diner stories I created to life, I brainstormed
					potential features, which I conceptualized into three potential
					routes using user flows. This process helped me begin visualizing
					how diners would interact with my product to enhance their dining
					experience!
				</p>
			</div>
			<div className="container-full-width userflow-walkthrough bg-black">
				<div className="userflow-walkthrough_grid-container">
					<div className="userflow-walkthrough_card">
						<p className="userflow-walkthrough_card_subheader">Route 01</p>
						<p className="userflow-walkthrough_card_headline">
							Diner signs up and sets up their account
						</p>
						<ul className="userflowFeatures_list">
							<li>Create an account with email or social media</li>
							<li>Input food preferences</li>
							<li>Add friends</li>
						</ul>
					</div>
					<div className="userflow-walkthrough_content-container">
						<Image
							fill={true}
							className="userflow-walkthrough_image"
							loading="eager"
							src="/assets/images/tastebuds/route-1-user-flow.png"
							alt=""
						/>
						<div className="userflow-walkthrough_content">
							<p>
								After a standard sign-up process, diners can input their
								food preferences then add their friends by linking their
								social media accounts and contacts. This would
								<span className="white">
									enable personalized recommendations
								</span>{" "}
								for diners and allow diners to{" "}
								<span className="white">
									{" "}
									see dining recommendations from friends{" "}
								</span>{" "}
								they add.
							</p>
						</div>
					</div>
				</div>
				<div className="userflow-walkthrough_grid-container">
					<div className="userflow-walkthrough_card">
						<p className="userflow-walkthrough_card_subheader">Route 02</p>
						<p className="userflow-walkthrough_card_headline">
							Diner searches for dining options
						</p>
						<ul className="userflowFeatures_list">
							<li>Saved search presets</li>
							<li>Filter by 'Cuisines'</li>
							<li>Filter by 'Visit history'</li>
							<li>Personalized recommendations</li>
							<li>Compatibility score (% Match)</li>
							<li>Limited search results</li>
						</ul>
					</div>
					<div className="userflow-walkthrough_content-container">
						<Image
							fill={true}
							className="userflow-walkthrough_image"
							loading="eager"
							src="/assets/images/tastebuds/route-2-user-flow.png"
							alt=""
						/>
						<div className="userflow-walkthrough_content">
							<p className="subheading">New search</p>
							<p>
								With a new search, diners can enter keywords and{" "}
								<span>detailed preferences</span>.
							</p>
							<p className="subheading">"Filter by visit history"</p>
							<p>
								Diners like Alex and Cleo who value discovery can filter
								for <span>restaurants they haven't tried yet</span>{" "}
								(according to their visit history and reviews). Diners like
								Brandon who value convenience can also filter for
								restaurants they have visited.
							</p>
							<p className="subheading">Compatability score (% Match)</p>
							<p>
								To enhance personalization, search results are sorted by “%
								Match” by default. Using AI and machine learning, this
								represents the diner's compatability with the restaurant
								based on their food preferences and dining history.
							</p>
							<p className="subheading">Saved search</p>
							<p>
								For convenience, similar to the concept of "Saved/Favorite
								orders" diners can add "Saved searches" to efficiently find
								dining options they seek often. For instance, since{" "}
								<span>Brandon</span> often works late, he might create a
								saved search called
								<span>"Late-night dinner"</span> with the following
								preferences:{" "}
								<span>
									previously visited, 0.5 mile radius”, “open until 12:00
									AM”, and “offers takeout
								</span>
								. This would offer him a quick dining solution when pressed
								for time.
							</p>
							<p className="subheading">Search results</p>
							<p>
								For both search options, diners would receive a finite
								number of results. If dissatisfied with the results, they
								can refresh the results, which they can only undo one
								previous set. This intends to mitigate decision paralysis
								while encouraging diners to carefully consider their
								options without restricting discovery.
							</p>
						</div>
					</div>
				</div>
				<div className="userflow-walkthrough_grid-container">
					<div className="userflow-walkthrough_card">
						<p className="userflow-walkthrough_card_subheader">Route 03</p>
						<p className="userflow-walkthrough_card_headline">
							Diner reviews their dining experience
						</p>
						<ul className="userflowFeatures_list">
							<li>Rate ordered items (required)</li>
							<li>Zero and half star rating system</li>
							<li>Strengths and weaknesses of dining experience</li>
							<li>Recommendation rating</li>
							<li>Written review (optional)</li>
						</ul>
					</div>
					<div className="userflow-walkthrough_content-container">
						<Image
							fill={true}
							className="userflow-walkthrough_image"
							loading="lazy"
							src="/assets/images/tastebuds/route-3-user-flow.png"
							alt=""
						/>
						<div className="userflow-walkthrough_content">
							<p>
								Users can record and share detailed dining experiences with
								friends via a<span>structured review process</span> that
								prioritize critical decision-making factors. To address
								diners' reluctance to write reviews in existing apps, this
								structured flow leverages the psychological phenomenon of
								'completion bias'.{" "}
								<span>
									My aim was to encourage genuine, food-focused reviews,
									deter fake feedback, gatheruser data for personalized
									recommendations, and generate easily scannable content.{" "}
								</span>{" "}
								Only two areas are required, all else is optional
								(including written portion). Lastly, since my solution
								focuses on both personalized suggestions and word-of-mouth
								recommendations, diners can adjust privacy settings to{" "}
								<span>
									post private reviews to enhance their recommendations if
									they feel uncomfortable sharing some opinions publicly
								</span>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserFlows;
