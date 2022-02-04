import React from 'react'
import { MenuItem } from './MenuItem'
import { MenuInnerWithSub } from './MenuInnerWithSub'

export function MenuInner() {
  return (
    <>
      <MenuItem title='AgroBime' to='/home' />
      <MenuItem title='Dashboard' to='/dashboard' />
      {/* <MenuItem title='Dashboard-t' to='/dashboard-t' /> */}
      <MenuItem title='Monitoreo' to='/estadisticas' />
      {/* <MenuItem title='Monitoreo-t' to='/estadisticas-t' /> */}

      <MenuInnerWithSub title='Aplicaciones' to='/apps' menuPlacement='bottom-start' menuTrigger='click'>
        <MenuItem to='/' title='Solicitar revisión' hasBullet={true} />
        <MenuItem to='/' title='Solicitar asistencia' hasBullet={true} />
      </MenuInnerWithSub>
      {/* <MenuItem title='Firebase' to='/prueba' /> */}

    </>
  )
}
