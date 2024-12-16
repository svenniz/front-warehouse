type Args = {
    status: "success" | "error" | "pending";
};

const ApiStatus = ({status}:Args) => {
    switch(status){
        case "error":
            return <div>Error communicating with backend</div>;
        case "pending":
            return <div>Loading...</div>;
        default:
            throw Error("Unknown Api state")
    }

}

export default ApiStatus;