export function sendJsonResponse(res, statusCode, payload) {
    return(
        res.setHeader('Content-Type', 'application/json'),
        res.setHeader('Access-Control-Allow-Origin', '*'),
        res.setHeader('Access-Control-Allow-Methods', 'GET'),
        res.statusCode = statusCode ,
        res.end(JSON.stringify(payload))
    )
}