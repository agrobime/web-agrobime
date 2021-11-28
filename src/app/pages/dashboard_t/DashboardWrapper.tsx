/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { Resumen } from './components/Resumen'
import { MixedWidget11 } from '../../../_metronic/partials/widgets/mixed/MixedWidget11'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8 py-5'>
      <div className='col-xxl-12'>
        <Resumen
          className='card-xl-stretch mb-xl-8'
          chartColor='dark'
          chartHeight='200px'
          strokeColor='#cb1e46'
        />
      </div>
      <div className='col-xxl-12'>
        <MixedWidget11
          className='card-xl-stretch mb-xl-8'
          chartColor='dark'
          chartHeight='200px'
        />
      </div>
    </div>
    {/* end::Row */}

  </>
)

const DashboardWrapperTrans: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapperTrans }
