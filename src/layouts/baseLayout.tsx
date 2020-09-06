import React, { FC } from 'react'
import Universe from '@/components/universe'
import styles from './baseLayout.scss'

const BaseLayout: FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Universe />
      <div className={styles.content}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}

export default BaseLayout
