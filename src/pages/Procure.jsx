import NavBanner from "../components/NavBanner"

function Procure() {
  return (
    <div>
        <NavBanner title="Procure 2 Pay"/>
        <div className="bg-[#f5f5f5] pt-10 lg:pt-16 pb-10 px-4 lg:px-20">
            <div>
            <h2 className="text-customBlue text-4xl font-bold mb-4">Procure 2 Pay</h2>
            <p className="text-gray-500">TenderSure™ Procure 2 Pay (P2P) solution centralizes all the critical procurement functionality on a single platform to streamline and automate the end-to-end procurement process.</p>
            <p className="text-gray-500">The P2P solution automates and simplifies the full purchasing cycle, enforces procurement policy compliance and drives process efficiency. For most companies, the P2P process is manual where requisitions are raised and approved manually. This makes it difficult to manage and control spend. In order to improve efficiency and transparency in the P2P process, Tendersure P2P solution automates the requisition to payment processes.</p>
            <p className="text-gray-500">
            The P2P solution also has an approval workflow that is designed to match the organizations&apos; approved procurement policy and procedures. The TenderSure™ P2P solution also has the added capability of comparing requisitions to available budgets before they are approved.
            </p>
            </div>
        <div className="border-2 border-r-0 border-l-0 border-b-customGreen border-t-customGreen mt-16 mb-12 pb-10">
            <h2 className="text-center text-customBlue text-3xl font-bold my-8">Dashboard</h2>
            <div>
            <img src="https://www.tendersure.africa/wp-content/uploads/2023/12/Untitled-design-2.png" alt="" className="lg:w-[842px] lg:h-[424px] mx-auto border"/>
            </div>
        </div>
        <div>
        <h2 className="text-center text-customBlue text-3xl font-bold mb-12">Functions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
            <h2 className="text-customBlue text-2xl font-semibold mb-4">Requisition</h2>
            <p className="text-gray-500">TenderSure™ P2P Requisition module electronically manages request creation, catalogue management and approval workflows. Users can select catalogue items with preapproved suppliers at preapproved prices. The control framework is configured as per the bespoke procurement policy.</p>
            </div>
            <div>
            <h2 className="text-customBlue text-2xl font-semibold mb-4">Purchase Order</h2>
            <p className="text-gray-500">TenderSure™ P2P Purchase Order (PO) module ensures that PO&apos;s are approved as per the companies procurement policy and procedures. After approval, the PO is automatically sent to the supplier. The supplier can access the PO through their own dedicated supplier portal. They can also electronically acknowledge receipt of the PO.</p>
            </div>
            <div>
            <h2 className="text-customBlue text-2xl font-semibold mb-4">Goods Receipt</h2>
            <p className="text-gray-500">TenderSure™ Invoice  P2P automates the goods receipt process and enables three(3) way matching between the Requisition, Purchase Order and Goods Receipt Note. The control framework is configured according to the procurement policy of the organization regarding, rejected deliveries, quantity received etc. among others.</p>
            </div>
            <div>
            <h2 className="text-customBlue text-2xl font-semibold mb-4">Invoice</h2>
            <p className="text-gray-500">TenderSure™ P2P has a supplier portal that enables them to transmit the invoice to the buying entity. The P2P solution automates the supplier invoice approval process to ensure four(4) way matching between the Requisition, PO, GRN and Supplier Invoice. Once The invoice is received, the Tendersure P2P solution has a customizable workflow for approval of the invoice before payment.</p>
            </div>
            <div>
            <h2 className="text-customBlue text-2xl font-semibold mb-4">Budget</h2>
            <p className="text-gray-500">TenderSure™ P2P Budget module automatically matches proposed spend to available budgets during all the steps of purchasing namely; Requisition, PO and Invoice approval. This allows each budget owner /manager to see their proposed spend against their budget in real time thereby providing additional accountability, control and reporting. The control of the expenses through the budget enhances procurement spend management thereby reducing costs and wastage.</p>
            </div>
            <div>
            <h2 className="text-customBlue text-2xl font-semibold mb-4">Reporting</h2>
            <p className="text-gray-500">TenderSure™ P2P comes with many inbuilt procurement spend reports. These include reports on purchase requisitions, open POs, partially received goods and outstanding invoices. The users also have the ability to generate additional customizable reports and procurement spend analytics on spend based on different parameters</p>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Procure