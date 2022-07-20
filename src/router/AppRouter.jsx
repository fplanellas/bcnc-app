import {Route, Routes} from 'react-router-dom'

import { Home } from "../players/pages/Home"
import { Navbar } from '../ui'


export const AppRouter = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

