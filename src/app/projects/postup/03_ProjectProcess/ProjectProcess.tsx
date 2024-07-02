// ESLint rule: "jsx-quotes": ["error", "prefer-double"]
/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { AppProps } from "next/app";
import styles from "./ProjectProcess.module.scss";
import "@/styles/globals.scss";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const ProjectProcess: React.FC = () => {
	const [open, setOpen] = useState(false);
	return (
		<section
			id="the-process"
			className="section-container equal-padding">
			<header className="header-container">
				<h2>Process</h2>
			</header>
			<div className="content">
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
					To address this problem, my research process followed the 5-stage
					Design Thinking model proposed by the Hasso Plattner Institute of
					Design at Stanford (the "d. school ").
				</p>
				<button
					className="scroll-button bg-transparent link-blue"
					data-scroll-target="final-tastebuds-solution">
					Jump to final prototype
					<span className="material-symbols-outlined ic-arrow_jump-to-section material-symbols_lower">
						arrow_downward
					</span>
				</button>
			</div>
			<div className="content medium">
				<Image
					fill={true}
					alt=""
					loading="lazy"
					src="/assets/images/tastebuds/research-process.png"
				/>
			</div>
		</section>
	);
};

export default ProjectProcess;
