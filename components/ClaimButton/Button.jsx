import styled from 'styled-components';

export const Button = styled.button `
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  height: 54px;
  font-size: 1.1rem;
  border-radius: 12px;
  position: relative;
  color: white;
  background-image: linear-gradient(90deg, #6e42ca 0%, #8d29c1 100%);
  z-index: 1;
  font-weight: 500;

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
