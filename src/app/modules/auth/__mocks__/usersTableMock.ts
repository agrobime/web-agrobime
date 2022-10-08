import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {UserModel} from '../models/UserModel'

export class UsersTableMock {
  public static table: Array<UserModel> = [
    {
      id: 1,
      username: 'admin',
      password: '12345',
      email: 'admin@agrobime.com',
      auth: {
        accessToken: 'access-token-8f3ae836da744329a6f93bf20594b5cc',
        refreshToken: 'access-token-f8c137a2c98743f48b643e71161d90aa',
      },
      roles: [1], // Administrator
      pic: toAbsoluteUrl('/media/avatars/150-18.jpg'),
      fullname: 'Caleb Ventura',
      firstname: 'Caleb',
      lastname: 'Ventura',
      occupation: 'CTO',
      companyName: 'AgroBime',
      phone: '913350106',
      language: 'en',
      timeZone: 'Peru Time Zone',
      website: 'https://agrobimedatos.web.app/',
      emailSettings: {
        emailNotification: true,
        sendCopyToPersonalEmail: false,
        activityRelatesEmail: {
          youHaveNewNotifications: false,
          youAreSentADirectMessage: false,
          someoneAddsYouAsAsAConnection: true,
          uponNewOrder: false,
          newMembershipApproval: false,
          memberRegistration: true,
        },
        updatesFromKeenthemes: {
          newsAboutKeenthemesProductsAndFeatureUpdates: false,
          tipsOnGettingMoreOutOfKeen: false,
          thingsYouMissedSindeYouLastLoggedIntoKeen: true,
          newsAboutStartOnPartnerProductsAndOtherServices: true,
          tipsOnStartBusinessProducts: true,
        },
      },
      communication: {
        email: true,
        sms: true,
        phone: false,
      },
      address: {
        addressLine: 'Calle San Lucas 112',
        city: 'San Martin de Porres',
        state: 'Lima',
        postCode: '10865',
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/admin',
        facebook: 'https://facebook.com/admin',
        twitter: 'https://twitter.com/admin',
        instagram: 'https://instagram.com/admin',
      },
    },
    {
      id: 3,
      username: 'biolurin',
      password: '1234',
      email: 'biolurin@agrobime.com',
      auth: {
        accessToken: 'access-token-d2dff7b82f784de584b60964abbe45b9',
        refreshToken: 'access-token-c999ccfe74aa40d0aa1a64c5e620c1a5',
      },
      roles: [3], // Guest
      pic: toAbsoluteUrl('/media/avatars/150-5.jpg'),
      fullname: 'Bio Lurin',
      firstname: 'Bio Huerto',
      lastname: 'Lurin',
      occupation: 'CLIENTE',
      companyName: 'Lurin',
      phone: '+51913350106',
      language: 'es',
      timeZone: 'GTM-05',
      communication: {
        email: false,
        sms: false,
        phone: false,
      },
      emailSettings: {
        emailNotification: false,
        sendCopyToPersonalEmail: false,
        activityRelatesEmail: {
          youHaveNewNotifications: false,
          youAreSentADirectMessage: false,
          someoneAddsYouAsAsAConnection: false,
          uponNewOrder: false,
          newMembershipApproval: false,
          memberRegistration: false,
        },
        updatesFromKeenthemes: {
          newsAboutKeenthemesProductsAndFeatureUpdates: false,
          tipsOnGettingMoreOutOfKeen: false,
          thingsYouMissedSindeYouLastLoggedIntoKeen: false,
          newsAboutStartOnPartnerProductsAndOtherServices: false,
          tipsOnStartBusinessProducts: false,
        },
      },
      address: {
        addressLine: 'Detrás del Polideportivo Lurin',
        city: 'Lurin',
        state: 'Lima',
        postCode: '15593',
      },
      socialNetworks: {
        linkedIn: 'https://www.facebook.com/profile.php?id=100078210610854',
        facebook: 'https://www.facebook.com/profile.php?id=100078210610854',
        twitter: 'https://www.facebook.com/profile.php?id=100078210610854',
        instagram: 'https://www.facebook.com/profile.php?id=100078210610854',
      },
    }
  ]
}
