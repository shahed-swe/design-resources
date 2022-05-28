import { useState } from "react";
// importing custom hook for usage
import useFetch from "..";


const FetchComponent = () => {
    const [id, setId] = useState(1)
    const {loading, error, value} = useFetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,{}, [id]
    )


    return (
        <div>
            <div>{id}</div>
            <button onClick={() => setId(currentId => currentId + 1)}>Increment Id</button>
            <div>Loading... {loading.toString()}</div>
            <div>{JSON.stringify(error, null, 2)}</div>
            <div>{JSON.stringify(value, null, 2)}</div>
        </div>
    )
}


export default FetchComponent