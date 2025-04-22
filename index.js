import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJsonResponse } from './utils/utils.js'
import { filteredData } from './utils/filteredData.js'
import { getDataByQueryParams } from './utils/getDataByQueryParams.js'

const PORT = 8000

const server = http.createServer( async (req, res)=>{
    const destinations = await getDataFromDB()
    // console.log(req.url)
   
    const urlObj =  new URL(req.url, `http://${req.headers.host}`)
    const queryObj = Object.fromEntries(urlObj.searchParams)
    // console.log(queryObj)

    if (urlObj.pathname==='/api' && req.method==='GET'){
        const filteredData = getDataByQueryParams(destinations, queryObj)
        sendJsonResponse(res, 200, filteredData)
       
    } else if(req.url.startsWith("/api/continent") && req.method==='GET'){

        const apiContinent = req.url.split("/").pop()
        // console.log(apiContinent)
        
        const resultData = filteredData(destinations, 'continent',apiContinent)

        sendJsonResponse(res, 200, resultData)
    } else if (req.url.startsWith("/api/country") && req.method==='GET') {

        const apiCountry = req.url.split("/").pop()

        const resultData = filteredData(destinations, 'country',apiCountry)
        sendJsonResponse(res, 200, resultData)
    }
    else {
        sendJsonResponse(res, 404, {
            error: 'not found',
            message: 'The  requested route does not exist'
        })
       
    }
   
})

server.listen(PORT, ()=>console.log(`server is connected on port ${8000}`))