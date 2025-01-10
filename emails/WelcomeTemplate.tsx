import React, { CSSProperties } from 'react';
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components';

const WelcomeTemplate = ({ name }:{ name:string }) => {
  return (
    <Html>
        <Preview>Welcome aboard!</Preview>
        <Tailwind>
          <Body className='bg-cyan-100'>
              <Container>
                  <Text className='font-bold text-3xl'>Hellow {name}</Text>
                  <Link href='https://www.codewithmosh.com'>www.codewithmosh.com</Link>
              </Container>
          </Body>
        </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
  background:'#fff'
}

const heading: CSSProperties = {
  fontSize:'32px'
}

export default WelcomeTemplate