import { useState } from "react";
import NavBanner from "../components/NavBanner"
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

function FAQs() {

    const [open, setOpen]= useState(true);
    const [id, setId]= useState('1');
    const handleClick = (e,num) => {
        e.preventDefault();
        if(num !== id ){
            setOpen(false)
        }
       setOpen(prev=>!prev)
       setId(num)
    }

  return (
    <div>
        <NavBanner title="FAQs" />
        <div className="px-4 lg:px-20 py-20">
            <div>
            <div className="text-center">
                <h2 className="text-4xl font-bold text-customBlue pb-5">General Questions</h2>
                <span className="faq-text-underline text-gray-500 font-semibold pb-7">New around here ? Start With the Basics</span>
            </div>
            <section className="mt-10 flex justify-self-center flex-col gap-2">
            <div>
                <button onClick={(e)=>handleClick(e,1)} className={` ${open && id==1 ? 'bg-customGreen text-white' :'text-customBlue border-2 border-gray-100'} flex justify-between items-center w-full py-3 px-3 mb-4 font-semibold text-lg`}>
                    What is TenderSure™?{open && id==1 ? <span><IoChevronUpOutline /></span> : <span><IoChevronDownOutline /></span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${open && id==1 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden">Tendersure™ is an e sourcing solution whereby we source for suppliers for our various clients through, prequalification&apos;s, tenders, RFQs, RFPs or RFIs.</p>
                </div>
            </div>
            <div>
                <button onClick={(e)=>handleClick(e,2)} className={` ${open && id==2 ? 'bg-customGreen text-white' :'text-customBlue border-2 border-gray-100'} flex justify-between items-center w-full py-3 px-3 mb-4 font-semibold text-lg`}>
                    How do I view the available jobs?{open && id==2 ? <span><IoChevronUpOutline /></span> : <span><IoChevronDownOutline /></span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${open && id==2 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden">Visit our website: www.tendersure.africa, click on the tab Available Jobs to be able to see all the jobs that are currently ongoing.</p>
                </div>
            </div>
            <div>
                <button onClick={(e)=>handleClick(e,3)} className={` ${open && id==3 ? 'bg-customGreen text-white' :'text-customBlue border-2 border-gray-100'} flex justify-between items-center w-full py-3 px-3 mb-4 font-semibold text-lg`}>
                    Is there a charge on TenderSure™?{open && id==3 ? <span><IoChevronUpOutline /></span> : <span><IoChevronDownOutline /></span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${open && id==3 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden">The only charge applicable on the Tendersure™ system is the respective bidder fee.</p>
                </div>
            </div>
            </section>
            </div>
            <div className="mt-20">
            <div className="text-center">
                <h2 className="text-4xl faq-text-underline font-bold text-customBlue pb-5">Registration And Login</h2>
            </div>
            <section className="mt-10 flex justify-self-center flex-col gap-2">
            <div>
                <button onClick={(e)=>handleClick(e,4)} className={` ${open && id==4 ? 'bg-customGreen text-white' :'text-customBlue border-2 border-gray-100'} flex justify-between items-center w-full py-3 px-3 mb-4 font-semibold text-lg`}>
                    How do I register on the TenderSure™ Platform?{open && id==4 ? <span><IoChevronUpOutline /></span> : <span><IoChevronDownOutline /></span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${open && id==4 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden">Visit our website: www.tendersure.africa, hover your cursor on the Supplier World tab located on the main menu and proceed to click on Supplier Registration. You will find the Supplier Registration section, proceed to click on the Register Now button to register accordingly. Once you have registered you will receive your activation link, your login credentials, that is; your username and password, to the email you will have used to register your account with.</p>
                </div>
            </div>
            <div>
                <button onClick={(e)=>handleClick(e,5)} className={` ${open && id==5 ? 'bg-customGreen text-white' :'text-customBlue border-2 border-gray-100'} flex justify-between items-center w-full py-3 px-3 mb-4 font-semibold text-lg`}>
                    What do I do when I get the error &apos;Please match the requested format&apos; after registering?{open && id==5 ? <span><IoChevronUpOutline /></span> : <span><IoChevronDownOutline /></span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${open && id==5 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden">This error occurs when you have wrongly keyed in your phone number. Ensure to begin the phone number with your respective country code without the plus sign (+) e.g., 254712345678 and NOT +254712345678</p>
                </div>
            </div>
            <div>
                <button onClick={(e)=>handleClick(e,6)} className={` ${open && id==6 ? 'bg-customGreen text-white' :'text-customBlue border-2 border-gray-100'} flex justify-between items-center w-full py-3 px-3 mb-4 font-semibold text-lg`}>
                    How do I reset my password?{open && id==6 ? <span><IoChevronUpOutline /></span> : <span><IoChevronDownOutline /></span>}
                </button>
                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 text-sm ${open && id==6 ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden">Key in your username, leave the password section empty and then proceed to click on Forgot Password. You will be directed to another page with a text box requesting you to key in the same username, which is the email address you registered with, click on proceed to receive a reset link to your email.</p>
                </div>
            </div>
            </section>
            </div>
        </div>
    </div>
  )
}

export default FAQs