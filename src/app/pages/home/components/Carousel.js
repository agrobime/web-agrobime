import { Carousel } from 'react-carousel-minimal'
import work1 from '../../../modules/files/work1.jpeg'
import work2 from '../../../modules/files/work2.jpeg'
import work3 from '../../../modules/files/work3.jpeg'
import work4 from '../../../modules/files/work4.jpeg'
import work5 from '../../../modules/files/work5.jpeg'
import work6 from '../../../modules/files/work6.jpeg'
import work7 from '../../../modules/files/work7.jpeg'

const CarouselPj = () => {
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

  const captionStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={3000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
  )
}

export default CarouselPj;