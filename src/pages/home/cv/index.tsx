import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CVCard from './components/CVCard'
import { data } from './data'
import styles from './index.scss'

const CV: FC = () => {
  return (
    <div className={styles.wrapper}>
      {/*个人信息*/}
      <CVCard title="个人信息">
        <Grid container spacing={1}>
          <Grid item xs={8} sm={4}>
            <Typography component="div" color="textSecondary">
              邓小龙 | 男 | 28
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
        <Grid container spacing={1}>
          <Grid item xs={8} sm={4}>
            <Typography component="div" color="textSecondary">
              电话：17381547679
            </Typography>
          </Grid>
          <Grid item xs={8} sm={4}>
            <Typography component="div" color="textSecondary">
              邮箱：392243079@qq.com
            </Typography>
          </Grid>
        </Grid>
      </CVCard>
      {/*专业技能*/}
      <CVCard title="专业技能">
        {data.skills.map(item => (
          <Grid container spacing={1} key={item.key}>
            <Grid item xs={12} sm={12}>
              <Typography component="div" color="textSecondary">
                - {item.name}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </CVCard>
    </div>
  )
}

export default CV
