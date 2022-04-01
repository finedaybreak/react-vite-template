import './index.scss'
import {useEffect, useState} from "react";

function GlobalLoading() {
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        setOpacity(1)
        return () => {
            setOpacity(0)
        }
    })
    return (
        <div style={{opacity: opacity}} data-component="global-loading"
             className='loading w-screen h-screen flex items-center justify-center'>
           <span className="text-gray-100 text-24px">
                loading...
           </span>
        </div>
    )
}

export default GlobalLoading

