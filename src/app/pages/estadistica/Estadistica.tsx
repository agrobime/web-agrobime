/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { TablesBody } from './componentes/Tables'
import TablesFB from '../../modules/data/Tables'

const Estadistica: FC = () => (
    <>
        <div className='row gy-5 g-xl-8 py-5'>
            <div className='col-xxl-12'>
                <div className="card card-xxl-stretch mb-5 mb-xl-8">
                    <div className="card-body py-3">
                        <TablesFB />
                    </div>
                    
                </div>
                
            </div>
        </div>

       
        <div className='row gy-5 g-xl-8 py-5'>
            <div className='col-xxl-12'>
                <TablesBody />
            </div>
        </div>
        



    </>
)

export { Estadistica }