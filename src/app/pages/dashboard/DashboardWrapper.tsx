/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { Dash } from './components/Dash'
import {
  MixedWidget2,
  MixedWidget10,
  MixedWidget11
} from '../../../_metronic/partials/widgets'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8 py-5'>
      <div className='col-xxl-12'>
        <Dash
          className='card-xl-stretch mb-xl-8'
          chartColor='success'
          chartHeight='200px'
          strokeColor='#cb1e46'
        />
      </div>

    </div>

    <div className='row gy-5 g-xl-8'>
      <p>Hola</p>
      <Dash
          className='card-xl-stretch mb-xl-8'
          chartColor='success'
          chartHeight='200px'
          strokeColor='#cb1e46'
        />
    </div>

    {/* end::Row */}



  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapper }
