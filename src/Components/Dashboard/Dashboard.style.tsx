import styled from 'styled-components';

const Title = styled.p`
    font-size: 30px;
    text-align: center;
    margin: 0;
`;

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    .MuiCard-root {
        width: 100%;
        margin: 35px !important;
        box-shadow: 0px 0px 4px 2px #d6bbbb;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        img{
            height: 250px;
        }
        .strick_class {
            text-decoration: line-through;
        }  
        .MuiCardActions-root {
            justify-content: space-around;
            width: 100%;
            padding: 10px;
            border-top: 2px solid #e2e2f5;
        }
        .MuiCardContent-root {
            width: 100%;
            flex: 100%;
        }
        .success_tick {
            display: flex;
            padding: 10px;
            margin-top: 10px;
            margin-bottom: 0;
            background: #9ad69a;
            p {
                margin: 0 10px;
                padding-top: 1px;
                font-size: 14px;
                font-weight: 600;
            }
        }
    }
`;

const MainContainer = styled.div`
    padding: 20px 80px;
`;

export default CardContainer;
export { Title, MainContainer };