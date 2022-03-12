import styled from 'styled-components';

export const DialogTitle = styled.div`
    border: 1px solid;
    width: 100%;
    height: 254px;
    text-align: center;
    background: #e2e2f5;
    box-shadow: 0px 0px 10px 1px red;
`;


export const DialogContent = styled.div`
    padding-top: 6rem;
    h3 {
        font-size: 2rem;
        margin-bottom: 14px;
    }
    button {
        border: none;
        padding: 16px 60px;
        border-radius: 25px;
        font-size: 16px;
        background: #9c9ce5;
        color: #fff;
        cursor: pointer;
        &:hover {
            background: #fff;
            color: #9c9ce5;
        }
    }
`;
