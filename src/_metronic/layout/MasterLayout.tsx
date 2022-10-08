import React, {useEffect} from 'react'
import {Footer} from './components/Footer'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {Content} from './components/Content'
import {PageDataProvider} from './core'
import {useLocation} from 'react-router-dom'
import {MenuComponent} from '../../_metronic/assets/ts/components'

const MasterLayout: React.FC = ({children}) => {

    const location = useLocation()
    useEffect(() => {
        setTimeout(() => {
            MenuComponent.reinitialization()
        }, 500)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            MenuComponent.reinitialization()
        }, 500)
    }, [location.key])

    return (
        <PageDataProvider>
            <div className='page d-flex flex-row flex-column-fluid'>
                <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
                    <HeaderWrapper />
                    <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
                        <div
                            className='d-flex flex-column-fluid align-items-start' id='kt_post'>
                            <Content>{children}</Content>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </PageDataProvider>
    )
}

export {MasterLayout}
