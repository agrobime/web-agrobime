import work1 from '../../../modules/files/work1.jpeg'
import work2 from '../../../modules/files/work2.jpeg'
import work3 from '../../../modules/files/work3.jpeg'
import work4 from '../../../modules/files/work4.jpeg'
import work5 from '../../../modules/files/work5.jpeg'
import work6 from '../../../modules/files/work6.jpeg'
import work7 from '../../../modules/files/work7.jpeg'

const CarouselBootstrap = () => {
    const data = [
        {
            image: work1,
            caption: "Talleres presenciales"
        },
        {
            image: work2,
            caption: "Talleres presenciales"
        },
        {
            image: work3,
            caption: "Camillas de cultivo"
        },
        {
            image: work4,
            caption: "Planos"
        },
        {
            image: work5,
            caption: "Planos"
        },
        {
            image: work6,
            caption: "Planos"
        },
        {
            image: work7,
            caption: "Planos"
        },
    ];

    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={work1} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={work2} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={work3} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default CarouselBootstrap;