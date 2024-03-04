import React from 'react'
import styled from 'styled-components'

const LoginPage = () => {
  return (
    <Container>
      <Content>
        <Center>
          <LogoOne src='/images/cta-logo-one.svg' alt='logo-one'/>
          <SignUpLink> 지금 가입</SignUpLink>
          <Description>
            영화에 대한 프리미어 접근을 얻으세요 :)
            디즈니 플러스 가격은 다음 주 부터 2500원 인상됩니다.
          </Description>
          <LogoTwo src='images/cta-logo-two.png' alt='logo-two'/>
        </Center>
      </Content>
    </Container>
  )
}

export default LoginPage

const Container = styled.section`

`;

const Content = styled.div`

`;

const Center = styled.div`

`;

const LogoOne = styled.img`

`;

const SignUpLink = styled.a`

`;

const Description = styled.p`

`;

const LogoTwo = styled.img`

`;
