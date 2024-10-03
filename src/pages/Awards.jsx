import NavBanner from "../components/NavBanner"

function Awards() {
  return (
    <div>
        <NavBanner title="Awards"/>
        <div className="bg-[#f5f5f5] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,240px)] justify-center px-4 lg:px-20 gap-10 py-10 gap-y-16">
            <div className="space-y-5">
                <img src="https://www.tendersure.africa/wp-content/uploads/2024/03/92-300x200.png" alt="" />
                <h2 className="text-customBlue text-xl font-semibold">ISO 9001:2015 Certification</h2>
                <p className="text-gray-500">TenderSure™ is a ISO 9001:2015 certified making it a globally recognized quality management system.</p>
            </div>
            <div className="space-y-5">
                <img src="https://www.tendersure.africa/wp-content/uploads/2024/03/94-300x200.png" alt="" />
                <h2 className="text-customBlue text-xl font-semibold">Certified Data Processor</h2>
                <p className="text-gray-500">TenderSure™ is a certified Data Processor by the Office of the Data Commissioner (ODPC) of Kenya</p>
            </div>
            <div className="space-y-5">
                <img src="https://www.tendersure.africa/wp-content/uploads/2024/03/91-300x200.png" alt="" />
                <h2 className="text-customBlue text-xl font-semibold">DIGITAL TECH Excellence Awards</h2>
                <p className="text-gray-500">Best eProcurement Solutions Provider from the DIGITAL TECH Excellence AWARDS 2019, 2020, 2021, 2022 & 2023.</p>
            </div>
            <div className="space-y-5">
                <img src="https://www.tendersure.africa/wp-content/uploads/2024/03/95-300x200.png" alt="" />
                <h2 className="text-customBlue text-xl font-semibold">Blue Company Member</h2>
                <p className="text-gray-500">TenderSure™ is a certified corruption free entity.</p>
            </div>
            <div className="space-y-5">
                <img src="https://www.tendersure.africa/wp-content/uploads/2024/03/93-300x200.png" alt="" />
                <h2 className="text-customBlue text-xl font-semibold">KISM Member</h2>
                <p className="text-gray-500">TenderSure™ is a member of the Kenya Institute of Supplies Management.</p>
            </div>
            <div className="space-y-5">
                <img src="https://www.tendersure.africa/wp-content/uploads/2024/03/96-300x200.png" alt="" />
                <h2 className="text-customBlue text-xl font-semibold">European Union Commendation</h2>
                <p className="text-gray-500">TenderSure™ has recognition and commendation from the European Union as a solution best suited to fight corruption in procurement.</p>
            </div>
        </div>
    </div>
  )
}

export default Awards