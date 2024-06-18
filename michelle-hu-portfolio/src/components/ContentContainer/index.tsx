// components/ContentContainer.tsx
import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

type ContentContainerProps = {
	size?: 'medium-small' | 'medium' | 'large' | 'xl' | 'xxl';
	children: ReactNode;
};

const ContentContainer: React.FC<ContentContainerProps> = ({
	size,
	children,
}) => {
	const sizeClass = size ? styles[size] : '';

	return (
		<div className={`${styles['container']} ${sizeClass}`}>{children}</div>
	);
};

export default ContentContainer;
