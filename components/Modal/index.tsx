import styled from 'styled-components';
import React, {useState} from 'react';

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 30;
`
const ModalBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 480px;
    width: 100%;
    border-radius: 24px;
    z-index: 100;
    background: #16152d;
`

const CloseButton = styled.span`
    cursor: pointer;
    width: 24px;
    height: 24px;
    color: #D4C4ED;
    position: absolute;
    right: 20px;
    top: 20px;
`

export const Modal = ({ onClose, children })  => {

    const onCloseModal = () => {
        onClose();
    }

   return (
   <Overlay>
       <ModalBlock>
           <CloseButton onClick={() => onCloseModal()}>&#x2717;</CloseButton>
           { children }
       </ModalBlock>
    </Overlay>
   )
}
