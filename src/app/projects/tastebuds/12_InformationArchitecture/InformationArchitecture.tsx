import React from "react";
import styles from "./InformationArchitecture.module.scss";
import Link from "next/link";
import Image from "next/image";

const InformationArchitecture = () => {
	return (
		<section
			id="information-architecture"
			className="section-container border-0 bg-lightest-grey">
			<header className="header-container">
				<span> information architecture </span>
				<h2>Organizing information that makes sense to diners</h2>
			</header>
			<div className="content mb-32">
				<p>
					Using the user flows, I began developing my app's information
					architecture. I planned on implementing a bottom navigation bar,
					so I first brainstormed the app's top-level destinations with a
					few secondary-level content:
				</p>
			</div>
			<div className="sitemap_wrapper">
				<div className="sitemap_card">
					<Image
						fill={true}
						className="sitemap_icon"
						src="/assets/svg/ic-home.svg"
						alt=""
					/>
					<p className="sitemap_headline">Home</p>
					<ul className="list-none">
						<li>Cuisine quick links</li>
						<li>Personalized recommendations</li>
						<li>Offers & promotions</li>
					</ul>
				</div>
				<div className="sitemap_card">
					<Image
						fill={true}
						className="sitemap_icon"
						src="/assets/svg/ic-chat.svg"
						alt=""
					/>
					<p className="sitemap_headline">Social feed</p>
					<ul className="list-none">
						<li>Friends' reviews</li>
						<li>Inbox</li>
						<li>Write a review</li>
					</ul>
				</div>
				<div className="sitemap_card">
					<Image
						fill={true}
						className="sitemap_icon"
						src="/assets/svg/ic-search.svg"
						alt=""
					/>
					<p className="sitemap_headline">Search</p>
					<ul className="list-none">
						<li>New search</li>
						<li>Saved search</li>
						<li>Search results</li>
					</ul>
				</div>
				<div
					id="grid-item-4"
					className="sitemap_card">
					<Image
						fill={true}
						className="sitemap_icon"
						src="/assets/svg/ic-favorite.svg"
						alt=""
					/>
					<p className="sitemap_headline">saved</p>
					<ul className="list-none">
						<li>Saved restaurants</li>
						<li>Create collections</li>
						<li>Saved reviews from friends</li>
					</ul>
				</div>
				<div
					id="grid-item-5"
					className="sitemap_card">
					<Image
						fill={true}
						className="sitemap_icon"
						src="/assets/svg/ic-account-circle.svg"
						alt=""
					/>
					<p className="sitemap_headline">profile</p>
					<ul className="list-none">
						<li>User's reviews</li>
						<li>Food preferences</li>
						<li>Account settings</li>
					</ul>
				</div>
			</div>
			<div className="content">
				<p className="subheading">Full site map</p>
				<div className="content-grid mt-24">
					<div>
						<Image
							fill={true}
							className="img-sitemap"
							src="/assets/images/tastebuds/sitemap.png"
							alt=""
							loading="lazy"
						/>
					</div>
					<aside>
						<p>
							Before finalizing TasteBuds as the name for my solution, I
							initially considered naming it "Crave"! Which one do you
							prefer? 👀
						</p>
					</aside>
				</div>
				<p className="mb-32">
					With the top-level destinations and established, I created a site
					map integrating features from my user flows. While sitemaps are
					typically associated with websites, this process helped me refine
					my user flows by conceptualizing content and information
					hierarchy.{" "}
				</p>
				<p className="subheading">A dedicated search page</p>
				<p className="mb-32">
					Most of the decision-making process for diners is comparative
					analysis. This intends to facilitate seamless navigation between
					restaurant listings and other pages for diners, optimizing their
					process by eliminating the need to switch between pages and
					losing the search progress!
				</p>
				<p className="subheading">New features ✨</p>
				<p>
					Since I was able to identify and address gaps in my user flows, I
					used my user personas to further empathize with my target diners
					and brainstorm more features that would enhance their experience.
					I added direct messaging, exclusive in-app offers, and saved
					reviews and restaurants.
				</p>
				<p className="subheading">Challenge 😵‍💫</p>
				<p>
					The most challenging aspect was deciding the placement of the
					social feed. Both personalized and word-of-mouth recommendations
					are valued by diners, making this prioritization difficult.
					Ultimately, I chose to display personalized recommendations first
					for their immediate value, while still ensuring easy access to
					word-of-mouth recommendations by placing them second on the
					navigation bar!
				</p>
			</div>
		</section>
	);
};

export default InformationArchitecture;
