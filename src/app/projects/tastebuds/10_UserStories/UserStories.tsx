import React from "react";
import styles from "./UserStories.module.scss";
import Link from "next/link";
import Image from "next/image";

const UserStories = () => {
	return (
		<section
			id="user-stories"
			className="section-container">
			<header className="header-container">
				<h2>
					<span className="source-code-pro">USER STORIES</span>
					<br />
					What functionalities do diners desire?
				</h2>
			</header>
			<div className="content">
				<p className="mb-32">
					I began brainstorming solutions by creating user stories to
					explore specific functionalities that could enhance the dining
					out experience. Below are a few key diner stories:
				</p>
				<div className="grid-2x2">
					<div className="card-vertical">
						<div className="icon_wrapper">
							<Image
								fill={true}
								alt=""
								className="icon"
								loading="lazy"
								src="/assets/svg/quotation-mark-blue.svg"
							/>
						</div>
						<p className="headline">
							I want to easily get recommendations from friends, so I can
							confidently try new places.
						</p>
					</div>
					<div className="card-vertical">
						<div className="icon_wrapper">
							<Image
								fill={true}
								alt=""
								className="icon"
								loading="lazy"
								src="/assets/svg/quotation-mark-blue.svg"
							/>
						</div>
						<p className="headline">
							I want personalized dining recommendations, so I can discover
							and explore options that suit me.
						</p>
					</div>
					<div className="card-vertical">
						<div className="icon_wrapper">
							<Image
								fill={true}
								alt=""
								className="icon"
								loading="lazy"
								src="/assets/svg/quotation-mark-blue.svg"
							/>
						</div>
						<p className="headline">
							I want to search for options with more customization like
							filters, so I can avoid decision paralysis.
						</p>
					</div>
					<div className="card-vertical">
						<div className="icon_wrapper">
							<Image
								fill={true}
								alt=""
								className="icon"
								loading="lazy"
								src="/assets/svg/quotation-mark-blue.svg"
							/>
						</div>
						<p className="headline">
							I want to write reviews that are visible to my friends only,
							so I can share my opinions comfortably.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UserStories;
