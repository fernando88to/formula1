import Link from "next/link";
import style from "./Menu.module.css";
import {useState} from "react";


export const Menu = () => {
    const [isButtonBack, setIsButtonBack] = useState(false);

    return (
        <div className={style.menu}>
            <Link href="/championship">
                <button className={style.mybutton}>Championship</button>
            </Link>

            {isButtonBack && <Link href="/">
                <button className={style.mybutton}>Back</button>
            </Link>}

        </div>
    );
};

export default Menu;