import styled from 'styled-components'

export const ButtonLink = styled.button`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  background-color: #4e71fe;
  color: #fff;
  font-size: 10px;
  line-height: 20px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color ease 0.3s;
  &:hover {
    background-color: #3e59c7;
  }
`

export const Button = styled(ButtonLink)`
  color: #4e71fe;
  background-color: #fff;
  border: 2px solid #4e71fe;
  &:last-child:hover {
    background-color: #4e71fe;
    color: #fff;
  }
`
