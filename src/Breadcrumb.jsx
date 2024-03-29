import RightArrowImg from "./assets/right-icon.png";

export default function Breadcrumb({ sizeFilter, colorFilter }) {
  return (
    <div className="mb-4 bg-gray-200 rounded-md ">
      <ul className="   flex items-center  text-xl text-[#2E4053] text-left">
        <li className={`cursor-pointer p-4 rounded-md `}>All</li>

        {sizeFilter && (
          <>
            <img src={RightArrowImg} className="w-5 h-5 " alt="" />
            <li className={`cursor-pointer p-4 rounded-md capitalize`}>
              {sizeFilter}
            </li>
          </>
        )}
        {colorFilter && (
          <>
            <img src={RightArrowImg} className="w-5 h-5 " alt="" />
            <li className={`cursor-pointer p-4 rounded-md capitalize`}>
              {colorFilter}
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
