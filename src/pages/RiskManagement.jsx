import NavBanner from "../components/NavBanner"

function RiskManagement() {
  return (
    <div>
        <NavBanner title="Risk Management"/>
        <div className="bg-[#f5f5f5] px-4 lg:px-20 pt-10 lg:pt-16 pb-10">
            <h2 className="text-3xl lg:text-4xl text-customBlue font-bold mb-4">
                PROACTIVE RISK MANAGEMENT FOR SUPPLY CHAIN STABILITY
            </h2>
            <div className="space-y-1">
            <p className="text-gray-500">TenderSure™ goes beyond traditional procurement solutions by offering a robust risk management module. This feature empowers organizations to proactively identify, assess, and mitigate the potential risks associated with their supply chain, ensuring greater resilience and stability.</p>
            <p className="text-gray-500">
            TenderSure™ provides a structured framework for identifying risks within the supply chain. From geopolitical uncertainties to supplier financial instability, the platform guides users through a comprehensive risk identification process, leaving no potential disruption unaddressed. Once identified, TenderSure™ facilitates a detailed risk assessment, allowing users to quantify the impact and likelihood of each potential risk. By assigning values to these factors, organizations gain a clearer understanding of the overall risk profile associated with a particular supplier or procurement activity.
            </p>
            <p className="text-gray-500">
            TenderSure™ seamlessly integrates risk due diligence into the procurement process. By making risk assessment a natural part of the procurement workflow, organizations are equipped to make smarter decisions, considering both the cost-effectiveness of suppliers and the potential risks associated with them.
            </p>
            <p className="text-gray-500">
            In summary, TenderSure™&apos;s risk management module elevates the procurement process by integrating proactive risk identification, assessment, and mitigation strategies. This comprehensive approach empowers organizations to make informed decisions, enhance supply chain resilience, and navigate the complexities of procurement with confidence.
            </p>
            </div>
        </div>
    </div>
  )
}

export default RiskManagement