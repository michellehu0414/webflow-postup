import React from "react";
import styles from "./CompetitorAnalysis.module.scss";
import Link from "next/link";
import Image from "next/image";

const CompetitorAnalysis = () => {
	return (
		<div>
			<section
				id="competitor-analysis"
				className="section-container">
				<header className="header-container">
					<h2>
						<span> Competitor Analysis </span>
						<br />
						Learning from my competitors
					</h2>
				</header>
				<div className="content">
					<p>
						Based on my primary and secondary research, I found that diners
						mostly use Yelp, Google, Google Maps, and word-of-mouth
						recommendations to explore options. Therefore, I analyzed
						Google Maps and Yelp's designs and looked into their
						relationship with diners' pain points.
					</p>
					<p className="section-subheading">research goals</p>
					<ul>
						<li>Understanding user expectations</li>
						<li>Gauging their weaknesses</li>
						<li>Understanding their strengths</li>
						<li>Finding the common ground</li>
						<li>Evaluating gaps and unmet needs</li>
					</ul>
				</div>
				<div className="competitor-analysis_wrapper">
					<div className="competitor-analysis_grid-container">
						<div className="competitor-analysis-app">
							<Image
								fill={true}
								alt=""
								className="img-competitor-logo"
								loading="lazy"
								src="/assets/images/tastebuds/logo-yelp.png"
							/>
							<p>Yelp: Food, Delivery &amp; Reviews</p>
						</div>
						<Image
							fill={true}
							alt=""
							className="img-competitor-screen"
							loading="lazy"
							src="/assets/images/tastebuds/competitor-analysis-results-yelp.png"
						/>
						<Image
							fill={true}
							alt=""
							className="img-competitor-screen"
							loading="lazy"
							src="/assets/images/tastebuds/competitor-analysis-listing-yelp.png"
						/>
						<Image
							fill={true}
							alt=""
							className="img-competitor-screen"
							loading="lazy"
							src="/assets/images/tastebuds/competitor-analysis-review-yelp.png"
						/>
						<div className="competitor-analysis-finding">
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
					<div className="competitor-analysis_grid-container">
						<div className="competitor-analysis-app">
							<div className="img-google-maps_wrapper">
								<Image
									fill={true}
									alt=""
									className="img-google-maps"
									loading="lazy"
									src="/assets/images/tastebuds/logo-google-maps.png"
								/>
							</div>
							<p>Google Maps</p>
						</div>
						<Image
							fill={true}
							alt=""
							className="img-competitor-screen"
							loading="lazy"
							src="/assets/images/tastebuds/competitor-analysis-results-google.png"
						/>
						<Image
							fill={true}
							alt=""
							className="img-competitor-screen"
							loading="lazy"
							src="/assets/images/tastebuds/competitor-analysis-listing-google.png"
						/>s
						<Image
							fill={true}
							alt=""
							className="img-competitor-screen"
							loading="lazy"
							src="/assets/images/tastebuds/competitor-analysis-review-google.png"
						/>
						<div className="competitor-analysis-finding">
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
				<div className="content">
					<p className="section-subheading">Conclusion</p>
					<p>
						I found a significant shift in my competitors' products—from
						being user-centric to becoming more system-centric.
						<span className="fw-medium">
							Their lack of personalization and an excess of
							commercialization, has resulted in diners experiencing
							mistrust, information overload, and decision paralysis.
						</span>
					</p>
				</div>
			</section>
		</div>
	);
};

export default CompetitorAnalysis;
