const express = require("express");
const { PORT } = require("./config");
const mountRoutes = require("./routes");

const app = express();

app.get("/", (req, res) => {
  res.json({
    name: "Anish",
    fg: "Pranu Bhandari",
  });
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", mountRoutes);


app.listen(PORT, async function exec() {
  console.log(`Starting My server at Port ${PORT}`);

// bad code -

const {Airport , Cities}=require('./models');

  const city= await Cities.findByPk(5);

    // console.log(city);

  // const data =await Airport.create({

    // name:"Indragandhi airport",
    // code:'DEL',
  //   cityId:1
  // })

  // const data=await city.createAirport({
  //   name:"Palasod airport",
  //   code:'PALASOD',

  // })

  //  console.log(data)

// const airports=await city.getAirports()
// console.log(airports)

  const palasod=await Airport.findByPk(6);
  const airport=await city.removeAirport(palasod)

});

