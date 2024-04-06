import styled from '@emotion/styled';

export const Box = styled.div`
  margin: 100px auto;
  width: 250px;
  height: 100px;
  border-radius: 20px;
  border: 5px solid #3977fd;
  background-image: -webkit-linear-gradient(45deg, 0%, 100%);
  opacity: 0.95;
  box-shadow: 0px 2px 0px #ffe8a;
`;

export const Title = styled.div`
  margin: auto;
  width: 200px;
  height: 100px;
  display: flex;
`;

export const Mask = styled.div`
  margin: auto;
  width: 250px;
  height: 100px;
  display: flex;
  font-size: 60px;
  font-weight: 700;
  font-family: 'Lobster Two', cursive;
  text-align: center;
  line-height: 90px;
  text-shadow:
    0px 2px 2px rgba(0, 0, 0, 0.2),
    0px 2px 0px rgba(255, 255, 255, 0.3);
  @-webkit-keyframes 'wave-animation' {
    0% {
      background-position: 250px 22px;
    }
    50% {
      background-position: 170px -29px;
    }
    100% {
      background-position: 300px 22px;
    }
  }
  background-image: -webkit-radial-gradient(center 10px, 80px 100px, #c1d2f8 50%, #0051ff 51%);

  background-size: 40px 110px;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation-name: wave-animation;
  -webkit-animation-duration: 3s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
`;
