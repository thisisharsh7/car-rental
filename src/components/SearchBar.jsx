import { Icon } from "@iconify/react";
import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


const SearchBar = () => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const inputRef = useRef();


    const handleClick = () => {
        const input = inputRef.current.value;
        if (input != "") {
            searchParams.set('s', input);
            navigate({ search: `?${searchParams.toString()}` });

            inputRef.current.value = "";
        } else {
            alert('Input Cannot be blank!')
        }
        console.log(searchParams);

    }
    return (
        <div className="shadow-lg bg-blue-50 border-[1px]  border-white rounded-2xl px-5 py-3">
            <div className="flex gap-6 items-center flex-wrap">
                <div className="bg-white px-5 py-1.5 justify-between rounded-full items-center gap-4 sm:w-96 w-full flex    ">
                    <input type="text" className="w-full outline-none" placeholder="Search..." ref={inputRef} />
                    <button onClick={handleClick}><Icon icon="heroicons:magnifying-glass-20-solid" /></button>
                </div>
                <div>
                    <select
                        name="relevance"
                        id="brands" className="text-sm outline-none border-gray-300 focus:bg-transparent focus:outline-none rounded-lg bg-transparent "
                    >
                        <option value="">Relevance</option>
                        <option value="5 people">5 people</option>
                        <option value="Automatic">Automatic</option>
                        <option value="Gasoline">Gasoline</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>
                <div>
                    <select
                        name="brand"
                        id="brands" className="text-sm outline-none border-gray-300 focus:bg-transparent focus:outline-none rounded-lg bg-transparent "
                    >
                        <option value="">All brands</option>
                        <option value="Ford">Ford</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Tesla">Tesla</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default SearchBar