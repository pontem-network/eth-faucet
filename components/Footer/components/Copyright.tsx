import React, { FC } from 'react';
import styled from 'styled-components';
import { viewports } from '@/common/constants/viewports';

const StyledCopyright = styled.p`
    order: 3;

    max-width: 318px;
    margin: 0 auto;
    padding: 0 24px 24px;

    color: #9897a0;
    text-align: center;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;

    @media (min-width: ${viewports.mobile}px) {
        min-width: 100%;
    }

    @media (min-width: ${viewports.laptop}px) {
        margin: 0;
        text-align: start;
    }

    @media (min-width: ${viewports.desktop}px) {
        margin: 0 auto;
        text-align: center;
    }
`;

export const Copyright: FC = () => {
    const year = new Date().getFullYear();

    return (
        <StyledCopyright>
            &copy; {year} Pontem Technology Ltd. All Rights Reserved. Version Bridge {process.env.VERSION} and Widget alpha 27
        </StyledCopyright>
    );
};
