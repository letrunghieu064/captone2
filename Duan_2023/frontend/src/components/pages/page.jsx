import { Fragment, useState } from "react";
import Imglogo from "../../img/dautubatdongsanx.png";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <a href="/" className="w-28 inline-block hover:opacity-50 float-left ">
        <img src={Imglogo} alt={Imglogo}></img>
        <h2 className="text-xl font-bold text-center"> bất động sản </h2>
      </a>
      <ul className="flex space-x-3 content-center ">
        <li>
          {" "}
          <a href="/" className="hover:text-blue-300">
            {" "}
            Trang Chủ
          </a>
        </li>
        <li>
          {" "}
          <a href="/" className="hover:text-blue-300">
            {" "}
            Sản Phẩm{" "}
          </a>
        </li>
        <li>
          {" "}
          <a href="/" className="hover:text-blue-300">
            {" "}
            Tin Tức{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}
