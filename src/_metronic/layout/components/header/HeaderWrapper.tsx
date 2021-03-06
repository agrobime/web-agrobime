/* eslint-disable react-hooks/exhaustive-deps */
import { Navbar, Container, Nav } from 'react-bootstrap-v5'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl } from '../../../helpers'
import { Topbar } from './Topbar'
import { MenuInner } from './MenuInner'

export function HeaderWrapper() {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="none" variant="dark" className='bg-dark'>
        <Container>
          <Navbar.Brand>
            <Link to='/home'>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/logos/agrobime.ico')}
                className='logo-default h-25px'
              /> {' '}
              <span className='text-light'>AgroBime</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <MenuInner />
            </Nav>
            <Nav className="ms-auto">
              <Topbar />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    // <div
    //   id='kt_header'
    //   className={clsx('header', classes.header.join(' '), 'align-items-stretch')}
    //   data-kt-sticky='true'
    //   data-kt-sticky-name='header'
    //   data-kt-sticky-offset="{default: '200px', lg: '300px'}"
    //   {...attributes.headerMenu}
    // >
    //   <div className={clsx(classes.headerContainer.join(' '), 'd-flex align-items-center')}>
    //     <div
    //       className='d-flex topbar align-items-center d-lg-none ms-n2 me-3'
    //       title='Show aside menu'
    //     >
    //       <div
    //         className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
    //         id='kt_header_menu_mobile_toggle'
    //       >
    //         <KTSVG path='/media/icons/duotune/abstract/abs012.svg' className='svg-icon-2x' />
    //       </div>
    //     </div>

    //     <div className='header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0'>
    //       <Link to='/'>
    //         <img
    //           alt='Logo'
    //           src={toAbsoluteUrl('/media/logos/agrobime.ico')}
    //           className='logo-default h-25px'
    //         />
    //       </Link>
    //     </div>

    //     {/* begin::Wrapper */}
    //     <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
    //       <div className='d-flex align-items-stretch' id='kt_header_nav'>
    //         <Header />
    //       </div>

    //       <div className='d-flex align-items-stretch'>
    //         <Topbar />
    //       </div>
    //     </div>
    //     {/* end::Wrapper */}
    //   </div>
    // </div>
  )
}
