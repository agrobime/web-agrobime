import { Carousel } from 'react-carousel-minimal'
import work1 from '../../../modules/files/work1.jpeg'
import work2 from '../../../modules/files/work2.jpeg'
import work3 from '../../../modules/files/work3.jpeg'
import work4 from '../../../modules/files/work4.jpeg'
import work5 from '../../../modules/files/work5.jpeg'
import work6 from '../../../modules/files/work6.jpeg'

function CarouselPj() {
 const data = [
    {
      image: "http://drive.google.com/uc?export=view&id=18_rs__y3ERs3xUO9ZIcMOmCGh34NB2US",
      caption: "Talleres presenciales"
    },
    {
      image: "http://drive.google.com/uc?export=view&id=1Omo36hgZ5uHy82Ucj9neNjrqb1Ed2GCz",
      caption: "Talleres presenciales"
    },
    {
      image: "http://drive.google.com/uc?export=view&id=1bwkcVo6tacQl7xQ0DQszEbaotjtB5uCa",
      caption: "Camillas de cultivo"
    },
    {
      image: "http://drive.google.com/uc?export=view&id=1xIDPKqXmOXoGdYj7_1VJIfKG8OOa0UcC",
      caption: "Planos"
    },
    {
      image: "http://drive.google.com/uc?export=view&id=1DJnBvQukXbWRyyGv4a586E5aFabv2BCC",
      caption: "Planos"
    },
    {
      image: "http://drive.google.com/uc?export=view&id=1YKCyjCnTmHI0kuqE93-MreXZt6E6_cmf",
      caption: "Planos"
    },
    {
      image: "http://drive.google.com/uc?export=view&id=1qfKOBhofhUVTrT0e2oUE6L2hTkKM7URS",
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