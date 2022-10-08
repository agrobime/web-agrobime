import { Link } from "react-router-dom"

import CarouselBootstrap from "./components/CarouselBootstrap.js"

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
                        {/* <CarouselPj /> */}
                        <CarouselBootstrap />
                        {/* <!--end::Product slider--> */}
                    </div>
                    {/* <!--end::Container--> */}
                </div>
                {/* <!--end::Proyectos--> */}


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
                <div className="m-0 bg-dark py-7 text-light">
                    <div className="container row text-center">
                        <div className="col-6">
                            <span className=""> (C) Agrobime 2022</span>
                        </div>
                        <div className="col-6">
                            <span className=""> Contacto |</span>
                            <span className=""> Facebook |</span>
                            <span className=""> Instagram</span>
                        </div>
                    </div>
                </div>
                {/* <!--end::Footer Section--> */}

            </div>
        </div>
    )
}

export { Home }