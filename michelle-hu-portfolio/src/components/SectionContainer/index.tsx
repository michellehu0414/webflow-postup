// components/SectionContainer.tsx
import React, { ReactNode } from 'react';
import styles from './SectionContainer.module.scss';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className }) => {
  return (
    <div className={`${styles['section-container']} ${className}`}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
