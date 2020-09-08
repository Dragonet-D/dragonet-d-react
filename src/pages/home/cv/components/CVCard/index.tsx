import React, { FC } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

interface Props {
  title: string
}

const useStyles = makeStyles(() => {
  return {
    root: {
      color: '#fff',
      backgroundColor: 'transparent',
      marginTop: '20px',

      '&:first-child': {
        marginTop: 0,
      },
    },
  }
})

const CVCard: FC<Props> = ({ children, title }) => {
  const classes = useStyles()
  return (
    <Card variant="outlined" className={classes.root}>
      <CardActionArea disabled>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CVCard
