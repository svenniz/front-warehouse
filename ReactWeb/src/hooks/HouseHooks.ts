import { House } from "../types/house";
import config from "../config";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const useFetchHouses = () => {
    return useQuery<House[], AxiosError>({
        queryKey: ["houses"],
        queryFn: () =>
            axios.get(`${config.baseApiUrl}/houses`).then((response)=>response.data),
    });

    // const [houses,setHouses] = useState<House[]>([]);

    // useEffect(()=>{
    //     const fetchHouses = async () => {
    //         const response = await fetch(`${config.baseApiUrl}/houses`);
    //         const houses = await response.json();
    //         setHouses(houses);
    //     };
    //     fetchHouses();

    // }, [])

    // return houses;
}

export default useFetchHouses;