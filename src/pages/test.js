import { Link } from "react-router-dom"
import testImgOne from "../img/testimg1.png"
import { useEffect, useState } from "react"

const TestOne = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const countNum = setInterval(() => {
      console.log(count)
      if (count < 20) setCount(prev => prev + 1)
    }, 500)

    // return clearInterval(countNum)
  }, [])

  return (
    <>
      <img src={testImgOne} key={count} />
      <Link to="/test-two">Test two {count}</Link>
    </>
  )
}

export default TestOne