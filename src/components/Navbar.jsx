import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="container items-center py-4 flex justify-between">
        <a href="#">
          <img
            width={158}
            src="https://websitedemos.net/fashion-lifestyle-02/wp-content/uploads/sites/427/2019/03/kara-logo-free.svg"
            alt="logo"
          />
        </a>
        <div className="flex gap-10">
          <ul className="flex gap-6">
            <li>
              <Link to={'/'} className="transition hover:text-primary-500">Home</Link>
            </li>
            <li>
              <Link to={'/about'} className="transition hover:text-primary-500">About</Link>
            </li>
            <li>
              <Link to={'/blog'} className="transition hover:text-primary-500">Blog</Link>
            </li>
          </ul>
          <ul className="flex gap-5 items-center text-lg text-[#333]">
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
