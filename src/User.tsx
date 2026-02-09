import { useQuery } from "@tanstack/react-query";

function fetchUsers(){
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json());
}

export default function User(){
    const {data, isLoading,error} = useQuery({
        queryKey:["users"],
        queryFn:fetchUsers
    });

    if(isLoading) return <p> Loading .. .. .. </p>
    if(error) return <p> Error ... please try again</p>

    return(
        <ul>
            {data.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}