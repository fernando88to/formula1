import Championship from "../types/Championship";
import http from "../http";
import {AxiosResponse} from "axios";

const getAll = async (): Promise<Championship[]> => {
    let result: AxiosResponse = await http.get("/championship/list");
    return result.data;

};




export default {getAll};

