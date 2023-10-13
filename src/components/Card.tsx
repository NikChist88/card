import styled from 'styled-components'
import cardImg from '../assets/images/card-img.jpeg'
import { Image } from './Image'
import { Section } from './Section'
import { Title } from './Title'
import { Description } from './Description'
import { Block } from './Block'
import { ButtonLink, Button } from './Button.styled'

type CardPropsType = {
  title: string
  desc: string
}

export const Card = (props: CardPropsType) => {
  return (
    <StyledCard>
      <Image src={cardImg} alt="Image" />
      <Section>
        <Title>{props.title}</Title>
        <Description>{props.desc}</Description>
        <Block>
          <ButtonLink as="a" href="#">
            See more
          </ButtonLink>
          <Button>Save</Button>
        </Block>
      </Section>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 10px 20px 10px;
`
