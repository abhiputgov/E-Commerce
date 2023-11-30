import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: coral;
  position: relative;
`;
const Arrow = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  transform: translateX(0vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100vh;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {};
  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleClick('left');
        }}
      >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFHp7yBqYJ2MoMR_nop4Mg0MRURFCAAiCFm-SyUi-ousYYgeBsqoHfihUcec_t3RWv-Y&usqp=CAU" />
          </ImgContainer>
          <InfoContainer>
            <Title>Summer Sale!!</Title>
            <Description>Get Flat 30% off on our new arrivals</Description>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFHp7yBqYJ2MoMR_nop4Mg0MRURFCAAiCFm-SyUi-ousYYgeBsqoHfihUcec_t3RWv-Y&usqp=CAU" />
          </ImgContainer>
          <InfoContainer>
            <Title>Spring Sale!!!</Title>
            <Description>Get Flat 30% off on our new arrivals</Description>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fbf0f4">
          <ImgContainer>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFHp7yBqYJ2MoMR_nop4Mg0MRURFCAAiCFm-SyUi-ousYYgeBsqoHfihUcec_t3RWv-Y&usqp=CAU" />
          </ImgContainer>
          <InfoContainer>
            <Title>Winter Sale!!!</Title>
            <Description>Get Flat 30% off on our new arrivals</Description>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => {
          handleCLick('right');
        }}
      >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
