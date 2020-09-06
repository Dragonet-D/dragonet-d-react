import React, { FC } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import styles from './index.scss'

const CV: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Card
        variant="outlined"
        style={{ color: '#fff', backgroundColor: 'transparent' }}
      >
        <CardActionArea disabled>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              个人信息
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={8} sm={4}>
                <Typography component="div" color="textSecondary">
                  邓小龙 | 男 | 27
                </Typography>
              </Grid>
              <Grid item xs={8} sm={4}>
                <Typography component="div" color="textSecondary">
                  天津工业大学
                </Typography>
              </Grid>
              <Grid item xs={8} sm={4}>
                <Typography component="div" color="textSecondary">
                  前端工程师 | 5年经验
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default CV
