import styled from 'styled-components'

const Button = styled.button`
  display: block;
  padding: 0.4em 0.8em;
  border: none;
  border-radius: 0.25em;
  font-size: 18px;
  color: #fff;
  background-color: #0077cc;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
  :active {
    background-color: #005fa3;
  }
`

export default Button
