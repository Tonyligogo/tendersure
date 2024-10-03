import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

function StickyNavbar() {
  return (
    <div className="hidden sticky top-0 z-50 lg:flex justify-between items-center bg-customBlue text-white pl-20">
      <ul className="flex gap-7">
        <li className=" hover:text-customGreen transition-colors cursor-pointer nav-link nav-item">About
        <div className="popup">
                    <ul>
                        <li>
                          <Link to='/background'>Background</Link>
                        </li>
                        <li><Link to='/awards'>Awards</Link></li>
                    </ul>
        </div>
        </li>
        <li className=" hover:text-customGreen transition-colors cursor-pointer nav-link nav-item">Modules
        <div className="popup">
                    <ul>
                        <li>
                          <Link to='/procure-to-pay'>Procure 2 Pay</Link>
                        </li>
                        <li><Link to='/risk-management'>Risk Management</Link></li>
                    </ul>
        </div>
        </li>
        <li className=" hover:text-customGreen transition-colors cursor-pointer nav-link"> <Link to='/available-jobs'>Available Jobs</Link> </li>
        <li className=" hover:text-customGreen transition-colors cursor-pointer nav-link nav-item">Supplier World
        <div className="popup">
                    <ul>
                        <li>
                          <Link to='/login'>Supplier Registration</Link>
                        </li>
                    </ul>
        </div>
        </li>
        <li className=" hover:text-customGreen transition-colors cursor-pointer nav-link nav-item">Buyer World
        <div className="popup">
                    <ul>
                        <li>
                          <Link to='/login'>Buyer Login</Link>
                        </li>
                    </ul>
        </div>
        </li>
        <li className=" hover:text-customGreen transition-colors cursor-pointer nav-link">
          <Link to='/clients'>Clients</Link>
        </li>
        <li className=" hover:text-customGreen transition-colors cursor-pointer nav-link"> 
          <Link to='/contact-us'>Contact Us</Link>
        </li>
        <li className=" hover:text-customGreen transition-colors cursor-pointer nav-link">
          <Link to='/faqs'>FAQs</Link>
        </li>
      </ul>
      <div className="bg-customGreen py-6 w-[10%]">
        <IoSearch className="ml-4 text-lg" />
      </div>
    </div>
  );
}

export default StickyNavbar;
