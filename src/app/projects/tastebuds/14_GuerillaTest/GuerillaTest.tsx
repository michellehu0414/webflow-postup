import React from "react";
import styles from "./GuerillaTest.module.scss";
import Link from "next/link";
import Image from "next/image";

const GuerillaTest = () => {
	return (
		<section
			id="guerilla-test"
			className="section-container bg-lightest-grey border-0">
			<header className="header-container">
				<h2>
					<span>test</span>
					<br />
					Guerilla testing
				</h2>
			</header>
			<div className="content">
				<p>
					Since my sketches for routes 2 and 3 were close to low-fidelity,
					I prototoyped them and conducted guerilla usability tests with 5
					participants. Here's what I found:
				</p>
			</div>
			<div className="testing-outcomes_grid">
				<div className="testing-outcomes-card">
					<Image
						fill={true}
						alt=""
						className="testing-outcomes-icon-category"
						loading="lazy"
						src="/assets/images/tastebuds/icon-checkmark-circle-filled-green.png"
					/>
					<div className="card__content validation">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon"
							loading="lazy"
							src="/assets/svg/tastebuds/ic-discount-tag.svg"
						/>
						<p>
							All diners pointed out and affirmed the restaurant "deal".
						</p>
					</div>
				</div>
				<div className="testing-outcomes-card">
					<Image
						fill={true}
						alt=""
						className="testing-outcomes-icon-category"
						loading="lazy"
						src="/assets/images/tastebuds/icon-checkmark-circle-filled-green.png"
					/>
					<div className="card__content validation">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon"
							loading="lazy"
							src="/assets/svg/tastebuds/ic-discount-tag.svg"
						/>
						<p>All diners affirmed the personalized recommendations.</p>
					</div>
				</div>
				<div className="testing-outcomes-card">
					<Image
						fill={true}
						alt=""
						className="testing-outcomes-icon-category"
						loading="lazy"
						src="/assets/images/tastebuds/icon-checkmark-circle-filled-green.png"
					/>
					<div className="card__content validation">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon"
							loading="lazy"
							src="/assets/svg/tastebuds/ic-discount-tag.svg"
						/>
						<p>
							All diners found the prototype intuitive and affirmed its
							potential.
						</p>
					</div>
				</div>
				<div className="testing-outcomes-card">
					<Image
						fill={true}
						alt=""
						className="testing-outcomes-icon-category"
						loading="lazy"
						src="/assets/images/tastebuds/icon-checkmark-circle-filled-green.png"
					/>
					<div className="card__content validation">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon"
							loading="lazy"
							src="/assets/svg/tastebuds/ic-map-with-location-icon.svg"
						/>
						<p>The map view is essential for a location based search.</p>
					</div>
				</div>
				<div className="testing-outcomes-card">
					<Image
						fill={true}
						alt=""
						className="testing-outcomes-icon-category"
						loading="lazy"
						src="/assets/images/tastebuds/icon-cancel-circle-filled-red.png"
					/>
					<div className="card__content invalidation">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon"
							loading="lazy"
							src="/assets/svg/tastebuds/ic-not-visible.svg"
						/>
						<p>
							3 diners didn't notice the map (behind the list of results).
						</p>
					</div>
				</div>
				<div className="testing-outcomes-card">
					<Image
						fill={true}
						alt=""
						className="testing-outcomes-icon-category"
						loading="lazy"
						src="/assets/images/tastebuds/icon-cancel-circle-filled-red.png"
					/>
					<div className="card__content invalidation">
						<Image
							fill={true}
							alt=""
							className="testing-outcomes-icon"
							loading="lazy"
							src="/assets/svg/tastebuds/ic-star-rating-slider.svg"
						/>
						<p>4 diners struggled with the slider design to rate stars.</p>
					</div>
				</div>
			</div>
			<div className="content">
				<a href="https://docs.google.com/document/d/1nq9g-vct7cKA-PFsIPlcCAuN3rX1QibhBRnavFDOs_0/edit?usp=sharing">
					<p className="link-blue text-center">
						View complete test report
					</p>
				</a>
			</div>
		</section>
	);
};

export default GuerillaTest;
