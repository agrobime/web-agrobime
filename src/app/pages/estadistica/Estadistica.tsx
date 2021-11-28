/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { TablesBody } from './componentes/Tables'

const Estadistica: FC = () => (
    <>

        {/* begin::Row */}
        <div className='row gy-5 g-xl-8 py-5'>
            <div className='col-xxl-12'>
                <TablesBody />
            </div>
        </div>
        {/* end::Row */}

    </>
)

export { Estadistica }
