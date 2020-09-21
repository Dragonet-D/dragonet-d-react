import React, { FC } from 'react'
import styles from './index.scss'

const Universe: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['solar-syst']}>
        <div className={styles.sun} />
        <div className={styles.mercury} />
        <div className={styles.venus} />
        <div className={styles.earth} />
        <div className={styles.mars} />
        <div className={styles.jupiter} />
        <div className={styles.saturn} />
        <div className={styles.uranus} />
        <div className={styles.neptune} />
        <div className={styles.pluto} />
        <div className={styles['asteroids-belt']} />
      </div>
    </div>
  )
}

export default Universe
