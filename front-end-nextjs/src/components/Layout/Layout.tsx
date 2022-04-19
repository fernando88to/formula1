import {Menu} from "../Menu";

interface PropTypes {
    // JSX.Element not permit string
    // or React.ReactChild permit string ;
    // or ReactNode permit all
  children: React.ReactNode;
}
export const Layout = ( props: PropTypes) => {
    return (
        <div>
            <Menu></Menu>
            {props.children}
        </div>
    );
}

export default Layout;