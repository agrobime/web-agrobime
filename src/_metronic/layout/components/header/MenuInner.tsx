import React from 'react'
import { MenuItem } from './MenuItem'
import { MenuInnerWithSub } from './MenuInnerWithSub'
import { MegaMenu } from './MegaMenu'
import { useIntl } from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title='Inicio' to='/home' />
      <MenuItem title='Dashboard' to='/dashboard' />
      <MenuItem title='Dashboard-t' to='/dashboard-t' />
      <MenuItem title='Monitoreo' to='/estadisticas' />
      {/* <MenuItem title='Monitoreo-t' to='/estadisticas-t' /> */}

      <MenuInnerWithSub title='Aplicaciones' to='/apps' menuPlacement='bottom-start' menuTrigger='click'>
        <MenuItem to='/' title='Contactar transportista' hasBullet={true} />
        <MenuItem to='/' title='Contactar especialista' hasBullet={true} />
      </MenuInnerWithSub>
      <MenuItem title='Firebase' to='/prueba' />

    </>
  )
}
