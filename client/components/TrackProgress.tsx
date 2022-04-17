import React from 'react';
import styles from '../styles/TrackProgress.module.sass';

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e) => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({
  left,
  right,
  onChange
}): JSX.Element => {
  return (
    <div style={{ display: 'flex' }}>
      <input
        min={0}
        max={right}
        value={left}
        type="range"
        onChange={onChange}
      />
      <p className={styles.time}>
        <span>{left}</span> / <span>{right}</span>
      </p>
    </div>
  );
};

export default TrackProgress;
