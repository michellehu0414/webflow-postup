import React from "react";
import styles from "./UserInterviews.module.scss";
import Link from "next/link";
import Image from "next/image";

const UserInterviews = () => {
	return (
		<div>
			<section
				id="section-user-interviews"
				className="section-container">
				<header className="header-container">
					<span> empathize</span>
					<h2>Interviewing dissatisfied diners</h2>
				</header>
				<div className="content">
					<p>
						{" "}
						I reached out to my screener survey respondents who expressed
						the lowest satisfaction scores for remote interviews. I
						recruited{" "}
						<span className="fw-medium">
							7 participants for remote interviews!{" "}
						</span>
					</p>
					<p className="section-subheading">My research questions</p>
					<ul
						className="mb-32"
						role="list">
						<li>
							How consistent are my secondary research findings with my
							user research?
						</li>
						<li>
							How do diners perceive their dining out experiences? What do
							they value and why?
						</li>
						<li>
							What are the most frequent challenges? How have diners tried
							to resolve them?
						</li>
						<li>
							How do diners feel about online reviews? What motivates them
							to consult reviews?
						</li>
						<li>
							How can the current methods improve to better meet their
							needs?
						</li>
					</ul>
					<p className="section-subheading">My process</p>
					<div className="content-grid">
						<div>
							<Image
								fill={true}
								alt=""
								loading="lazy"
								src="/assets/images/tastebuds/untitled-design.gif"
							/>
						</div>
						<aside>
							<p>
								To process the data, I made an affinity map on FigJam.
								Check out the process!
							</p>
						</aside>
					</div>
					<p className="section-subheading">My findings:</p>
				</div>
				<div className="interview-quotes-wrapper tastebuds">
					<Image
						fill={true}
						alt=""
						className="img-quotation-mark hide"
						src="/assets/svg/quotation-mark-blue.svg"
					/>
					<div className="grid-container mt-0">
						<div className="quote-grid-item item-1">
							<div>
								<p>Diners experience choice paralysis.</p>
							</div>
							<Image
								fill={true}
								className="hide img-interviewee"
								src="/assets/images/tastebuds/screenshot%202024-01-14%20at%208.39.13%e2%80%afpm.png"
								alt=""
							/>
							<blockquote>
								<div className="blockquote-content">
									<p className="mb-8">
										I feel worried that I'm missing out on better options
										if I don't keep scrolling.
									</p>
									<div className="interviewee">
										<Image
											fill={true}
											alt="Responsive Image"
											className="hide img-interviewee"
											src="/assets/images/tastebuds/screenshot%202024-01-14%20at%209.06.43%e2%80%afpm.png"
										/>
										<p>Participant #4</p>
									</div>
								</div>
							</blockquote>
						</div>
						<div className="quote-grid-item item-2">
							<div>
								<p>Existing tools lack personalization.</p>
							</div>
							<Image
								fill={true}
								alt="Responsive Image"
								className="hide img-interviewee"
								src="/assets/images/postup/interview-adam.png"
							/>
							<blockquote>
								<div className="blockquote-content">
									<p className="mb-8">
										If I had a magic wand, I’d want to receive suggested
										items that would suit my tastes.
									</p>
									<div className="interviewee">
										<Image
											fill={true}
											alt="Responsive Image"
											className="hide img-interviewee"
											src="/assets/images/postup/interview-james.png"
										/>
										<p>Participant #2</p>
									</div>
								</div>
							</blockquote>
						</div>
						<div className="quote-grid-item item-3">
							<div>
								<p>Diners don't know their cravings.</p>
							</div>
							<Image
								fill={true}
								alt="Responsive Image"
								className="hide img-interviewee"
								src="/assets/images/postup/interview-james.png"
							/>
							<blockquote>
								<div className="blockquote-content">
									<p className="mb-8">
										If only there was a way you can put a criteria of what
										you’re craving to be given suggestions.
									</p>
									<div className="interviewee">
										<Image
											fill={true}
											alt="Responsive Image"
											className="hide img-interviewee"
											src="/assets/images/postup/interview-james.png"
										/>
										<p>Participant #1</p>
									</div>
								</div>
							</blockquote>
						</div>
						<div className="quote-grid-item quote-flex-col item-5">
							<div>
								<p>
									Yelp and Google users face unreliable content that are
									often irrelevant and biased.
								</p>
							</div>
							<Image
								fill={true}
								alt="Responsive Image"
								className="hide img-interviewee"
								src="/assets/images/postup/interview-adam.png"
							/>
							<blockquote>
								<div className="blockquote-content">
									<p className="mb-8">
										To find something that's good, we have to trust reviews
										online right? Sometimes they're inflated, and sometimes
										they're not entirely truthful. There's just not enough
										data points out there. It's just difficult to gather
										and gauge what's truly good...
									</p>
									<div className="interviewee">
										<Image
											fill={true}
											alt="Responsive Image"
											className="hide img-interviewee"
											src="/assets/images/postup/interview-adam.png"
										/>
										<p>Participant #5</p>
									</div>
								</div>
							</blockquote>
						</div>
						<div className="quote-grid-item quote-flex-col item-6">
							<div>
								<p>
									Diners value recommendations from friends and family the
									most.
								</p>
							</div>
							<Image
								fill={true}
								alt="Responsive Image"
								className="hide img-interviewee"
								src="/assets/images/postup/interview-adam.png"
							/>
							<blockquote>
								<div className="blockquote-content">
									<p className="mb-8">
										I feel like especially for friends, if I kind of know
										what their normal taste is like... so I can kind of
										gauge what they expect already. If someone gives me a
										recommendation that means they went and they liked it,
										so the odds of me going and not liking it are not
										really big at all.
									</p>
									<div className="interviewee">
										<Image
											fill={true}
											alt="Responsive Image"
											className="hide img-interviewee"
											src="/assets/images/postup/interview-adam.png"
										/>
										<p>Participant #3</p>
									</div>
								</div>
							</blockquote>
						</div>
					</div>
					<blockquote>
						<p className="secondary-text mb-32 medium-grey">
							“There's a certain emotional trust about talking to someone
							about it...”
						</p>
					</blockquote>
				</div>
				<div className="content">
					<p className="section-subheading mb-24">
						Diner pains and delights
					</p>
					<div className="img-user-interview-findings">
						<Image
							fill={true}
							alt=""
							loading="lazy"
							src="/assets/images/tastebuds/green-fiction-vs-non-fiction-school--academic-infographic-poster-(6).png"
						/>
					</div>
					<p className="section-subheading mb-24">Diner journey</p>
					<div className="img-diner-journey_wrapper">
						<Image
							fill={true}
							alt=""
							loading="lazy"
							src="/assets/images/tastebuds/tastebuds-diner-journey-map.png"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default UserInterviews;
