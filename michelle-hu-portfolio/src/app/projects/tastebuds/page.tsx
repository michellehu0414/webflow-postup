'use client';

import { useState } from 'react';
import Image from 'next/image';
import Accordion from '@/components/Accordion';
import ContentContainer from '@/components/ContentContainer';
import '../../../styles/globals.scss';

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
			<ContentContainer size="medium">
				<h1>Welcome to My Next.js App</h1>
				<p>This is a content container with medium size.</p>
			</ContentContainer>
		</main>
	);
}
