/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { KTSVG } from '../../../../_metronic/helpers'

const TablesBody = () => {

  const [dataIot, setDataIot] = useState([{}]);

  const data = [
    {
      "fecha": "2021-11-13 12:30",
      "humedad": 50,
      "humedadSuelo": 50.3,
      "indicadorCampo": 97,
      "indiceCalor": 40,
      "ph": 6,
      "temperatura": 27
    },
    {
      "fecha": "2021-11-13 12:30",
      "humedad": 23,
      "humedadSuelo": 50.3,
      "indicadorCampo": 83,
      "indiceCalor": 40,
      "ph": 6,
      "temperatura": 27
    },
    {
      "fecha": "2021-11-13 12:30",
      "humedad": 54,
      "humedadSuelo": 50.3,
      "indicadorCampo": 87,
      "indiceCalor": 40,
      "ph": 6,
      "temperatura": 27
    },
    {
      "fecha": "2021-11-13 12:30",
      "humedad": 46,
      "humedadSuelo": 50.3,
      "indicadorCampo": 99,
      "indiceCalor": 40,
      "ph": 6,
      "temperatura": 27
    },
    {
      "fecha": "2021-11-13 12:30",
      "humedad": 48,
      "humedadSuelo": 50.3,
      "indicadorCampo": 95,
      "indiceCalor": 40,
      "ph": 6,
      "temperatura": 27
    },
    {
      "fecha": "2021-11-13 12:30",
      "humedad": 50,
      "humedadSuelo": 50.3,
      "indicadorCampo": 98,
      "indiceCalor": 40,
      "ph": 6,
      "temperatura": 27
    },

  ]

  useEffect(() => {
    setDataIot(data)
  });


  return (
    <div className='card card-xxl-stretch mb-5 mb-xl-8'>

      {/* begin::Header titulo span boton */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Mediciones en el módulo Chao 25</span>
        </h3>
        <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light-primary' onClick={()=>{console.log(dataIot[0])}}>
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            Medir
          </a>
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}

    </div>
  )

}

export { TablesBody }
