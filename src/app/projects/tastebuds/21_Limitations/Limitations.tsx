import React from "react";
import styles from "./Limitations.module.scss";
import Link from "next/link";
import Image from "next/image";

const Limitations = () => {
	return (
		<section
			id="limitations"
			className="section-container">
			<div className="content">
				<p className="section-subheading">Limitations</p>
				<p>
					I know most if not all case studies don’t discuss their
					limitations, but as a designer with a degree in sociology, it
					feels wrong not to include them:
				</p>
				<ul
					className="list"
					role="list">
					<li>
						<span className="fw-medium">Observer Bias</span>: The presence
						of an observer during usability testing can influence
						participants' behavior or responses.
					</li>
					<li>
						<span className="fw-medium">Limited Scope of Testing:</span>{" "}
						While I was only testing my red routes, . This became apparent
						when some participants deviated from the route. Therefore, I
						likely missed out on specific usability issues that could occur
						in other situations.
						<span className="fw-medium">
							<br />
						</span>
					</li>
					<li>
						<span className="fw-medium">
							Difficulty Capturing Emotions and Attitudes:{" "}
						</span>
						My usability testing primarily focuses on observable behaviors
						and task completion, making it challenging to capture users'
						emotions or attitudes. Although I tried my best to extract
						insights through ample follow-up questions, as well as
						reminding users to think out loud, I was limited by time
						constraints.
					</li>
					<li>
						<span className="fw-medium">
							Designer Bias and Subjectivity:{" "}
						</span>
						As expressed earlier, my own biases as a user and an
						enthusiastic designer limited my perspective, which likely
						compromised the effectiveness of my tasks and limited my
						observations. Additionally, I inevitably interpreted test
						results subjectively, which led to overlooking behaviors due to
						preconceived biases, desire for validation, and anticipations.
					</li>
					<li>
						<span className="fw-medium">
							Impact of Wording in Instructions:{" "}
						</span>
						Subtle changes in task wording led users to interpret them
						differently, requiring adjustments that might have compromised
						data consistency.
					</li>
				</ul>
				<p className="paragraph grey">
					What are limitations? Limitations in research are the boundaries
					or weaknesses that restrict its scope, reliability, or
					generalizability. They’re constraints that can hinder the study's
					ability to fully address certain aspects or make broad
					conclusions. Recognizing these limitations is important to
					understand the study's context and interpret its findings
					accurately. In other words, these are the reasons you should take
					my conclusions with at least an iota of salt!
				</p>
			</div>
		</section>
	);
};

export default Limitations;
