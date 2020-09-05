import React, { FC, useEffect } from 'react'
import { IRouteComponentProps } from 'umi'
import BaseLayout from './baseLayout'

const Layout: FC<IRouteComponentProps> = ({ children }) => {
  return <BaseLayout>{children}</BaseLayout>
}

export default Layout
