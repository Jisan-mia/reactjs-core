import { styled } from "styled-components";

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 1.8rem;
  color: #000;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 0.95rem;
  text-align: center;
`

export const Button = styled.button`
  background: ${(props) => props.color || '#3983CE'};
  padding: 0.8rem 1.8rem;
  color: #fff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8
  }
  &:active {
    transform: scale(0.98)
  }
`