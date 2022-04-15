import Link from "next/link";


export const Menu = (props: PropsMenu) => {
    return (
        <div>
            <h5>Menu</h5>
            <ul>
                <li>
                    <Link href="/championship">
                        <a>Home</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;