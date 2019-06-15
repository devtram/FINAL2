import React, { Component } from 'react';
import { Container, Header,  Content, FooterTab, Button, Text, Accordion  } from 'native-base';

const dataArray = [
    { title: "Objective", content: "My objective is to fullfill the requirements of organization and do the best I can" },
    { title: "Experience", content: "Worked as freelancer on Upwork from 2012\n Worked as freelancer on Fiverr from 2012." },
    { title: "Education", content: "Matric 2005\n Inter 2007\n BSc. 2010\n MCS In progress" }
  ];


export default class Resume extends Component {
  render() {
    return (
      <Container>

          <Header>  
          <Left/>
          <Body>
            <Title>MUHAMMAD TAYYAB RANA</Title>
          </Body>
          <Right />
        </Header>






        <Footer>
          <FooterTab>
            
              <Text>Email: fa17mcsw0010@maju.edu.pk</Text>
              <Text>Phone: 0315-2019137</Text>   

           
          </FooterTab>
        </Footer>
        </Container>
    
    );
  }
}