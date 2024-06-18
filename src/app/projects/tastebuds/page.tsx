'use client';

import { useState } from 'react';
import Image from 'next/image';
import './tastebuds.module.scss';
import '@/styles/globals.scss';
import Accordion from '@/components/Accordion/Accordion';
import ContentContainer from '@/components/ContentContainer/ContentContainer';

export default function Home() {
	const [open, setOpen] = useState(false);
	return (
		<main
			style={
				{
					'--primary-color': '#4379df',
				} as React.CSSProperties
			}>
			<ContentContainer size="medium">
				<h1>Welcome to My Next.js App</h1>
				<p>This is a content container with medium size.</p>
				<Accordion
					open={open}
					setOpen={setOpen}
					label="Header">
					<p>Content</p>
				</Accordion>
				<h3>Hello</h3>
			</ContentContainer>
		</main>
	);
}
