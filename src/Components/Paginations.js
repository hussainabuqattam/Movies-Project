import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../Redux/Action/MoviesAction';
import { page_type } from '../Redux/Type/type';


export const Paginations = () => {
  // the number of page using all movies api url
  const page_all_movies = useSelector(state => state.pages)
  const dispatch = useDispatch()
  const handlePageClick = (data)=>{
      // send number page to url api using dispatch 
      dispatch(getMovies(page_type, '', data.selected + 1))
  }
  const pageCount = page_all_movies;
  return (
    <div className='Paginations_cover'>
         <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="Previous"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
      </div>
  )
}
