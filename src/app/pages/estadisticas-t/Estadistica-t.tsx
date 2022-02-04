/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { TablesBody } from './tables/Tables'

const Estadistica_t: FC = () => (
    <>

        {/* begin::Row */}
        <div className='row gy-5 g-xl-8'>
            <div className='col-xxl-4'>
                <TablesBody />
            </div>

        </div>
        {/* end::Row */}

    </>
)

export { Estadistica_t }
