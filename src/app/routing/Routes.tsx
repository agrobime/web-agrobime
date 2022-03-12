import React, {FC} from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import {shallowEqual, useSelector} from 'react-redux'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {PrivateRoutes} from './PrivateRoutes'
import {Logout, AuthPage} from '../modules/auth'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {RootState} from '../../setup'
import {MasterInit} from '../../_metronic/layout/MasterInit'
import { Home } from '../pages/home/Home'

const Routes: FC = () => {
    const isAuthorized = useSelector<RootState>(({auth}) => auth.user, shallowEqual)
    return (
        <>
            <Switch>
                <Route path='/home' component={Home}/>
                {!isAuthorized ? (
                    /*Render auth page when user at `/auth` and not authorized.*/
                    <Route>
                        <AuthPage/>
                    </Route>
                ) : (
                    /*Otherwise redirect to root page (`/`)*/
                    <Redirect from='/auth' to='/lurin/dashboard' />
                )}

                <Route path='/error' component={ErrorsPage} />
                <Route path='/logout' component={Logout} />

                {!isAuthorized ? (
                    /*Redirect to `/auth` when user is not authorized*/
                    <Redirect to='/auth/login' />
                ) : (
                        <MasterLayout>
                            <PrivateRoutes />
                        </MasterLayout>
                )}
            </Switch>
            <MasterInit />
        </>
    )
}

export {Routes}