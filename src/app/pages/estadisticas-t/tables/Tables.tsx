/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers'



export default class TablesBody extends Component {

  state = {
    dataiot: [
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
  }

  render() {
    return (
      <div className='card-xxl-stretch mb-5 mb-xl-8'>

        {/* begin::Header titulo span boton */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bolder fs-3 mb-1'>Mediciones en el módulo Chao25</span>
          </h3>
          <div className='card-toolbar'>
            <a href='/dashboard' className='btn btn-sm btn-light-primary'>
              <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
              Agregar
            </a>
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className='card-body py-3'>
          {/* begin::Table container */}
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table align-middle gs-0 gy-4'>
              {/* begin::Table head Titulos de las columnas*/}
              <thead>
                <tr className='fw-bolder text-muted bg-light'>
                  <th className='ps-4 min-w-325px rounded-start'>Fecha de medición</th>
                  <th className='min-w-125px'>Humedad de aire</th>
                  <th className='min-w-125px'>Humedad de suelo</th>
                  <th className='min-w-125px'>Indicador de campo</th>
                  <th className='min-w-200px'>Índice de calor</th>
                  <th className='min-w-150px'>PH</th>
                  <th className='min-w-150px'>Temperatura</th>
                  <th className='min-w-200px text-end rounded-end'></th>
                </tr>
              </thead>
              {/* end::Table head */}



              {/* begin::Table body */}
              <tbody>
                {
                  this.state.dataiot.map(dato => {

                    return (
                      <tr>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='d-flex justify-content-start flex-column'>
                              <a href='/dashboard' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                                {dato.fecha}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='d-flex justify-content-start flex-column'>
                              <a href='/dashboard' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                                {dato.humedad}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='d-flex justify-content-start flex-column'>
                              <a href='/dashboard' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                                {dato.humedadSuelo}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='d-flex justify-content-start flex-column'>
                              <a href='/dashboard' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                                {dato.indicadorCampo}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='d-flex justify-content-start flex-column'>
                              <a href='/dashboard' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                                {dato.indiceCalor}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='d-flex justify-content-start flex-column'>
                              <a href='/dashboard' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                                {dato.ph}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <div className='d-flex justify-content-start flex-column'>
                              <a href='/dashboard' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                                {dato.temperatura}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className='text-end'>
                          <a
                            href='/dashboard'
                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          >
                            <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                          </a>
                          <a
                            href='/dashboard'
                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          >
                            <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                          </a>
                          <a href='/dashboard' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                            <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                          </a>
                        </td>
                      </tr>
                    )


                  })
                }

              </tbody>
              {/* end::Table body */}
            </table>
            {/* end::Table */}
          </div>
          {/* end::Table container */}
        </div>
        {/* begin::Body */}

      </div>
    )
  }
}

export { TablesBody }
