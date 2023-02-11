import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from './components/Pagination'
import Repositories from './components/Repositories'
import { SearchInput } from './components/SearchInput'
import { SingleItem } from './components/SingleItem'
import { fetchRepositories, setQuery } from './redux/slices/reposSlice'
import './scss/_glogal.scss'
function App() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(3);
  const { repos, query, status } = useSelector(state => state.repos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchRepositories(query))
  }, [query])



  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = repos.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const view = () => {

    const content = repos.map(repo => <SingleItem
      key={repo.id}
      url={repo.owner.avatar_url}
      author={repo.owner.login}
      language={repo.language}
      name={repo.name}
      desc={repo.description}
      stars={repo.stargazers_count}
      watchers={repo.watchers} />);
    const loading = status === 'Loading' ? <h1>Йде загрузка даних, почекайте...</h1> : null;
    const noData = status === 'Resolved' ? <h1>Немає даних за вашим запитом</h1> : null;
    const viewData = status !== 'Loading' && repos.length > 0 ?
      content :
      noData
    return loading || viewData

  }
  return (
    <div className="app">
      <div className='container'>
        <SearchInput />
        <Repositories repos={currentPosts} />
        <Pagination postsPerPage={postsPerPage}
          totalPosts={repos.length}
          paginate={paginate} />
      </div>

    </div>
  )
}

export default App
