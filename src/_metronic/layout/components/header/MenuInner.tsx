import { MenuItem } from './MenuItem'
import { shallowEqual, useSelector } from 'react-redux'
import { UserModel } from '../../../../app/modules/auth/models/UserModel'
import { RootState } from '../../../../setup'

// import { MenuInnerWithSub } from './MenuInnerWithSub'

export function MenuInner() {
  const user: UserModel = useSelector<RootState>(({ auth }) => auth.user, shallowEqual) as UserModel
  const { email } = user

  return (
    <>
      <MenuItem title='Inicio' to='/home' />

      {email === 'admin@agrobime.com' ? (
        <MenuItem title='Panel' to='/admin' />
      ) : (
        <>
        <MenuItem title='Monitoreo' to='/estadisticas' />
        <MenuItem title='Dashboard' to='/dashboard' />
        </>
      )}

      {/* <MenuInnerWithSub title='Aplicaciones' to='/apps' menuPlacement='bottom-start' menuTrigger='click'>
        <MenuItem to='/' title='Solicitar revisión' hasBullet={true} />
        <MenuItem to='/' title='Solicitar asistencia' hasBullet={true} />
      </MenuInnerWithSub> */}
    </>
  )
}
