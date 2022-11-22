

const Filter = ({handleFilterChange}) => {

    return(
       
        <form>
            <select id="dropdown" onChange={handleFilterChange}>
                <option value="">Show All Regions</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="antarctic">Antarctic</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
            <input id="searchfield" placeholder="Search by name.." onChange={handleFilterChange}></input>
        </form>
    )
}

export default Filter