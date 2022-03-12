import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {AuthPage} from '../modules/auth'
import { Home } from '../pages/home/Home'

export function PublicRoutes() {
  return (
    <Switch>
      <Route path='/home' component={Home} />
      <Route path='/auth' component={AuthPage} />
      <Redirect to='/auth' />
    </Switch>
  )
}
