/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'

export default class Home extends Component {

  render() {
    return (
      <div className='card-xxl-stretch mb-5 mb-xl-8  text-center'>

        {/* begin::Header titulo span boton */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>AGROBIME </span>
          </h3>

        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className='card-body py-3'>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>Bienvenidos</h1>
          <p className="pt-3">"El desarrollo y crecimiento económico y social es un derecho de todos"</p>
          <p>Somos agricultores, cultivamos nuestros alimentos desde hace miles de años</p>
          <p>Hoy, con la llegada de las nuevas tecnologías, podemos hacer la revolución que siempre hemos esperado. Una revolución que permita revalorizar nuestro trabajo y nuestros productos.</p>


        </div>
        {/* begin::Body */}

      </div>
    )
  }
}

export { Home }
