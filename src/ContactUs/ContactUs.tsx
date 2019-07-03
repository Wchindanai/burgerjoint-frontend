import React, { Component } from 'react'
import { Row, Col, Icon, Typography } from 'antd'

const { Title, Text } = Typography

class ContactUs extends Component {
  render() {
    return (
      <div id="contact_us">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1779.5262528170333!2d151.22167854148972!3d-33.878648052621806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7353141cff712586!2sThe+Burger+Joint!5e0!3m2!1sen!2sth!4v1562173876589!5m2!1sen!2sth"
          frameBorder="0" width="100%" height="500px" allowFullScreen></iframe>
        <Row style={{ marginTop: '20px' }}>
          <Col lg={{ span: "6", offset: "6" }} xs={{ span: "15", offset: "6" }}>
            <Title level={3}>
              <a href="tel:+61-9360-1845">
                <Icon type="phone" theme="twoTone"/> : +61 9360-1845
              </a>
            </Title>
            <Title level={3}>
              <Icon type="clock-circle" /> OPENING HOURS
            </Title>
            <Title level={4}>
              <Text type={"secondary"}>
                Mon-Sun: 11AM–10PM
              </Text>
            </Title>
          </Col>
          <Col lg={{ span: "6", offset: "0" }}  xs={{ span: "15", offset: "6"}}>
            <Title level={3}>
              <Icon type="home" theme="twoTone" twoToneColor="#eb2f96" /> ADDRESS
            </Title>
            <Title level={4}>
              <Text type={"secondary"}>
                249 Victoria St, <br/>
                Darlinghurst NSW 2010, Australia
              </Text>
            </Title>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ContactUs
