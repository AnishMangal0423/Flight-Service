const express = require("express");
const { PORT } = require("./config");
const mountRoutes = require("./routes");

const app = express();

app.get("/", (req, res) => {
  res.json({
    name: "Anish",
    fg: "Inside Flight Service",
  });
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api", mountRoutes);
app.use("/flightService/api" , mountRoutes) 


app.listen(PORT, function exec() {
  console.log(`Starting My server at Port ${PORT}`);

});

