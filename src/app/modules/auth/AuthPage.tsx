/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react'
import {Redirect, Route, Switch, Link} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

export function AuthPage() {
  useEffect(() => {
    document.body.classList.add('bg-white')
    return () => {
      document.body.classList.remove('bg-white')
    }
  }, [])

  return (
    <div
      className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
      style={{
        backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/sketchy-1/14.png')})`,
      }}
    >
      {/* begin::Content */}
      <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
        {/* begin::Logo */}
        <Link to='/home' className='mb-12'>
          <img alt='Logo' src={toAbsoluteUrl('/media/icons/agrobime.png')} className='h-45px' />
        </Link>
        {/* end::Logo */}
        {/* begin::Wrapper */}
        <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
          <Switch>
            <Route path='/auth/login' component={Login} />
            <Route path='/auth/registration' component={Registration} />
            <Route path='/auth/forgot-password' component={ForgotPassword} />
            <Redirect from='/auth' exact={true} to='/auth/login' />
            <Redirect to='/auth/login' />
          </Switch>
        </div>
        <div className='pt-5'>
          <Link to='/home'><h2 className='text-success fw-bold'>Regresar a la página principal</h2></Link>
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
      {/* begin::Footer */}
      <div className='d-flex flex-center flex-column-auto p-10'>
        <div className='d-flex align-items-center fw-bold fs-6'>
          <a href='http://startup.uni.edu.pe/' target="_blank" rel="noreferrer" className='text-muted text-hover-primary px-2'>
            StartUP UNI
          </a>

          <a href='https://wa.me/51945341140' target="_blank" rel="noreferrer" className='text-muted text-hover-primary px-2'>
            Contacto-AgroBime
          </a>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  )
}
