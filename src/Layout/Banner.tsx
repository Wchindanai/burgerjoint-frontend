import React, { Component, ReactNode } from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'
import banner1 from '../assets/img/banner-1.jpg'
import banner2 from '../assets/img/banner-2.jpg'
import banner3 from '../assets/img/banner-3.jpg'
import banner4 from '../assets/img/banner-4.jpg'
import banner5 from '../assets/img/banner-5.jpg'
import banner6 from '../assets/img/1-squashed.jpg'

const ImgFitBanner = styled.img`
  width: 100%;
`

class Banner extends Component {
  render(): ReactNode {
    return (
      <Carousel autoplay>
        <ImgFitBanner src={banner1} alt="banner1"/>
        <ImgFitBanner src={banner6} alt="banner6"/>
        <ImgFitBanner src={banner5} alt="banner5"/>
        <ImgFitBanner src={banner2} alt="banner2"/>
        <ImgFitBanner src={banner3} alt="banner3"/>
        <ImgFitBanner src={banner4} alt="banner4"/>
      </Carousel>
    )
  }
}

export default Banner
