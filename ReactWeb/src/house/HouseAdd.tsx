import { useAddHouse } from "../hooks/HouseHooks"
import { House } from "../types/house";
import HouseForm from "./HouseForm";

const HouseAdd = () => {
    const addHouseMutation = useAddHouse();

    const house: House = {
        address: "",
        country: "",
        description: "",
        price: 0,
        photo: "",
        id: 0
    };
    return(
        <HouseForm
            house={house}
            submitted={(h)=>addHouseMutation.mutate(h)}
        />
    )
}

export default HouseAdd;