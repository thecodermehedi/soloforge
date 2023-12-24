const express = require("express");
const cors = require("cors");
const {MongoClient, ServerApiVersion, ObjectId} = require("mongodb");
const morgan = require("morgan");

//! Application Settings
const app = express();
const port = process.env.PORT || 3000;

//! Middlewares
let corsOptions;
if (process.env.NODE_ENV === "production") {
  corsOptions = {
    origin: [process.env.PROD_ORIGIN_URL],
    credentials: true,
  };
  console.log(process.env.NODE_ENV, process.env.PROD_ORIGIN_URL);
} else {
  corsOptions = {
    origin: [process.env.DEV_ORIGIN_URL],
    credentials: true,
  };
  console.log(process.env.NODE_ENV, process.env.DEV_ORIGIN_URL);
}
app.use(cors(corsOptions));
app.use(express.json());

//! Logging
if(process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
} else {
  app.use(morgan("dev"));
}

//! MongoDB URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.u0aecfc.mongodb.net/?retryWrites=true&w=majority`;
//! MongoDB Client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//! MongoDB Connection
const connectToMongoDB = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    //! MongoDB Collections
    const db = client.db("soloforgeDB");
    const tasksCollection = db.collection("tasks");

    //! SERVER IS RUNNING
    app.get("/", (req, res) => {
      res.send("Soloforge Server is running");
    });

    //! GET ALL TASKS OF A USER
    // http://localhost:3000/api/v1/tasks?email=abc%40gmail.com
    app.get("/api/v1/tasks", async (req, res) => {
      try {
        const email = req.query.email;
        const filter = {email: email};
        const tasks = await tasksCollection.find(filter).toArray();
        res.send(tasks);
      } catch (error) {
        console.error(error);
        res.status(500).send({message: "An error occurred"});
      }
    });

    //! CREATE A TASK
    // http://localhost:3000/api/v1/tasks
    app.post("/api/v1/tasks", async (req, res) => {
      try {
        const task = req.body;
        const result = await tasksCollection.insertOne(task);
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({message: "An error occurred"});
      }
    });

    //! DELETE A TASK
    // http://localhost:3000/api/v1/task/654713acdfaace3a2427f482
    app.delete("/api/v1/task/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await tasksCollection.deleteOne(filter);
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({message: "An error occurred"});
      }
    });

    //! UPDATE A TASK STATUS
    // http://localhost:3000/api/v1/task/654713acdfaace3a2427f482
    app.patch("/api/v1/task/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const update = {$set: {status: req.body.status}};
        const result = await tasksCollection.updateOne(filter, update);
        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({message: "An error occurred"});
      }
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};
connectToMongoDB().then(() => {
  app.listen(port, () => console.log(`Soloforge listening on port ${port}!`));
});
