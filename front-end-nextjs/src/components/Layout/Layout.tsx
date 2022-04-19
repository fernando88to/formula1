import {Menu} from "../Menu";
import style from "./Layout.module.css";
interface PropTypes {
    // JSX.Element not permit string
    // or React.ReactChild permit string ;
    // or ReactNode permit all
  children: React.ReactNode;
  titulo: string,
}
export const Layout = ( props: PropTypes) => {
    return (
        <div className={style.layout}>
            <Menu></Menu>
            <h1>{props.titulo}</h1>
            {props.children}
        </div>
    );
}

export default Layout;