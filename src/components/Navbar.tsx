import { Link } from "react-router-dom";
import { BsCart4 } from 'react-icons/bs';

export function Navbar() {
  return (
    <>
      <div>
        <div className="flex bg-slate-200 shadow-xl mb-2 color text-yellow-600 p-3 justify-between">
          <div className="flex">
            <Link to="/" className="no-underline m-1">
              Home{" "}
            </Link>
            <Link to="/store" className="no-underline m-1">
              Store{" "}
            </Link>
            <Link to="/about" className="no-underline m-1 grow h-4">
              About{" "}
            </Link>
          </div>
          <button className="rounded-full bg-green-300 justify-center items-center "><BsCart4 />        
          <div className="rounded-full bg-red-700 flex justify-center align-center bottom-0 right-0 text-white absolute translate-y-6">3

</div>
  
          </button>
        </div>
      </div>
    </>
  );
}
