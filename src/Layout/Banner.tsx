import React, { Component, ReactNode } from 'react'
import styled from 'styled-components'
import { Carousel } from 'antd'
import banner1 from '../assets/img/banner-1.jpg'
import banner2 from '../assets/img/banner-2.jpg'
import banner3 from '../assets/img/banner-3.jpg'
import banner4 from '../assets/img/banner-4.jpg'
import banner5 from '../assets/img/banner-5.jpg'
import banner6 from '../assets/img/1-squashed.jpg'

import banner1_responsive from '../assets/img/banner-1-responsive.jpg';
import banner2_responsive from '../assets/img/banner-2-responsive.jpg';
import banner3_responsive from '../assets/img/banner-3-responsive.jpg';
import banner4_responsive from '../assets/img/banner-4-responsive.jpg';
import banner5_responsive from '../assets/img/banner-5-responsive.jpg';
import banner6_responsive from '../assets/img/banner-5-responsive.jpg';

const ImgFitBanner = styled.img`
  width: 100%;
`

class Banner extends Component {
  render(): ReactNode {
    return (
      <Carousel autoplay>
        <picture>
          <source media="(max-width: 575.98px)" srcSet={banner1_responsive}/>
          <ImgFitBanner src={banner1} alt="banner1"/>
        </picture>
        <picture>
          <source media="(max-width: 575.98px)" srcSet={banner6_responsive}/>
          <ImgFitBanner src={banner6} alt="banner6"/>
        </picture>
        <picture>
          <source media="(max-width: 575.98px)" srcSet={banner5_responsive}/>
          <ImgFitBanner src={banner5} alt="banner5"/>
        </picture>
        <picture>
          <source media="(max-width: 575.98px)" srcSet={banner2_responsive}/>
          <ImgFitBanner src={banner2} alt="banner2"/>
        </picture>
        <picture>
          <source media="(max-width: 575.98px)" srcSet={banner3_responsive}/>
          <ImgFitBanner src={banner3} alt="banner3"/>
        </picture>
        <picture>
          <source media="(max-width: 575.98px)" srcSet={banner4_responsive}/>
          <ImgFitBanner src={banner4} alt="banner4"/>
        </picture>

      </Carousel>
    )
  }
}

export default Banner
