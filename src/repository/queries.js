function lockingQuery(flightId){

    
   const a= `SELECT * from Flights WHERE Flights.id = ${flightId} FOR UPDATE; `
   
   return a;
}


module.exports={

    lockingQuery,
}



