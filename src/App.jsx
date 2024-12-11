import UserProfile from './components/UserProfile';
import MoviesList from './components/MoviesList';

function App() {

  return (
    <>
      <div className="container">
        <UserProfile/>
      </div>
      <div className="container">
        <MoviesList/>
      </div>
    </>
  )
}

export default App
