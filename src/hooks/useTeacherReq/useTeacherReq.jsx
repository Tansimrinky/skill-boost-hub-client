import { useEffect, useState } from "react";

const useTeacherReq = () => {

    const [ teachReq, setTeachReq ] = useState([]);
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/teachReq')
        .then(res => res.json())
        .then(data => {
            setTeachReq(data);
            setLoading(false)
        })
    }, [])
    return [teachReq, loading]
};

export default useTeacherReq;
