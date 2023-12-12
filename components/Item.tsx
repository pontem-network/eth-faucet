import styled from 'styled-components';

export const Item = styled.div `
  display: flex;
  color: #bdbdc4;
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0;
  & > span {
    flex: 1;
  }
  & > span:last-child {
    text-align: right;
    color: white;
    font-weight: 500;
  }
  border-bottom: 1px solid #39394D;
  padding: 11px;

  &:last-of-type {
    border-bottom: none;
  }
`

export const ItemsWrapper = styled.div`
  border-radius: 6px;
  padding: 10px 20px;
  background: #24243A;
  width: 100%;

`
