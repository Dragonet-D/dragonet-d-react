/**
 * @description: 动态加载的loading
 * @author: dengxiaolong
 * @LastEditors: dengxiaolong
 * @LastEditTime: 2021/7/30   09:14
 */
import React from 'react'
import { Spin } from 'antd'
import styles from './index.less'

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default () => (
  <div className={styles.loading_wrapper}>
    <Spin />
  </div>
)
