import { Link } from "react-router-dom"
import testImgTwo from "../img/workday-img.png"

const TestTwo = () => {
  return (
    <>
      <img src={testImgTwo} />
      <Link to="/test">Test One</Link>
    </>
  )
}

export default TestTwo