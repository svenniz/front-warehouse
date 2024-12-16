import { House } from "../types/house";
import config from "../config";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const useFetchHouses = () => {
    return useQuery<House[], AxiosError>({
        queryKey: ["houses"],
        queryFn: () =>
            axios.get(`${config.baseApiUrl}/houses`).then((res)=>res.data),
    });
}
const useFetchHouse = (id:number) => {
    return useQuery<House, AxiosError>({
        queryKey: ["houses", id],
        queryFn: () =>
            axios.get(`${config.baseApiUrl}/house/${id}`).then((res)=>res.data)
    });
}

export default useFetchHouses;
export  {useFetchHouse};