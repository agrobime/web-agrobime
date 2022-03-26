import { Link } from "react-router-dom"

import CarouselPj from "./components/Carousel.js"

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
                                                    <Link className="menu-link nav-link active py-3 px-4 px-xxl-6" to="/home" data-kt-scroll-toggle="true" data-kt-drawer-dismiss="true">Agrobime</Link>
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
                        <div className="d-flex flex-column flex-center w-100">
                            {/* <!--begin::Heading--> */}
                            <div className="text-center p-8">
                                {/* <!--begin::Title--> */}
                                <h1 className="text-white lh-base fw-bolder fs-2x fs-lg-3x">
                                    Soluciones tecnológicas integrales para la agricultura y biohuertos
                                </h1>
                                {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Heading--> */}
                        </div>
                        {/* <!--end::Landing hero--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}

                </div>
                {/* <!--end::Header Section--> */}

                <hr className="my-5"/>

                {/* <!--begin::comparte QR--> */}
                <div className="z-index-2 my-10">
                    {/* <!--begin::Container--> */}
                    <div className="container">
                        {/* <!--begin::Heading--> */}
                        <div className="text-center mb-10">
                            {/* <!--begin::Title--> */}
                            <h3 className="fs-2hx text-dark mb-5" id="how-it-works" data-kt-scroll-offset="{default: 100, lg: 150}">Comparte</h3>
                            {/* <!--end::Title--> */}
                            {/* <!--begin::Text--> */}
                            <div className="fs-5 text-muted fw-bold">
                                Comparte este código QR para que más personas conozcan del biohuerto
                            </div>
                            {/* <!--end::Text--> */}
                        </div>
                        {/* <!--end::Heading--> */}
                            {/* <!--begin::Clients--> */}
                            <div className="d-flex flex-center flex-wrap position-relative">
                                {/* <!--begin::Client--> */}
                                <div className="m-3 m-md-6" data-bs-toggle="tooltip" title="uni">
                                    <img src="assets/media/lurin/qr.png" alt="uni" />
                                </div>
                                {/* <!--end::Client--> */}
                            </div>
                            {/* <!--end::Clients--> */}
                    </div>
                    {/* <!--end::Container--> */}
                </div>
                {/* <!--end::comparte QR--> */}

                {/* <!--begin::Proyectos--> */}
                <div className="z-index-2 my-10">
                    {/* <!--begin::Container--> */}
                    <div className="container">
                        {/* <!--begin::Heading--> */}
                        <div className="text-center mb-10">
                            {/* <!--begin::Title--> */}
                            <h3 className="fs-2hx text-dark mb-5" id="how-it-works" data-kt-scroll-offset="{default: 100, lg: 150}">Biohuerto Lurin</h3>
                            {/* <!--end::Title--> */}
                            {/* <!--begin::Text--> */}
                            <div className="fs-5 text-muted fw-bold">
                                Un proyecto en el que participamos
                            </div>
                            {/* <!--end::Text--> */}
                        </div>
                        {/* <!--end::Heading--> */}
                        {/* <!--begin::Product slider--> */}
                        <CarouselPj/>
                        {/* <!--end::Product slider--> */}
                    </div>
                    {/* <!--end::Container--> */}
                </div>
                {/* <!--end::Proyectos--> */}

                <hr className="my-5"/>

                {/* <!--begin::Partipaciones--> */}
                <div className="z-index-2 my-10">
                    {/* <!--begin::Container--> */}
                    <div className="container">
                        {/* <!--begin::Heading--> */}
                        <div className="text-center mb-10">
                            {/* <!--begin::Title--> */}
                            <h3 className="fs-2hx text-dark mb-5" id="how-it-works" data-kt-scroll-offset="{default: 100, lg: 150}">Participaciones</h3>
                            {/* <!--end::Title--> */}
                            {/* <!--begin::Text--> */}
                            <div className="fs-5 text-muted fw-bold">
                                Concursos en las que hemos participado para impulsar nuestra empresa
                            </div>
                            {/* <!--end::Text--> */}
                        </div>
                        {/* <!--end::Heading--> */}
                            {/* <!--begin::Clients--> */}
                            <div className="d-flex flex-center flex-wrap position-relative">
                                {/* <!--begin::Client--> */}
                                <div className="m-3 m-md-6" data-bs-toggle="tooltip" title="uni">
                                    <img src="assets/media/logos/uni.png" className="mh-100px" alt="uni" />
                                </div>
                                {/* <!--end::Client--> */}
                                {/* <!--begin::Client--> */}
                                <div className="m-3 m-md-6" data-bs-toggle="tooltip" title="startupuni">
                                    <img src="assets/media/logos/startupuni.jpg" className="mh-100px" alt="startupuni" />
                                </div>
                                {/* <!--end::Client--> */}
                            </div>
                            {/* <!--end::Clients--> */}
                    </div>
                    {/* <!--end::Container--> */}
                </div>
                {/* <!--end::Partipaciones--> */}

                {/* <!--begin::Footer Section--> */}
                <div className="mb-0">
                    {/* <!--begin::Wrapper--> */}
                    <div className="landing-dark-bg">
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