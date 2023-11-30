import { useEffect, useState } from "react";

const useAssignment = () => {
    const [assignment, setAssignment ] = useState([]);
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/assignments')
        .then(res => res.json())
        .then(data => {
            setAssignment(data);
            setLoading(false)
        })
    }, [])


    return [assignment, loading]
};

export default useAssignment;

