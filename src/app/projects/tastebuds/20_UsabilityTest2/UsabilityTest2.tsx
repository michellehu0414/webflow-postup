import React from "react";
import styles from "./UsabilityTest2.module.scss";
import Link from "next/link";
import Image from "next/image";

const UsabilityTest2 = () => {
	return (
		<section
			id="usability-testing-3"
			className="section-container">
			<div className="content">
				<div className="title">
					<div className="flex vertical _24-px">
						<h2 className="title-label">testing</h2>
						<h2 className="section-title">
							usability testing III: high-fidelity prototype
						</h2>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="content">
					<p className="section-subheading">Methodology</p>
					<p>
						I conducted moderated usability testing with
						<span className="fw-medium">five participants </span>
						remotely. Each test included the following
						<span className="fw-medium">tasks</span>:
					</p>
					<ul
						className="list"
						role="list">
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
					</ul>
				</div>
				<div className="content first-child">
					<p className="p _1-266-rem">research questions</p>
					<p>
						In addition to the typical objectives of usability testing, I
						had several
						<span className="fw-medium">targeted research questions</span>:
					</p>
					<ul
						className="list"
						role="list">
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
				<div className="content">
					<p className="p _1-266-rem">participant characteristics</p>
					<ul
						className="list"
						role="list">
						<li>Ages 21-30</li>
						<li>
							Uses at least one online method to find a restaurant to dine
							at
						</li>
						<li>Dines out at least once a week</li>
					</ul>
				</div>
			</div>
			<div className="section-container blue">
				<div className="content">
					<p className="section-subheading">Affinity Mapping</p>
					<p>
						Once again, working independently, I'm always finding ways to
						maximize all of my efforts. Previously, I used FigJam to create
						affinity maps. I enjoyed how easy it was to use and the
						colorful tools it offers. However, as a research enthusiast, I
						wanted to step up my data synthesis process this time. Although
						I'm not an expert in quantitative analysis, I try to
						incorporate it whenever possible, even if it's just simple
						charts and graphs. I was looking for a way to quickly identify
						patterns and themes via keywords, so I started out using Google
						Sheets. However, I quickly gave up because it looked so boring,
						and I realized it wasn't necessary since there wasn't much
						quantitative data. After digging through my toolbox some more,
						I found my Goldilocks solution—Notion!
					</p>
					<p>
						I created affinity maps for each route, integrating multiple
						features to organize, structure, and process my data. The
						variety of “Views”, such as tables, lists, boards, or
						galleries, were useful to organize my data depending on my
						objective:
					</p>
					<div
						className="tabs iterations w-tabs"
						data-current="Tab 1"
						data-duration-in="300"
						data-duration-out="100"
						data-easing="ease">
						<div
							className="tabs-menu _2-columns w-tab-menu"
							role="tablist">
							<Link
								aria-controls="w-tabs-7-data-w-pane-0"
								aria-selected="true"
								className="tab-link-30 w-inline-block w-tab-link w--current"
								data-w-tab="Tab 1"
								href="https://michelle-portfolio-fc56f5.webflow.io/case-study-tastebuds-2#w-tabs-7-data-w-pane-0"
								id="w-tabs-7-data-w-tab-0"
								role="tab">
								<div className="tab-link-tab-1">route 1</div>
							</Link>
							<Link
								aria-controls="w-tabs-7-data-w-pane-1"
								aria-selected="false"
								className="tab-link-30 w-inline-block w-tab-link"
								data-w-tab="Tab 2"
								href="https://michelle-portfolio-fc56f5.webflow.io/case-study-tastebuds-2#w-tabs-7-data-w-pane-1"
								id="w-tabs-7-data-w-tab-1"
								role="tab"
								tabIndex={-1}>
								<div className="tab-link-inactive">route 2</div>
							</Link>
							<Link
								aria-controls="w-tabs-7-data-w-pane-2"
								aria-selected="false"
								className="tab-link-30 w-inline-block w-tab-link"
								data-w-tab="Tab 3"
								href="https://michelle-portfolio-fc56f5.webflow.io/case-study-tastebuds-2#w-tabs-7-data-w-pane-2"
								id="w-tabs-7-data-w-tab-2"
								role="tab"
								tabIndex={-1}>
								<div className="tab-link-inactive">route 3</div>
							</Link>
						</div>
						<div className="w-tab-content">
							<div
								aria-labelledby="w-tabs-7-data-w-tab-0"
								className="tab-pane-tab-1 w-tab-pane w--tab-active"
								data-w-tab="Tab 1"
								id="w-tabs-7-data-w-pane-0"
								role="tabpanel">
								<Image
									fill={true}
									alt=""
									loading="lazy"
									src="/assets/images/tastebuds/route-i-affinity-map-(1_2).png"
								/>
							</div>
							<div
								aria-labelledby="w-tabs-7-data-w-tab-1"
								className="tab-pane-tab-3 w-tab-pane"
								data-w-tab="Tab 2"
								id="w-tabs-7-data-w-pane-1"
								role="tabpanel">
								<Image
									fill={true}
									alt=""
									loading="lazy"
									src="/assets/images/tastebuds/route-ii-affinity-map-(1_2).png"
								/>
								<Image
									fill={true}
									alt=""
									loading="lazy"
									src="/assets/images/tastebuds/route-ii-affinity-map-(2_2).png"
								/>
							</div>
							<div
								aria-labelledby="w-tabs-7-data-w-tab-2"
								className="tab-pane-tab-3 w-tab-pane"
								data-w-tab="Tab 3"
								id="w-tabs-7-data-w-pane-2"
								role="tabpanel">
								<Image
									fill={true}
									alt=""
									loading="lazy"
									src="/assets/images/tastebuds/route-iii-affinity-map.png"
								/>
							</div>
						</div>
					</div>
					<div className="div-block-160">
						<Image
							fill={true}
							loading="lazy"
							src="/assets/images/tastebuds/notion-example.png"
							alt=""
						/>
					</div>
					<p>
						Notion’s database properties were a lifesaver during the
						synthesis phase, enabling me to filter and arrange data
						effectively to efficiently identify patterns. Below are a
						couple of my favorites!
					</p>
					<p>
						‍<strong className="p _1-266-rem">count: </strong>I formulated
						this property to tally the
						<span className="fw-medium">
							number of "Participants" tagged
						</span>{" "}
						for each data entry. When creating my affinity maps,
						<span className="fw-medium">
							sorting the database by "Count" in descending order
						</span>{" "}
						allowed me to
						<span className="fw-medium">
							visualize the most recurrent data from highest to lowest
						</span>{" "}
						occurrence. This made my process of identifying and organizing
						issues by their magnitude much easier.
						<strong className="p _1-266-rem">
							<br />
							<br />
							Tags:{" "}
						</strong>
						The single-select and multi-select tags I used were immensely
						helpful for
						<span className="fw-medium">
							pinpointing themes and patterns
						</span>
						, and
						<span className="fw-medium">locating specific data</span>. For
						instance, this was useful when I was looking for quotes about
						delightful experiences during route 1 when diners are inputting
						food preferences. With just a few clicks in the filters, I
						quickly found what I needed:
					</p>
					<Image
						fill={true}
						alt=""
						loading="lazy"
						src="/assets/images/tastebuds/screen-shot-2023-12-07-at-10.30.55-pm.png"
					/>
					<p>
						Feel free to take a look at my database
						<Link
							href="https://maple-talon-dc2.notion.site/Usability-Testing-II-f1e49c6ab1164a6fb4370a5b739723d8"
							target="_blank">
							here
						</Link>
						!
					</p>
				</div>
			</div>
			<div>
				<div className="content">
					<p className="section-subheading">Findings</p>
					<p>
						Overall, participants experienced far more delights than pain
						points. I found much much more design validation than
						invalidation!
					</p>
					<p>
						While there were new struggles, all errors that occurred during
						the previous usability testing were resolved.
					</p>
					<div>
						<div className="flex horizontal">
							<div className="flex-block-15">
								<div className="div-block-90">
									<Image
										fill={true}
										alt=""
										className="image-36"
										loading="lazy"
										src="/assets/images/tastebuds/icon-checkmark-circle-filled-green.png"
									/>
								</div>
								<div className="flex-block-40 gap-0">
									<div>
										<div className="testing-outcomes-content">
											<Image
												fill={true}
												alt=""
												className="image-80px-middle"
												loading="lazy"
												src="/assets/images/tastebuds/icon-filter-filled-blue.png"
											/>
											<div className="div-block-89">
												<p className="paragraph text-align-center">
													Users greatly enjoyed the
													<span className="fw-medium">
														inclusivity and diversity
													</span>{" "}
													across the app (i.e. filters, food preferences,
													cuisine options).
												</p>
											</div>
										</div>
									</div>
									<div className="horizontal-divider"></div>
									<div className="testing-outcomes-content">
										<Image
											fill={true}
											alt=""
											className="image-80px-middle"
											loading="lazy"
											src="/assets/images/tastebuds/icon-filter-filled-blue.png"
										/>
										<div className="div-block-89">
											<p className="paragraph text-align-center">
												They found the designs
												<span className="fw-medium">
													intuitive and straightforward
												</span>
												.
											</p>
										</div>
									</div>
									<div className="horizontal-divider"></div>
									<div className="testing-outcomes-content">
										<Image
											fill={true}
											alt=""
											className="image-80px-middle"
											loading="lazy"
											src="/assets/images/tastebuds/icon-filter-filled-blue.png"
										/>
										<div className="div-block-89">
											<p className="paragraph text-align-center">
												Everyone successfully
												<strong>
													comprehended the intended purpose and
													functionalities
												</strong>
												.
											</p>
										</div>
									</div>
									<div className="horizontal-divider"></div>
									<div className="testing-outcomes-content">
										<Image
											fill={true}
											alt=""
											className="image-80px-middle"
											loading="lazy"
											src="/assets/images/tastebuds/icon-filter-filled-blue.png"
										/>
										<div className="div-block-89">
											<p className="paragraph text-align-center">
												Users independently
												<strong>employed different routes</strong> to
												explore dining options outside of the intended flow
												by using unique features.
											</p>
										</div>
									</div>
									<div className="horizontal-divider"></div>
									<div className="testing-outcomes-content">
										<Image
											fill={true}
											alt=""
											className="image-80px-middle"
											loading="lazy"
											src="/assets/images/tastebuds/icon-filter-filled-blue.png"
										/>
										<div className="div-block-89">
											<p className="paragraph text-align-center">
												Diners felt excited about the unique design
												solutions.
											</p>
										</div>
									</div>
									<div className="horizontal-divider"></div>
									<div className="testing-outcomes-content">
										<Image
											fill={true}
											alt=""
											className="image-80px-middle"
											loading="lazy"
											src="/assets/images/tastebuds/icon-filter-filled-blue.png"
										/>
										<div className="div-block-89">
											<p className="paragraph text-align-center">
												Most diners did not struggle with the design to
												rate stars.
											</p>
										</div>
									</div>
									<div className="horizontal-divider"></div>
									<div className="testing-outcomes-content">
										<Image
											fill={true}
											alt=""
											className="image-80px-middle"
											loading="lazy"
											src="/assets/images/tastebuds/icon-filter-filled-blue.png"
										/>
										<div className="div-block-89">
											<p className="paragraph text-align-center">
												Diners felt very pleased with the visual designs,
												such as graphics, colors, and more.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="flex-block-15">
								<div className="div-block-90">
									<Image
										fill={true}
										alt=""
										className="image-36"
										loading="lazy"
										src="/assets/images/tastebuds/icon-cancel-circle-filled-red.png"
									/>
								</div>
								<div className="flex-block-40 gap-0">
									<div className="testing-outcomes-content">
										<Image
											fill={true}
											alt=""
											className="image-80px-middle"
											loading="lazy"
											src="/assets/images/tastebuds/icon-filter-filled-blue.png"
										/>
										<div className="div-block-89">
											<p className="paragraph text-align-center">
												Merging the restaurant listing's home page and info
												page caused information overload to several diners.
											</p>
										</div>
									</div>
									<div className="horizontal-divider"></div>
									<div className="testing-outcomes-content">
										<Image
											fill={true}
											alt=""
											className="image-80px-middle"
											loading="lazy"
											src="/assets/images/tastebuds/icon-filter-filled-blue.png"
										/>
										<div className="div-block-89">
											<p className="paragraph text-align-center">
												Most diners were confused about some part of the
												design of reviews in the social feed.
											</p>
										</div>
									</div>
									<div className="horizontal-divider"></div>
									<div className="testing-outcomes-content">
										<Image
											fill={true}
											alt=""
											className="image-80px-middle"
											loading="lazy"
											src="/assets/images/tastebuds/icon-filter-filled-blue.png"
										/>
										<div className="div-block-89">
											<p className="paragraph text-align-center">
												Prototype errors frustrated some users.
											</p>
										</div>
									</div>
									<div className="horizontal-divider"></div>
									<div className="testing-outcomes-content">
										<Image
											fill={true}
											alt=""
											className="image-80px-middle"
											loading="lazy"
											src="/assets/images/tastebuds/icon-filter-filled-blue.png"
										/>
										<div className="div-block-89">
											<p className="paragraph text-align-center">
												Many did not detect the pagination bar in the
												restaurant listing.
											</p>
										</div>
									</div>
									<div className="horizontal-divider"></div>
									<div className="testing-outcomes-content">
										<Image
											fill={true}
											alt=""
											className="image-80px-middle"
											loading="lazy"
											src="/assets/images/tastebuds/icon-filter-filled-blue.png"
										/>
										<div className="div-block-89">
											<p className="paragraph text-align-center">
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
			<div className="container padding-40px light-grey">
				<div className="content">
					<p className="section-subheading">Insights</p>
					<div className="flex-block-40">
						<div className="flex">
							<div className="testing-outcomes-content padding-0">
								<div className="div-block-89">
									<p className="main-heading _1-602-rem">
										Visual aids effectively and efficiently communicate key
										information.
										<br />
									</p>
								</div>
							</div>
							<div className="quote-block user-interviews sample">
								<h2 className="heading-18 quotes">
									"The flags with the country made it more fun to scroll,
									made me feel smart…It’s nice to have a visual. If I see a
									long list with just text, I probably wouldn’t select
									anything…The pictures made it more fun.”‍
								</h2>
								<h2 className="heading-18 quotes">—Participant #4.</h2>
							</div>
						</div>
						<div className="horizontal-divider black-1px"></div>
						<div className="flex">
							<div className="testing-outcomes-content padding-0">
								<div className="div-block-89">
									<p className="main-heading _1-602-rem">
										Given that TasteBuds is a social recommendation app and
										users heavily rely on food imagery, it is crucial to
										prioritize visually appealing content in order to
										deliver an optimal user experience.
									</p>
								</div>
							</div>
							<div className="quote-block user-interviews sample">
								<h2 className="heading-18 quotes">
									“Similar to food, you first taste with your eyes. If
									something looks good visually right off the bat, I’m more
									inclined to spend time on it, and closely examine what it
									is that’s catching my attention. Visuals are really
									important in an app.”
								</h2>
								<h2 className="heading-18 quotes">—Participant #5</h2>
							</div>
						</div>
						<div className="horizontal-divider black-1px"></div>
						<div className="flex">
							<div className="testing-outcomes-content padding-0">
								<div className="div-block-89">
									<p className="main-heading _1-602-rem">
										Users are open to challenging UX practices when
										necessary, such as dissatisfaction with current methods
										and the novelty of new methods. Users also desire
										personalization. Participants were very impressed by
										the diversity, inclusivity, and specificity in
										selections.
										<br />
									</p>
								</div>
							</div>
							<div className="quote-block user-interviews sample">
								<h2 className="heading-18 quotes">
									“I usually use Google Maps, so I'd type in “Mexican
									restaurant”. I don't think there’s really any filtering.
									Sometimes you can be overloaded with all the results. No
									other apps have filters as extensive… If I had this app,
									I'd totally use it all the time. I really like the
									different filters.”
								</h2>
								<h2 className="heading-18 quotes">‍—Participant #2</h2>
							</div>
						</div>
						<div className="horizontal-divider black-1px"></div>
						<div className="flex">
							<div className="testing-outcomes-content padding-0">
								<div className="div-block-89">
									<p className="main-heading _1-602-rem">
										Participants enjoyed how the comprehensive review
										options based on consuming unhelpful public reviews.
									</p>
								</div>
							</div>
							<div className="quote-block user-interviews sample">
								<h2 className="heading-18 quotes">
									“I like how there's a lot of options in general. It’s
									very detailed. The whole point of the review is to
									provide details to people. The way it’s set up can help
									people understand someone’s experience at the place. It
									was very comprehensive, but also gave you the optionals.
									You can decide how much of a review you wanted to write.”
								</h2>
								<h2 className="heading-18 quotes">‍—Participant #2</h2>
							</div>
						</div>
						<div className="horizontal-divider black-1px"></div>
						<div className="flex">
							<div className="testing-outcomes-content padding-0">
								<div className="div-block-89">
									<p className="main-heading _1-602-rem">
										Some diners are empathetic about hurting restaurants
										with negative reviews due to subjectivity of their
										experiences. Participant #1 suggested to make ratings
										optional or implement an upvote downvote system.
									</p>
								</div>
							</div>
							<div className="quote-block user-interviews sample">
								<h2 className="heading-18 quotes">
									 “What if what I ordered is bad, but I don’t wanna
									comment on it? What if what I ordered is good but this
									isn’t the only thing you should order? What if I ordered
									something I didn’t like, but all my friends liked what
									they ordered, and the service and everything was great?
									It’s not fair to the restaurant to have to get a bad
									rating if it’s personal to me.”
								</h2>
								<h2 className="heading-18 quotes">‍—Participant #1</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="flex horizontal">
					<div className="flex-block-15">
						<div className="div-block-90"></div>
					</div>
				</div>
				<div className="div-block-149">
					<div className="w-layout-hflex flex vertical">
						<div className="vertical-divider"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UsabilityTest2;
