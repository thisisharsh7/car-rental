import { Icon } from "@iconify/react"


const SearchBar = () => {
    return (
        <div className="shadow-lg bg-blue-50 border-[1px]  border-white rounded-2xl px-5 py-3">
            <div className="flex gap-6 items-center flex-wrap">
                <div className="bg-white px-5 py-1.5 justify-between rounded-full items-center gap-4 sm:w-96 w-full flex    ">
                    <input type="text" className="w-full outline-none" placeholder="Search..." />
                    <button><Icon icon="heroicons:magnifying-glass-20-solid" /></button>
                </div>
                <div>
                    <select id="relevance" className="text-sm outline-none border-gray-300 focus:outline-none rounded-lg bg-transparent  ">
                        <option selected>Relevance</option>
                        <option value="seats">Seats</option>
                        <option value="type">Type</option>
                        <option value="automatic">Automatic</option>
                        <option value="launch">Launch</option>
                    </select>
                </div>
                <div>
                    <select id="brands" className=" text-sm outline-none   border-gray-300 focus:bg-transparent focus:outline-none rounded-lg bg-transparent ">
                        <option selected>All brands</option>
                        <option value="bmw">BMW</option>
                        <option value="porsche">Porsche</option>
                        <option value="lexus">Lexus</option>
                        <option value="tesla">Tesla</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default SearchBar