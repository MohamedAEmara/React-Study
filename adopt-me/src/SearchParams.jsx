import { useState } from "react";
let cnt = 0;
const SearchParams = () => {
    cnt ++;
    const [location, setLocation] = useState('')
    return (    // We use parentheses to tell JS that we will return in the next line. 
        // NOTE: "class" is a reserverd keyword for JS so we used (className) instead.
        
        <div className="search-params">
            <h1> { cnt } </h1>
            <form action="">
                <label htmlFor="">
                    Location:
                    <input onChange={e => setLocation(e.target.value)} type="text" id="location" value={location} placeholder="Location"/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}


export default SearchParams;