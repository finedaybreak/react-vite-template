import {Route, Routes} from "react-router-dom";
import {Suspense, lazy} from 'react'

const About = lazy(() => import("@/pages/About"))
const Home = lazy(() => import("@/pages/Home"))


export default function AppRouter() {
    return (
        <Routes>
            <Route path="about" element={
                <Suspense fallback={<Loading/>}>
                    <About/>
                </Suspense>
            }/>
            <Route path="/" element={
                <Suspense fallback={<Loading/>}>
                    <Home/>
                </Suspense>
            }/>
        </Routes>
    )
}

function Loading() {
    return <div>loading...</div>
}