import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { FallbackView } from '../../_metronic/partials'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { Estadistica } from '../pages/estadistica/Estadistica'
import { Home } from '../pages/home/Home'
import { Admin } from '../pages/admin/Admin'

import { shallowEqual, useSelector } from 'react-redux'
import { UserModel } from '../../app/modules/auth/models/UserModel'
import { RootState } from '../../setup'

export function PrivateRoutes() {
  const user: UserModel = useSelector<RootState>(({ auth }) => auth.user, shallowEqual) as UserModel
  const { email } = user

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/admin' component={Admin} />
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/home' component={Home} />
        <Route path='/estadisticas' component={Estadistica} />
        <Redirect from='/auth' to='/home' />
        <Redirect exact from='*' to='/home' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
