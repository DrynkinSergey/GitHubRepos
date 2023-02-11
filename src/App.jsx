import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from './components/Pagination'
import Repositories from './components/Repositories'
import { SearchInput } from './components/SearchInput'
import useDebounce from './hooks/useDebounce'
import { fetchRepositories } from './redux/slices/reposSlice'
import './scss/_glogal.scss'
function App() {


  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(3);
  const { repos, query, status } = useSelector(state => state.repos);
  const dispatch = useDispatch();
  //add debounce for our search request 
  const debouncedValue = useDebounce(query, 500)

  // Get 20 repos at default name with 'React'
  React.useEffect(() => {
    dispatch(fetchRepositories(query))
    //update store when debounce change
  }, [debouncedValue])


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = repos.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="app">
      <div className='container'>
        <SearchInput />
        <Repositories
          repos={currentPosts}
          status={status} />

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={repos.length}
          paginate={paginate}
          currentPage={currentPage} />
      </div>
    </div>
  )
}

export default App
