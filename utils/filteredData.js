export function filteredData(destinations, locationType, locationName) {
    return destinations.filter((destination)=> {return(
        destination[locationType].toLowerCase() === locationName.toLowerCase()
    )})
}