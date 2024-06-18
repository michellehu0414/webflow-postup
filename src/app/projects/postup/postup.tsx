/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import styles from "./postup.module.scss"; // Ensure this path and filename are correct
import "@/styles/globals.scss";
import Accordion from "@/components/Accordion/Accordion";

const PostUpPage: React.FC = () => {
	const [open, setOpen] = useState(false);

	return (
		<main>
			<div className='mt-32'>
				<Accordion
					open={open}
					setOpen={setOpen}
					label="Where would the mobile app obtain information on 'ingredients'?">
					<p>
						With ingredients being the building blocks of food, I
						speculated that these preferences and restrictions would be key
						to generating relevant recommendations by targeting specific
						ingredients in menu item descriptions.
						<br />
						<br /> After some research, I learned that this can be
						engineered using Yelp and Google APIs. However, this idea was a
						key moment in my brainstorming phase because this gave me the
						idea of integrating restaurants into the mobile solution as
						users to update their information and menus. This also gave me
						the idea for a business strategy to generate revenue from
						restaurant partnerships, keeping the app free for diners and
						providing user insights to restaurants to enhance their
						offerings, thus enhancing the overall diner journey cycle.
					</p>
				</Accordion>
			</div>
		</main>
	);
};

export default PostUpPage;
