
import { Icon } from "@iconify/react";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SETPAGE } from "../state/reducers";
import { getVisiblePageNumbers } from "../service/paginate";




const Pagination = () => {
    const { pageNumber } = useSelector((state) => state.carReducer);
    const [currentPage, setCurrentPage] = useState(pageNumber);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pageParam } = useParams();
    const pages = 10;


    const visiblePageNumbers = useMemo(() => {
        return getVisiblePageNumbers(currentPage, pages);
    }, [currentPage, pages]);


    useEffect(() => {
        if (pageParam) {
            window.scrollTo(0, 0);
            setCurrentPage(parseInt(pageParam, 10));
            dispatch(SETPAGE(parseInt(pageParam, 10)));
        }

    }, [pageParam]);

    const handlePage = (e) => {
        const { id } = e.target.parentElement;
        if (id === 'prev' && currentPage > 1) {
            navigate(`/page/${currentPage - 1}`)
        }
        if (id === 'next' && currentPage < pages) {
            navigate(`/page/${currentPage + 1}`)
        }

    }

    return (
        <div className="mt-auto">
            <div className="flex gap-4 justify-center text-gray-900">
                <button className="bg-white shadow-lg px-3 py-2 rounded-lg" id="prev" ><Icon icon="ooui:previous-ltr" onClick={handlePage} /></button>
                {visiblePageNumbers.map((page, index) => (
                    (page != "...") ? <button key={index} className="bg-white shadow-lg px-3 py-2 rounded-lg"
                        onClick={() => navigate(`/page/${page}`)}>
                        {page}
                    </button> : <div className="bg-white shadow-lg px-3 py-2 rounded-lg" key={index}>...</div>
                ))}
                <button className="bg-white shadow-lg px-3 py-2 rounded-lg" id="next"><Icon icon="ooui:previous-rtl" onClick={handlePage} /></button>

            </div>
        </div>
    )
}

export default Pagination