import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn  } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationOutline, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const links=[
  {name:'Background', href:'/background'},
  {name:'Awards', href:'/awards'},
  {name:'Procure 2 Pay', href:'/procure-to-pay'},
  {name:'Risk Management', href:'/risk-management'},
  {name:'Available Jobs', href:'/available-jobs'},
  {name:'Supplier Registration', href:'/login'},
  {name:'Buyer Login', href:'/login'},
  {name:'Clients', href:'/clients'},
  {name:'Contact Us', href:'/contact-us'},
  {name:'FAQs', href:'/faqs'},
]

function Navbar() {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div>
      <div className="hidden bg-customGreen px-20 py-2 lg:flex justify-between items-center text-white">
        <ul className="flex gap-4">
          <li className="flex gap-1 items-center"> <img src="https://www.tendersure.africa/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png" alt="" /> English</li>
          <li className="flex gap-1 items-center"> <img src="https://www.tendersure.africa/wp-content/uploads/flags/KE.jpg" alt="" /> Swahili</li>
          <li className="flex gap-1 items-center"> <img src="https://www.tendersure.africa/wp-content/plugins/sitepress-multilingual-cms/res/flags/fr.png" alt="" /> Francais</li>
          <li className="flex gap-1 items-center"> <img src="https://www.tendersure.africa/wp-content/plugins/sitepress-multilingual-cms/res/flags/pt-pt.png" alt="" /> Portugues</li>
          <li className="flex gap-1 items-center"> <img src="https://www.tendersure.africa/wp-content/uploads/flags/am.png" alt="" /> Amharic</li>
        </ul>
        <ul className="flex">
          <li className="border-r-[1px] border-gray-400 p-3 py-4"> <FaFacebookF/> </li>
          <li className="border-r-[1px] border-gray-400 p-3 py-4"> <FaTwitter/> </li>
          <li className="border-r-[1px] border-gray-400 p-3 py-4"><FaInstagram/> </li>
          <li className="border-r-[1px] p-3 py-4"><FaLinkedinIn/> </li>
        </ul>
      </div>
      <div className="px-4 lg:px-20 py-5 flex relative justify-between lg:border">
        <div className="flex items-center w-full lg:w-fit">
        <span  onClick={()=>setOpenMenu(prev=>!prev)}>
            {openMenu ? 
            <IoMenu className="block cursor-pointer lg:hidden h-10 w-10"/> 
            : 
            <IoMdClose className="block cursor-pointer lg:hidden h-10 w-10"/>
            }
        </span>
        <Link to='/' className="mx-auto lg:mx-0">
        <img src="https://www.tendersure.africa/wp-content/uploads/2024/05/Untitled_design-removebg.png" alt="logo" className="max-h-[70px]"/>
        </Link>
        </div>
        <ul className={`${!openMenu ? 'top-[110px] opacity-100' :'top-[-600px]'} z-[100] absolute bg-white border-t-2 border-t-customGreen w-[90%] md:w-[96%]
      md:opacity-100 opacity-0 transition-all ease-in duration-500`}>
        {links.map((link)=>(
            <li key={link.name} onClick={()=>setOpenMenu(true)} className="my-3 pb-3 border-b mx-6">
              <Link to={link.href}>{link.name}</Link>
            </li>
        ))}
      </ul>
        <span className="hidden lg:flex items-center gap-2"><FiPhoneCall  className="text-customGreen text-3xl"/> +254 709 557 000</span>
        <span className="hidden lg:flex items-center gap-2"><MdOutlineAttachEmail  className="text-customGreen text-3xl"/> info@tendersure.africa</span>
        <span className="hidden lg:flex items-center gap-2"><IoLocationOutline  className="text-customGreen text-3xl"/> Two Rivers, North Tower, 2<sup>nd</sup> Floor</span>
      </div>
    </div>
  )
}

export default Navbar