import React from 'react';
import { Heading } from 'monday-ui-react-core';
import styles from './PageTemplate.module.scss';

export interface PageTemplateProps {
  title: string;
  header?: React.ReactNode;
  subheader?: React.ReactNode;
  body: React.ReactNode;
  error?: string;
}

export const PageTemplate = ({ title, header, subheader, body, error }: PageTemplateProps) => (
  <div className={styles.page}>
    {error && <div className={styles.error}>{error}</div>}
    <div className={styles.header}>
      <Heading value={title} className={styles.title} />
      {header}
    </div>
    {subheader && <div className={styles.subheader}>{subheader}</div>}
    <div className={styles.content}>{body}</div>
  </div>
);
