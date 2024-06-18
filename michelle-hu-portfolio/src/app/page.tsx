'use client';

import { useState } from 'react';
import Image from 'next/image';
import Accordion from '@/components/Accordion/Accordion';

export default function Home() {
	const [open, setOpen] = useState(false);
	return (
		<main>
			<Accordion
				open={open}
				setOpen={setOpen}
				label="Header">
				<p>Content</p>
			</Accordion>
		</main>
	);
}
