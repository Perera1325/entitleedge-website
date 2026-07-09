import React from 'react';
import Card from './Card';
import styles from './Card.module.css';

export default function IconCard({ 
  icon, 
  title, 
  description, 
  className = '',
  borderTopColor = 'none'
}) {
  return (
    <Card className={className} borderTopColor={borderTopColor}>
      <div className={styles.cardIcon}>
        {icon}
      </div>
      <h4>{title}</h4>
      <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', marginBottom: 0 }}>
        {description}
      </p>
    </Card>
  );
}
