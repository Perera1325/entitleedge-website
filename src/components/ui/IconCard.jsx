import React from 'react';
import Card from './Card';
import styles from './Card.module.css';
import Image from 'next/image';

export default function IconCard({ 
  icon,
  imageSrc,
  title, 
  description, 
  className = '',
  borderTopColor = 'none'
}) {
  return (
    <Card className={className} borderTopColor={borderTopColor}>
      {imageSrc && (
        <div style={{ position: 'relative', width: '100%', height: '160px', marginBottom: '1.5rem', borderRadius: '4px', overflow: 'hidden' }}>
          <Image src={imageSrc} alt={title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
      )}
      {icon && (
        <div className={styles.cardIcon}>
          {icon}
        </div>
      )}
      <h4 style={{ marginTop: imageSrc ? 0 : undefined }}>{title}</h4>
      <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', marginBottom: 0 }}>
        {description}
      </p>
    </Card>
  );
}
