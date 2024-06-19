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
		<section className="overview">
			<ContentContainer>
				<h1>Welcome to My Next.js App</h1>
				<p>This is a content container with medium size.</p>
				<h3>Hello</h3>
			</ContentContainer>
			<div className="overview__content-wrapper">
				<header className="overview__header">
					<h1 className="overview__title">TasteBuds</h1>
					<p className="overview__tagline">
						Empowering diners to discover dining options with tastebuds
						they trust.
					</p>
					<div className="overview__tags-wrapper overview__tags-wrapper--scrollable">
						<div className="overview__tag overview__tag--tastebuds">
							product design
						</div>
						<div className="overview__tag overview__tag--tastebuds">
							interaction design
						</div>
						<div className="overview__tag overview__tag--tastebuds">
							business strategy
						</div>
						<div className="overview__tag overview__tag--tastebuds">
							competitive research
						</div>
						<div className="overview__tag overview__tag--tastebuds">
							prototyping
						</div>
					</div>
				</header>
				<div className="overview__details-container">
					<div className="overview__grid-item">
						<div className="overview__details-list">
							<p className="overview__details-headline">Timeline</p>
							<ul>
								<li>December 2022 - June 2023</li>
							</ul>
						</div>
					</div>
					<div className="overview__details-list">
						<p className="overview__details-headline">Tools</p>
						<div className="overview__tools-grid-container">
							<div className="overview__tools-logo-wrapper overview__tools-logo-wrapper--figma">
								<Image
									fill={true}
									loading="lazy"
									src="/assets/images/toolbox-logos/logo-figma.png"
									alt=""
								/>
							</div>
							<div className="overview__tools-logo-wrapper overview__tools-logo-wrapper--general">
								<Image
									fill={true}
									alt=""
									loading="lazy"
									src="/assets/images/tastebuds/logo-notion.png"
								/>
							</div>
							<div className="overview__tools-logo-wrapper overview__tools-logo-wrapper--miro">
								<Image
									fill={true}
									alt=""
									loading="lazy"
									src="/assets/images/tastebuds/logo-miro.png"
								/>
							</div>
							<div className="overview__tools-logo-wrapper overview__tools-logo-wrapper--canva">
								<Image
									fill={true}
									alt=""
									loading="lazy"
									src="/assets/images/tastebuds/logo-canva.png"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex-row center">
				<button
					className="scroll-button hero"
					data-scroll-target="the-problem"
					aria-label="Scroll down">
					<Image
						fill={true}
						src="/assets/svg/ic-arrowDown.svg"
						alt="Chevron arrow pointing down, indicating to scroll down"
					/>
				</button>
			</div>
		</section>
	);
};

export default ProjectProcess;
