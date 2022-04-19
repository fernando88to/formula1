import Link from "next/link";
import style from "./Menu.module.css";


export const Menu = () => {
    return (
        <div className={style.menu}>
            <Link href="/championship">
                <button className={style.mybutton}>Championship</button>
            </Link>
            <Link href="/championship">
                <button className={style.mybutton}>Championship</button>
            </Link>
            <Link href="/championship">
                <button className={style.mybutton}>Championship</button>
            </Link>
        </div>
    );
};

export default Menu;