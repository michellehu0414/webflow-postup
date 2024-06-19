import React from "react";
import styles from "./Reflection.module.scss";
import Link from "next/link";
import Image from "next/image";

const Reflection = () => {
	return (
		<section
			id="reflection"
			className="section-container">
			<div className="content">
				<header className="header-container">
					<h2>Learnings</h2>
				</header>
				<p>
					This usability test taught me a lot about my design solutions and
					design thinking. I uncovered some of my most significant mistakes
					and weaknesses as a designer and as an individual that
					contributed to the issues:
				</p>
				<div className="content gap-16px">
					<p>
						<strong className="p _1-266-rem">
							stop trying to please everyone
						</strong>
					</p>
					<p>
						Upon reflection, I realized I had fallen into a common pitfall
						among designers - attempting to cater to everyone's needs. For
						example, I overloading the home page with content. My attempts
						to design became counterproductive as I ended up over-designing
						the more time I invested in the process. As a result, I had not
						resolved a critical pain point among diners with information
						overload insofar that I may have contributed to it.
						<br />
						The task that participants found the most challenging was
						searching for dining options. The primary issue stemmed from
						information overload on the restaurant listing's home page,
						primarily caused by my decision to merge the home and info
						pages.
					</p>
				</div>
				<div className="content gap-16px">
					<p>
						<strong className="p _1-266-rem">
							user behaviors are circumstantial
						</strong>
					</p>
					<p>
						<strong className="p _1-266-rem">‍</strong>I learned that
						diners’ current behaviors have less influence on how they would
						utilize TastBuds than I thought. For example, since my primary
						research found that diners feel reluctant to write reviews, I
						was overly concerned with designing solutions that encourage
						diners to write reviews and discourage fake reviews. For
						instance, this is why I designed the written portion of the
						review process optional, making reviewing a menu item required,
						and implementing gamification as incentive. However, my
						usability testing revealed that this isn’t an issue because my
						solutions are leveraging diners’ trust and preference in
						word-of-mouth recommendations. If diners don’t write reviews
						because they’re public then I shouldn’t be concerned with this
						behavior when TasteBuds is meant to provide a safe space for
						diners to share their recommendations for their friends only.
					</p>
				</div>
				<div className="content gap-16px">
					<p>
						<strong className="p _1-266-rem">
							mental models are not definitive
						</strong>
					</p>
					<p>
						<strong className="p _1-266-rem">‍</strong>My design thinking
						was limited by feeling the need to adhere to the conventional
						user journey and mental models. This led me to overlook
						opportunities for innovation, forgetting that my design
						solutions aim to improve the current experience, not replicate
						it. This oversight became apparent when participants diverged
						from the user flow I had initially designed to search for
						dining options. My user flow only included using the search bar
						to explore options. Since the typical user flow for Yelp and
						Google Maps is where diners read reviews within the review
						section of the restaurant listing, I thought that diners would
						do the same thing. I did not expect diners to employ the social
						feed or for you page even though that’s their purpose. In
						hindsight, this occurred during my first usability testing too,
						but I unfortunately misunderstood these actions as user errors
						rather than design validation. Additionally, I am so accustomed
						to the idea of reviews being based on star ratings that I never
						even considered the possibility of an alternative or
						potentially better system. I realized my fixation on respecting
						mental models caused me to overlook the influence of my own
						biases in my design process. This oversight led me to miss an
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
				<div className="content gap-16px">
					<p>
						‍
						<strong className="p _1-266-rem">
							When users willingly rebel against their mental models
						</strong>
					</p>
					<p>
						Another valuable insight I discovered is how users diverge from
						their mental models and typical behaviors. I found that users
						are open to challenging their mental models for compelling
						alternatives. This was an intriguing finding because I had been
						rather concerned with designing against conventions. For
						example, my most controversial design was how diners give
						star-ratings, as it allows diners to rate up to five stars,
						starting from zero, in increments of half stars. I can’t fully
						justify why I was keen on perfecting this design when most
						participants struggled with it. My determination was simply
						motivated by my curiosity, given that this is technically a
						low-stakes project with a fake product. While participants
						greatly struggled with my design during usability testing I, my
						iterations resolved this issue. Another example is how users
						proceeded to input their food preferences despite how they
						typically postpone inputting preferences until they are
						familiarized with the app. I found that some were willing to
						simply because they understood the logic behind it, as
						personalized recommendations is a significant part of
						TasteBuds, which would require input from users.These behaviors
						revealed that (1) users’ willingness to rebel against the
						status quo correlates with their level of dissatisfaction with
						current methods and (2) users are incentivized by the novelty
						of innovative solutions. In other words, people are willing to
						try something new when necessary and enjoy trying something new
						in general. This highlights the potential for innovative
						features to drive user engagement and behavior change. I think
						this can help guide and motivate designers to create innovative
						solutions. After all, while it’s important to respect industry
						standards, standards are always evolving!
					</p>
				</div>
				<div className="content gap-16px">
					<p>
						<strong className="p _1-266-rem">
							the right approach to usability testing
						</strong>
						‍
					</p>
					<p>
						‍
						<strong>
							I learned that I simply did not understand the purpose of
							designing user flows. I did not know that the first user flow
							is only the first of many and that it is merely speculation
							that also requires design validation. sability testing can
							reveal a lot more if you’re focused on your participants
							reaching the desired destination, rather than the route they
							take. After all, the user flows we create are speculations.
							The real user flow is what users take with your product. User
							flows we construct are essentially speculative, whereas the
							actual user flow emerges from how users interact with the
							product in real-time.
						</strong>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Reflection;
