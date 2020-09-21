import React, { FC } from 'react'
import IconButton from '@material-ui/core/Button'
import PhotoCamera from '@material-ui/icons/List'
import styles from './baseLayout.scss'

const BaseLayout: FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <IconButton className={styles.more} color="primary" component="span">
        <PhotoCamera />
      </IconButton>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default BaseLayout
