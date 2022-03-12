import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { FallbackView } from '../../_metronic/partials'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { Estadistica } from '../pages/estadistica/Estadistica'
import { Nosotros } from '../pages/nosotros/Nosotros'
import { Admin } from '../pages/admin/Admin'

// import { shallowEqual, useSelector } from 'react-redux'
// import { UserModel } from '../../app/modules/auth/models/UserModel'
// import { RootState } from '../../setup'

export function PrivateRoutes() {
  // const user: UserModel = useSelector<RootState>(({ auth }) => auth.user, shallowEqual) as UserModel
  // const { email } = user

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/biolurin/admin' component={Admin} />
        <Route path='/biolurin/dashboard' component={DashboardWrapper} />
        <Route path='/biolurin/estadisticas' component={Estadistica} />
        <Route path='/biolurin/nosotros' component={Nosotros} />
        <Redirect from='/auth' to='/biolurin/dashboard' />
        <Redirect exact from='*' to='/biolurin/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
