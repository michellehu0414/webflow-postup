import React from "react";
import styles from "./Conclusion.module.scss";
import Link from "next/link";
import Image from "next/image";

const Conclusion = () => {
	return (
		<section className="section-container">
			<div className="content">
				<header className="header-container">
					<h2>Reflection</h2>
				</header>
				<p className="section-subheading">Conclusion</p>
				<p>
					It was really interesting to observe how a product’s use case is
					determined by the users—not the designers. I learned that
					designers may only guide users to interact with their products
					with their intended use case, ultimately its up to the users. I
					think that understanding this is vital to being an effective UX
					designer, as our job is to design products that people actually
					need, not solutions that we think they need. This leads to one of
					my most important lessons from this project: The vital importance
					of humility as a UX designer.
				</p>
				<p>
					Humility is the linchpin of true human-centric design. I learned
					that UX designers must set aside ego to (1) view criticism not as
					a roadblock but as a new path to improvement, and (2) warmly
					welcome the inevitability of unintended use cases. Initially, I
					was on edge watching users test my prototypes, anxiously
					anticipating errors with each click. However, diving into data
					synthesis and brainstorming for iterations changed everything
					when I realized design invalidation is merely an opportunity for
					more research and ideation sessions, which are unarguably my
					favorite parts of UX design. Fast forward to my next round of
					testing my iterations, this made my next round of testing much
					more enjoyable, where my previous nervousness evolved into
					excitement as I eagerly anticipated all types of feedback as
					valuable data to refine the user experience.
					<br />
					<br />
					This journey established my values as a designer: humility,
					vulnerability, and an insatiable hunger for growth. As
					fundamental pillars of the human experience, these values truly
					put the “human” in human-centered design.Learning UX design is
					one of the most challenging skills I’ve had to develop because it
					challenged many of my stubborn weaknesses. The most prominent
					growing pain I experienced developing my capstone project was
					challenging my being a people-pleasing perfectionist. It took
					everything to unlearn my perfectionism and tendency to
					people-please: I found myself hyper focused on perfecting the
					user interface and ideating solutions that would please every
					user. It felt against my nature to control my urges to
					incorporate every feature that every user needs and wants.
					Thankfully, the  affinity maps and user personas I crafted were
					able to ground me during these times. To my pleasant surprise, I
					not only grew as a designer but also as a person throughout this
					product cycle.
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
		</section>
	);
};

export default Conclusion;
