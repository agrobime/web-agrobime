import React, {FC} from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import {shallowEqual, useSelector} from 'react-redux'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {PrivateRoutes} from './PrivateRoutes'
import {Logout, AuthPage} from '../modules/auth'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {RootState} from '../../setup'
import {MasterInit} from '../../_metronic/layout/MasterInit'
import {Home} from '../pages/home/Home'

const Routes: FC = () => {
    const isAuthorized = useSelector<RootState>(({auth}) => auth.user, shallowEqual)
    return (
        <>
            <Switch>
                <Route path='/home' component={Home} />
                <Route path='/error' component={ErrorsPage} />
                <Route path='/logout' component={Logout} />
                {!isAuthorized ? (
                    <Route>
                        {' '}
                        <AuthPage />{' '}
                    </Route>
                ) : (
                    <Redirect from='/auth' to='/lurin/dashboard' />
                )}
                {!isAuthorized ? (
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
