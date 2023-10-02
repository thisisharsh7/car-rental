import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { Link  } from "react-router-dom";


const Pagination = () => {
    const { pageNumber: page } = useSelector((state) => state.carReducer);

    return (
        <div className="">
            <div className="flex gap-4 justify-center text-gray-900">
                <Link to={`/page/${page - 1}`}>
                    <button className="bg-white shadow-lg px-3 py-2 rounded-lg" id="prev" ><Icon icon="ooui:previous-ltr" /></button>
                </Link>
                <Link to={`/page/${page + 1}`}>
                    <button className="bg-white shadow-lg px-3 py-2 rounded-lg" id="next"><Icon icon="ooui:previous-rtl" /></button>
                </Link>
            </div>
        </div>
    )
}

export default Pagination