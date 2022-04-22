import type {NextPage} from 'next'
import {LayoutBootstrap} from "../components/LayoutBootstrap/LayoutBootstrap";
import {Card} from "../components/LayoutBootstrap/Card";


const TestePage: NextPage = () => {
    return (
        <LayoutBootstrap>
            <h5>
                <Card></Card>

            </h5>
        </LayoutBootstrap>


    )
}

export default TestePage;
