import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div id="kt_body" data-bs-spy="scroll" data-bs-target="#kt_landing_menu" data-bs-offset="200" className="bg-white position-relative">
            <div className="d-flex flex-column flex-root">
                {/* <!--begin::Header Section--> */}
                <div className="mb-0" id="home">
                    {/* <!--begin::Wrapper--> */}
                    <div className="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg">
                        {/* <!--begin::Header--> */}
                        <div className="landing-header" data-kt-sticky="true" data-kt-sticky-name="landing-header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
                            {/* <!--begin::Container--> */}
                            <div className="container">
                                {/* <!--begin::Wrapper--> */}
                                <div className="d-flex align-items-center justify-content-between">
                                    {/* <!--begin::Logo--> */}
                                    <div className="d-flex align-items-center flex-equal">
                                        {/* <!--begin::Mobile menu toggle--> */}
                                        <button className="btn btn-icon btn-active-color-primary me-3 d-flex d-lg-none" id="kt_landing_menu_toggle">
                                            {/* <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg--> */}
                                            <span className="svg-icon svg-icon-2hx">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black" />
                                                    <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black" />
                                                </svg>
                                            </span>
                                            {/* <!--end::Svg Icon--> */}
                                        </button>
                                        {/* <!--end::Mobile menu toggle--> */}
                                        {/* <!--begin::Logo image--> */}
                                        <Link to="/home">
                                        <img
                                                alt='Logo'
                                                src={'/media/logos/agrobime.ico'}
                                                className='logo-default h-25px'
                                            />
                                        </Link>
                                        {/* <!--end::Logo image--> */}
                                    </div>
                                    {/* <!--end::Logo--> */}
                                    {/* <!--begin::Menu wrapper--> */}
                                    <div className="d-lg-block" id="kt_header_nav_wrapper">
                                        <div className="d-lg-block p-5 p-lg-0" data-kt-drawer="true" data-kt-drawer-name="landing-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="200px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_landing_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav_wrapper'}">
                                            {/* <!--begin::Menu--> */}
                                            <div className="menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-gray-500 menu-state-title-primary nav nav-flush fs-5 fw-bold" id="kt_landing_menu">
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item">
                                                    {/* <!--begin::Menu link--> */}
                                                    <Link className="menu-link nav-link active py-3 px-4 px-xxl-6" to="/home" data-kt-scroll-toggle="true" data-kt-drawer-dismiss="true">Inicio</Link>
                                                    {/* <!--end::Menu link--> */}
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                                {/* <!--begin::Menu item--> */}
                                                <div className="menu-item">
                                                    {/* <!--begin::Menu link--> */}
                                                    <Link className="menu-link nav-link py-3 px-4 px-xxl-6" to="/auth/page" data-kt-scroll-toggle="true" data-kt-drawer-dismiss="true">Iniciar sesión</Link>
                                                    {/* <!--end::Menu link--> */}
                                                </div>
                                                {/* <!--end::Menu item--> */}
                                            </div>
                                            {/* <!--end::Menu--> */}
                                        </div>
                                    </div>
                                    {/* <!--end::Menu wrapper--> */}
                                    {/* <!--begin::Toolbar--> */}
                                    <div className="flex-equal text-end ms-1">
                                        <Link to='/auth/page' className="btn btn-success">Iniciar Sesión</Link>
                                    </div>
                                    {/* <!--end::Toolbar--> */}
                                </div>
                                {/* <!--end::Wrapper--> */}
                            </div>
                            {/* <!--end::Container--> */}
                        </div>
                        {/* <!--end::Header--> */}

                        {/* <!--begin::Landing hero--> */}
                        <div className="d-flex flex-column flex-center w-100 min-h-250px min-h-lg-500px px-9">
                            {/* <!--begin::Heading--> */}
                            <div className="text-center mb-5 mb-lg-10 py-5 py-lg-20">
                                {/* <!--begin::Title--> */}
                                <h1 className="text-white lh-base fw-bolder fs-2x fs-lg-3x mb-5">
                                    Soluciones tecnológicas integrales para la agricultura y biohuertos
                                </h1>
                                {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Heading--> */}

                            {/* <!--begin::Clients--> */}
                            <div className="d-flex flex-center flex-wrap position-relative px-5">
                                {/* <!--begin::Client--> */}
                                <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Fujifilm">
                                    <img src="assets/media/logos/uni.png" className="mh-50px mh-lg-40px" alt="" />
                                </div>
                                {/* <!--end::Client--> */}
                                {/* <!--begin::Client--> */}
                                <div className="d-flex flex-center m-3 m-md-6" data-bs-toggle="tooltip" title="Truman">
                                    <img src="assets/media/logos/startupuni.jpg" className="mh-50px mh-lg-40px" alt="" />
                                </div>
                                {/* <!--end::Client--> */}
                            </div>
                            {/* <!--end::Clients--> */}
                        </div>
                        {/* <!--end::Landing hero--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}

                </div>
                {/* <!--end::Header Section--> */}

                {/* <!--begin::How It Works Section--> */}
                <div className="mb-n10 mb-lg-n20 z-index-2 mt-10">
                    {/* <!--begin::Container--> */}
                    <div className="container">
                        {/* <!--begin::Heading--> */}
                        <div className="text-center mb-17">
                            {/* <!--begin::Title--> */}
                            <h3 className="fs-2hx text-dark mb-5" id="how-it-works" data-kt-scroll-offset="{default: 100, lg: 150}">Nuestros trabajos</h3>
                            {/* <!--end::Title--> */}
                            {/* <!--begin::Text--> */}
                            <div className="fs-5 text-muted fw-bold">
                                Te presentamos los proyectos en los que hemos participado
                            </div>
                            {/* <!--end::Text--> */}
                        </div>
                        {/* <!--end::Heading--> */}
                        {/* <!--begin::Product slider--> */}
                        <div className="tns tns-default">
                            {/* <!--begin::Slider--> */}
                            <div data-tns="true" data-tns-loop="true" data-tns-swipe-angle="false" data-tns-speed="2000" data-tns-autoplay="true" data-tns-autoplay-timeout="18000" data-tns-controls="true" data-tns-nav="false" data-tns-items="1" data-tns-center="false" data-tns-dots="false" data-tns-prev-button="#kt_team_slider_prev1" data-tns-next-button="#kt_team_slider_next1">
                                {/* <!--begin::Item--> */}
                                <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                                    <img src="assets/media/lurin/proyecto.jpeg" className="card-rounded shadow mw-100" alt="" />
                                </div>
                                {/* <!--end::Item--> */}
                                {/* <!--begin::Item--> */}
                                <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                                    <img src="assets/media/lurin/1.jpeg" className="card-rounded shadow mw-100" alt="" />
                                </div>
                                {/* <!--end::Item--> */}
                                {/* <!--begin::Item--> */}
                                <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                                    <img src="assets/media/lurin/2.jpeg" className="card-rounded shadow mw-100" alt="" />
                                </div>
                                {/* <!--end::Item--> */}
                                {/* <!--begin::Item--> */}
                                <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                                    <img src="assets/media/lurin/3.jpeg" className="card-rounded shadow mw-100" alt="" />
                                </div>
                                {/* <!--end::Item--> */}
                            </div>
                            {/* <!--end::Slider--> */}
                            {/* <!--begin::Slider button--> */}
                            <button className="btn btn-icon btn-active-color-primary" id="kt_team_slider_prev1">
                                {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr074.svg--> */}
                                <span className="svg-icon svg-icon-3x">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z" fill="black" />
                                    </svg>
                                </span>
                                {/* <!--end::Svg Icon--> */}
                            </button>
                            {/* <!--end::Slider button--> */}
                            {/* <!--begin::Slider button--> */}
                            <button className="btn btn-icon btn-active-color-primary" id="kt_team_slider_next1">
                                {/* <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg--> */}
                                <span className="svg-icon svg-icon-3x">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="black" />
                                    </svg>
                                </span>
                                {/* <!--end::Svg Icon--> */}
                            </button>
                            {/* <!--end::Slider button--> */}
                        </div>
                        {/* <!--end::Product slider--> */}
                    </div>
                    {/* <!--end::Container--> */}
                </div>
                {/* <!--end::How It Works Section--> */}

                {/* <!--begin::Footer Section--> */}
                <div className="mb-0">
                    {/* <!--begin::Wrapper--> */}
                    <div className="landing-dark-bg pt-20">
                        {/* <!--begin::Separator--> */}
                        <div className="landing-dark-separator"></div>
                        {/* <!--end::Separator--> */}
                        {/* <!--begin::Container--> */}
                        <div className="container">
                            {/* <!--begin::Wrapper--> */}
                            <div className="d-flex flex-column flex-md-row flex-stack py-7 py-lg-10">
                                {/* <!--begin::Menu--> */}
                                <h5 className="text-light"> (C) Derechos reservados - Agrobime 2022</h5>
                                {/* <!--end::Menu--> */}
                            </div>
                            {/* <!--end::Wrapper--> */}
                        </div>
                        {/* <!--end::Container--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                </div>
                {/* <!--end::Footer Section--> */}

            </div>
        </div>
    )
}

export { Home }