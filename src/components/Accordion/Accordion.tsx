import { Dispatch, SetStateAction, ReactNode } from 'react';
import Image from 'next/image';
import styles from './Accordion.module.scss';
import chevron from 'public/assets/svg/ic-chevron-arrow__down--white.svg';

export type AccordionProps = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	children: ReactNode;
	label: string;
};

/**
 * Accordion component that toggles its content when the header is clicked.
 * @param open - State that determines if the content is visible.
 * @param setOpen - Function that toggles the open state.
 * @param children - Content to be displayed when the accordion is open.
 * @param label - Label for the accordion header.
 * @returns Accordion component.
 */
export default function Accordion({
	open,
	setOpen,
	children,
	label,
}: AccordionProps) {
	const toggleOpen = () => setOpen((prev) => !prev);

	return (
		<div className={styles.container}>
			<button
				className={styles.header}
				onClick={toggleOpen}
				aria-expanded={open}>
				<p className={styles.label}>{label}</p>
				<Image
					className={`${styles.icon} ${open ? styles.rotate : ''}`}
					src={chevron}
					alt={`Chevron arrow pointing ${open ? 'up' : 'down'}`}
					width={24}
					height={24}
				/>
			</button>
			{open && <div className={styles.content}>{children}</div>}
		</div>
	);
}
