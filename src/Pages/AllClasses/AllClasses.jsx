import { Helmet } from "react-helmet-async";
import AllClassesCard from "../../Components/AllClassesCard/AllClassesCard";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import './AllClasses.css'

const AllClasses = () => {
    const [courses, setCourses] = useState([])

    const {count} = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6;
    const numberOfPages = Math.ceil(count / itemsPerPage)
    
    const pages = [...Array(numberOfPages).keys()]
    console.log(pages)


    useEffect( () => {
        fetch(`https://skill-boost-hub-server.vercel.app/courses?page=${currentPage}&size=${itemsPerPage}`)
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [currentPage, itemsPerPage])

    const handlePrevPage = () => {
        if(currentPage > 0) {
            setCurrentPage(currentPage -1)
        }
    }

    const handleNextPage = () => {
        if(currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }


    return (
        <div>
            <Helmet>
                <title>SkillBoost Hub || All CLasses</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:p-6 ">
                {
                    courses.map(course => <AllClassesCard key={course._id} course={course}></AllClassesCard> )
                }
            </div>
            <div className="pagination ">
                <button onClick={handlePrevPage}>Prev</button>

                {
                    pages.map(page => <button key={page}
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? 'selected' : undefined} 
                        >{page+1}</button> )
                }
                <button onClick={handleNextPage}>Next</button>
            </div>
        </div>
    );
};

export default AllClasses;