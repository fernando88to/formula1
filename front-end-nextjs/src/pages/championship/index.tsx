import {GetServerSideProps, NextPage} from "next";
import Championship from "../../types/Championship";


interface MyProps {
    list: Championship[];
}


const ChampionshipHome: NextPage<MyProps> = ({list}) => {
    return (
        <div>
            <h1>Championship Home</h1>
            <ul>
                {list.map((championship) => (
                    <li key={championship.id}>
                        {championship.year}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChampionshipHome;


export const getServerSideProps: GetServerSideProps = async () => {

    let list: Championship[] = [];
    list.push({id: 1, year: 2022});
    list.push({id: 2, year: 2022});
    return {
        props: {
            list: list
        },
    };
};