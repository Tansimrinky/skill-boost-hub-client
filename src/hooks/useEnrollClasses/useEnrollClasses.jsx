import { useEffect, useState } from "react";



const useEnrollClasses = () => {

    const [enrollClass, setEnrollClass ] = useState([]);
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/payments')
        .then(res => res.json())
        .then(data => {
            setEnrollClass(data);
            setLoading(false)
        })
    }, [])
    return [enrollClass, loading]
};

export default useEnrollClasses;