import Accordion from "@/components/ProjectAccordion/ProjectAccordion";

export default function PostUpPage() {
	return (
		<main>
			<div className="mt-32">
				<Accordion label="Where would the mobile app obtain information on 'ingredients'?">
					<p>
						With ingredients being the building blocks of food, I speculated that these preferences and restrictions would be key to generating
						relevant recommendations by targeting specific ingredients in menu item descriptions.
						<br />
						<br /> After some research, I learned that this can be engineered using Yelp and Google APIs. However, this idea was a key moment in my
						brainstorming phase because this gave me the idea of integrating restaurants into the mobile solution as users to update their information
						and menus. This also gave me the idea for a business strategy to generate revenue from restaurant partnerships, keeping the app free for
						diners and providing user insights to restaurants to enhance their offerings, thus enhancing the overall diner journey cycle.
					</p>
				</Accordion>
			</div>
		</main>
	);
}
