/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { AppProps } from "next/app";
import styles from "./tastebuds.module.scss";
import "@/styles/globals.scss";
import Accordion from "@/components/Accordion/Accordion";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const TasteBudsPage: React.FC = () => {
	const [open, setOpen] = useState(false);
	return (
		<main style={{ "--primary-color": "#4379df" } as React.CSSProperties}>
			<ContentContainer>
				<h1>Welcome to My Next.js App</h1>
				<p>This is a content container with medium size.</p>
				<Accordion
					open={open}
					setOpen={setOpen}
					label='Header'>
					<p>Content</p>
				</Accordion>
				<h3>Hello</h3>
			</ContentContainer>

			{/* <section
				id='hero'
				className='hero hero--bg-tastebuds'>
				<div className='hero__content'>
					<Image
						alt=''
						className='hero__image'
						loading='eager'
						src='assets/images/tastebuds/hero-image.png'
					/>
					<div className="hero__image-wrapper">
</div>
				</div>
			</section> */}
			<section className='overview'>
				<div className='overview__content-wrapper'>
					<header className='overview__header'>
						<h1 className='overview__title'>TasteBuds</h1>
						<p className='overview__tagline'>
							Empowering diners to discover dining options with tastebuds
							they trust.
						</p>
						<div className='overview__tags-wrapper overview__tags-wrapper--scrollable'>
							<div className='overview__tag overview__tag--tastebuds'>
								product design
							</div>
							<div className='overview__tag overview__tag--tastebuds'>
								interaction design
							</div>
							<div className='overview__tag overview__tag--tastebuds'>
								business strategy
							</div>
							<div className='overview__tag overview__tag--tastebuds'>
								competitive research
							</div>
							<div className='overview__tag overview__tag--tastebuds'>
								prototyping
							</div>
						</div>
					</header>
					<div className='overview__details-container'>
						<div className='overview__grid-item'>
							<div className='overview__details-list'>
								<p className='overview__details-headline'>Timeline</p>
								<ul>
									<li>December 2022 - June 2023</li>
								</ul>
							</div>
						</div>
						<div className='overview__details-list'>
							<p className='overview__details-headline'>Tools</p>
							<div className='overview__tools-grid-container'>
								<div className='overview__tools-logo-wrapper overview__tools-logo-wrapper--figma'>
									<Image
										loading='lazy'
										src='assets/images/toolbox-logos/logo-figma.png'
										alt=''
									/>
								</div>
								<div className='overview__tools-logo-wrapper overview__tools-logo-wrapper--general'>
									<Image
										alt=''
										loading='lazy'
										src='assets/images/tastebuds/logo-notion.png'
									/>
								</div>
								<div className='overview__tools-logo-wrapper overview__tools-logo-wrapper--miro'>
									<Image
										alt=''
										loading='lazy'
										src='assets/images/tastebuds/logo-miro.png'
									/>
								</div>
								<div className='overview__tools-logo-wrapper overview__tools-logo-wrapper--canva'>
									<Image
										alt=''
										loading='lazy'
										src='assets/images/tastebuds/logo-canva.png'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex-row center'>
					<button
						className='scroll-button hero'
						data-scroll-target='the-problem'
						aria-label='Scroll down'>
						<Image
							src='assets/svg/ic-arrowDown.svg'
							alt='Chevron arrow pointing down, indicating to scroll down'
						/>
					</button>
				</div>
			</section>
			<section
				id='the-process'
				className='section-container equal-padding'>
				<header className='header-container'>
					<h2>Process</h2>
				</header>
				<div className='content'>
					{/* <p>This was my capstone project for my Springboard UX Design course, marking my inaugural
venture into product design with formal UX training!</p> */}
					<p>
						"Why is it so hard to find a place to eat and trying new items?
						Despite convenient crowdsourced review apps such as Yelp and
						Google, why do diners struggle to make dining decisions
						efficiently? "
					</p>
					<p>
						These were the questions that guided me to explore the consumer
						dining experience. After witnessing shared challenges among my
						friends and family when it came to deciding where to eat and
						exploring new restaurants and menu items. As someone who values
						diverse culinary experiences and sees food as a gateway to
						understanding different cultures, I was deeply motivated to
						create a solution for the consumer dining space.
					</p>
					<p>
						To address this problem, my research process followed the
						5-stage Design Thinking model proposed by the Hasso Plattner
						Institute of Design at Stanford (the "d. school ").
					</p>
					<button
						className='scroll-button bg-transparent link-blue'
						data-scroll-target='final-tastebuds-solution'>
						Jump to final prototype
						<span className='material-symbols-outlined ic-arrow_jump-to-section material-symbols_lower'>
							arrow_downward
						</span>
					</button>
				</div>
				<div className='content medium'>
					<Image
						alt=''
						loading='lazy'
						src='assets/images/tastebuds/research-process.png'
					/>
				</div>
			</section>
			<section
				id='secondary-research'
				className='section-container'>
				<header className='header-container'>
					<h2>
						<span>secondary and market research</span>
						<br />
						Understanding the landscape
					</h2>
				</header>
				<div className='content'>
					<p>
						I began to explore the problem space through secondary and
						market research, delving into the diverse experiences, emerging
						dining habits, and the evolving preferences of diners.
					</p>
					<header>
						<p className='section-subheading'>research questions</p>
					</header>
					<ul
						className='mb-32'
						role='list'>
						<li>What are the latest dining out trends?</li>
						<li>What motivate people to dine out?</li>
						<li>What do diners enjoy about dining out?</li>
						<li>What do diners struggle with dining out?</li>
					</ul>
					<div>
						<p className='section-subheading'>diner trends 2022</p>
						{/* <p>
First, I explored <span className="fw-medium">Google keywords</span> to identify any trends in
dining keywords, which revealed a trend in dining out after a few
months into the COVID-19 pandemic! This told me that
</p> */}
						<p>
							To best address my research questions,{" "}
							<span className='fw-medium'>
								I reviewed existing data from market reports
							</span>
							. Among the reports I read, TouchBistro's
							<Link href='https://shorturl.at/2DzDk'>
								2022 Diner Trends Report on "What Diners Want
							</Link>{" "}
							and{" "}
							<Link href='https://shorturl.at/W4tIw'>
								2020 Restaurant Insights Report on "How Diners Choose
								Restaurants"
							</Link>{" "}
							provided the most comprehensive data. The first report
							surveyed more than 2,600 diners from across the U.S. and
							Canada, and the second report surveyed a total of 521 diners.
							<br />
							<br /> These reports were very helpful! Below are the
							highlights of what I learned (only data on U.S. participants
							are referenced):
						</p>
					</div>
					<div className='diner-trends-grid'>
						<div className='item-1'>
							<p>
								If the restaurant's food is good, then the service doesn't
								matter to diners.
							</p>
						</div>
						<div className='item-2'>
							<p>
								Recommendations from friends and family outweigh online
								reviews.
							</p>
						</div>
						<div className='item-3'>
							<p>
								Most diners would visit a restaurant for their promotions.
							</p>
						</div>
						<div className='item-4'>
							<p>
								Most diners visit a restaurant's online menu and websites
								first.
							</p>
						</div>
						<div className='item-5 text-center'>
							<p className='text-center'>
								Top 3 factors that influence dining decisions
							</p>
							<div className='dining-factors-grid'>
								<div>
									<p className='dining-factors-number'>#1</p>
									<div>
										<Image
											alt=''
											className='dining-factors-icon'
											loading='lazy'
											src='assets/svg/tastebuds/dinner-tray.svg'
										/>
										<p>Type of food</p>
									</div>
								</div>
								<div>
									<p className='dining-factors-number'>#2</p>
									<div>
										<Image
											alt=''
											className='ic-dining-factors-location'
											loading='lazy'
											src='assets/svg/tastebuds/ic-location.svg'
										/>
										<p>Location</p>
									</div>
								</div>
								<div>
									<p className='dining-factors-number'>#3</p>
									<div>
										<Image
											alt=''
											className='dining-factors-icon'
											loading='lazy'
											src='assets/svg/tastebuds/word-of-mouth.svg'
										/>
										<p>Word-of-mouth</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='content'>
						<p>
							Among my findings, this was the statistic I found most
							intriguing:
							<br />
						</p>
						<blockquote className='blockquote-statistic-highlight'>
							<div className='blockquote-content'>
								<p className='blockquote-text margin-0'>
									"While 73% of diners use online review sources, only 24%
									say online reviews influence where they decide to
									eat...""
								</p>
							</div>
						</blockquote>
						<div className='content'>
							<p className='fw-medium'>
								This raised the following question for me:{" "}
							</p>
							<p>
								What motivates diners to use this method to guide their
								dining choices, despite often taking it that seriously?
							</p>
							<p className='fw-medium'>
								Based on my research findings, I hypothesized that diners
								may lack trust in online reviews because:
							</p>
							<ol>
								<li>They are generated by strangers.</li>
								<li>
									These reviews often focus on the service rather than
									food.
								</li>
							</ol>
						</div>
					</div>
				</div>
			</section>
			<section
				id='primary-research'
				className='section-container'>
				<header className='header-container'>
					<h2>
						<span> primary research </span>
						<br />
						Surveying diners and recruiting for user interviews
					</h2>
				</header>
				<div className='content'>
					<p>
						Expanding on my secondary research, I crafted a screener survey
						for my user interviews to learn more about consumer dining
						experiences. I sought out diners who are dissatisfied with some
						part of their dining out experience, and I planned on using
						these responses to tailor interview questions for each
						participant.
					</p>
					<p className='section-subheading'>my target diners:</p>
					<ul role='list'>
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
	<Image src="assets/images/tastebuds/likert-mood-1.png" />
	<p>Completely satisfied</p>
  </div>
  <div className="satisfaction-level">
	<Image src="assets/images/tastebuds/likert-mood-2.png" />
	<p>Mostly satisfied</p>
  </div>
  <div className="satisfaction-level">
	<Image
	  src="assets/images/tastebuds/likert-mood-3.png"
	  loading="lazy"
	  alt=""
   >
	<p>Somewhat satisfied</p>
  </div>
  <div className="satisfaction-level">
	<Image
	  src="assets/images/tastebuds/likert-mood-4.png"
	  loading="lazy"
	  alt=""
   >
	<p>Neither</p>
  </div>
</div>
<div className="likert">
  <div className="satisfaction-level">
	<Image
	  src="assets/images/tastebuds/likert-mood-5.png"
	  loading="lazy"
	  alt=""
   >
	<p>Somewhat dissatisfied</p>
  </div>
  <div className="satisfaction-level">
	<Image
	  src="assets/images/tastebuds/likert-mood-6.png"
	  loading="lazy"
	  alt=""
   >
	<p>Mostly dissatisfied</p>
  </div>
  <div className="satisfaction-level">
	<Image
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
				<div className='card medium bg-lightest-grey mb-64'>
					<div className='screener-survey-wrapper'>
						<Image
							alt=''
							className='img-screener-survey'
							loading='lazy'
							src='assets/images/tastebuds/screener-survey.png'
						/>
						<div className='content-container'>
							<p>
								My initial hypothesis was that diners are dissatisfied with
								their discovery, method(s), and decision-making process.
							</p>
							<div className='mb-16'>
								<p className='subheading mv-0'>A few questions I asked:</p>
								<ul role='list'>
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
								<p className='subheading mt-0'>satisfaction scale</p>
								<p>
									For each question, I asked respondents how satisfied they
									feel:
								</p>
								<div className='likert_flex-container'>
									<div className='likert'>
										<div className='satisfaction-level'>
											<Image
												src='assets/images/tastebuds/likert-mood-1.png'
												alt=''
											/>
											<p>Completely satisfied</p>
										</div>
										<div className='satisfaction-level'>
											<Image
												src='assets/images/tastebuds/likert-mood-2.png'
												alt=''
											/>
											<p>Mostly satisfied</p>
										</div>
										<div className='satisfaction-level'>
											<Image
												alt=''
												loading='lazy'
												src='assets/images/tastebuds/likert-mood-3.png'
											/>
											<p>Somewhat satisfied</p>
										</div>
										<div className='satisfaction-level'>
											<Image
												alt=''
												loading='lazy'
												src='assets/images/tastebuds/likert-mood-4.png'
											/>
											<p>Neither</p>
										</div>
									</div>
									<div className='likert'>
										<div className='satisfaction-level'>
											<Image
												alt=''
												loading='lazy'
												src='assets/images/tastebuds/likert-mood-5.png'
											/>
											<p>Somewhat dissatisfied</p>
										</div>
										<div className='satisfaction-level'>
											<Image
												alt=''
												loading='lazy'
												src='assets/images/tastebuds/likert-mood-6.png'
											/>
											<p>Mostly dissatisfied</p>
										</div>
										<div className='satisfaction-level'>
											<Image
												alt=''
												loading='lazy'
												src='assets/images/tastebuds/likert-mood-7.png'
											/>
											<p>Completely dissatisfied</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='card medium bg-lightest-grey'>
					<div className='survey-results-wrapper'>
						<div
							className='survey-results-tabs tabs-container'
							data-current='Tab 1'
							data-duration-in='300'
							data-duration-out='100'
							data-easing='ease'>
							<div className='tabs-menu'>
								<button
									className='tab-button active'
									data-tab='tab1'>
									<p>Findings</p>
								</button>
								<button
									className='tab-button'
									data-tab='tab2'>
									<p>Survey Data and Methods</p>
								</button>
							</div>
							<div
								className='tab-content active'
								id='tab1'>
								<div>
									<p className='secondary-text mb-16'>
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
									<p className='subheading'>Data visualization</p>
									<div className='img-survey-results_wrapper mv-16'>
										<Image
											alt=''
											className='img-responsive'
											loading='lazy'
											src='assets/images/tastebuds/survey-results-bars.png'
										/>
									</div>
									<div className='survey-results_flex-container'>
										<div className='survey-results-card'>
											<Image
												alt=''
												className='likert-mood large'
												loading='lazy'
												src='assets/images/tastebuds/likert-mood-5.png'
											/>
											<p className='content'>
												Overall, respondents feel least satisfied about how
												long they take to make dining decisions—an average
												of 50% rating.
											</p>
										</div>
										<div className='survey-results-card'>
											<Image
												alt=''
												className='likert-mood large'
												loading='lazy'
												src='assets/images/tastebuds/likert-mood-6.png'
											/>
											<p className='content'>
												Among the least satisfied respondents, this rating
												drops to an average of 26%.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div
								className='tab-content'
								id='tab2'>
								<p className='secondary-text'>Complete Survey Data</p>
								<p>
									The table below was used to calculate the satisfaction
									levels and findings in the first tab.
								</p>
								<Image
									alt=''
									loading='lazy'
									src='assets/images/tastebuds/survey-results-1.png'
								/>
								<div className='total-satisfaction-method'>
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
						<div className='hide'>
							<div className='total-satisfaction-method'>
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
			<section
				id='section-user-interviews'
				className='section-container'>
				<header className='header-container'>
					<span> empathize</span>
					<h2>Interviewing dissatisfied diners</h2>
				</header>
				<div className='content'>
					<p>
						{" "}
						I reached out to my screener survey respondents who expressed
						the lowest satisfaction scores for remote interviews. I
						recruited{" "}
						<span className='fw-medium'>
							7 participants for remote interviews!{" "}
						</span>
					</p>
					<p className='section-subheading'>My research questions</p>
					<ul
						className='mb-32'
						role='list'>
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
					<p className='section-subheading'>My process</p>
					<div className='content-grid'>
						<div>
							<Image
								alt=''
								loading='lazy'
								src='assets/images/tastebuds/untitled-design.gif'
							/>
						</div>
						<aside>
							<p>
								To process the data, I made an affinity map on FigJam.
								Check out the process!
							</p>
						</aside>
					</div>
					<p className='section-subheading'>My findings:</p>
				</div>
				<div className='interview-quotes-wrapper tastebuds'>
					<Image
						alt=''
						className='img-quotation-mark hide'
						src='assets/svg/quotation-mark-blue.svg'
					/>
					<div className='grid-container mt-0'>
						<div className='quote-grid-item item-1'>
							<div>
								<p>Diners experience choice paralysis.</p>
							</div>
							<Image
								className='hide img-interviewee'
								src='assets/images/tastebuds/screenshot%202024-01-14%20at%208.39.13%e2%80%afpm.png'
								alt=''
							/>
							<blockquote>
								<div className='blockquote-content'>
									<p className='mb-8'>
										I feel worried that I'm missing out on better options
										if I don't keep scrolling.
									</p>
									<div className='interviewee'>
										<Image
											alt='Responsive Image'
											className='hide img-interviewee'
											src='assets/images/tastebuds/screenshot%202024-01-14%20at%209.06.43%e2%80%afpm.png'
										/>
										<p>Participant #4</p>
									</div>
								</div>
							</blockquote>
						</div>
						<div className='quote-grid-item item-2'>
							<div>
								<p>Existing tools lack personalization.</p>
							</div>
							<Image
								alt='Responsive Image'
								className='hide img-interviewee'
								src='assets/images/postup/interview-adam.png'
							/>
							<blockquote>
								<div className='blockquote-content'>
									<p className='mb-8'>
										If I had a magic wand, I’d want to receive suggested
										items that would suit my tastes.
									</p>
									<div className='interviewee'>
										<Image
											alt='Responsive Image'
											className='hide img-interviewee'
											src='assets/images/postup/interview-james.png'
										/>
										<p>Participant #2</p>
									</div>
								</div>
							</blockquote>
						</div>
						<div className='quote-grid-item item-3'>
							<div>
								<p>Diners don't know their cravings.</p>
							</div>
							<Image
								alt='Responsive Image'
								className='hide img-interviewee'
								src='assets/images/postup/interview-james.png'
							/>
							<blockquote>
								<div className='blockquote-content'>
									<p className='mb-8'>
										If only there was a way you can put a criteria of what
										you’re craving to be given suggestions.
									</p>
									<div className='interviewee'>
										<Image
											alt='Responsive Image'
											className='hide img-interviewee'
											src='assets/images/postup/interview-james.png'
										/>
										<p>Participant #1</p>
									</div>
								</div>
							</blockquote>
						</div>
						<div className='quote-grid-item quote-flex-col item-5'>
							<div>
								<p>
									Yelp and Google users face unreliable content that are
									often irrelevant and biased.
								</p>
							</div>
							<Image
								alt='Responsive Image'
								className='hide img-interviewee'
								src='assets/images/postup/interview-adam.png'
							/>
							<blockquote>
								<div className='blockquote-content'>
									<p className='mb-8'>
										To find something that's good, we have to trust reviews
										online right? Sometimes they're inflated, and sometimes
										they're not entirely truthful. There's just not enough
										data points out there. It's just difficult to gather
										and gauge what's truly good...
									</p>
									<div className='interviewee'>
										<Image
											alt='Responsive Image'
											className='hide img-interviewee'
											src='assets/images/postup/interview-adam.png'
										/>
										<p>Participant #5</p>
									</div>
								</div>
							</blockquote>
						</div>
						<div className='quote-grid-item quote-flex-col item-6'>
							<div>
								<p>
									Diners value recommendations from friends and family the
									most.
								</p>
							</div>
							<Image
								alt='Responsive Image'
								className='hide img-interviewee'
								src='assets/images/postup/interview-adam.png'
							/>
							<blockquote>
								<div className='blockquote-content'>
									<p className='mb-8'>
										I feel like especially for friends, if I kind of know
										what their normal taste is like... so I can kind of
										gauge what they expect already. If someone gives me a
										recommendation that means they went and they liked it,
										so the odds of me going and not liking it are not
										really big at all.
									</p>
									<div className='interviewee'>
										<Image
											alt='Responsive Image'
											className='hide img-interviewee'
											src='assets/images/postup/interview-adam.png'
										/>
										<p>Participant #3</p>
									</div>
								</div>
							</blockquote>
						</div>
					</div>
					<blockquote>
						<p className='secondary-text mb-32 medium-grey'>
							“There's a certain emotional trust about talking to someone
							about it...”
						</p>
					</blockquote>
				</div>
				<div className='content'>
					<p className='section-subheading mb-24'>
						Diner pains and delights
					</p>
					<div className='img-user-interview-findings'>
						<Image
							alt=''
							loading='lazy'
							src='assets/images/tastebuds/green-fiction-vs-non-fiction-school--academic-infographic-poster-(6).png'
						/>
					</div>
					<p className='section-subheading mb-24'>Diner journey</p>
					<div className='img-diner-journey_wrapper'>
						<Image
							alt=''
							loading='lazy'
							src='assets/images/tastebuds/tastebuds-diner-journey-map.png'
						/>
					</div>
				</div>
			</section>
			<section
				id='competitor-analysis'
				className='section-container'>
				<header className='header-container'>
					<h2>
						<span> Competitor Analysis </span>
						<br />
						Learning from my competitors
					</h2>
				</header>
				<div className='content'>
					<p>
						Based on my primary and secondary research, I found that diners
						mostly use Yelp, Google, Google Maps, and word-of-mouth
						recommendations to explore options. Therefore, I analyzed
						Google Maps and Yelp's designs and looked into their
						relationship with diners' pain points.
					</p>
					<p className='section-subheading'>research goals</p>
					<ul>
						<li>Understanding user expectations</li>
						<li>Gauging their weaknesses</li>
						<li>Understanding their strengths</li>
						<li>Finding the common ground</li>
						<li>Evaluating gaps and unmet needs</li>
					</ul>
				</div>
				<div className='competitor-analysis_wrapper'>
					<div className='competitor-analysis_grid-container'>
						<div className='competitor-analysis-app'>
							<Image
								alt=''
								className='img-competitor-logo'
								loading='lazy'
								src='assets/images/tastebuds/logo-yelp.png'
							/>
							<p>Yelp: Food, Delivery &amp; Reviews</p>
						</div>
						<Image
							alt=''
							className='img-competitor-screen'
							loading='lazy'
							src='assets/images/tastebuds/competitor-analysis-results-yelp.png'
						/>
						<Image
							alt=''
							className='img-competitor-screen'
							loading='lazy'
							src='assets/images/tastebuds/competitor-analysis-listing-yelp.png'
						/>
						<Image
							alt=''
							className='img-competitor-screen'
							loading='lazy'
							src='assets/images/tastebuds/competitor-analysis-review-yelp.png'
						/>
						<div className='competitor-analysis-finding'>
							<p>
								Yelp excels in user-generated reviews, aiding informed
								dining decisions. However, its cluttered interface with
								excessive sponsored content overshadows this strength.
								Complex navigation, subpar above-the-fold design, and
								unclear CTAs hinder user experience, requiring extensive
								scrolling for essential information. Moreover, Yelp's
								open-ended review process may pose challenges in
								maintaining review quality.
							</p>
						</div>
					</div>
					<div className='competitor-analysis_grid-container'>
						<div className='competitor-analysis-app'>
							<div className='img-google-maps_wrapper'>
								<Image
									alt=''
									className='img-google-maps'
									loading='lazy'
									src='assets/images/tastebuds/logo-google-maps.png'
								/>
							</div>
							<p>Google Maps</p>
						</div>
						<Image
							alt=''
							className='img-competitor-screen'
							loading='lazy'
							src='assets/images/tastebuds/competitor-analysis-results-google.png'
						/>
						<Image
							alt=''
							className='img-competitor-screen'
							loading='lazy'
							src='assets/images/tastebuds/competitor-analysis-listing-google.png'
						/>
						<Image
							alt=''
							className='img-competitor-screen'
							loading='lazy'
							src='assets/images/tastebuds/competitor-analysis-review-google.png'
						/>
						<div className='competitor-analysis-finding'>
							<p>
								Google Maps presents a clean and intuitive interface,
								simplifying restaurant searches and navigation. Its
								well-executed above-the-fold design and clear CTAs
								contribute to its appeal. The structured review process
								aids in comprehensive feedback. However, the lack of
								filtering or sorting options might overwhelm users,
								potentially causing decision paralysis, especially for
								location-focused diners.
							</p>
						</div>
					</div>
				</div>
				<div className='content'>
					<p className='section-subheading'>Conclusion</p>
					<p>
						I found a significant shift in my competitors' products—from
						being user-centric to becoming more system-centric.
						<span className='fw-medium'>
							Their lack of personalization and an excess of
							commercialization, has resulted in diners experiencing
							mistrust, information overload, and decision paralysis.
						</span>
					</p>
				</div>
			</section>
			<section
				id='narrowing-the-scope'
				className='section-container equal-padding'>
				<header className='header-container'>
					<h2>
						<span>define</span>
						<br />
						Connecting the dots with a mind map
					</h2>
				</header>
				<div className='content'>
					<p className='mb-32 mt-0'>
						At this point, I realized that while my research had uncovered
						a lot about diners' problems, I still didn't fully grasp the
						big picture. To better understand my findings and how they
						relate to each other, I decided to make a mind map!
					</p>
					<div className='content-grid'>
						<div>
							<Image
								alt=''
								loading='lazy'
								src='assets/images/tastebuds/purple-colorful-organic-mind-map-brainstorm-(2).png'
							/>
						</div>
						<aside>
							<p>As a visual learner, this helped a lot!</p>
						</aside>
					</div>
				</div>
				<div className='content'>
					<h3>Conclusion</h3>
					<p className='secondary-text'>
						Diners lack confidence in decision-making, and existing methods
						are to blame.
					</p>
					<p>
						Increasingly{" "}
						<span className='fw-medium'>
							commercialized content, lack of personalization
						</span>
						, inifinite search results, irrelevant and unreliable content
						cause decision paralysis and information overload.
						Consequently, diners struggle to confidently explore dining
						options and make informed decisions.
					</p>
					<p>
						Additionally, I was able to answer my question from my
						secondary research:
					</p>
					<p className='secondary-text'>
						Diners resort to online reviews because they're more accessible
						than word-of-mouth recommendations.
					</p>
					<div className='flex vertical _24-px'></div>
				</div>
			</section>
			<section
				id='user-personas'
				className='section-container'>
				<header className='header-container'>
					<h2>
						<span>user personas</span>
						<br />
						Meet the diners: <br /> Alex, Brandon, and Cleo
					</h2>
				</header>
				<div className='content'>
					<p>
						Given the diversity of diners' needs and behaviors, I created 3
						user personas to better understand my target audience and guide
						my ideation phase: Alex, Brandon, and Cleo.
					</p>
				</div>
				<div
					className='user-persona_tabs tabs-container content mb-32'
					data-current='Tab 1'
					data-duration-in='300'
					data-duration-out='100'
					data-easing='ease'>
					<div className='tabs-menu'>
						<button
							className='tab-button active'
							data-tab='tab1'>
							<p>Alex</p>
						</button>
						<button
							className='tab-button'
							data-tab='tab2'>
							<p>Brandon</p>
						</button>
						<button
							className='tab-button'
							data-tab='tab3'>
							<p>Cleo</p>
						</button>
					</div>
					<div
						className='tab-content active'
						id='tab1'>
						<Image
							alt=''
							className='img-user-persona'
							src='assets/images/tastebuds/user-persona-alex.png'
						/>
					</div>
					<div
						className='tab-content'
						id='tab2'>
						<Image
							alt=''
							className='img-user-persona'
							src='assets/images/tastebuds/user-persona-brandon.png'
						/>
					</div>
					<div
						className='tab-content'
						id='tab3'>
						<Image
							alt=''
							className='img-user-persona'
							src='assets/images/tastebuds/user-persona-cleo.png'
						/>
					</div>
				</div>
				<div className='content mb-32'>
					<div className='user-persona_container'>
						<div className='user-persona_heading-container'>
							<Image
								alt=''
								className='user-persona_icon'
								loading='lazy'
								src='assets/images/tastebuds/user-persona-icon-alex.png'
							/>
						</div>
						<div>
							<p className='user-persona_title'>Alex</p>
							<div className='user-persona_content'>
								<p>
									I enjoy dining out because I can spend quality time with
									my friends and family, eat delicious food, and discover
									new restaurants.
									<span>
										I use Yelp and Google Maps but trust word-of-mouth
										recommendations over online reviews to know what's
										<em>actually good</em>
									</span>
									. Therefore, I want to see customer photos of food not
									professional photos because they're more accurate.
								</p>
							</div>
						</div>
					</div>
					<div className='user-persona_container'>
						<div className='user-persona_heading-container'>
							<Image
								alt=''
								className='user-persona_icon'
								loading='lazy'
								src='assets/images/tastebuds/user-persona-icon-brandon.png'
							/>
						</div>
						<div>
							<p className='user-persona_title'>Brandon</p>
							<div className='user-persona_content'>
								<p>
									I couldn't care less about discovery. Given my hectic
									work schedule, I dine out and order takeout for the
									<span>convenience</span>, especially when I'm working
									late. I just want to
									<span>
										quickly find dining options with good value that make
										my life easier
									</span>
									, such as when I don’t have time to cook or simply don't
									want to cook.
								</p>
							</div>
						</div>
					</div>
					<div className='user-persona_container'>
						<div className='user-persona_heading-container'>
							<Image
								alt=''
								className='user-persona_icon'
								loading='lazy'
								src='assets/images/tastebuds/user-persona-icon-cleo.png'
							/>
						</div>
						<div>
							<p className='user-persona_title'>Cleo</p>
							<div className='user-persona_content'>
								<p>
									Like Alex, I enjoy discovery and spending quality time
									with friends and family, but I am more inclined to visit
									new, trendy places. However, unlike Brandon, convenience
									is not my priority if the place is worth visiting, so I'm
									more willing to travel for the experience! Also, dining
									out isn't limited to dining: As a remote worker, I like
									to work at aesthetic coffee shops with WiFi and outlets,
									so it’s important that restaurant provide high quality
									pictures and accurate, relevant information online.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='content'>
					<div className='content'>
						<p className='mb-32'>
							Despite their differences, Alex, Brandon, and Cleo have
							something in common: They feel overwhelmed by endless search
							results that are irrelevant to their needs and desire more
							personalization in their search methods.
						</p>
						<p className='secondary-text mt-16'></p>
					</div>
					<p className='secondary-text mb-0'>
						How might I empower diners to confidently discover dining
						options and make decisions?
					</p>
				</div>
			</section>
			<section
				id='user-stories'
				className='section-container'>
				<header className='header-container'>
					<h2>
						<span className='source-code-pro'>USER STORIES</span>
						<br />
						What functionalities do diners desire?
					</h2>
				</header>
				<div className='content'>
					<p className='mb-32'>
						I began brainstorming solutions by creating user stories to
						explore specific functionalities that could enhance the dining
						out experience. Below are a few key diner stories:
					</p>
					<div className='grid-2x2'>
						<div className='card-vertical'>
							<div className='icon_wrapper'>
								<Image
									alt=''
									className='icon'
									loading='lazy'
									src='assets/svg/quotation-mark-blue.svg'
								/>
							</div>
							<p className='headline'>
								I want to easily get recommendations from friends, so I can
								confidently try new places.
							</p>
						</div>
						<div className='card-vertical'>
							<div className='icon_wrapper'>
								<Image
									alt=''
									className='icon'
									loading='lazy'
									src='assets/svg/quotation-mark-blue.svg'
								/>
							</div>
							<p className='headline'>
								I want personalized dining recommendations, so I can
								discover and explore options that suit me.
							</p>
						</div>
						<div className='card-vertical'>
							<div className='icon_wrapper'>
								<Image
									alt=''
									className='icon'
									loading='lazy'
									src='assets/svg/quotation-mark-blue.svg'
								/>
							</div>
							<p className='headline'>
								I want to search for options with more customization like
								filters, so I can avoid decision paralysis.
							</p>
						</div>
						<div className='card-vertical'>
							<div className='icon_wrapper'>
								<Image
									alt=''
									className='icon'
									loading='lazy'
									src='assets/svg/quotation-mark-blue.svg'
								/>
							</div>
							<p className='headline'>
								I want to write reviews that are visible to my friends
								only, so I can share my opinions comfortably.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section
				id='user-flows'
				className='section-container pb-0'>
				<header className='header-container'>
					<h2>
						<span>user flow</span>
						<br />
						How do I make diner stories a reality?
					</h2>
				</header>
				<div className='content mb-16'>
					<p>
						Given diners' habits with using mobile apps for
						decision-making, I decided that my product would also be a
						mobile application. To bring the diner stories I created to
						life, I brainstormed potential features, which I conceptualized
						into three potential routes using user flows. This process
						helped me begin visualizing how diners would interact with my
						product to enhance their dining experience!
					</p>
				</div>
				<div className='container-full-width userflow-walkthrough bg-black'>
					<div className='userflow-walkthrough_grid-container'>
						<div className='userflow-walkthrough_card'>
							<p className='userflow-walkthrough_card_subheader'>
								Route 01
							</p>
							<p className='userflow-walkthrough_card_headline'>
								Diner signs up and sets up their account
							</p>
							<ul className='userflowFeatures_list'>
								<li>Create an account with email or social media</li>
								<li>Input food preferences</li>
								<li>Add friends</li>
							</ul>
						</div>
						<div className='userflow-walkthrough_content-container'>
							<Image
								className='userflow-walkthrough_image'
								loading='eager'
								src='assets/images/tastebuds/route-1-user-flow.png'
								alt=''
							/>
							<div className='userflow-walkthrough_content'>
								<p>
									After a standard sign-up process, diners can input their
									food preferences then add their friends by linking their
									social media accounts and contacts. This would
									<span className='white'>
										enable personalized recommendations
									</span>{" "}
									for diners and allow diners to{" "}
									<span className='white'>
										{" "}
										see dining recommendations from friends{" "}
									</span>{" "}
									they add.
								</p>
							</div>
						</div>
					</div>
					<div className='userflow-walkthrough_grid-container'>
						<div className='userflow-walkthrough_card'>
							<p className='userflow-walkthrough_card_subheader'>
								Route 02
							</p>
							<p className='userflow-walkthrough_card_headline'>
								Diner searches for dining options
							</p>
							<ul className='userflowFeatures_list'>
								<li>Saved search presets</li>
								<li>Filter by 'Cuisines'</li>
								<li>Filter by 'Visit history'</li>
								<li>Personalized recommendations</li>
								<li>Compatibility score (% Match)</li>
								<li>Limited search results</li>
							</ul>
						</div>
						<div className='userflow-walkthrough_content-container'>
							<Image
								className='userflow-walkthrough_image'
								loading='eager'
								src='assets/images/tastebuds/route-2-user-flow.png'
								alt=''
							/>
							<div className='userflow-walkthrough_content'>
								<p className='subheading'>New search</p>
								<p>
									With a new search, diners can enter keywords and{" "}
									<span>detailed preferences</span>.
								</p>
								<p className='subheading'>"Filter by visit history"</p>
								<p>
									Diners like Alex and Cleo who value discovery can filter
									for <span>restaurants they haven't tried yet</span>{" "}
									(according to their visit history and reviews). Diners
									like Brandon who value convenience can also filter for
									restaurants they have visited.
								</p>
								<p className='subheading'>Compatability score (% Match)</p>
								<p>
									To enhance personalization, search results are sorted by
									“% Match” by default. Using AI and machine learning, this
									represents the diner's compatability with the restaurant
									based on their food preferences and dining history.
								</p>
								<p className='subheading'>Saved search</p>
								<p>
									For convenience, similar to the concept of
									"Saved/Favorite orders" diners can add "Saved searches"
									to efficiently find dining options they seek often. For
									instance, since <span>Brandon</span> often works late, he
									might create a saved search called
									<span>"Late-night dinner"</span> with the following
									preferences:{" "}
									<span>
										previously visited, 0.5 mile radius”, “open until 12:00
										AM”, and “offers takeout
									</span>
									. This would offer him a quick dining solution when
									pressed for time.
								</p>
								<p className='subheading'>Search results</p>
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
					<div className='userflow-walkthrough_grid-container'>
						<div className='userflow-walkthrough_card'>
							<p className='userflow-walkthrough_card_subheader'>
								Route 03
							</p>
							<p className='userflow-walkthrough_card_headline'>
								Diner reviews their dining experience
							</p>
							<ul className='userflowFeatures_list'>
								<li>Rate ordered items (required)</li>
								<li>Zero and half star rating system</li>
								<li>Strengths and weaknesses of dining experience</li>
								<li>Recommendation rating</li>
								<li>Written review (optional)</li>
							</ul>
						</div>
						<div className='userflow-walkthrough_content-container'>
							<Image
								className='userflow-walkthrough_image'
								loading='lazy'
								src='assets/images/tastebuds/route-3-user-flow.png'
								alt=''
							/>
							<div className='userflow-walkthrough_content'>
								<p>
									Users can record and share detailed dining experiences
									with friends via a<span>structured review process</span>{" "}
									that prioritize critical decision-making factors. To
									address diners' reluctance to write reviews in existing
									apps, this structured flow leverages the psychological
									phenomenon of 'completion bias'.{" "}
									<span>
										My aim was to encourage genuine, food-focused reviews,
										deter fake feedback, gatheruser data for personalized
										recommendations, and generate easily scannable content.{" "}
									</span>{" "}
									Only two areas are required, all else is optional
									(including written portion). Lastly, since my solution
									focuses on both personalized suggestions and
									word-of-mouth recommendations, diners can adjust privacy
									settings to{" "}
									<span>
										post private reviews to enhance their recommendations
										if they feel uncomfortable sharing some opinions
										publicly
									</span>
									.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				id='information-architecture'
				className='section-container border-0 bg-lightest-grey'>
				<header className='header-container'>
					<span> information architecture </span>
					<h2>Organizing information that makes sense to diners</h2>
				</header>
				<div className='content mb-32'>
					<p>
						Using the user flows, I began developing my app's information
						architecture. I planned on implementing a bottom navigation
						bar, so I first brainstormed the app's top-level destinations
						with a few secondary-level content:
					</p>
				</div>
				<div className='sitemap_wrapper'>
					<div className='sitemap_card'>
						<Image
							className='sitemap_icon'
							src='assets/svg/ic-home.svg'
							alt=''
						/>
						<p className='sitemap_headline'>Home</p>
						<ul className='list-none'>
							<li>Cuisine quick links</li>
							<li>Personalized recommendations</li>
							<li>Offers & promotions</li>
						</ul>
					</div>
					<div className='sitemap_card'>
						<Image
							className='sitemap_icon'
							src='assets/svg/ic-chat.svg'
							alt=''
						/>
						<p className='sitemap_headline'>Social feed</p>
						<ul className='list-none'>
							<li>Friends' reviews</li>
							<li>Inbox</li>
							<li>Write a review</li>
						</ul>
					</div>
					<div className='sitemap_card'>
						<Image
							className='sitemap_icon'
							src='assets/svg/ic-search.svg'
							alt=''
						/>
						<p className='sitemap_headline'>Search</p>
						<ul className='list-none'>
							<li>New search</li>
							<li>Saved search</li>
							<li>Search results</li>
						</ul>
					</div>
					<div
						id='grid-item-4'
						className='sitemap_card'>
						<Image
							className='sitemap_icon'
							src='assets/svg/ic-favorite.svg'
							alt=''
						/>
						<p className='sitemap_headline'>saved</p>
						<ul className='list-none'>
							<li>Saved restaurants</li>
							<li>Create collections</li>
							<li>Saved reviews from friends</li>
						</ul>
					</div>
					<div
						id='grid-item-5'
						className='sitemap_card'>
						<Image
							className='sitemap_icon'
							src='assets/svg/ic-account-circle.svg'
							alt=''
						/>
						<p className='sitemap_headline'>profile</p>
						<ul className='list-none'>
							<li>User's reviews</li>
							<li>Food preferences</li>
							<li>Account settings</li>
						</ul>
					</div>
				</div>
				<div className='content'>
					<p className='subheading'>Full site map</p>
					<div className='content-grid mt-24'>
						<div>
							<Image
								className='img-sitemap'
								src='assets/images/tastebuds/sitemap.png'
								alt=''
								loading='lazy'
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
					<p className='mb-32'>
						With the top-level destinations and established, I created a
						site map integrating features from my user flows. While
						sitemaps are typically associated with websites, this process
						helped me refine my user flows by conceptualizing content and
						information hierarchy.{" "}
					</p>
					<p className='subheading'>A dedicated search page</p>
					<p className='mb-32'>
						Most of the decision-making process for diners is comparative
						analysis. This intends to facilitate seamless navigation
						between restaurant listings and other pages for diners,
						optimizing their process by eliminating the need to switch
						between pages and losing the search progress!
					</p>
					<p className='subheading'>New features ✨</p>
					<p>
						Since I was able to identify and address gaps in my user flows,
						I used my user personas to further empathize with my target
						diners and brainstorm more features that would enhance their
						experience. I added direct messaging, exclusive in-app offers,
						and saved reviews and restaurants.
					</p>
					<p className='subheading'>Challenge 😵‍💫</p>
					<p>
						The most challenging aspect was deciding the placement of the
						social feed. Both personalized and word-of-mouth
						recommendations are valued by diners, making this
						prioritization difficult. Ultimately, I chose to display
						personalized recommendations first for their immediate value,
						while still ensuring easy access to word-of-mouth
						recommendations by placing them second on the navigation bar!
					</p>
				</div>
			</section>
			<section
				id='sketches'
				className='section-container border-0 pb-0'>
				<header className='header-container'>
					<span>designing</span>
					<h2>Sketches</h2>
				</header>
				<div className='content mb-0'>
					<p>
						During sketching, I made a few changes to the previous user
						flows and added a few new features!
					</p>
				</div>
				<div className='content'>
					<section>
						<div className='sketches-walkthrough__wrapper'>
							<p className='section-subheading sketches'>
								Route 1: Diner signs up and sets up account
							</p>
							<Image
								className='mb-24'
								src='assets/images/tastebuds/route-1-sketches-all-condensed.png'
								alt=''
							/>
							<p className='mb-0'>
								In my user flows, diners are prompted to add their friends
								during onboarding. However, while sketching, I realized
								this might make the process too lengthy, so I removed it
								from the flow.
							</p>
						</div>
						<div className='sketches-walkthrough__wrapper border-0 mb-0'>
							<div className='sketches-walkthrough_grid-container mb-0'>
								<video
									className='autoplay-video featured-media border'
									controls
									autoPlay
									loop
									muted>
									<source
										src='assets/images/tastebuds/route-1-sketches-preferences.mp4'
										type='video/mp4'
									/>
								</video>
								<div>
									<header className='sketches-walkthrough_grid-container--header'>
										<p className='subheading'>Food preferences</p>
									</header>
									<p>
										What data sets are necessary for personalized dining
										recommendations? Here's a few I brainstormed:
									</p>
									<div className='sketches-walkthrough__card mb-32'>
										<ul className='card--list mt-0'>
											<p className='card--headline'>Categories</p>
											<li>Cuisines</li>
											<li>Diet</li>
											<li>Dishes</li>
											<li>Ingredients</li>
											<li>Allergies</li>
										</ul>
									</div>
									<p className='medium-grey mb-0'>
										*Note: Only dietary preferences would be strictly
										adhered to: Food preferences are prioritized—not
										restrictive—to avoid limiting discovery!
									</p>
								</div>
							</div>
							<div className='mt-32'>
								<Accordion
									open={open}
									setOpen={setOpen}
									label="Where would the mobile app obtain information on 'ingredients'?">
									<p>
										With ingredients being the building blocks of food, I
										speculated that these preferences and restrictions
										would be key to generating relevant recommendations by
										targeting specific ingredients in menu item
										description.
										<br />
										<br /> After some research, I learned that this can be
										engineered using Yelp and Google APIs. However, this
										idea was a key moment in my brainstorming phase because
										this gave me the idea of integrating restaurants into
										the mobile solution as users to update their
										information and menus. This also gave me the idea for a
										business strategy to generate revenue from restaurant
										partnerships, keeping the app free for diners and
										providing user insights to restaurants to enhance their
										offerings, thus enhancing the overall diner journey
										cycle.
									</p>
								</Accordion>
							</div>
						</div>
					</section>
					<section>
						<p className='section-subheading sketches'>
							Route 2: Diner searches for dining options
						</p>
						{/* Search results with gif */}
						<div className='sketches-walkthrough__wrapper'>
							<div className='sketches-walkthrough_grid-container mb-0'>
								<video
									className='autoplay-video featured-media border'
									controls
									autoPlay
									loop
									muted>
									<source
										src='assets/images/tastebuds/route-2-sketches-search.mp4'
										type='video/mp4'
									/>
								</video>
								<div>
									<header className='sketches-walkthrough_grid-container--header'>
										<p className='subheading'>Search</p>
									</header>
									<p>
										To promote search relevance, I placed food preferences
										(filters) on the first search screen prompts users to
										enter preferences before initiating search.
									</p>
									<Accordion
										open={open}
										setOpen={setOpen}
										label='More details'>
										<ul className='span-fw-medium list--dark gap--medium'>
											<li>
												<span>Top 3 qualities voted by friends</span>
												<br /> When reviewing a dining experience, diners
												select up to 3 qualities that stood out. Qualities
												with the most votes are displayed so they can
												better gauge the restaurant's strengths at a
												glance.
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
						<div className='sketches-walkthrough__wrapper'>
							<div className='sketches-walkthrough_grid-container'>
								<video
									className='autoplay-video featured-media border'
									controls
									autoPlay
									loop
									muted
									controlsList='nodownload'>
									<source
										src='assets/images/tastebuds/route-2-sketches-search-results.mp4'
										type='video/mp4'
									/>
								</video>
								<div>
									<header className='sketches-walkthrough_grid-container--header'>
										<p className='subheading'>Search results</p>
									</header>
									<p>
										I wanted to help diners easily assess and compare
										restaurants, so my sketches present 3 scannable views:
										List view (default), map view, and bottom sheet
										(carousel).
									</p>
									<div className='sketches-walkthrough__card'>
										<ul className='card--list mt-0'>
											<p className='card--headline'>Features</p>
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
								<h3 className='section-subheading'>
									Where would the mobile app retrieve restaurant info?
								</h3>
								<p>
									To ensure that my ideas are feasible, I did some
									research:
								</p>
								<ol>
									<li className='fw-medium black'>
										<p className='fw-medium mb-8'>
											Using Yelp and Google APIs
										</p>
										<p>
											Leveraging these APIs, engineers can import existing
											data on restaurants from their Yelp and Google
											profiles.
										</p>
									</li>
									<li className='fw-medium black '>
										<p className='fw-medium mb-8'>
											Restaurant partnerships
										</p>
										<p className='span-fw-medium mb-0'>
											Alternatively or supplementally, the mobile solution
											could
											<span>
												integrate restaurants as users to update their info
												and menus
											</span>
											. This gave me the idea for a{" "}
											<span>
												business strategy with business partnerships to
												keep the app free
											</span>{" "}
											for diners and provide user insights for restaurants
											to enhance the overall diner journey!
										</p>
									</li>
								</ol>
							</div>
						</div>
						<div className='sketches-walkthrough__wrapper mb-0 border-0'>
							<div className='sketches-walkthrough_grid-container mb-32'>
								<Image
									alt=''
									loading='lazy'
									src='assets/images/tastebuds/route-2-sketch-restaurant-listing.png'
								/>
								<div>
									<header className='sketches-walkthrough_grid-container--header'>
										<p className='subheading'>Restaurant listing</p>
									</header>
									<p>
										I focused on presenting essential information above the
										fold and on the first screen. The home page features
										menu items recommended for the diner, as well as
										bestsellers among their friends. I also added 'Deals'
										because diners like Alex and Brandon highly prioritize
										value!
									</p>
									<div className='sketches-walkthrough__card'>
										<ul className='card--list mt-0'>
											<p className='card--headline'>Features</p>
											<li>Restaurant strengths</li>
											<li>Commute and walk time</li>
											<li>Personalized item recommendations</li>
											<li>Bestsellers among friends</li>
										</ul>
									</div>
								</div>
							</div>
							<p className='subheading mv-24 dark-grey'>Sketches flow</p>
							<Image
								src='assets/images/tastebuds/route-2-sketches-flow-search-results.png'
								alt='Four sketches of a mobile app interface for finding Taiwanese restaurants.'
							/>
						</div>
					</section>
				</div>
				<div className='content mb-0'>
					<p className='section-subheading sketches text-center'>
						Route 3: Diner reviews a dining experience
					</p>
				</div>
				<div className='content medium-small mt-0 mb-40'>
					<Image
						src='assets/images/tastebuds/route-3-sketches-02.png'
						alt=''
					/>
					<br />
					<br />
					<Image
						src='assets/images/tastebuds/route-3-sketches-01.png'
						alt=''
					/>
				</div>
				<div className='content mt-0'>
					<div className='sketches-walkthrough__wrapper'>
						<p className='mb-0'>
							I wanted to encourage detailed reviews without overwhelming
							users, so I sketched an overview page for more freedom and
							control. To prevent errors, diners can modify their
							restaurant selection. Additionally, I added a slider to
							clarify the unconventional rating system with zero and half
							stars.
						</p>
					</div>
					<div className='sketches-walkthrough__wrapper'>
						<div className='sketches-walkthrough_grid-container mb-32'>
							<Image
								alt=''
								loading='lazy'
								src='assets/images/tastebuds/route-3-sketch-review-item.png'
							/>
							<div>
								<header className='sketches-walkthrough_grid-container--header'>
									<p className='subheading'>Review ordered item(s)</p>
								</header>
								<p>
									My goal in requiring diners to review menu items is to
									strengthen the app's food-focused intention and
									discourage fake reviews. By leveraging user data, I added
									input fields for voting on authenticity and flavors,
									allowing the app to tailor recommendations and generate
									scannable content more effectively.
								</p>
								<div className='sketches-walkthrough__card'>
									<ul className='card--list mt-0'>
										<p className='card--headline'>New features</p>
										<li>Edit menu item details</li>
										<li>Food critique (optional)</li>
										<li>Tips on ordering</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='mb-16'>
							<Accordion
								open={open}
								setOpen={setOpen}
								label='More details'>
								<ul className='span-fw-medium list--dark gap--medium'>
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
										in low-fidelity. I wanted to help diners distinguish
										tips from main review content.
									</li>
								</ul>
							</Accordion>
						</div>
					</div>
					<div className='sketches-walkthrough__wrapper mb-0 border-0 pb-0'>
						<div className='sketches-walkthrough_grid-container mb-0'>
							<Image
								alt=''
								loading='lazy'
								src='assets/images/tastebuds/route-3-sketch-pros-and-cons.png'
							/>
							<div>
								<header className='sketches-walkthrough_grid-container--header'>
									<p className='subheading'>Strengths and weaknesses</p>
								</header>
								<p>
									This is another effort to leverage user data to create
									scannable content that efficiently illustrates the
									restaurant's profile. At this stage, I envisioned
									restaurants using the app to enhance its value
									proposition, potentially generating revenue to offer it
									free to users, and improve the entire diner journey.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='container-full-width bg-dark-grey'>
					<div className='content xxl'>
						<p className='section-subheading white mb-32'>
							All route 1 sketches
						</p>
						<Image
							alt=''
							className='route-1-sketches-all_wrapper'
							loading='lazy'
							src='assets/images/tastebuds/route-1-sketches-all.png'
						/>
					</div>
				</div>
			</section>
			<section
				id='guerilla-test'
				className='section-container bg-lightest-grey border-0'>
				<header className='header-container'>
					<h2>
						<span>test</span>
						<br />
						Guerilla testing
					</h2>
				</header>
				<div className='content'>
					<p>
						Since my sketches for routes 2 and 3 were close to
						low-fidelity, I prototoyped them and conducted guerilla
						usability tests with 5 participants. Here's what I found:
					</p>
				</div>
				<div className='testing-outcomes_grid'>
					<div className='testing-outcomes-card'>
						<Image
							alt=''
							className='testing-outcomes-icon-category'
							loading='lazy'
							src='assets/images/tastebuds/icon-checkmark-circle-filled-green.png'
						/>
						<div className='card__content validation'>
							<Image
								alt=''
								className='testing-outcomes-icon'
								loading='lazy'
								src='assets/svg/tastebuds/ic-discount-tag.svg'
							/>
							<p>
								All diners pointed out and affirmed the restaurant "deal".
							</p>
						</div>
					</div>
					<div className='testing-outcomes-card'>
						<Image
							alt=''
							className='testing-outcomes-icon-category'
							loading='lazy'
							src='assets/images/tastebuds/icon-checkmark-circle-filled-green.png'
						/>
						<div className='card__content validation'>
							<Image
								alt=''
								className='testing-outcomes-icon'
								loading='lazy'
								src='assets/svg/tastebuds/ic-discount-tag.svg'
							/>
							<p>All diners affirmed the personalized recommendations.</p>
						</div>
					</div>
					<div className='testing-outcomes-card'>
						<Image
							alt=''
							className='testing-outcomes-icon-category'
							loading='lazy'
							src='assets/images/tastebuds/icon-checkmark-circle-filled-green.png'
						/>
						<div className='card__content validation'>
							<Image
								alt=''
								className='testing-outcomes-icon'
								loading='lazy'
								src='assets/svg/tastebuds/ic-discount-tag.svg'
							/>
							<p>
								All diners found the prototype intuitive and affirmed its
								potential.
							</p>
						</div>
					</div>
					<div className='testing-outcomes-card'>
						<Image
							alt=''
							className='testing-outcomes-icon-category'
							loading='lazy'
							src='assets/images/tastebuds/icon-checkmark-circle-filled-green.png'
						/>
						<div className='card__content validation'>
							<Image
								alt=''
								className='testing-outcomes-icon'
								loading='lazy'
								src='assets/svg/tastebuds/ic-map-with-location-icon.svg'
							/>
							<p>The map view is essential for a location based search.</p>
						</div>
					</div>
					<div className='testing-outcomes-card'>
						<Image
							alt=''
							className='testing-outcomes-icon-category'
							loading='lazy'
							src='assets/images/tastebuds/icon-cancel-circle-filled-red.png'
						/>
						<div className='card__content invalidation'>
							<Image
								alt=''
								className='testing-outcomes-icon'
								loading='lazy'
								src='assets/svg/tastebuds/ic-not-visible.svg'
							/>
							<p>
								3 diners didn't notice the map (behind the list of
								results).
							</p>
						</div>
					</div>
					<div className='testing-outcomes-card'>
						<Image
							alt=''
							className='testing-outcomes-icon-category'
							loading='lazy'
							src='assets/images/tastebuds/icon-cancel-circle-filled-red.png'
						/>
						<div className='card__content invalidation'>
							<Image
								alt=''
								className='testing-outcomes-icon'
								loading='lazy'
								src='assets/svg/tastebuds/ic-star-rating-slider.svg'
							/>
							<p>
								4 diners struggled with the slider design to rate stars.
							</p>
						</div>
					</div>
				</div>
				<div className='content'>
					<a href='https://docs.google.com/document/d/1nq9g-vct7cKA-PFsIPlcCAuN3rX1QibhBRnavFDOs_0/edit?usp=sharing'>
						<p className='link-blue text-center'>
							View complete test report
						</p>
					</a>
				</div>
			</section>
			<section
				id='low-fidelity'
				className='section-container'>
				<header className='header-container'>
					<h2>
						<span>design iterations</span>
						<br />
						Low-fidelity wireframes
					</h2>
				</header>
				{/* Route 1 low fidelity wireframes */}
				<section className='content'>
					<p>
						Using my testing insights, I iterated my sketches into
						low-fidelity wireframes.
					</p>
					<p className='section-subheading'>
						Route 1: Diner signs up and sets up account
					</p>
					<p>
						While I didn’t test this route, I made some improvements to
						improve clarity and flow!
					</p>
					<div className='design-walkthrough_wrapper mt-32'>
						<p className='subheading'>
							Streamline onboarding with a linear flow and progress bar
						</p>
						<Image
							className='mb-24'
							src='assets/images/tastebuds/route-1-low-fidelity-food-preferences-01.png'
							alt=''
						/>
						<p className='span-fw-medium mb-0'>
							I decided to abandon the onboarding flow I sketched for a
							linear process to streamline the experience. I also added a
							progress bar and a modal checkpoint to boost completion
							rates!
						</p>
					</div>
					<div className='design-walkthrough_wrapper mt-32 mb-0 pb-0 border-0'>
						<p className='subheading'>
							Enhancing recommendations with additional diner preferences
						</p>
						<Image
							className='mb-24'
							src='assets/images/tastebuds/route-1-low-fidelity-food-preferences-02.png'
							alt=''
						/>
						<p className='span-fw-medium mb-0'>
							My participants mentioned avoiding ingredients that aren't
							technically allergies, so I added a step to input ingredients
							they simply dislike—"Disliked Ingredients".
						</p>
						<div>
							<p className='subheading mt-32 mb-24 dark-grey'>
								Complete wire flow
							</p>
							<Image
								alt=''
								loading='lazy'
								sizes='90vw'
								src='assets/images/tastebuds/route-1-low-fidelity-wire-flow.png'
							/>
						</div>
					</div>
				</section>
				{/* Route 2 low fidelity wireframes */}
				<section className='content-wrapper'>
					<p className='section-subheading mb-32'>
						Route 2: Diner searches for dining options
					</p>
					<div className='design-walkthrough_wrapper mb-0 border-0'>
						<div className='design-walkthrough_grid-container'>
							<Image
								alt=''
								loading='lazy'
								className='featured-media low-fidelity'
								src='assets/images/tastebuds/route-2-low-fidelity-search-results.mp4'
							/>
							<div>
								<header className='design-walkthrough_header'>
									<p className='subheading'>Search results</p>
								</header>
								<p>
									I changed the first screen of results to a split view and
									added "Offers". I wanted to explore additional ideas to
									help diners efficiently compare restaurants, so I
									designed a way for diners to preview listings in a
									swipeable carousel.
								</p>
								<div className='design-walkthrough_card'>
									<ul className='card_list mt-0'>
										<li className='card_headline'>New features</li>
										<li>Map button at the bottom of list</li>
										<li>Offers displayed in results</li>
										<li>Split view displaying map and list</li>
										<li>Preview listings in a carousel</li>
									</ul>
								</div>
							</div>
						</div>
						<p className='subheading'>Restaurant listing</p>
						<div className='route-2-low-fidelity-all_grid-container'>
							<Image
								src='assets/images/tastebuds/route-2-low-fidelity-listing-home.png'
								alt=''
							/>
							<Image
								src='assets/images/tastebuds/route-2-low-fidelity-listing-info.png'
								alt=''
							/>
							<Image
								src='assets/images/tastebuds/route-2-low-fidelity-listing-menu.png'
								alt=''
							/>
							<Image
								src='assets/images/tastebuds/route-2-low-fidelity-listing-photos.png'
								alt=''
							/>
							<Image
								src='assets/images/tastebuds/route-2-low-fidelity-listing-reviews.png'
								alt=''
							/>
						</div>
						<p className='span-fw-medium mb-32'>
							Throughout designing the remaining listing pages, I struggled
							the most with the reviews page due to the amount of
							information I wanted to display. The wireframe I chose
							organizes essential information that prioritizes scannability
							and facilitates quick navigation to restaurant lists, menu
							items, as well as community engagement. This was the point I
							began to brainstorm the social aspect of the app, exploring
							how user engagement with friends' reviews could enhance
							tailored recommendations. I planned to develop these ideas
							further in my high-fidelity wireframes and implement them in
							my social feed page!
						</p>
						<p>
							The only other changes I made were restructuring the home
							page to display more essential information above the fold by
							displaying order recommendations in a carousel to enhance
							scannability.
						</p>
						<p className='subheading'>Iteration process</p>
						<p>Here's a quick overview of my iteration process!</p>
						<div className='r2-lowfi-design-evolution_grid-container'>
							<p className='medium-grey lowfi-design-evolution_heading-01'>
								Previous
							</p>
							<p className='black lowfi-design-evolution_heading-02'>
								Iteration
							</p>
							<Image
								alt=''
								className='img-1'
								loading='lazy'
								src='assets/images/tastebuds/route-2-sketch-restaurant-listing.png'
							/>
							<Image
								alt=''
								className='img-2'
								loading='lazy'
								src='assets/images/tastebuds/route-2-sketch-restaurant-listing-menu.png'
							/>
							<Image
								alt=''
								className='img-design-evolution-arrow'
								loading='lazy'
								src='assets/images/tastebuds/artwork-arrow-right-blue.png'
							/>
							<Image
								alt=''
								className='img-3'
								loading='lazy'
								src='assets/images/tastebuds/route-2-low-fidelity-listing-home.png'
							/>
							<Image
								alt=''
								className='img-4'
								loading='lazy'
								src='assets/images/tastebuds/route-2-low-fidelity-listing-menu.png'
							/>
						</div>
					</div>
					<div className='content'>
						<p className='section-subheading'>
							Route 3: Diner reviews a dining experience
						</p>
						<div className='design-walkthrough_wrapper mb-0 border-0'>
							<p className='subheading'>Streamlined restaurant review</p>
							<Image
								alt=''
								className='hide'
								loading='lazy'
								sizes='100vw'
								src='assets/images/tastebuds/illustration-sketches-route-1-review-iteration.png'
							/>
							<div className='design-walkthrough_grid-container mb-0'>
								<Image
									alt=''
									loading='lazy'
									className='featured-media low-fidelity'
									src='assets/images/tastebuds/route-3-low-fidelity-restaurant-rating.mp4'
								/>
								<video
									className='autoplay-video'
									loop
									muted>
									<source
										src='assets/images/tastebuds/route-3-low-fidelity-restaurant-rating.mp4'
										type='video/mp4'
									/>
								</video>
								<div>
									<p className='span-fw-medium mb-32'>
										I streamlined the flow further and enhanced visual
										feedback, information architecture, and system status.
										To increase trust among diners with reviews and address
										potential issues with subjectivity, I implemented a
										standardized rating system!
									</p>
									<div className='design-walkthrough_card'>
										<ul className='card_list mt-0'>
											<p className='card_headline'>New features</p>
											<li>Clear copy with more natural language</li>
											<li>Progress bar</li>
											<li>Standardized tiered rating system</li>
											<li>
												Mutually exclusive strengths and weaknesses
												selection
											</li>
											<li>Drag interaction to rate stars</li>
											<li>Reset & finish later option</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<p className='section-subheading'>Review flow iteration</p>
						<p>
							The low-fidelity flow streamlined from 7 screens to 4
							screens!
						</p>
						<p className='medium-grey lowfi-design-evolution_heading-01 mb-8'>
							Previous
						</p>
						<Image
							alt=''
							loading='lazy'
							src='assets/images/tastebuds/route-3-sketches-wireflow-labeled.png'
						/>
						<br />
						<br />
						<p className='black lowfi-design-evolution_heading-02 mb-8'>
							Iteration
						</p>
						<Image
							alt=''
							loading='lazy'
							src='assets/images/tastebuds/route-3-low-fidelity-wireflow-labeled.png'
						/>
					</div>
				</section>
			</section>
			<section
				id='branding'
				className='section-container'>
				<header className='header-container'>
					<h2>
						<span>branding</span>
						<br />
						Style guide
					</h2>
				</header>
				<div className='content'>
					<p>
						My next round of designs were low-fidelity wireframes, where I
						implemented the recommendations I made as a result of my first
						usability test.
					</p>
					<p className='subheading mb-16'>Color Palette</p>
					<p className='span-fw-medium'>
						In crafting my color palette,{" "}
						<span>
							my goal was to address diners' mistrust and lack of
							confidence, so I wanted to foster warmth, friendliness,
							trust, excitement, and a sense of community.
						</span>
						<br />
						<br />
						At first, I heavily considered the color red, which is used by
						major competitors in the consumer dining industry, such as
						McDonald's, Doordash, Yelp, and Open Table, to stimulate
						appetite and spending. However, I realized that my mobile
						solution aims to leverage personal recommendations to build
						trust and confidence, not drive consumer spending. Therefore,{" "}
						<span>
							I chose a sunflower yellow to encourage social interaction
							and exploration, complemented by a sky blue to provide a
							sense of familiarity, as it is commonly used in interactive
							icons across social media apps.
						</span>
					</p>
					<div className='mb-32'>
						<Image
							className='img-branding-colors'
							src='assets/images/tastebuds/branding-colors.png'
							alt=''
						/>
					</div>
					<div className='flex-row gap-40 align-center mb-32'>
						<div>
							<p className='subheading mb-24'>Typography</p>
							<Image
								className='img-branding-typography'
								src='assets/images/tastebuds/branding-typography.png'
								alt=''
							/>
						</div>
						<p className='notes text-small'>
							Spoiler Alert: Yes, I shortly realized this type was too
							small. And yes, it was a pain to readjust all of my designs
							because I didn't know to use Figma's public library tool.
							This was one hard lesson to learn 😭
						</p>
					</div>
					<div className=' flex-row gap-40 mb-32'>
						<div>
							<p className='subheading mb-16'>Buttons</p>
							<Image
								className='img-branding-buttons'
								src='assets/images/tastebuds/branding-buttons.png'
								alt=''
							/>
						</div>
						<div>
							<div className='mb-24'>
								<p className='subheading mb-24'>Search bar</p>
								<Image
									className='img-branding-search-bar'
									src='assets/images/tastebuds/branding-search-bar.png'
									alt=''
								/>
							</div>
							<div>
								<p className='subheading mb-24'>Badges</p>
								<Image
									className='img-branding-badges'
									src='assets/images/tastebuds/branding-badges.png'
									alt=''
								/>
							</div>
						</div>
					</div>
					<div className='mb-32'>
						<p className='subheading mb-24'>8-point-grid</p>
						<Image
							className='img-branding-8-point-grid'
							src='assets/images/tastebuds/branding-8-point-grid.png'
							alt=''
						/>
					</div>
				</div>
			</section>
			<section
				id='high-fidelity'
				className='section-container'>
				<header className='header-container'>
					<span>design</span>
					<h2>High-fidelity prototype</h2>
				</header>
				<div className='content-grid mt-24 mb-0'>
					<div>
						<p>
							With my new style guide, I designed high-fidelity wireframes
							and prototyped them for my next round of usability tests. A
							key objective in my high-fidelity explorations was enhancing
							accessibility, so I reviewed{" "}
							<Link
								className='link-blue'
								href='https://developer.apple.com/design/human-interface-guidelines/accessibility'>
								Apple's Human Interface Guidelines for Accessibility
							</Link>{" "}
							and{" "}
							<Link
								className='link-blue'
								href='https://www.w3.org/TR/WCAG22/'>
								Web Content Accessibility Guidelines (WCAG)
							</Link>
							.
						</p>
						<p className='span-fw-medium'>
							My learnings guided me to{" "}
							<span>
								significantly increase spacing and physical interactions
								when possible
							</span>
							, supporting both users with limited mobility and power
							users.
						</p>
					</div>
					<aside>
						<p>
							This reinforced my dedication to accessibility, one of my
							core design values!
						</p>
					</aside>
				</div>
				<div className='mv-48 content-wrapper'>
					<h3 className='section-subheading'>
						Route 1: Sign up + onboarding
					</h3>
					<p>
						Given how essential food preferences are to curate accurate
						dining recommendations, my goal was to make onboarding more
						engaging to encourage users to input preferences now than
						later. Therefore,{" "}
						<span className='fw-medium'>
							I implemented more conversational UI and visual aids and
							further streamlined the user flow.
						</span>
					</p>
				</div>
				<div className='content-wrapper mb-16'>
					<div className='design-walkthrough_wrapper border-0 mb-0'>
						<div className='flex-row gap-24 pb-0'>
							<div className='design-walkthrough_grid-1-col'>
								<video
									className='autoplay-video'
									loop
									muted>
									<source
										src='assets/images/tastebuds/prototype-high-fidelity-route-1-v1-intro.mp4'
										type='video/mp4'
									/>
								</video>
								<div>
									<p className='subheading'>Introduction screens</p>
									<p>
										I added intro screens to educate users about the app
										and the importance of inputing their food preferences
										now.
									</p>
								</div>
							</div>
							<div className='design-walkthrough_grid-1-col'>
								<video
									className='autoplay-video'
									loop
									muted>
									<source
										src='assets/images/tastebuds/prototype-high-fidelity-v1-route-1-food-preferences.mp4'
										type='video/mp4'
									/>
								</video>
								<div>
									<p className='subheading'>Food preferences</p>
									<p>
										I added the option to suggest missing items,
										implemented conversational UI, help icons, and more
										visual aids.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='mb-40'>
						<h3 className='section-subheading content mb-16'>
							Route 2: Diner searches for a restaurant
						</h3>
						<div className='content-grid'>
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
				</div>
				<div className='design-walkthrough_wrapper'>
					<header className='design-walkthrough_header'>
						<p className='subheading'>Home page</p>
					</header>
					<div className='design-evolution_grid-container-3-col'>
						<p className='medium-grey hf-heading-01 hide'>Previous</p>
						<p className='black hf-heading-02 hide'>Iteration</p>
						<Image
							alt=''
							className='img-1 img-wireframe-border'
							loading='lazy'
							src='assets/images/tastebuds/route-2-low-fidelity-home.png'
						/>
						<Image
							alt=''
							className='img-2 img-wireframe-border'
							loading='lazy'
							src='assets/images/tastebuds/route-2-low-fidelity-listing-reviews.png'
						/>
						<Image
							alt=''
							className='img-design-evolution-arrow'
							loading='lazy'
							src='assets/images/tastebuds/artwork-arrow-right-blue.png'
						/>
						<video
							className='autoplay-video img-3'
							loop
							muted>
							<source
								src='assets/images/tastebuds/prototype-route-2-high-fidelity-v1-home.mp4'
								type='video/mp4'
							/>
						</video>
						<div className='grid-content flex-row gap-40'>
							<div>
								<p className='fw-medium mb-8'>For You</p>
								<p className='mb-0'>
									I wanted to enhance engagement and personalization, so I
									reorganized the layout to improve the info and content
									hierarchy, redesigned the navigation tabs to be more
									distinct, and revised label copy using conversational UI.
								</p>
							</div>
							<div>
								<p className='fw-medium mb-8'>Following</p>
								<p className='mb-0'>
									Understanding how diners engage with reviews, I designed
									the "Following" page and refined its role in the
									ecosystem. In addition to standard social interactive
									features, diners can easily navigate to the restaurant
									and menu items.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='design-walkthrough_wrapper'>
					<header className='design-walkthrough_header'>
						<p className='subheading'>Search process</p>
					</header>
					<div className='design-evolution_grid-container-3-col mb-40'>
						<p className='medium-grey hf-heading-01 hide'>Previous</p>
						<p className='black hf-heading-02 hide'>Iteration</p>
						<Image
							alt=''
							className='img-1'
							loading='lazy'
							src='assets/images/tastebuds/route-2-low-fidelity-search-preferences.png'
						/>
						<Image
							alt=''
							className='img-2'
							loading='lazy'
							src='assets/images/tastebuds/route-2-low-fidelity-search-new.png'
						/>
						<Image
							alt=''
							className='img-design-evolution-arrow'
							loading='lazy'
							src='assets/images/tastebuds/artwork-arrow-right-blue.png'
						/>
						<video
							className='autoplay-video img-3'
							loop
							muted>
							<source
								src='assets/images/tastebuds/prototype-route-2-high-fidelity-v1-search.mp4'
								type='video/mp4'
							/>
						</video>
					</div>
					<p className='span-fw-medium mb-0'>
						I added the option to <span>select up to 3 key qualities</span>{" "}
						in the filters. After realizing that the{" "}
						<span>2-column layout was too crowded</span> in other
						categories, I reduced it to 1-column and increased spacing
						between elements.
					</p>
				</div>
				<div className='design-walkthrough_wrapper'>
					<header className='design-walkthrough_header'>
						<p className='subheading'>Search results</p>
					</header>
					<div className='design-evolution_grid-container-3-col mb-40'>
						<p className='medium-grey hf-heading-01 hide'>Previous</p>
						<p className='black hf-heading-02 hide'>Iteration</p>
						<Image
							alt=''
							className='img-1'
							loading='lazy'
							src='assets/images/tastebuds/route-2-sketch-search-results-list.png'
						/>
						<Image
							alt=''
							className='img-2'
							loading='lazy'
							src='assets/images/tastebuds/route-2-sketch-search-results-card-carousel.png'
						/>
						<Image
							alt=''
							className='img-design-evolution-arrow'
							loading='lazy'
							src='assets/images/tastebuds/artwork-arrow-right-blue.png'
						/>
						<video
							className='autoplay-video img-3'
							loop
							muted>
							<source
								src='assets/images/tastebuds/prototype-route-2-high-fidelity-v1-search-results.mp4'
								type='video/mp4'
							/>
						</video>
					</div>
					<p className='mb-0'>
						I forfeited "Listing previews" since my test participants did
						not engaged with it. I also redesigned the bottom sheet to be
						more consistent with the list view.
					</p>
				</div>
				<div className='design-walkthrough_wrapper pb-0 mb-0 border-0'>
					<div className='design-walkthrough_grid-container pb-0 mb-0'>
						<video
							className='autoplay-video'
							loop
							muted>
							<source
								src='assets/images/tastebuds/prototype-route-2-high-fidelity-v1-listing.mp4'
								type='video/mp4'
							/>
						</video>
						<div>
							<header className='design-walkthrough_header'>
								<p className='subheading'>Restaurant listing</p>
							</header>
							<p>
								I wanted to further amplify social engagement and
								conceptualize restaurant partnerships, so I enhanced social
								proof elements, added more engagement features, and
								developed the 'Redeem offer' screen.
							</p>
							<div className='design-walkthrough_card'>
								<ul className='card_list mt-0'>
									<p className='card_headline'>New features</p>
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
				<div className='content-wrapper'>
					<div className='mb-40'>
						<h3 className='section-subheading black'>
							Route 3: Diner reviews a restaurant
						</h3>
						<p>
							I adapted this route to the changes I made in routes 1 and 2,
							streamlined the process, and enhanced its usability.
						</p>
					</div>
					<div className='design-walkthrough_wrapper'>
						<header className='design-walkthrough_header'>
							<p className='subheading'>Reviewing menu items</p>
						</header>
						<div className='design-evolution_grid-container-3-col mb-40'>
							<p className='medium-grey hf-heading-01 hide'>Previous</p>
							<p className='black hf-heading-02 hide'>Iteration</p>
							<Image
								alt=''
								className='img-1'
								loading='lazy'
								src='assets/images/tastebuds/route-3-low-fidelity-06-menu-items-blank.png'
							/>
							<Image
								alt=''
								className='img-2'
								loading='lazy'
								src='assets/images/tastebuds/route-3-low-fidelity-07-menu-item-blank.png'
							/>
							<Image
								alt=''
								className='img-design-evolution-arrow'
								loading='lazy'
								src='assets/images/tastebuds/artwork-arrow-right-blue.png'
							/>
							<video
								className='autoplay-video img-3'
								loop
								muted>
								<source
									src='assets/images/tastebuds/prototype-high-fidelity-v1-route-3-menu-item.mp4'
									type='video/mp4'
								/>
							</video>
						</div>
						<p className='mb-0'>
							I removed the "What was it like?" section, added a search bar
							and filters to find menu items, simplified the list layout,
							and added a number badge that indicates how many items have
							been reviewed.
						</p>
					</div>
					<div className='design-walkthrough_wrapper mb-0 border-0  pb-0'>
						<header className='design-walkthrough_header'></header>
						<div className='design-walkthrough_grid-container mb-0'>
							<video
								className='autoplay-video'
								loop
								muted>
								<source
									src='assets/images/tastebuds/prototype-high-fidelity-v1-route-3-tag-photo.mp4'
									type='video/mp4'
								/>
							</video>
							<div>
								<header className='design-walkthrough_header'>
									<p className='subheading'>
										Adding media content and tagging menu items
									</p>
								</header>
								<p>
									This is the flow for diners to add photos and videos to
									their review! Since diners have the habit of searching up
									specific menu items, I designed a feature for diners to
									tag their photos with the respective menu item(s) and/or
									friends.
								</p>
								<div className='design-walkthrough_card'>
									<ul className='card_list mt-0'>
										<p className='card_headline'>New features</p>
										<li>Tag menu item</li>
										<li>Tag people</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				id='usability-testing-2'
				className='section-container'>
				<header className='header-container'>
					<span>test</span>
					<h2>Usability testing II: High-fidelity prototype</h2>
				</header>
				<div className='content-wrapper  mb-16'>
					<p className='section-subheading'>Methodology</p>
					<p>
						I conducted moderated usability testing with
						<span className='fw-medium'>5 participants </span>for remotely.
						Each test included the following tasks:
					</p>
					<ol>
						<li>
							<span className='fw-medium'>Route 1</span>: Create an account
							using your Facebook login.
						</li>
						<li>
							<span className='fw-medium'>Route 2</span>: Find a restaurant
							to dine at within 3 miles of your current location.
						</li>
						<li>
							<span className='fw-medium'>Route 3</span>: Write a 4.5-star
							review with a photo for Olives Branch Bistro, where you had a
							Mixed Kebab Plate.
						</li>
					</ol>
				</div>
				<div className='content-wrapper mb-16'>
					<h3 className='section-subheading'>
						Participant characteristics
					</h3>
					<ul>
						<li>Ages 21-30</li>
						<li>
							Uses at least one online method to find a restaurant to dine
							at
						</li>
						<li>Dines out at least once a week</li>
					</ul>
				</div>
				<div className='content'>
					<h3 className='section-subheading'>Outcomes</h3>
					<div className='testing-outcomes_grid'>
						<div className='testing-outcomes-card'>
							<Image
								alt=''
								className='testing-outcomes-icon-category'
								loading='lazy'
								src='assets/images/tastebuds/icon-checkmark-circle-filled-green.png'
							/>
							<div className='card__content validation'>
								<Image
									alt=''
									className='testing-outcomes-icon hide'
									loading='lazy'
									src='assets/svg/tastebuds/ic-discount-tag.svg'
								/>
								<p>
									All diners praised the UI design and prefer it over
									existing tools like Yelp.
								</p>
							</div>
						</div>
						<div className='testing-outcomes-card'>
							<Image
								alt=''
								className='testing-outcomes-icon-category'
								loading='lazy'
								src='assets/images/tastebuds/icon-checkmark-circle-filled-green.png'
							/>
							<div className='card__content validation'>
								<Image
									alt=''
									className='testing-outcomes-icon hide'
									loading='lazy'
									src='assets/svg/tastebuds/ic-discount-tag.svg'
								/>
								<p>
									Diners find the personalization and customization
									features very helpful.
								</p>
							</div>
						</div>
						<div className='testing-outcomes-card'>
							<Image
								alt=''
								className='testing-outcomes-icon-category'
								loading='lazy'
								src='assets/images/tastebuds/icon-checkmark-circle-filled-green.png'
							/>
							<div className='card__content validation'>
								<Image
									alt=''
									className='testing-outcomes-icon hide'
									loading='lazy'
									src='assets/svg/tastebuds/ic-discount-tag.svg'
								/>
								<p>
									3 diners utilized alternative routes to explore dining
									options.
								</p>
							</div>
						</div>
						<div className='testing-outcomes-card'>
							<Image
								alt=''
								className='testing-outcomes-icon-category'
								loading='lazy'
								src='assets/images/tastebuds/icon-checkmark-circle-filled-green.png'
							/>
							<div className='card__content validation'>
								<Image
									alt=''
									className='testing-outcomes-icon hide'
									loading='lazy'
									src='assets/svg/tastebuds/ic-map-with-location-icon.svg'
								/>
								<p>
									All diners found the content informative, diverse, and
									inclusive.
								</p>
							</div>
						</div>
						<div className='testing-outcomes-card'>
							<Image
								alt=''
								className='testing-outcomes-icon-category'
								loading='lazy'
								src='assets/images/tastebuds/icon-cancel-circle-filled-red.png'
							/>
							<div className='card__content invalidation'>
								<Image
									alt=''
									className='testing-outcomes-icon hide'
									loading='lazy'
									src='assets/svg/tastebuds/ic-not-visible.svg'
								/>
								<p>
									4 diners struggled to comprehend the on-page
									explanations.
								</p>
							</div>
						</div>
						<div className='testing-outcomes-card'>
							<Image
								alt=''
								className='testing-outcomes-icon-category'
								loading='lazy'
								src='assets/images/tastebuds/icon-cancel-circle-filled-red.png'
							/>
							<div className='card__content invalidation'>
								<Image
									alt=''
									className='testing-outcomes-icon hide'
									loading='lazy'
									src='assets/svg/tastebuds/ic-star-rating-slider.svg'
								/>
								<p>
									3 diners struggled with the interaction design of rating
									stars.
								</p>
							</div>
						</div>
						<div className='testing-outcomes-card'>
							<Image
								alt=''
								className='testing-outcomes-icon-category'
								loading='lazy'
								src='assets/images/tastebuds/icon-cancel-circle-filled-red.png'
							/>
							<div className='card__content invalidation'>
								<Image
									alt=''
									className='testing-outcomes-icon hide'
									loading='lazy'
									src='assets/svg/tastebuds/ic-star-rating-slider.svg'
								/>
								<p>
									The navigation to write a review was somewhat unclear to
									diners.
								</p>
							</div>
						</div>
						<div className='testing-outcomes-card'>
							<Image
								alt=''
								className='testing-outcomes-icon-category'
								loading='lazy'
								src='assets/images/tastebuds/icon-cancel-circle-filled-red.png'
							/>
							<div className='card__content invalidation'>
								<Image
									alt=''
									className='testing-outcomes-icon hide'
									loading='lazy'
									src='assets/svg/tastebuds/ic-star-rating-slider.svg'
								/>
								<p>
									Everyone overlooked significance of the social media
									functionality.
								</p>
							</div>
						</div>
						<div className='testing-outcomes-card'>
							<Image
								alt=''
								className='testing-outcomes-icon-category'
								loading='lazy'
								src='assets/images/tastebuds/icon-cancel-circle-filled-red.png'
							/>
							<div className='card__content invalidation'>
								<Image
									alt=''
									className='testing-outcomes-icon hide'
									loading='lazy'
									src='assets/svg/tastebuds/ic-star-rating-slider.svg'
								/>
								<p>A few diners found the review process lengthy.</p>
							</div>
						</div>
					</div>
				</div>
				<div className='content-wrapper'>
					<h3 className='section-subheading'>Highlights</h3>
					<p>
						Overall, participants found the prototype very informative and
						intuitive. By the end of the onboarding process, when asked
						what they think the purpose of the app is, most participants
						mistaken it as a food ordering app. However, they still found
						the solution very informative and highly prefer it over their
						current tools. The visual aids were frequently affirmed in its
						impact on scanability, which they expressed significantly
						helped them complete the onboarding process. Finally, I was
						pleased to learn that my findings were very consistent with my
						primary and secondary research!
					</p>
				</div>
				<div className='content-wrapper'>
					<p className='section-subheading'>Recommendations</p>
					<p>
						Given my findings, here are a few improvements and changes I
						planned to iterate:
					</p>
					<p className='subheading'>Route 1</p>
					<ul className='mb-32'>
						<li>
							Condense and enhance copy on explanations and directions to
							improve clarity.
						</li>
						<li>
							Design captivating visual aids to improve comprehension.
						</li>
						<li>
							Integrate adding friends to onboarding process to emphasize
							social media focus.
						</li>
					</ul>
					<p className='subheading'>Route 3</p>
					<ul>
						<li>
							Redesign the star rating component to be more intuitive.
						</li>
						<li>Streamline the review process.</li>
					</ul>
				</div>
			</section>
			<section
				id='design-iterations'
				className='section-container'>
				<header className='header-container'>
					<span>design</span>
					<h2>Iterations</h2>
				</header>
				<div className='content-wrapper mb-24'>
					<p>
						For my final iteration phase, I applied the recommendations I
						made from my previous usability testing. Below were my primary
						goals:
					</p>
					<ul role='list'>
						<li>Amplify the social component.</li>
						<li>Enhance visual aids.‍</li>
						<li>
							Ensure users fully understand the app's purpose by the end of
							onboarding.
						</li>
					</ul>
				</div>
				<div className='content-wrapper'>
					<h3 className='section-subheading mb-40'>
						Route 1: Diner signs up and sets up account
					</h3>
					<ul>
						<li>Welcome screens</li>
						<li>Food preferences</li>
						<li>Add friends</li>
					</ul>
					<h3 className='section-subheading mb-40'>
						Route 2: Diner searches for dining options
					</h3>
					<ul>
						<li>New navigation bar</li>
						<li>Home page</li>
						<li>Search results</li>
						<li>Restaurant profile</li>
					</ul>
					<h3 className='section-subheading mb-40'>
						Route 3: Diner reviews a dining experience
					</h3>
					<ul>
						<li>New navigation bar</li>
						<li>Home page</li>
						<li>Search results</li>
						<li>Restaurant profile</li>
					</ul>
				</div>
				<div className='hide'>
					<div className='design-walkthrough_wrapper border-0 mb-0'>
						<div className='flex-row gap-24 pb-0'>
							<div className='design-walkthrough_grid-1-col'>
								<video
									className='autoplay-video'
									loop
									muted>
									<source
										src='images/tastebuds/prototype-high-fidelity-route-1-v1-intro.mp4'
										type='video/mp4'
									/>
								</video>
								<div>
									<p className='subheading'>Introduction screens</p>
									<p>
										I added intro screens to educate users about the app
										and the importance of inputing their food preferences
										now.
									</p>
								</div>
							</div>
							<div className='design-walkthrough_grid-1-col'>
								<video
									className='autoplay-video'
									loop
									muted>
									<source
										src='images/tastebuds/prototype-high-fidelity-v1-route-1-food-preferences.mp4'
										type='video/mp4'
									/>
								</video>
								<div>
									<p className='subheading'>Food preferences</p>
									<p>
										I added the option to suggest missing items,
										implemented conversational UI, help icons, and more
										visual aids.
									</p>
								</div>
							</div>
						</div>
						<div className='mb-40'>
							<h3 className='section-subheading content mb-16'>
								Route 2: Diner searches for a restaurant
							</h3>
							<div className='content-grid'>
								<div>
									<p>
										To improve accessibility, I enlarged and simplified my
										designs and omitted unnecessary info. I also continued
										developing my business goals by conceptualizing
										restaurant partnerships and their role in the diner
										journey! This revamp took some time since I struggled
										to balance accommodating mental models and innovative
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
						<div className='design-walkthrough_wrapper'>
							<header className='design-walkthrough_header'>
								<p className='subheading'>Home page</p>
							</header>
							<div className='design-evolution_grid-container-3-col'>
								<p className='medium-grey hf-heading-01 hide'>Previous</p>
								<p className='black hf-heading-02 hide'>Iteration</p>
								<Image
									alt=''
									className='img-1 img-wireframe-border'
									loading='lazy'
									src='images/tastebuds/route-2-low-fidelity-home.png'
								/>
								<Image
									alt=''
									className='img-2 img-wireframe-border'
									loading='lazy'
									src='images/tastebuds/route-2-low-fidelity-listing-reviews.png'
								/>
								<Image
									alt=''
									className='img-design-evolution-arrow'
									loading='lazy'
									src='images/tastebuds/artwork-arrow-right-blue.png'
								/>
								<video
									className='autoplay-video img-3'
									loop
									muted>
									<source
										src='images/tastebuds/prototype-route-2-high-fidelity-v1-home.mp4'
										type='video/mp4'
									/>
								</video>
								<div className='grid-content flex-row gap-40'>
									<div>
										<p className='fw-medium mb-8'>For You</p>
										<p className='mb-0'>
											I wanted to enhance engagement and personalization,
											so I reorganized the layout to improve the info and
											content hierarchy, redesigned the navigation tabs to
											be more distinct, and revised label copy using
											conversational UI.
										</p>
									</div>
									<div>
										<p className='fw-medium mb-8'>Following</p>
										<p className='mb-0'>
											Understanding how diners engage with reviews, I
											designed the "Following" page and refined its role in
											the ecosystem. In addition to standard social
											interactive features, diners can easily navigate to
											the restaurant and menu items.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='design-walkthrough_wrapper'>
							<header className='design-walkthrough_header'>
								<p className='subheading'>Search process</p>
							</header>
							<div className='design-evolution_grid-container-3-col mb-40'>
								<p className='medium-grey hf-heading-01 hide'>Previous</p>
								<p className='black hf-heading-02 hide'>Iteration</p>
								<Image
									alt=''
									className='img-1'
									loading='lazy'
									src='images/tastebuds/route-2-low-fidelity-search-preferences.png'
								/>
								<Image
									alt=''
									className='img-2'
									loading='lazy'
									src='images/tastebuds/route-2-low-fidelity-search-new.png'
								/>
								<Image
									alt=''
									className='img-design-evolution-arrow'
									loading='lazy'
									src='images/tastebuds/artwork-arrow-right-blue.png'
								/>
								<video
									className='autoplay-video img-3'
									loop
									muted>
									<source
										src='images/tastebuds/prototype-route-2-high-fidelity-v1-search.mp4'
										type='video/mp4'
									/>
								</video>
							</div>
							<p className='span-fw-medium mb-0'>
								I added the option to select up to 3 key qualities in the
								filters. After realizing that the 2-column layout was too
								crowded in other categories, I reduced it to 1-column and
								increased spacing between elements.
							</p>
						</div>
						<div className='design-walkthrough_wrapper'>
							<header className='design-walkthrough_header'>
								<p className='subheading'>Search results</p>
							</header>
							<div className='design-evolution_grid-container-3-col mb-40'>
								<p className='medium-grey hf-heading-01 hide'>Previous</p>
								<p className='black hf-heading-02 hide'>Iteration</p>
								<Image
									alt=''
									className='img-1'
									loading='lazy'
									src='images/tastebuds/route-2-sketch-search-results-list.png'
								/>
								<Image
									alt=''
									className='img-2'
									loading='lazy'
									src='images/tastebuds/route-2-sketch-search-results-card-carousel.png'
								/>
								<Image
									alt=''
									className='img-design-evolution-arrow'
									loading='lazy'
									src='images/tastebuds/artwork-arrow-right-blue.png'
								/>
								<video
									className='autoplay-video img-3'
									loop
									muted>
									<source
										src='images/tastebuds/prototype-route-2-high-fidelity-v1-search-results.mp4'
										type='video/mp4'
									/>
								</video>
							</div>
							<p className='mb-0'>
								I forfeited "Listing previews" since my test participants
								did not engaged with it. I also redesigned the bottom sheet
								to be more consistent with the list view.
							</p>
						</div>
						<div className='design-walkthrough_wrapper pb-0 mb-0 border-0'>
							<div className='design-walkthrough_grid-container pb-0 mb-0'>
								<video
									className='autoplay-video'
									loop
									muted>
									<source
										src='images/tastebuds/prototype-route-2-high-fidelity-v1-listing.mp4'
										type='video/mp4'
									/>
								</video>
								<div>
									<header className='design-walkthrough_header'>
										<p className='subheading'>Restaurant listing</p>
									</header>
									<p>
										I wanted to further amplify social engagement and
										conceptualize restaurant partnerships, so I enhanced
										social proof elements, added more engagement features,
										and developed the 'Redeem offer' screen.
									</p>
									<div className='design-walkthrough_card'>
										<ul className='card_list mt-0'>
											<p className='card_headline'>New features</p>
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
				<div className='content'>
					<div className='flex-block-14'>
						<div className='heading-with-divider'>
							<div className='w-layout-vflex'>
								<div className='header-with-icon'>
									<h2 className='p _1-125-rem _1-5-spacing'>
										01 WELCOME SCREENS
									</h2>
								</div>
							</div>
						</div>
					</div>
					<Image
						loading='lazy'
						src='/images/tastebuds/pro.png'
						alt=''
					/>
					<div
						className='tabs iterations w-tabs'
						data-current='Tab 2'
						data-duration-in='300'
						data-duration-out='100'
						data-easing='ease'>
						<div
							className='tabs-menu _2-columns w-tab-menu'
							role='tablist'>
							<Link
								aria-controls='w-tabs-6-data-w-pane-0'
								aria-selected='false'
								className='container-tab _50 w-inline-block w-tab-link'
								data-w-tab='Tab 1'
								href='https://michelle-portfolio-fc56f5.webflow.io/case-study-tastebuds-2#w-tabs-6-data-w-pane-0'
								id='w-tabs-6-data-w-tab-0'
								role='tab'
								tabIndex={-1}>
								<div>iterations</div>
							</Link>
							<Link
								aria-controls='w-tabs-6-data-w-pane-1'
								aria-selected='true'
								className='container-tab w-inline-block w-tab-link w--current'
								data-w-tab='Tab 2'
								href='https://michelle-portfolio-fc56f5.webflow.io/case-study-tastebuds-2#w-tabs-6-data-w-pane-1'
								id='w-tabs-6-data-w-tab-1'
								role='tab'>
								<div className='text-block-5'>previous</div>
							</Link>
						</div>
						<div className='w-tab-content'>
							<div
								aria-labelledby='w-tabs-6-data-w-tab-0'
								className='tab-pane-tab-1 w-tab-pane'
								data-w-tab='Tab 1'
								id='w-tabs-6-data-w-pane-0'
								role='tabpanel'>
								<Image
									loading='lazy'
									src='/images/tastebuds/route-1_high-fidelity-02_welcome-screens.png'
									alt=''
								/>
							</div>
							<div
								aria-labelledby='w-tabs-6-data-w-tab-1'
								className='tab-pane-tab-3 w-tab-pane w--tab-active'
								data-w-tab='Tab 2'
								id='w-tabs-6-data-w-pane-1'
								role='tabpanel'>
								<div className='div-block-154'>
									<Image
										alt=''
										className='image-113'
										loading='lazy'
										src='/images/tastebuds/route-1_high-fi_intros.png'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='content'>
					<div className='flex-block-14'>
						<div className='heading-with-divider'>
							<div className='w-layout-vflex'>
								<div className='header-with-icon'>
									<h2 className='p _1-125-rem _1-5-spacing'>
										02 ingredients
									</h2>
								</div>
							</div>
						</div>
					</div>
					<Image
						alt=''
						loading='lazy'
						src='/images/tastebuds/route-1_high-fidelity-2_ingredients.png'
					/>
					<div className='flex vertical _24-px'>
						<p className='p _1-266-rem'>Changes</p>
						<div className='w-layout-hflex flex horizontal _40-px'>
							<div className='div-block-156'>
								<ul
									className='list _8px'
									role='list'>
									<li>Switched order to eliminate allergies</li>
									<li>Unique title copy in upper-navigation</li>
									<li>Removed yellow background for visual clarity</li>
									<li>Changed typography for visual clarity</li>
								</ul>
							</div>
							<div className='div-block-155'>
								<ul
									className='list _8px'
									role='list'>
									<li>Changed "Reset" button to blue</li>
									<li>Progress bar increases</li>
									<li>Color coded descriptive heading</li>
									<li>New "Save &amp; finish later" button</li>
								</ul>
							</div>
						</div>
					</div>
					<p>
						During the previous usability test, participants could not
						detect a change in the process to input ingredient preferences.
						To resolve this, I relied on implementing
						<span className='fw-medium'>microanimations</span> and
						enhancing
						<span className='fw-medium'>
							visual feedback and clarity
						</span>{" "}
						by altering elements like
						<span className='fw-medium'>
							typography, colors, and content strategy
						</span>{" "}
						to visually communicate the change.
					</p>
				</div>
				<div className='content'>
					<div className='flex-block-14'>
						<div className='heading-with-divider'>
							<div className='w-layout-vflex'>
								<div className='header-with-icon'>
									<h2 className='p _1-125-rem _1-5-spacing'>
										03 Add friends
									</h2>
								</div>
							</div>
						</div>
					</div>
					<Image
						alt=''
						loading='lazy'
						src='/images/tastebuds/route-1_high-fidelity-2_friends.png'
					/>
				</div>
				<div className='subsection'>
					<div>
						<div className='content'>
							<div className='heading-secondarytext'>
								<p className='section-subheading'>
									Route 2: Diner Searches for Dining Options
								</p>
								<p>
									The iterations for this route prioritized boosting the
									social element, increasing user engagement, and enhancing
									personalization. My last usability testing taught me  a
									lot about diners' habits with searching for options
									online, so I wanted to shape my iterations to their
									mental model and logic.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='content'>
					<Image
						alt=''
						loading='lazy'
						sizes='90vw'
						src='/images/tastebuds/route-2_high-fidelity_all_1600.png'
					/>
				</div>
				<div className='content'>
					<div>
						<div className='content'>
							<div className='flex-block-14'>
								<div className='heading-with-divider'>
									<div className='w-layout-vflex'>
										<div className='header-with-icon'>
											<h2 className='p _1-125-rem _1-5-spacing'>
												01 Site Map
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex horizontal _64-px'>
						<div className='flex vertical _24-px align-left stretch'>
							<p className='p _1-266-rem grey'>previous</p>
							<Image
								alt=''
								className='image-115'
								loading='lazy'
								src='/images/tastebuds/peach-coral-simple-ecommerce-sitemap-(1).png'
							/>
							<p className='p _1-266-rem'>iteration</p>
							<Image
								alt=''
								className='image-115'
								loading='lazy'
								src='/images/tastebuds/sitemap-2.png'
							/>
						</div>
						<div className='flex vertical _24-px'>
							<p className='p _1-266-rem'>Changes</p>
							<div className='w-layout-hflex flex horizontal _40-px'></div>
							<ul
								className='list _8px'
								role='list'>
								<li>Re-added "Search"</li>
								<li>Removed "Notifications"</li>
							</ul>
							<p>
								I realized that notifications is not an essential part of
								the user journey, at least for the MVP. As a part of the
								social feed, it's more reasonable to leave it there and
								prioritize the user journey. Therefore, a dedicated search
								page is much more crucial. The order of the navigation
								buttons reflects the user journey.
							</p>
						</div>
					</div>
				</div>
				<div className='content'>
					<div className='flex-block-14'>
						<div className='heading-with-divider'>
							<div className='w-layout-vflex'>
								<div className='header-with-icon'>
									<h2 className='p _1-125-rem _1-5-spacing'>
										02 home page
									</h2>
								</div>
							</div>
						</div>
					</div>
					<div className='grid _2-columns'>
						<div className='div-block-159'>
							<div className='flex vertical _24-px'>
								<Image
									alt=''
									className='image-118'
									loading='lazy'
									src='/images/tastebuds/frame-753.png'
								/>
								<p className='p _1-266-rem grey align-center'>previous</p>
							</div>
							<div className='vertical-divider grey'></div>
							<div className='flex vertical _24-px'>
								<Image
									alt=''
									className='image-118'
									loading='lazy'
									src='/images/tastebuds/frame-754.png'
								/>
								<p className='p _1-266-rem align-center'>iteration</p>
							</div>
						</div>
						<div className='flex vertical _24-px'>
							<p className='p _1-266-rem'>Changes</p>
							<div className='w-layout-hflex flex horizontal _40-px'>
								<div className='div-block-156'>
									<ul
										className='list _8px'
										role='list'>
										<li>Added an incentive to review</li>
										<li>Enhanced CTAS</li>
										<li>Changed typography andcolors</li>
									</ul>
								</div>
							</div>
							<p>
								My iterations seek to boost personalization and increase
								user engagement with clearer CTAs and captivating visuals.
							</p>
						</div>
					</div>
				</div>
				<div className='content'>
					<div className='flex-block-14'>
						<div className='heading-with-divider'>
							<div className='w-layout-vflex'>
								<div className='header-with-icon'>
									<h2 className='p _1-125-rem _1-5-spacing'>
										03 restaurant listing home page
									</h2>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='div-block-159'>
							<Image
								alt=''
								className='image-118'
								loading='lazy'
								src='/images/tastebuds/frame-747.png'
							/>
							<div className='vertical-divider grey'></div>
							<Image
								alt=''
								className='image-118'
								loading='lazy'
								src='/images/tastebuds/untitled-design-(2).gif'
							/>
						</div>
						<div className='flex vertical _24-px'>
							<p className='p _1-266-rem'>Changes</p>
							<div className='w-layout-hflex flex horizontal _40-px'>
								<div className='div-block-156'>
									<ul
										className='list _8px'
										role='list'>
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
				<div className='content'>
					<div className='flex-block-14'>
						<div className='heading-with-divider'>
							<div className='w-layout-vflex'>
								<div className='header-with-icon'>
									<h2 className='p _1-125-rem _1-5-spacing'>
										04 search results navigation
									</h2>
								</div>
							</div>
						</div>
					</div>
					<div className='grid _2-columns'>
						<div className='div-block-159'>
							<div className='flex vertical _24-px'>
								<Image
									alt=''
									className='image-118'
									loading='lazy'
									sizes='100vw'
									src='/images/tastebuds/route-2-mockup-search-results-list.png'
								/>
								<p className='p _1-266-rem align-center blue'>
									Map button
								</p>
							</div>
							<div className='flex vertical _24-px'>
								<Image
									alt=''
									className='image-118'
									loading='lazy'
									sizes='100vw'
									src='/images/tastebuds/route-2-mockup-search-results-map.png'
								/>
								<p className='p _1-266-rem align-center blue'>
									list button
								</p>
							</div>
						</div>
						<div className='flex vertical _24-px'>
							<p className='p _1-266-rem'>Changes</p>
							<div className='w-layout-hflex flex horizontal _40-px'>
								<div className='div-block-156'>
									<ul
										className='list _8px'
										role='list'>
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
								<span className='fw-medium'>boost personalization </span>
								and
								<span className='fw-medium'>
									increase user engagement
								</span>{" "}
								with clearer CTAs and captivating visuals.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section
				id='usability-testing-3'
				className='section-container'>
				<div className='content'>
					<div className='title'>
						<div className='flex vertical _24-px'>
							<h2 className='title-label'>testing</h2>
							<h2 className='section-title'>
								usability testing III: high-fidelity prototype
							</h2>
						</div>
					</div>
				</div>
				<div className='content'>
					<div className='content'>
						<p className='section-subheading'>Methodology</p>
						<p>
							I conducted moderated usability testing with
							<span className='fw-medium'>five participants </span>
							remotely. Each test included the following
							<span className='fw-medium'>tasks</span>:
						</p>
						<ul
							className='list'
							role='list'>
							<li>
								<span className='fw-medium'>Route 1</span>: Create an
								account using your Facebook login.
							</li>
							<li>
								<span className='fw-medium'>Route 2</span>: Find a
								restaurant to dine at within 3 miles of your current
								location.
							</li>
							<li>
								<span className='fw-medium'>Route 3</span>: Write a
								4.5-star review with a photo for Olives Branch Bistro,
								where you had a Mixed Kebab Plate.
							</li>
						</ul>
					</div>
					<div className='content first-child'>
						<p className='p _1-266-rem'>research questions</p>
						<p>
							In addition to the typical objectives of usability testing, I
							had several
							<span className='fw-medium'>
								targeted research questions
							</span>
							:
						</p>
						<ul
							className='list'
							role='list'>
							<li>
								After onboarding, can users recall the highlighted features
								of TasteBuds?
							</li>
							<li>
								By the end of the test, do users understand the intended
								purpose and functionalities of TasteBuds?
							</li>
							<li>Are users interacting with the new features? How?</li>
							<li>How do users interpret the design solutions?</li>
							<li>Are there any unintended use cases? What are they?</li>
							<li>
								Did the iterations resolve critical issues found last
								usability testing?
							</li>
						</ul>
					</div>
					<div className='content'>
						<p className='p _1-266-rem'>participant characteristics</p>
						<ul
							className='list'
							role='list'>
							<li>Ages 21-30</li>
							<li>
								Uses at least one online method to find a restaurant to
								dine at
							</li>
							<li>Dines out at least once a week</li>
						</ul>
					</div>
				</div>
				<div className='section-container blue'>
					<div className='content'>
						<p className='section-subheading'>Affinity Mapping</p>
						<p>
							Once again, working independently, I'm always finding ways to
							maximize all of my efforts. Previously, I used FigJam to
							create affinity maps. I enjoyed how easy it was to use and
							the colorful tools it offers. However, as a research
							enthusiast, I wanted to step up my data synthesis process
							this time. Although I'm not an expert in quantitative
							analysis, I try to incorporate it whenever possible, even if
							it's just simple charts and graphs. I was looking for a way
							to quickly identify patterns and themes via keywords, so I
							started out using Google Sheets. However, I quickly gave up
							because it looked so boring, and I realized it wasn't
							necessary since there wasn't much quantitative data. After
							digging through my toolbox some more, I found my Goldilocks
							solution—Notion!
						</p>
						<p>
							I created affinity maps for each route, integrating multiple
							features to organize, structure, and process my data. The
							variety of “Views”, such as tables, lists, boards, or
							galleries, were useful to organize my data depending on my
							objective:
						</p>
						<div
							className='tabs iterations w-tabs'
							data-current='Tab 1'
							data-duration-in='300'
							data-duration-out='100'
							data-easing='ease'>
							<div
								className='tabs-menu _2-columns w-tab-menu'
								role='tablist'>
								<Link
									aria-controls='w-tabs-7-data-w-pane-0'
									aria-selected='true'
									className='tab-link-30 w-inline-block w-tab-link w--current'
									data-w-tab='Tab 1'
									href='https://michelle-portfolio-fc56f5.webflow.io/case-study-tastebuds-2#w-tabs-7-data-w-pane-0'
									id='w-tabs-7-data-w-tab-0'
									role='tab'>
									<div className='tab-link-tab-1'>route 1</div>
								</Link>
								<Link
									aria-controls='w-tabs-7-data-w-pane-1'
									aria-selected='false'
									className='tab-link-30 w-inline-block w-tab-link'
									data-w-tab='Tab 2'
									href='https://michelle-portfolio-fc56f5.webflow.io/case-study-tastebuds-2#w-tabs-7-data-w-pane-1'
									id='w-tabs-7-data-w-tab-1'
									role='tab'
									tabIndex={-1}>
									<div className='tab-link-inactive'>route 2</div>
								</Link>
								<Link
									aria-controls='w-tabs-7-data-w-pane-2'
									aria-selected='false'
									className='tab-link-30 w-inline-block w-tab-link'
									data-w-tab='Tab 3'
									href='https://michelle-portfolio-fc56f5.webflow.io/case-study-tastebuds-2#w-tabs-7-data-w-pane-2'
									id='w-tabs-7-data-w-tab-2'
									role='tab'
									tabIndex={-1}>
									<div className='tab-link-inactive'>route 3</div>
								</Link>
							</div>
							<div className='w-tab-content'>
								<div
									aria-labelledby='w-tabs-7-data-w-tab-0'
									className='tab-pane-tab-1 w-tab-pane w--tab-active'
									data-w-tab='Tab 1'
									id='w-tabs-7-data-w-pane-0'
									role='tabpanel'>
									<Image
										alt=''
										loading='lazy'
										src='assets/images/tastebuds/route-i-affinity-map-(1_2).png'
									/>
								</div>
								<div
									aria-labelledby='w-tabs-7-data-w-tab-1'
									className='tab-pane-tab-3 w-tab-pane'
									data-w-tab='Tab 2'
									id='w-tabs-7-data-w-pane-1'
									role='tabpanel'>
									<Image
										alt=''
										loading='lazy'
										src='assets/images/tastebuds/route-ii-affinity-map-(1_2).png'
									/>
									<Image
										alt=''
										loading='lazy'
										src='assets/images/tastebuds/route-ii-affinity-map-(2_2).png'
									/>
								</div>
								<div
									aria-labelledby='w-tabs-7-data-w-tab-2'
									className='tab-pane-tab-3 w-tab-pane'
									data-w-tab='Tab 3'
									id='w-tabs-7-data-w-pane-2'
									role='tabpanel'>
									<Image
										alt=''
										loading='lazy'
										src='assets/images/tastebuds/route-iii-affinity-map.png'
									/>
								</div>
							</div>
						</div>
						<div className='div-block-160'>
							<Image
								loading='lazy'
								src='assets/images/tastebuds/notion-example.png'
								alt=''
							/>
						</div>
						<p>
							Notion’s database properties were a lifesaver during the
							synthesis phase, enabling me to filter and arrange data
							effectively to efficiently identify patterns. Below are a
							couple of my favorites!
						</p>
						<p>
							‍<strong className='p _1-266-rem'>count: </strong>I
							formulated this property to tally the
							<span className='fw-medium'>
								number of "Participants" tagged
							</span>{" "}
							for each data entry. When creating my affinity maps,
							<span className='fw-medium'>
								sorting the database by "Count" in descending order
							</span>{" "}
							allowed me to
							<span className='fw-medium'>
								visualize the most recurrent data from highest to lowest
							</span>{" "}
							occurrence. This made my process of identifying and
							organizing issues by their magnitude much easier.
							<strong className='p _1-266-rem'>
								<br />
								<br />
								Tags:{" "}
							</strong>
							The single-select and multi-select tags I used were immensely
							helpful for
							<span className='fw-medium'>
								pinpointing themes and patterns
							</span>
							, and
							<span className='fw-medium'>locating specific data</span>.
							For instance, this was useful when I was looking for quotes
							about delightful experiences during route 1 when diners are
							inputting food preferences. With just a few clicks in the
							filters, I quickly found what I needed:
						</p>
						<Image
							alt=''
							loading='lazy'
							src='assets/images/tastebuds/screen-shot-2023-12-07-at-10.30.55-pm.png'
						/>
						<p>
							Feel free to take a look at my database
							<Link
								href='https://maple-talon-dc2.notion.site/Usability-Testing-II-f1e49c6ab1164a6fb4370a5b739723d8'
								target='_blank'>
								here
							</Link>
							!
						</p>
					</div>
				</div>
				<div>
					<div className='content'>
						<p className='section-subheading'>Findings</p>
						<p>
							Overall, participants experienced far more delights than pain
							points. I found much much more design validation than
							invalidation!
						</p>
						<p>
							While there were new struggles, all errors that occurred
							during the previous usability testing were resolved.
						</p>
						<div>
							<div className='flex horizontal'>
								<div className='flex-block-15'>
									<div className='div-block-90'>
										<Image
											alt=''
											className='image-36'
											loading='lazy'
											src='assets/images/tastebuds/icon-checkmark-circle-filled-green.png'
										/>
									</div>
									<div className='flex-block-40 gap-0'>
										<div>
											<div className='testing-outcomes-content'>
												<Image
													alt=''
													className='image-80px-middle'
													loading='lazy'
													src='assets/images/tastebuds/icon-filter-filled-blue.png'
												/>
												<div className='div-block-89'>
													<p className='paragraph text-align-center'>
														Users greatly enjoyed the
														<span className='fw-medium'>
															inclusivity and diversity
														</span>{" "}
														across the app (i.e. filters, food preferences,
														cuisine options).
													</p>
												</div>
											</div>
										</div>
										<div className='horizontal-divider'></div>
										<div className='testing-outcomes-content'>
											<Image
												alt=''
												className='image-80px-middle'
												loading='lazy'
												src='assets/images/tastebuds/icon-filter-filled-blue.png'
											/>
											<div className='div-block-89'>
												<p className='paragraph text-align-center'>
													They found the designs
													<span className='fw-medium'>
														intuitive and straightforward
													</span>
													.
												</p>
											</div>
										</div>
										<div className='horizontal-divider'></div>
										<div className='testing-outcomes-content'>
											<Image
												alt=''
												className='image-80px-middle'
												loading='lazy'
												src='assets/images/tastebuds/icon-filter-filled-blue.png'
											/>
											<div className='div-block-89'>
												<p className='paragraph text-align-center'>
													Everyone successfully
													<strong>
														comprehended the intended purpose and
														functionalities
													</strong>
													.
												</p>
											</div>
										</div>
										<div className='horizontal-divider'></div>
										<div className='testing-outcomes-content'>
											<Image
												alt=''
												className='image-80px-middle'
												loading='lazy'
												src='assets/images/tastebuds/icon-filter-filled-blue.png'
											/>
											<div className='div-block-89'>
												<p className='paragraph text-align-center'>
													Users independently
													<strong>employed different routes</strong> to
													explore dining options outside of the intended
													flow by using unique features.
												</p>
											</div>
										</div>
										<div className='horizontal-divider'></div>
										<div className='testing-outcomes-content'>
											<Image
												alt=''
												className='image-80px-middle'
												loading='lazy'
												src='assets/images/tastebuds/icon-filter-filled-blue.png'
											/>
											<div className='div-block-89'>
												<p className='paragraph text-align-center'>
													Diners felt excited about the unique design
													solutions.
												</p>
											</div>
										</div>
										<div className='horizontal-divider'></div>
										<div className='testing-outcomes-content'>
											<Image
												alt=''
												className='image-80px-middle'
												loading='lazy'
												src='assets/images/tastebuds/icon-filter-filled-blue.png'
											/>
											<div className='div-block-89'>
												<p className='paragraph text-align-center'>
													Most diners did not struggle with the design to
													rate stars.
												</p>
											</div>
										</div>
										<div className='horizontal-divider'></div>
										<div className='testing-outcomes-content'>
											<Image
												alt=''
												className='image-80px-middle'
												loading='lazy'
												src='assets/images/tastebuds/icon-filter-filled-blue.png'
											/>
											<div className='div-block-89'>
												<p className='paragraph text-align-center'>
													Diners felt very pleased with the visual designs,
													such as graphics, colors, and more.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className='flex-block-15'>
									<div className='div-block-90'>
										<Image
											alt=''
											className='image-36'
											loading='lazy'
											src='assets/images/tastebuds/icon-cancel-circle-filled-red.png'
										/>
									</div>
									<div className='flex-block-40 gap-0'>
										<div className='testing-outcomes-content'>
											<Image
												alt=''
												className='image-80px-middle'
												loading='lazy'
												src='assets/images/tastebuds/icon-filter-filled-blue.png'
											/>
											<div className='div-block-89'>
												<p className='paragraph text-align-center'>
													Merging the restaurant listing's home page and
													info page caused information overload to several
													diners.
												</p>
											</div>
										</div>
										<div className='horizontal-divider'></div>
										<div className='testing-outcomes-content'>
											<Image
												alt=''
												className='image-80px-middle'
												loading='lazy'
												src='assets/images/tastebuds/icon-filter-filled-blue.png'
											/>
											<div className='div-block-89'>
												<p className='paragraph text-align-center'>
													Most diners were confused about some part of the
													design of reviews in the social feed.
												</p>
											</div>
										</div>
										<div className='horizontal-divider'></div>
										<div className='testing-outcomes-content'>
											<Image
												alt=''
												className='image-80px-middle'
												loading='lazy'
												src='assets/images/tastebuds/icon-filter-filled-blue.png'
											/>
											<div className='div-block-89'>
												<p className='paragraph text-align-center'>
													Prototype errors frustrated some users.
												</p>
											</div>
										</div>
										<div className='horizontal-divider'></div>
										<div className='testing-outcomes-content'>
											<Image
												alt=''
												className='image-80px-middle'
												loading='lazy'
												src='assets/images/tastebuds/icon-filter-filled-blue.png'
											/>
											<div className='div-block-89'>
												<p className='paragraph text-align-center'>
													Many did not detect the pagination bar in the
													restaurant listing.
												</p>
											</div>
										</div>
										<div className='horizontal-divider'></div>
										<div className='testing-outcomes-content'>
											<Image
												alt=''
												className='image-80px-middle'
												loading='lazy'
												src='assets/images/tastebuds/icon-filter-filled-blue.png'
											/>
											<div className='div-block-89'>
												<p className='paragraph text-align-center'>
													The information architecture and visual hierarchy
													of the restaurant listing confused some users.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container padding-40px light-grey'>
					<div className='content'>
						<p className='section-subheading'>Insights</p>
						<div className='flex-block-40'>
							<div className='flex'>
								<div className='testing-outcomes-content padding-0'>
									<div className='div-block-89'>
										<p className='main-heading _1-602-rem'>
											Visual aids effectively and efficiently communicate
											key information.
											<br />
										</p>
									</div>
								</div>
								<div className='quote-block user-interviews sample'>
									<h2 className='heading-18 quotes'>
										"The flags with the country made it more fun to scroll,
										made me feel smart…It’s nice to have a visual. If I see
										a long list with just text, I probably wouldn’t select
										anything…The pictures made it more fun.”‍
									</h2>
									<h2 className='heading-18 quotes'>—Participant #4.</h2>
								</div>
							</div>
							<div className='horizontal-divider black-1px'></div>
							<div className='flex'>
								<div className='testing-outcomes-content padding-0'>
									<div className='div-block-89'>
										<p className='main-heading _1-602-rem'>
											Given that TasteBuds is a social recommendation app
											and users heavily rely on food imagery, it is crucial
											to prioritize visually appealing content in order to
											deliver an optimal user experience.
										</p>
									</div>
								</div>
								<div className='quote-block user-interviews sample'>
									<h2 className='heading-18 quotes'>
										“Similar to food, you first taste with your eyes. If
										something looks good visually right off the bat, I’m
										more inclined to spend time on it, and closely examine
										what it is that’s catching my attention. Visuals are
										really important in an app.”
									</h2>
									<h2 className='heading-18 quotes'>—Participant #5</h2>
								</div>
							</div>
							<div className='horizontal-divider black-1px'></div>
							<div className='flex'>
								<div className='testing-outcomes-content padding-0'>
									<div className='div-block-89'>
										<p className='main-heading _1-602-rem'>
											Users are open to challenging UX practices when
											necessary, such as dissatisfaction with current
											methods and the novelty of new methods. Users also
											desire personalization. Participants were very
											impressed by the diversity, inclusivity, and
											specificity in selections.
											<br />
										</p>
									</div>
								</div>
								<div className='quote-block user-interviews sample'>
									<h2 className='heading-18 quotes'>
										“I usually use Google Maps, so I'd type in “Mexican
										restaurant”. I don't think there’s really any
										filtering. Sometimes you can be overloaded with all the
										results. No other apps have filters as extensive… If I
										had this app, I'd totally use it all the time. I really
										like the different filters.”
									</h2>
									<h2 className='heading-18 quotes'>‍—Participant #2</h2>
								</div>
							</div>
							<div className='horizontal-divider black-1px'></div>
							<div className='flex'>
								<div className='testing-outcomes-content padding-0'>
									<div className='div-block-89'>
										<p className='main-heading _1-602-rem'>
											Participants enjoyed how the comprehensive review
											options based on consuming unhelpful public reviews.
										</p>
									</div>
								</div>
								<div className='quote-block user-interviews sample'>
									<h2 className='heading-18 quotes'>
										“I like how there's a lot of options in general. It’s
										very detailed. The whole point of the review is to
										provide details to people. The way it’s set up can help
										people understand someone’s experience at the place. It
										was very comprehensive, but also gave you the
										optionals. You can decide how much of a review you
										wanted to write.”
									</h2>
									<h2 className='heading-18 quotes'>‍—Participant #2</h2>
								</div>
							</div>
							<div className='horizontal-divider black-1px'></div>
							<div className='flex'>
								<div className='testing-outcomes-content padding-0'>
									<div className='div-block-89'>
										<p className='main-heading _1-602-rem'>
											Some diners are empathetic about hurting restaurants
											with negative reviews due to subjectivity of their
											experiences. Participant #1 suggested to make ratings
											optional or implement an upvote downvote system.
										</p>
									</div>
								</div>
								<div className='quote-block user-interviews sample'>
									<h2 className='heading-18 quotes'>
										 “What if what I ordered is bad, but I don’t wanna
										comment on it? What if what I ordered is good but this
										isn’t the only thing you should order? What if I
										ordered something I didn’t like, but all my friends
										liked what they ordered, and the service and everything
										was great? It’s not fair to the restaurant to have to
										get a bad rating if it’s personal to me.”
									</h2>
									<h2 className='heading-18 quotes'>‍—Participant #1</h2>
								</div>
							</div>
						</div>
					</div>
					<div className='flex horizontal'>
						<div className='flex-block-15'>
							<div className='div-block-90'></div>
						</div>
					</div>
					<div className='div-block-149'>
						<div className='w-layout-hflex flex vertical'>
							<div className='vertical-divider'></div>
						</div>
					</div>
				</div>
			</section>
			<section
				id='limitations'
				className='section-container'>
				<div className='content'>
					<p className='section-subheading'>Limitations</p>
					<p>
						I know most if not all case studies don’t discuss their
						limitations, but as a designer with a degree in sociology, it
						feels wrong not to include them:
					</p>
					<ul
						className='list'
						role='list'>
						<li>
							<span className='fw-medium'>Observer Bias</span>: The
							presence of an observer during usability testing can
							influence participants' behavior or responses.
						</li>
						<li>
							<span className='fw-medium'>Limited Scope of Testing:</span>{" "}
							While I was only testing my red routes, . This became
							apparent when some participants deviated from the route.
							Therefore, I likely missed out on specific usability issues
							that could occur in other situations.
							<span className='fw-medium'>
								<br />
							</span>
						</li>
						<li>
							<span className='fw-medium'>
								Difficulty Capturing Emotions and Attitudes:{" "}
							</span>
							My usability testing primarily focuses on observable
							behaviors and task completion, making it challenging to
							capture users' emotions or attitudes. Although I tried my
							best to extract insights through ample follow-up questions,
							as well as reminding users to think out loud, I was limited
							by time constraints.
						</li>
						<li>
							<span className='fw-medium'>
								Designer Bias and Subjectivity:{" "}
							</span>
							As expressed earlier, my own biases as a user and an
							enthusiastic designer limited my perspective, which likely
							compromised the effectiveness of my tasks and limited my
							observations. Additionally, I inevitably interpreted test
							results subjectively, which led to overlooking behaviors due
							to preconceived biases, desire for validation, and
							anticipations.
						</li>
						<li>
							<span className='fw-medium'>
								Impact of Wording in Instructions:{" "}
							</span>
							Subtle changes in task wording led users to interpret them
							differently, requiring adjustments that might have
							compromised data consistency.
						</li>
					</ul>
					<p className='paragraph grey'>
						What are limitations? Limitations in research are the
						boundaries or weaknesses that restrict its scope, reliability,
						or generalizability. They’re constraints that can hinder the
						study's ability to fully address certain aspects or make broad
						conclusions. Recognizing these limitations is important to
						understand the study's context and interpret its findings
						accurately. In other words, these are the reasons you should
						take my conclusions with at least an iota of salt!
					</p>
				</div>
			</section>
			<section
				id='final-prototype'
				className='section-container'>
				<h2>Final prototype</h2>
			</section>
			<section
				id='reflection'
				className='section-container'>
				<div className='content'>
					<header className='header-container'>
						<h2>Learnings</h2>
					</header>
					<p>
						This usability test taught me a lot about my design solutions
						and design thinking. I uncovered some of my most significant
						mistakes and weaknesses as a designer and as an individual that
						contributed to the issues:
					</p>
					<div className='content gap-16px'>
						<p>
							<strong className='p _1-266-rem'>
								stop trying to please everyone
							</strong>
						</p>
						<p>
							Upon reflection, I realized I had fallen into a common
							pitfall among designers - attempting to cater to everyone's
							needs. For example, I overloading the home page with content.
							My attempts to design became counterproductive as I ended up
							over-designing the more time I invested in the process. As a
							result, I had not resolved a critical pain point among diners
							with information overload insofar that I may have contributed
							to it.
							<br />
							The task that participants found the most challenging was
							searching for dining options. The primary issue stemmed from
							information overload on the restaurant listing's home page,
							primarily caused by my decision to merge the home and info
							pages.
						</p>
					</div>
					<div className='content gap-16px'>
						<p>
							<strong className='p _1-266-rem'>
								user behaviors are circumstantial
							</strong>
						</p>
						<p>
							<strong className='p _1-266-rem'>‍</strong>I learned that
							diners’ current behaviors have less influence on how they
							would utilize TastBuds than I thought. For example, since my
							primary research found that diners feel reluctant to write
							reviews, I was overly concerned with designing solutions that
							encourage diners to write reviews and discourage fake
							reviews. For instance, this is why I designed the written
							portion of the review process optional, making reviewing a
							menu item required, and implementing gamification as
							incentive. However, my usability testing revealed that this
							isn’t an issue because my solutions are leveraging diners’
							trust and preference in word-of-mouth recommendations. If
							diners don’t write reviews because they’re public then I
							shouldn’t be concerned with this behavior when TasteBuds is
							meant to provide a safe space for diners to share their
							recommendations for their friends only.
						</p>
					</div>
					<div className='content gap-16px'>
						<p>
							<strong className='p _1-266-rem'>
								mental models are not definitive
							</strong>
						</p>
						<p>
							<strong className='p _1-266-rem'>‍</strong>My design thinking
							was limited by feeling the need to adhere to the conventional
							user journey and mental models. This led me to overlook
							opportunities for innovation, forgetting that my design
							solutions aim to improve the current experience, not
							replicate it. This oversight became apparent when
							participants diverged from the user flow I had initially
							designed to search for dining options. My user flow only
							included using the search bar to explore options. Since the
							typical user flow for Yelp and Google Maps is where diners
							read reviews within the review section of the restaurant
							listing, I thought that diners would do the same thing. I did
							not expect diners to employ the social feed or for you page
							even though that’s their purpose. In hindsight, this occurred
							during my first usability testing too, but I unfortunately
							misunderstood these actions as user errors rather than design
							validation. Additionally, I am so accustomed to the idea of
							reviews being based on star ratings that I never even
							considered the possibility of an alternative or potentially
							better system. I realized my fixation on respecting mental
							models caused me to overlook the influence of my own biases
							in my design process. This oversight led me to miss an
							opportunity to further explore and capitalize on this finding
							during my second round of iterations.Nevertheless, as an
							aspiring designer who sees the glass half full, I recognize
							that these deviations from the expected user journey serve as
							invaluable design validations for the unique features I
							designed. They demonstrate the effectiveness of these
							functionalities in addressing the limitations of current
							methods. In other words, my design solutions work!
						</p>
					</div>
					<div className='content gap-16px'>
						<p>
							‍
							<strong className='p _1-266-rem'>
								When users willingly rebel against their mental models
							</strong>
						</p>
						<p>
							Another valuable insight I discovered is how users diverge
							from their mental models and typical behaviors. I found that
							users are open to challenging their mental models for
							compelling alternatives. This was an intriguing finding
							because I had been rather concerned with designing against
							conventions. For example, my most controversial design was
							how diners give star-ratings, as it allows diners to rate up
							to five stars, starting from zero, in increments of half
							stars. I can’t fully justify why I was keen on perfecting
							this design when most participants struggled with it. My
							determination was simply motivated by my curiosity, given
							that this is technically a low-stakes project with a fake
							product. While participants greatly struggled with my design
							during usability testing I, my iterations resolved this
							issue. Another example is how users proceeded to input their
							food preferences despite how they typically postpone
							inputting preferences until they are familiarized with the
							app. I found that some were willing to simply because they
							understood the logic behind it, as personalized
							recommendations is a significant part of TasteBuds, which
							would require input from users.These behaviors revealed that
							(1) users’ willingness to rebel against the status quo
							correlates with their level of dissatisfaction with current
							methods and (2) users are incentivized by the novelty of
							innovative solutions. In other words, people are willing to
							try something new when necessary and enjoy trying something
							new in general. This highlights the potential for innovative
							features to drive user engagement and behavior change. I
							think this can help guide and motivate designers to create
							innovative solutions. After all, while it’s important to
							respect industry standards, standards are always evolving!
						</p>
					</div>
					<div className='content gap-16px'>
						<p>
							<strong className='p _1-266-rem'>
								the right approach to usability testing
							</strong>
							‍
						</p>
						<p>
							‍
							<strong>
								I learned that I simply did not understand the purpose of
								designing user flows. I did not know that the first user
								flow is only the first of many and that it is merely
								speculation that also requires design validation. sability
								testing can reveal a lot more if you’re focused on your
								participants reaching the desired destination, rather than
								the route they take. After all, the user flows we create
								are speculations. The real user flow is what users take
								with your product. User flows we construct are essentially
								speculative, whereas the actual user flow emerges from how
								users interact with the product in real-time.
							</strong>
						</p>
					</div>
				</div>
			</section>
			<div className='content'>
				<header className='header-container'>
					<h2>Next steps</h2>
				</header>
				<p>
					My second usability test taught me a lot about my design
					solutions and design thinking. I uncovered some of my most
					significant mistakes and weaknesses as a designer and as an
					individual that contributed to the issues:
				</p>
				<div className='content gap-16px'>
					<p>
						<strong className='p _1-266-rem'>
							the final affinity map (until further notice)
						</strong>
					</p>
					<p>
						Since participants during the last usability tests had the most
						trouble with the restaurant listing home page, I went ahead and
						created an affinity map and brainstormed potential solutions:
					</p>
				</div>
			</div>
			<div className='content'>
				<Image
					alt=''
					loading='lazy'
					src='assets/images/tastebuds/4c0e54e8-7bbf-4500-b75a-5e8fed0bf98a'
				/>
				<div className='flex vertical _24-px'>
					<div className='flex-block-14'>
						<div className='heading-with-divider'>
							<div className='w-layout-vflex'>
								<h2 className='p label _1-266-rem'>next steps</h2>
							</div>
						</div>
						<div className='header-with-icon'>
							<div className='div-block-74'>
								<svg
									className='svg-icon'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M0 0h24v24H0z'
										fill='none'></path>
									<path
										d='M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z'
										fill='currentColor'></path>
								</svg>
							</div>
							<p className='headline'>
								<strong className='medium-blue'>
									Reduce the prototype to an MVP by removing unnecessary
									features
								</strong>
							</p>
						</div>
						<div className='header-with-icon'>
							<div className='div-block-74'>
								<svg
									className='svg-icon'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M0 0h24v24H0z'
										fill='none'></path>
									<path
										d='M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z'
										fill='currentColor'></path>
								</svg>
							</div>
							<p className='headline'>
								<strong className='medium-blue'>
									Figuring out how to maximize diners’ trust in
									word-of-mouth recommendations
								</strong>
							</p>
						</div>
						<div className='header-with-icon'>
							<div className='div-block-74'>
								<svg
									className='svg-icon'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M0 0h24v24H0z'
										fill='none'></path>
									<path
										d='M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z'
										fill='currentColor'></path>
								</svg>
							</div>
							<p className='headline'>
								<strong className='medium-blue'>
									Simplify the visual layout of reviews the essentials
								</strong>
							</p>
						</div>
						<div className='header-with-icon'>
							<div className='div-block-74'>
								<svg
									className='svg-icon'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M0 0h24v24H0z'
										fill='none'></path>
									<path
										d='M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z'
										fill='currentColor'></path>
								</svg>
							</div>
							<p className='headline'>
								<strong className='medium-blue'>
									Develop additional routes to explore dining options
								</strong>
							</p>
						</div>
						<div className='header-with-icon'>
							<div className='div-block-74'>
								<svg
									className='svg-icon'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M0 0h24v24H0z'
										fill='none'></path>
									<path
										d='M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z'
										fill='currentColor'></path>
								</svg>
							</div>
							<p className='headline'>
								<strong className='medium-blue'>
									Redirect the app’s focus to a social recommendation tool,
									such as removing features in the restaurant listing that
									do not relate to diners seeking recommendations from
									friends
								</strong>
							</p>
						</div>
						<div className='header-with-icon'>
							<div className='div-block-74'>
								<svg
									className='svg-icon'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M0 0h24v24H0z'
										fill='none'></path>
									<path
										d='M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z'
										fill='currentColor'></path>
								</svg>
							</div>
							<p className='headline'>
								<strong className='medium-blue'>
									Remove gamification
								</strong>
							</p>
						</div>
						<div className='header-with-icon'>
							<div className='div-block-74'>
								<svg
									className='svg-icon'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M0 0h24v24H0z'
										fill='none'></path>
									<path
										d='M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z'
										fill='currentColor'></path>
								</svg>
							</div>
							<p className='headline'>
								<strong className='medium-blue'>
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
						<div className='header-with-icon'>
							<div className='div-block-74'>
								<svg
									className='svg-icon'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M0 0h24v24H0z'
										fill='none'></path>
									<path
										d='M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z'
										fill='currentColor'></path>
								</svg>
							</div>
							<p className='headline'>
								<strong className='medium-blue'>
									Replace the component that shows the total number of
									reviews per star rating in the restaurant’s review page
									with the total number of votes per restaurant attribute
									(i.e. authenticity, quality of ingredients, value, etc.)
								</strong>
							</p>
						</div>
						<div className='header-with-icon'>
							<div className='div-block-74'>
								<svg
									className='svg-icon'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M0 0h24v24H0z'
										fill='none'></path>
									<path
										d='M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z'
										fill='currentColor'></path>
								</svg>
							</div>
							<p className='headline'>
								<strong className='medium-blue'>
									Simplify the restaurant home page and improve its
									information architecture to reduce information overload
								</strong>
							</p>
						</div>
						<div className='header-with-icon'>
							<div className='div-block-74'>
								<svg
									className='svg-icon'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M0 0h24v24H0z'
										fill='none'></path>
									<path
										d='M12 4l-1.41 1.41L16.17 11H4v2h22.17l-5.58 5.59L12 20l8-8z'
										fill='currentColor'></path>
								</svg>
							</div>
							<p className='headline'>
								<strong className='medium-blue'>
									Add tutorials post-onboarding process to see how they
									might change user’s approach to the routes
								</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='section-container'>
				<div className='content'>
					<header className='header-container'>
						<h2>Reflection</h2>
					</header>
					<p className='section-subheading'>Conclusion</p>
					<p>
						It was really interesting to observe how a product’s use case
						is determined by the users—not the designers. I learned that
						designers may only guide users to interact with their products
						with their intended use case, ultimately its up to the users. I
						think that understanding this is vital to being an effective UX
						designer, as our job is to design products that people actually
						need, not solutions that we think they need. This leads to one
						of my most important lessons from this project: The vital
						importance of humility as a UX designer.
					</p>
					<p>
						Humility is the linchpin of true human-centric design. I
						learned that UX designers must set aside ego to (1) view
						criticism not as a roadblock but as a new path to improvement,
						and (2) warmly welcome the inevitability of unintended use
						cases. Initially, I was on edge watching users test my
						prototypes, anxiously anticipating errors with each click.
						However, diving into data synthesis and brainstorming for
						iterations changed everything when I realized design
						invalidation is merely an opportunity for more research and
						ideation sessions, which are unarguably my favorite parts of UX
						design. Fast forward to my next round of testing my iterations,
						this made my next round of testing much more enjoyable, where
						my previous nervousness evolved into excitement as I eagerly
						anticipated all types of feedback as valuable data to refine
						the user experience.
						<br />
						<br />
						This journey established my values as a designer: humility,
						vulnerability, and an insatiable hunger for growth. As
						fundamental pillars of the human experience, these values truly
						put the “human” in human-centered design.Learning UX design is
						one of the most challenging skills I’ve had to develop because
						it challenged many of my stubborn weaknesses. The most
						prominent growing pain I experienced developing my capstone
						project was challenging my being a people-pleasing
						perfectionist. It took everything to unlearn my perfectionism
						and tendency to people-please: I found myself hyper focused on
						perfecting the user interface and ideating solutions that would
						please every user. It felt against my nature to control my
						urges to incorporate every feature that every user needs and
						wants. Thankfully, the  affinity maps and user personas I
						crafted were able to ground me during these times. To my
						pleasant surprise, I not only grew as a designer but also as a
						person throughout this product cycle.
						<br />
						<br />
						To sum up my journey designing TasteBuds, I present you three
						quotes:
						<br />• You can’t please everyone—<em>don’t even try</em>.
						<br />• Designs are invalid assumptions until invalidated.
						<br />• Ego has no place in UX design.
						<br />
						<br />
						Last but not least:
						<em>
							Document your project cycle to save time when crafting your
							case study.
						</em>
					</p>
				</div>
			</div>
		</main>
	);
};

export default TasteBudsPage;
