import {useState} from "react";
import logo from "@/assets/logo.svg";
import "./index.scss";
import {useNavigate} from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    const [count, setCount] = useState(0);
    return (
        <div className="Home" data-component='home'>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Hello Vite + React!</p>
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
            </header>
        </div>
    );
}

export default Home;