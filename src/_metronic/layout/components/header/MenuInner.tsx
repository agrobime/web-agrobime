import React from 'react'
import { MenuItem } from './MenuItem'
import { MenuInnerWithSub } from './MenuInnerWithSub'

export function MenuInner() {
  return (
    <>
      <MenuItem title='Inicio' to='/home' />
      <MenuItem title='Dashboard' to='/dashboard' />
      <MenuItem title='Monitoreo' to='/estadisticas' />
    </>
  )
}
