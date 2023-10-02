

const Pagination = () => {
    
    const handlePage = (e) => {
        if (page === 0) {
            if (e.target.id === 'prev') {
                alert('no Prev page')
            } else {
                setPage(page + 1);
            }

        } else if (page === 4) {
            if (e.target.id === 'next') {
                alert('no Next page')
            } else {
                setPage(page - 1);
            }
        } else {
            switch (e.target.id) {
                case 'prev':
                    setPage(page - 1);
                    break;
                case 'next':
                    setPage(page + 1);
                    break;
                default:
                    setPage(page);
            }
        }
    }

    return (
        <div className="mt-8">
            <div className="flex gap-4 justify-center">
                <button className="bg-gray-400 px-2 py-1" id="prev" onClick={handlePage}>Prev</button>
                <button className="bg-gray-400 px-2 py-1" id="next" onClick={handlePage}>Next</button>
            </div>
        </div>
    )
}

export default Pagination