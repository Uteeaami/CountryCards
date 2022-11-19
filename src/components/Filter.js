

const Filter = ({handleFilterChange}) => {

    return(
       
        <form>
            <select className="dropdown" onChange={handleFilterChange}>
                <option value="">Show All Regions</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="antarctic">Antarctic</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </form>
    )
}

export default Filter