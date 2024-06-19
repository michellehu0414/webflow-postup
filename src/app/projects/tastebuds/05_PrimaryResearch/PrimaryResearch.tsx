import React from "react";
import styles from "./PrimaryResearch.module.scss";
import Link from "next/link";
import Image from "next/image";

const PrimaryResearch = () => {
	return (
		<div>
			<section
				id="primary-research"
				className="section-container">
				<header className="header-container">
					<h2>
						<span> primary research </span>
						<br />
						Surveying diners and recruiting for user interviews
					</h2>
				</header>
				<div className="content">
					<p>
						Expanding on my secondary research, I crafted a screener survey
						for my user interviews to learn more about consumer dining
						experiences. I sought out diners who are dissatisfied with some
						part of their dining out experience, and I planned on using
						these responses to tailor interview questions for each
						participant.
					</p>
					<p className="section-subheading">my target diners:</p>
					<ul role="list">
						<li>Diners aged 16-55</li>
						<li>Use mobile apps regularly (3+ times a week)</li>
						<li>Dine out or order takeout at least once a week</li>
						<li>
							Feel at least somewhat dissatisfied about one or more aspects
							of their dining experience
						</li>
						<li>
							Use mobile apps to make dining out decisions at least once a
							week
						</li>
					</ul>
				</div>
				{/* <div className="content hide">
<div className="mb-32">
<p className="section-subheading">A few questions I asked:</p>
<ul role="list">
<li>
In the past four weeks, how many new restaurants have you tried?
</li>
<li>How much time does it take you to decide on place to eat?</li>
<li>How often do you try something new at a restaurant?</li>
<li>What methods do you use to decide on a place to eat?</li>
</ul>
</div>
<div>
<p className="section-subheading">satisfaction scale</p>
<p>For each question, I asked respondents how satisfied they feel:</p>
<div className="flex-row gap-16">
<div className="likert">
<div className="satisfaction-level">
<Image fill={true}  src="assets/images/tastebuds/likert-mood-1.png" />
<p>Completely satisfied</p>
</div>
<div className="satisfaction-level">
<Image fill={true}  src="assets/images/tastebuds/likert-mood-2.png" />
<p>Mostly satisfied</p>
</div>
<div className="satisfaction-level">
<Image fill={true}
src="assets/images/tastebuds/likert-mood-3.png"
loading="lazy"
alt=""
>
<p>Somewhat satisfied</p>
</div>
<div className="satisfaction-level">
<Image fill={true}
src="assets/images/tastebuds/likert-mood-4.png"
loading="lazy"
alt=""
>
<p>Neither</p>
</div>
</div>
<div className="likert">
<div className="satisfaction-level">
<Image fill={true}
src="assets/images/tastebuds/likert-mood-5.png"
loading="lazy"
alt=""
>
<p>Somewhat dissatisfied</p>
</div>
<div className="satisfaction-level">
<Image fill={true}
src="assets/images/tastebuds/likert-mood-6.png"
loading="lazy"
alt=""
>
<p>Mostly dissatisfied</p>
</div>
<div className="satisfaction-level">
<Image fill={true}
src="assets/images/tastebuds/likert-mood-7.png"
loading="lazy"
alt=""
>
<p>Completely dissatisfied</p>
</div>
</div>
</div>
</div>
</div> */}
				<div className="card medium bg-lightest-grey mb-64">
					<div className="screener-survey-wrapper">
						<Image
							fill={true}
							alt=""
							className="img-screener-survey"
							loading="lazy"
							src="/assets/images/tastebuds/screener-survey.png"
						/>
						<div className="content-container">
							<p>
								My initial hypothesis was that diners are dissatisfied with
								their discovery, method(s), and decision-making process.
							</p>
							<div className="mb-16">
								<p className="subheading mv-0">A few questions I asked:</p>
								<ul role="list">
									<li>
										In the past 4 weeks, how many new restaurants have you
										tried?
									</li>
									<li>
										How much time does it take you to decide on place to
										eat?
									</li>
									<li>
										How often do you try something new at a restaurant?
									</li>
									<li>
										What methods do you use to decide on a place to eat?
									</li>
								</ul>
							</div>
							<div>
								<p className="subheading mt-0">satisfaction scale</p>
								<p>
									For each question, I asked respondents how satisfied they
									feel:
								</p>
								<div className="likert_flex-container">
									<div className="likert">
										<div className="satisfaction-level">
											<Image
												fill={true}
												src="/assets/images/tastebuds/likert-mood-1.png"
												alt=""
											/>
											<p>Completely satisfied</p>
										</div>
										<div className="satisfaction-level">
											<Image
												fill={true}
												src="/assets/images/tastebuds/likert-mood-2.png"
												alt=""
											/>
											<p>Mostly satisfied</p>
										</div>
										<div className="satisfaction-level">
											<Image
												fill={true}
												alt=""
												loading="lazy"
												src="/assets/images/tastebuds/likert-mood-3.png"
											/>
											<p>Somewhat satisfied</p>
										</div>
										<div className="satisfaction-level">
											<Image
												fill={true}
												alt=""
												loading="lazy"
												src="/assets/images/tastebuds/likert-mood-4.png"
											/>
											<p>Neither</p>
										</div>
									</div>
									<div className="likert">
										<div className="satisfaction-level">
											<Image
												fill={true}
												alt=""
												loading="lazy"
												src="/assets/images/tastebuds/likert-mood-5.png"
											/>
											<p>Somewhat dissatisfied</p>
										</div>
										<div className="satisfaction-level">
											<Image
												fill={true}
												alt=""
												loading="lazy"
												src="/assets/images/tastebuds/likert-mood-6.png"
											/>
											<p>Mostly dissatisfied</p>
										</div>
										<div className="satisfaction-level">
											<Image
												fill={true}
												alt=""
												loading="lazy"
												src="/assets/images/tastebuds/likert-mood-7.png"
											/>
											<p>Completely dissatisfied</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card medium bg-lightest-grey">
					<div className="survey-results-wrapper">
						<div
							className="survey-results-tabs tabs-container"
							data-current="Tab 1"
							data-duration-in="300"
							data-duration-out="100"
							data-easing="ease">
							<div className="tabs-menu">
								<button
									className="tab-button active"
									data-tab="tab1">
									<p>Findings</p>
								</button>
								<button
									className="tab-button"
									data-tab="tab2">
									<p>Survey Data and Methods</p>
								</button>
							</div>
							<div
								className="tab-content active"
								id="tab1">
								<div>
									<p className="secondary-text mb-16">
										How satisfied do diners feel?
									</p>
									<p>
										After collecting 20 survey responses, I organized the
										data in a spreadsheet to identify the most dissatisfied
										diners (displayed in 'Survey data and methods' tab). I
										conducted cross-data analysis, comparing the responses
										to uncover similarities, differences, and patterns.
										This process helped me identify potential correlations
										between various aspects of the dining experience and
										the levels of dissatisfaction.
									</p>
									<p className="subheading">Data visualization</p>
									<div className="img-survey-results_wrapper mv-16">
										<Image
											fill={true}
											alt=""
											className="img-responsive"
											loading="lazy"
											src="/assets/images/tastebuds/survey-results-bars.png"
										/>
									</div>
									<div className="survey-results_flex-container">
										<div className="survey-results-card">
											<Image
												fill={true}
												alt=""
												className="likert-mood large"
												loading="lazy"
												src="/assets/images/tastebuds/likert-mood-5.png"
											/>
											<p className="content">
												Overall, respondents feel least satisfied about how
												long they take to make dining decisions—an average
												of 50% rating.
											</p>
										</div>
										<div className="survey-results-card">
											<Image
												fill={true}
												alt=""
												className="likert-mood large"
												loading="lazy"
												src="/assets/images/tastebuds/likert-mood-6.png"
											/>
											<p className="content">
												Among the least satisfied respondents, this rating
												drops to an average of 26%.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								className="tab-content"
								id="tab2">
								<p className="secondary-text">Complete Survey Data</p>
								<p>
									The table below was used to calculate the satisfaction
									levels and findings in the first tab.
								</p>
								<Image
									fill={true}
									alt=""
									loading="lazy"
									src="/assets/images/tastebuds/survey-results-1.png"
								/>
								<div className="total-satisfaction-method">
									<p>Methodology</p>
									<p>
										I measured individual user satisfaction levels based on
										several criteria: average time spent finding a place to
										eat, frequency of trying new restaurants, frequency of
										trying new dishes, and current methods used to make
										dining decisions. I then implemented a scoring system,
										assigning points to each satisfaction level:
										"Completely satisfied " received 5 points, while both
										"Completely dissatisfied " and "Mostly dissatisfied "
										received 0 points. Since there was only one data point
										for "Completely dissatisfied ", I combined its score
										with "Mostly dissatisfied " to simplify calculations
										and maintain whole numbers in the ratings for clearer
										analysis.
									</p>
								</div>
							</div>
						</div>
						<div className="hide">
							<div className="total-satisfaction-method">
								<p>5 methodology</p>
								<p>
									First, I measured individual user satisfaction levels on
									the following: average time spent on finding a place to
									eat, frequency of trying new restaurants, frequency of
									trying new dishes, and current methods to make dining
									decisions. Then I assigned a scoring system, where
									I assigned points to each satisfaction level, with
									"Completely satisfied" being 5 points and both
									"Completely dissatisfied" &amp; "Mostly dissatisfied"
									being 0 points. Due to having only one data point for
									"Completely dissatisfied," I combined its score with
									"Mostly dissatisfied" to simplify calculations and keep
									the ratings as whole numbers without decimals for a
									clearer analysis.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PrimaryResearch;
