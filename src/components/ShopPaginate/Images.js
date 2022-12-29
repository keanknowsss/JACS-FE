import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import stylescss from "./style.module.scss"

export default function Images(props) {
    const {data} = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

    useEffect(()=> {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
  };

    return (
        <>
        <div className={stylescss.images}>
            {currentItems.map(image => {
                return(
                    <div className={stylescss.image}>
                        <img src={image.url} alt={image.title}/>
                    </div>
                )
            })}

        </div>
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next >>"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="<< Previous"
            renderOnZeroPageCount={null}
            containerClassName={stylescss.pagination}
            pageLinkClassName={stylescss.pageNum}
            previousLinkClassName={stylescss.pageNum}
            nextLinkClassName={stylescss.pageNum}
            activeLinkClassName={stylescss.active}
        />
        </>
  );
}