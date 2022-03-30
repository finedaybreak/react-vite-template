import { useState } from "react";
import logo from "@/assets/logo.svg";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '@/hooks'
import { addAge, addAgeAsync, minAge, rename, renameAsync } from "@/store/slices/user";

function Home() {
    const name = useAppSelector((state) => state.user.name)
    const age = useAppSelector((state) => state.user.age)
    const dispatch = useAppDispatch()

    let navigate = useNavigate();
    const [count, setCount] = useState(0);
    return (
        <div className="Home" data-component='home'>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p >Hello Vite + React!</p>
                <p>
                    <button
                        type="button"
                        className="bg-blue-700 px-10px py-6px rounded shadow-xl text-16px"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        count is: {count}
                    </button>
                    <button className="ml-10px bg-pink-700 px-10px py-6px rounded shadow-xl text-16px" onClick={() => navigate('/about')}>
                        Go to About Page
                    </button>
                </p>
                <p>
                    Edit <code>Home.tsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {" | "}
                    <a
                        className="App-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite Docs
                    </a>
                </p>
                <div className="store-example">
                    <div className="text-center">name: {name} age: {age}</div>
                    <div className="flex justify-center">
                        <button className="bg-yellow-400 active:bg-yellow-600 px-20px py-6px rounded shadow-xl text-16px" onClick={() => {
                            dispatch(addAge())
                        }}>add
                        </button>
                        <button className="bg-green-500 active:bg-green-700 px-20px ml-10px py-6px rounded shadow-xl text-16px"
                            onClick={() => {
                                dispatch(minAge())
                            }}>min
                        </button>
                        <button className="bg-orange-400 active:bg-orange-700 px-20px ml-10px py-6px rounded shadow-xl text-16px"
                            onClick={() => {
                                dispatch(addAgeAsync())
                            }}>add async
                        </button>
                    </div>
                    <div className="mt-15px flex justify-center" >
                        <input className="w-30vw h-5vh text-gray-100  bg-gray-900 ml-10px text-16px py-4px px-10px" placeholder="new name" onChange={(e) => {
                            dispatch(renameAsync(e.target.value))
                        }} />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;