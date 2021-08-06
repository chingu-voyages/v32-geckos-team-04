import styled from 'styled-components'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

export const Caption = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 13px;
  
`
export const Container = styled.div`
  margin: 5%;
`

export const Heading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin: 5%;
`

export const ColumnLeft = styled.div`
  width: 100vw;
  padding: 10% 5%;

  @media ${device.tablet} {
    width: 50vw;
    float: left;
    padding: 0;
  }
  @media ${device.laptop} {
    width: 50vw;
    float: left;
    padding: 0;
  }
  @media ${device.desktop} {
    width: 50vw;
    float: left;
    padding: 0;
  }
`

export const ColumnRight = styled.div`
  width: 100vw;
  padding: 0 5%;

  @media ${device.tablet} {
    width: 40vw;
    float: right;
    padding: 5% 0%;
    margin: 0;
  }
  @media ${device.laptop} {
    width: 40vw;
    float: right;
    padding: 5% 0%;
    margin: 0;
  }
  @media ${device.desktop} {
    width: 40vw;
    float: right;
    padding: 5% 0%;
    margin: 0;
  }
`


