import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h1>Welcome to TEST!</h1>

      <Link to="/test">Test One</Link>
      <Link to="/test-two">Test Two</Link>
    </>
  )
}

export default Home