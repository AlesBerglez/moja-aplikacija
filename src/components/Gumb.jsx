import "./Gumb.css";
import { useState } from 'react';

function MojGumb() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className="Gumb-stil">
            <button onClick={handleClick} >
                Kliknili ste {count} krat
            </button>
        </div>
    );
}

export default MojGumb;

