import { Icon } from "@iconify/react"


const CarCard = ({ name, imgSrc, id, year, seated, speed_consumption, model, engine, rent }) => {
    return (
        <div className=" rounded-xl overflow-hidden shadow-lg bg-blue-50 border-[1px]  border-white" key={id}>
            <div className="px-3 py-3.5 flex flex-col">
                <img src={imgSrc} className="w-full h-52 object-cover rounded-xl" />
                <div className="flex flex-col px-3  pt-4">
                    <div className="flex justify-between gap-4 mb-4 items-start">
                        <h1 className="sm:text-2xl text-xl font-medium line-clamp-1">{name}</h1>
                        <div className="border-dotted border-2 sm:text-lg text-base rounded-xl px-3 border-sky-200 font-medium">{year}</div>
                    </div>
                    <div className="grid grid-cols-2 sm:text-base text-sm  justify-between gap-3  w-full mb-4 ">
                        <div className="flex items-center gap-2">
                            <Icon icon="ph:users" />
                            <p>{seated} People</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon icon="mdi:petrol-pump-outline" />
                            <p>{engine}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon icon="mdi:car-speed-limiter" />
                            <p>{speed_consumption}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon icon="ph:steering-wheel-fill" />
                            <p>{model}</p>
                        </div>
                    </div>
                    <div className="pt-4 mb-3 border-t-[2px] flex justify-between">
                        <div>
                            <p><span className="sm:text-2xl text-xl font-medium">${rent}</span><span> /month</span> </p>
                        </div>
                        <div className="flex gap-3.5 items-center sm:text-base text-sm">
                            <button className="text-sky-500 sm:text-2xl text-xl hover:bg-blue-200 bg-blue-100 px-2 h-full rounded-xl"><Icon icon="mdi:favourite-border" /></button>
                            <button className="bg-blue-500 text-white px-3 py-1.5 rounded-xl hover:bg-blue-600">Rent now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCard