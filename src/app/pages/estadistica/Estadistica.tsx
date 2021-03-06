import { FC } from 'react'
import TablesX from '../../modules/data/Tables'

const Estadistica: FC = () => (
    <>
        <div className='row gy-5 g-xl-8 py-5'>
            <div className='col-xxl-12'>
                <div className="card card-xxl-stretch mb-5 mb-xl-8">
                    <div className="card-body py-3">
                        <TablesX />
                    </div>
                </div>
            </div>
        </div>
    </>
)

export { Estadistica }