import React from 'react';
import styled from "styled-components";

import { Modal } from "../Modal/index";
import { Button } from '../ClaimButton/Button';
import WalletPng from './assets/wallet.png';
import Image from 'next/image';

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        display: block;
        border-top-right-radius: 24px;
        border-top-left-radius: 24px;
    }
`
const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 30px 30px;

    & > h2 {
        font-family: Roboto;
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: 0.15000000596046448px;
        text-align: center;
        color: white;
    }

    & > p {
        font-family: Roboto;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.4399999976158142px;
        text-align: center;
        color: #D4C4ED;
    }
`

const ButtonsGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    column-gap: 20px;

    & > button:first-of-type {
        background: #43395B;
        &:hover::before {
            opacity: 0;
        }
        &:hover {
            background: #47395B;
        }
    }
`

export const JoinWaitingList = ({ onClose }: { onClose: () => void }) => {

    const onJoinClick = () => {
        window.open('https://lumio.io/#join-whitelist', '_blank', 'noreferrer');
        onClose();
    }

    return (
        <Modal onClose={() => onClose()}>
            <Header>
                <Image
                    src={WalletPng}
                    sizes="(min-width: 380px) 100%, 100%"
                />
            </Header>
            <Body>
                <h2>Join the waiting list</h2>
                <p>
                    Your address is not whitelisted yet, but we may select it for the next testing stage.
                    Fill the form to join the Lumio testing campaign.
                </p>
                <ButtonsGroup>
                    <Button onClick={onClose}>Close</Button>
                    <Button onClick={onJoinClick}>Join</Button>
                </ButtonsGroup>
            </Body>
        </Modal>
        )
}
