import { useEffect, useState } from "react";

const useAssignment = () => {
    const [assignment, setAssignment ] = useState([]);
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://skill-boost-hub-server.vercel.app/assignments')
        .then(res => res.json())
        .then(data => {
            setAssignment(data);
            setLoading(false)
        })
    }, [])


    return [assignment, loading]
};

export default useAssignment;

