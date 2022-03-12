import { FunctionComponent } from 'react';
import { HeaderSection, ContentSection } from './Header.style';

export interface IHeaderProps {
    setOpen: (status: boolean) => void;
}
const Header: FunctionComponent<IHeaderProps> = ({ setOpen }) => {
    return (
        <HeaderSection className="header_section">
            <ContentSection className="content_section">
                <h3>Todo List</h3>
                <button onClick={() => setOpen(true)}>Create Task</button>
            </ContentSection>

        </HeaderSection>
    )
}

export default Header;