function compare(timestring1 , timestring2){

    arrival=new Date(timestring1);
    departure=new Date(timestring2);

    return arrival.getTime() > departure.getTime();
}

module.exports=
{
compare
}