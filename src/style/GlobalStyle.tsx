import { createGlobalStyle } from 'styled-components';

const GlobelStyle = createGlobalStyle`
html,body {
    margin: 0;
    padding: 0;
}

.dialog_main_class {
    width: 500px;
    h2 {
        &#customized-dialog-title {
            background: #a1c4c1;
            color: #fff;
        }
    }
    .MuiDialogActions-root {
        margin: 0 auto;
        cursor: pointer;
        button {
            border: 1px solid;
            padding: 8px 20px;
            background: #a1c4c1;
            color: #fff;
            font-weight: 600;
            &.Mui-disabled {
                background: #a8a8a8;
            }
        }
    }
}
`;

export default GlobelStyle;