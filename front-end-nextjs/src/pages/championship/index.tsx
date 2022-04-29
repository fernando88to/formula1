import {GetServerSideProps, NextPage} from "next";
import Championship from "../../types/Championship";
import {FormEvent, useEffect, useState} from "react";
import ChampionshipEndpoint from "../../endpoints/ChampionshipEndpoint";
import {LayoutBootstrap} from "../../components/LayoutBootstrap/LayoutBootstrap";
import {CardPage} from "../../components/LayoutBootstrap/CardPage";
import {Table} from "../../components/LayoutBootstrap/Table";

interface MyProps {
    list: Championship[];
}

const ChampionshipHome: NextPage<MyProps> = ({}) => {
    const [carregando, setCarregando] = useState(true);
    const [championshipList, setChampionshipList] = useState([] as Championship[]);
    const [championshipSelected, setChampionshipSelected] = useState(null as Championship | null);
    const [year, setYear] = useState('');
    const fields  = [{field:'id', headerName:'ID'},{field:'year', headerName:'Year'}];

    useEffect(() => {
        load()
    }, []);

    async function load() {
        const response = await ChampionshipEndpoint.getAll();
        setChampionshipList(response);
        setCarregando(false);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(year);
    }
    const handlerChangeYear = (event: FormEvent<HTMLInputElement>) => {
        setYear(event.currentTarget.value);
    }

    return (
        <LayoutBootstrap title="ChampionShip List">
            <CardPage title="Championship">
                <Table
                        columns={fields}
                        rows={championshipList}
                />
            </CardPage>

        </LayoutBootstrap>

    );
};

export default ChampionshipHome;


export const getServerSideProps: GetServerSideProps = async () => {

    return {
        props: {},
    };
};