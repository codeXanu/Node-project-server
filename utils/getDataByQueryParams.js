export function getDataByQueryParams(destinations, queryObj) {
    const {continent, country, is_open_to_public} =  queryObj ;

    if(continent){
        destinations = destinations.filter((destination)=>destination.continent.toLowerCase()===continent.toLowerCase())
    }
    if(country) {
        destinations = destinations.filter((destination)=>destination.country.toLowerCase()===country.toLowerCase())
    }
    if(is_open_to_public) {
        destinations = destinations.filter((destination)=> destination.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase()))
    }
    return destinations ;
}