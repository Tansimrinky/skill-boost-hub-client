import SectionTitle from "../SectionTitle/SectionTilte";
import {useState, useEffect} from 'react'


const Partnership = () => {
    const [partners, setPartners ] = useState([])

    useEffect( () => {
        fetch('partners.json')
        .then(res => res.json())
        .then(data => {
            setPartners(data)
        })
    }, [])
    console.log(partners)
    return (
        <div>
            <SectionTitle heading={"Explore Our Partners and collaborators"} ></SectionTitle>
            <div  className="bg-base-300 p-6">
                <p className="text-center text-2xl font-medium text-slate-700">Trusted by over 15,000 companies and millions of learners around the world</p>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-center items-center text-center p-4">
               {
                    partners.map((partner) =>  <div className="flex flex-col items-center justify-center "
                         key={partner.id}
                        partner={partner}>
                            <img className="h-[50px] w-[100px] grid justify-center" src={partner.logo} alt="" />
                            <p className="font-medium text-slate-600">{partner.description}</p>
                        </div> )
                }
               </div>
            </div>
        </div>
    );
};

export default Partnership;