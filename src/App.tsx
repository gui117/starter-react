import type { FC } from 'react'
import logo from '~/assets/logo.svg'

const App: FC = () => {
  return (
    <div w-screen h-screen flex flex-col justify-center items-center>
      <img w-24 h-24 mb-8 src={logo} alt="react" />
      <h1 font-italic text-gray text-4xl> Hello World! </h1>
    </div>
  )
}

export default App
