/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'
import Contacts from './components/Contacts'

export default class Prueba extends Component {

  render() {
    return (

      <>
        <div className='card card-xxl-stretch mb-xl-8 text-center my-5'>
          {/* begin::Body */}
          <div className='card-body py-5'>
            <h1 className=''>Firebase</h1>
          </div>
          {/* begin::Body */}
        </div>

        <div className='card card-xxl-stretch mb-xl-8 text-center my-5'>
          {/* begin::Body */}
          <div className='card-body py-5'>
            <div className="row">
              <div className="col-md-12 offset-md-a">
                <Contacts/>
              </div>
            </div>
          </div>
          {/* begin::Body */}
        </div>

      </>
    )
  }
}

export { Prueba }
