/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Toggle} from './Toggle'
import {KTSVG} from '../../../helpers'

export function Explore() {
  return (
    <>
      <Toggle />
      {/* begin::Exolore drawer */}
      <div
        id='kt_explore'
        className='bg-body'
        data-kt-drawer='true'
        data-kt-drawer-name='explore'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_explore_toggle'
        data-kt-drawer-close='#kt_explore_close'
      >
        {/* begin::Card  */}
        <div className='card shadow-none w-100'>
          {/* begin::Header */}
          <div className='card-header' id='kt_explore_header'>
            <h5 className='card-title fw-bold text-gray-600'>
              Actividad Reciente
            </h5>

            <div className='card-toolbar'>
              <button
                type='button'
                className='btn btn-sm btn-icon explore-btn-dismiss me-n5'
                id='kt_explore_close'
              >
                <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-2' />
              </button>
            </div>
          </div>
          {/* end::Header */}
          {/* begin::Body */}

          {/* end::Body */}
        </div>
        {/* begin::Card */}
      </div>
      {/* end::Exolore drawer */}
    </>
  )
}
