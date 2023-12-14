import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  position: relative;
  border: none;
  cursor: pointer;
  min-width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #6e42ca 0%, #8d29c1 100%);  height: 40px;
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 16px;
  color: #e5e4fa;
  text-decoration: none;
  transition: background-color 0.15s ease;
  will-change: background-color;
  justify-self: flex-end;
  font-weight: 500;
  font-family: Roboto;
  margin-right: 15px;
  &:hover {
    color: white;
  }

  z-index: 1;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(90deg, #6039b0 0%, #8d29c1 30.44%);
    z-index: -1;
    transition: all 0.25s ease-in-out;
    opacity: 0;
    border-radius: 12px;
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(90deg, #8d6ad5 0%, #6f42ca 100%);
    z-index: -1;
    transition: all 0.25s ease-in-out;
    opacity: 0;
    border-radius: 12px;
  }

  &:active::after {
    opacity: 1;
  }

  &:hover::before {
    opacity: 1;
  }
`
