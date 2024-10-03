import NavBanner from "../components/NavBanner"

const jobs = [
    {
        id:1,
        img:"https://www.tendersure.africa/wp-content/uploads/2024/09/Royal-Nairobi-Golf-Club-Logo-1-350x220.png",
        title:"PROVISION OF EQUIPMENT HIRE TENDER NOTICE",
        client:"Royal Nairobi Golf Club",
        website:"https://www.royalnairobigc.com",
        deadline:"October 4, 2024 at 10:00 PM (EAT)"
    },
    {
        id:2,
        img:"https://www.tendersure.africa/wp-content/uploads/2024/08/Cordaid-Logo-350x220.png",
        title:"SUPPLIER PREQUALIFICATION NOTICE 2024-2027",
        client:"Cordaid",
        website:" https://www.cordaid.org",
        deadline:"October 4, 2024 at 10:00 PM (EAT)"
    },
    {
        id:3,
        img:"https://www.tendersure.africa/wp-content/uploads/2024/09/Baraka-Mental-Health-Logo-350x220.png",
        title:"SUPPLIER PREQUALIFICATION NOTICE 2025-2027",
        client:"Baraka Mental Health Foundation",
        website:"https://barakamentalhealth.org",
        deadline:"October 18, 2024 at 10:00 PM (EAT)"
    },
    {
        id:4,
        img:"https://www.tendersure.africa/wp-content/uploads/2024/09/Dimkes-DT-Sacco-Logo-350x220.png",
        title:"SUPPLIER PREQUALIFICATION NOTICE 2025-2027",
        client:"Dimkes DT Sacco",
        website:"https://dimkessacco.co.ke",
        deadline:"October 18, 2024 at 10:00 PM (EAT)"
    },
    {
        id:5,
        img:"https://www.tendersure.africa/wp-content/uploads/2024/09/Ole-Sereni-Hotel-Logo-350x220.png",
        title:"SUPPLIER PREQUALIFICATION NOTICE 2025-2027",
        client:"Ole-Sereni Hotel",
        website:"https://ole-sereni.com",
        deadline:"October 18, 2024 at 10:00 PM (EAT)"
    },
    {
        id:6,
        img:"https://www.tendersure.africa/wp-content/uploads/2024/09/Pinnsoft-Logo-350x220.png",
        title:"SUPPLIER PREQUALIFICATION NOTICE 2024-2027",
        client:"Pinnsoft Technologies",
        website:"https://www.pinnsoft.co.ke",
        deadline:"October 4, 2024 at 10:00 PM (EAT)"
    },
    {
        id:7,
        img:"https://www.tendersure.africa/wp-content/uploads/2024/09/Samasource-Impact-Sourcing-Inc.-Logo-350x220.png",
        title:"LAPTOPS ASSET DISPOSAL NOTICE",
        client:"Samasource Impact Sourcing, Inc.",
        website:"https://www.sama.com",
        deadline:"October 8, 2024 at 10:00 PM (EAT)"
    },
]

const JobCard = ({img, title, client, website, deadline}) =>{
    return(
        <div>
            <div className="flex flex-col md:flex-row items-center lg:justify-center mb-8 lg:p-5">
                <img src={img} alt="" className="w-[200px] max-w-[240px]"/>
                <div className="ml-4 space-y-2">
                    <h2 className="text-customBlue text-xl font-semibold">{title}</h2>
                    <p className="text-customBlue"><span className="text-customGreen">Client: </span>{client}</p>
                    <div>
                    <span className="text-customGreen">Client Website: </span><a href={website} target="_blank" rel="noreferrer" className="text-customBlue hover:text-customBlue-dark">{website}</a>
                    </div>
                    <div>
                    <span className="text-customGreen">Deadline: </span><span className="text-red-500">{deadline}</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <button className="bg-customGreen text-white px-5 py-2 rounded-full">Register</button>
                        <button className="bg-customGreen text-white px-5 py-2 rounded-full">Instructions</button>
                        <button className="bg-customGreen text-white px-5 py-2 rounded-full">Categories</button>
                    </div>
                    </div>
            </div>
        </div>
    )
}

function AvailableJobs() {
  return (
    <div>
        <NavBanner title="Available Jobs" />
        <div className="bg-[#f5f5f5]  py-8 px-4 lg:px-20">
            {jobs.map((job)=>(
                <JobCard key={job.id} img={job.img} title={job.title} client={job.client} website={job.website} deadline={job.deadline} />
            ))}
        </div>
    </div>
  )
}

export default AvailableJobs