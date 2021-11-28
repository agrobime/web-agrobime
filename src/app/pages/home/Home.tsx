/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'

export default class Home extends Component {

  render() {
    return (

      <>
        <div className='card card-xxl-stretch mb-xl-8 text-center my-5'>
          {/* begin::Body */}
          <div className='card-body py-8'>
            <h1 className=''>Bienvenidos</h1>
            <p className="">"El desarrollo y crecimiento económico y social es un derecho de todos"</p>
            <p>Somos agricultores, cultivamos nuestros alimentos desde hace miles de años</p>
            <p>Hoy, con la llegada de las nuevas tecnologías, podemos hacer la revolución que siempre hemos esperado. Una revolución que permita revalorizar nuestro trabajo y nuestros productos.</p>
          </div>
          {/* begin::Body */}
        </div>

        <div className='card card-xxl-stretch mb-xl-8 text-center my-5'>
          {/* begin::Body */}
          <div className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/IUzYg4wW7-U" title="YouTube video" allowFullScreen></iframe>
          </div>

          {/* begin::Body */}
        </div>

      </>




    )
  }
}

export { Home }
