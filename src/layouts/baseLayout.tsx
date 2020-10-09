import React, { FC } from 'react'
import IconButton from '@material-ui/core/Button'
import IconList from '@material-ui/icons/List'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { NavLink } from 'umi'
import styles from './baseLayout.scss'

const BaseLayout: FC = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={styles.wrapper}>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        className={styles.more}
        color="primary"
        component="span"
        onClick={handleClick}
      >
        <IconList />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to="/note">Note</NavLink>
        </MenuItem>
      </Menu>
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default BaseLayout
