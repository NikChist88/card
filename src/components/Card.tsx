import styled from 'styled-components'
import cardImg from '../assets/images/card-img.jpeg'
import { ButtonLink, Button } from './Button.styled'

export const Card = () => {
  return (
    <StyledCard>
      <img src={cardImg} alt="Image" />
      <section> 
        <h3>Headline</h3>
        <p>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </p>
        <div>
          <ButtonLink as="a" href="#">
            See more
          </ButtonLink>
          <Button>Save</Button>
        </div>
      </section>
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

  img {
    width: 280px;
    height: 170px;
    object-fit: cover;
    border-radius: 10px;
  }

  section {
    padding: 20px 10px 10px;

    h3 {
      font-size: 16px;
      font-weight: 700;
      color: #000;
    }

    p {
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      color: #abb3ba;
      max-width: 260px;
      margin-top: 20px;
    }

    div {
      display: flex;
      gap: 12px;
      margin-top: 20px;
    }
  }
`
