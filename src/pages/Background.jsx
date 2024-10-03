import NavBanner from "../components/NavBanner"

function Background() {
  return (
    <div>
        <NavBanner title='Background'/>
        <div className="company-background border">
            <div className="bg-white mt-10 mx-0 lg:mx-20 px-5 py-10">
                <p className="text-gray-500">TenderSure™is an award-winning Source to Pay (S2P) solution that was developed in 2005 in South Africa. TenderSure™ has four modules which include; Sourcing, Procure to Pay (P2P), Risk Management and Contract Management. These four modules are represented diagrammatically as follows:</p>
                <div className="my-10">

                <img src="https://www.tendersure.africa/wp-content/uploads/2024/03/Screenshot-2024-03-08-115036.png" alt="" className="mx-auto"/>
                </div>
                <p className="text-gray-500">TenderSure™ has over 16 years&apos; experience gained from managing S2P activities in Africa. TenderSure™has an impressive client portfolio boasting companies from diverse industries including Banks, NGOs, and large corporates in both public and private sectors. TenderSure™ has been commended by the EU as “a highly traceable and auditable system, which helps to combat corruption. It is only possible for authorized parties to see bids.” Additionally, TenderSure™ has received many awards and commendations including the prestigious Digital Excellence award for the best eProcurement solutions provider in Kenya since 2019 to date.</p>
                <br />
                <p className="text-gray-500">Due to automation, TenderSure™ provides advantages and benefits that include efficiency, transparency and integrity in the entire source to pay process. TenderSure™ now automates the entire procurement value chain processes from sourcing to payment of suppliers seamlessly.</p>
            </div>
            <div className="contact-us-bg !h-[40vh]">
                <div className="contact-us-overlay !opacity-[0.8] flex items-center text-center justify-center flex-col gap-5">
                    <h2 className="text-4xl font-bold text-white">A Cloud Based <span className="text-customGreen">Source to Pay</span> Solution</h2>
                    <span className="text-white text-lg">Promoting good governance, transparency and integrity in the procurement process.</span>
                    <button className="border-2 border-white text-white px-5 py-2">Contact Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Background