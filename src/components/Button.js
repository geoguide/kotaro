import styled from 'styled-components';

export const InlineButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  transition: background 250ms ease-in-out,
  transform 150ms ease;
  font-weight: bold;
  color: navy;
  font-size: 16px;

  &:hover,
  &:focus {
    background: #0053ba;
    outline: none;
    color: #fff;
  }
`;

const Button = styled(InlineButton)`
  padding: 4px;
  background: #0069ed;
  color: #ffffff;
  padding: 2px;
  margin: 2px;
`;

export const ExternalLink = styled.a`
  color: purple;
  font-weight: bold;
  &:hover,
  &:active
  &:visited {
    color: purple;
  }
`;

export default Button;
