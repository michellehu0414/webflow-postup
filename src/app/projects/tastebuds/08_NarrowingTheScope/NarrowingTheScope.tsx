import React from "react";
import styles from "./NarrowingTheScope.module.scss";
import Link from "next/link";
import Image from "next/image";

const NarrowingTheScope = () => {
	return (
		<section
			id="narrowing-the-scope"
			className="section-container equal-padding">
			<header className="header-container">
				<h2>
					<span>define</span>
					<br />
					Connecting the dots with a mind map
				</h2>
			</header>
			<div className="content">
				<p className="mb-32 mt-0">
					At this point, I realized that while my research had uncovered a
					lot about diners' problems, I still didn't fully grasp the big
					picture. To better understand my findings and how they relate to
					each other, I decided to make a mind map!
				</p>
				<div className="content-grid">
					<div>
						<Image
							fill={true}
							alt=""
							loading="lazy"
							src="/assets/images/tastebuds/purple-colorful-organic-mind-map-brainstorm-(2).png"
						/>
					</div>
					<aside>
						<p>As a visual learner, this helped a lot!</p>
					</aside>
				</div>
			</div>
			<div className="content">
				<h3>Conclusion</h3>
				<p className="secondary-text">
					Diners lack confidence in decision-making, and existing methods
					are to blame.
				</p>
				<p>
					Increasingly{" "}
					<span className="fw-medium">
						commercialized content, lack of personalization
					</span>
					, inifinite search results, irrelevant and unreliable content
					cause decision paralysis and information overload. Consequently,
					diners struggle to confidently explore dining options and make
					informed decisions.
				</p>
				<p>
					Additionally, I was able to answer my question from my secondary
					research:
				</p>
				<p className="secondary-text">
					Diners resort to online reviews because they're more accessible
					than word-of-mouth recommendations.
				</p>
				<div className="flex vertical _24-px"></div>
			</div>
		</section>
	);
};

export default NarrowingTheScope;
