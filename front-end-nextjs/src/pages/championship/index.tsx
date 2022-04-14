import {GetServerSideProps, NextPage} from "next";
import Championship from "../../types/Championship";
import {useEffect, useState} from "react";
import  http from "../../http";

interface MyProps {
    list: Championship[];
}
const ChampionshipHome: NextPage<MyProps> = ({}) => {
    const [carregando, setCarregando] = useState(true);
    const [championshipList, setChampionshipList] = useState([] as Championship[]);

    useEffect( () => {
        load()
    }, []);

    async function load(){
        const response = await http.get('/championship');
        setChampionshipList(response.data);
        setCarregando(false);
    }
    return (
        <div>
            <h1>Championship Home</h1>
            {carregando && <p>Carregando...</p>}
            {!carregando && <ul>
                {championshipList.map((championship) => (
                    <li key={championship.id}>
                        {championship.year}
                    </li>
                ))}
            </ul>}

        </div>
    );
};

export default ChampionshipHome;


export const getServerSideProps: GetServerSideProps = async () => {


/*
    let list: Championship[] = [];
    list.push({id: 1, year: 2022});
    list.push({id: 2, year: 2022});
    return {
        props: {
            list: list
        },
    };*/

    return {
        props: {

        },
    };
};