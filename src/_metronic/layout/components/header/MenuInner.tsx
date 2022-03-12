import { MenuItem } from './MenuItem'
// import { shallowEqual, useSelector } from 'react-redux'
// import { UserModel } from '../../../../app/modules/auth/models/UserModel'
// import { RootState } from '../../../../setup'

// import { MenuInnerWithSub } from './MenuInnerWithSub'

export function MenuInner() {
  // const user: UserModel = useSelector<RootState>(({ auth }) => auth.user, shallowEqual) as UserModel
  // const { email } = user

  return (
    <>
      <MenuItem title='Nosotros' to='/biolurin/nosotros' />
      <MenuItem title='Monitoreo' to='/biolurin/estadisticas' />
      <MenuItem title='Dashboard' to='/biolurin/dashboard' />
    </>
  )
}
