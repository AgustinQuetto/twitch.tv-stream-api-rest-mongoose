const StreamerController = require("./controllers/StreamerController");
const StreamerService = require("./services/StreamerService");
const StreamerModel = require("./models/StreamerModel");
const StreamerServiceInstance = new StreamerService(StreamerModel);
const StreamerControllerInstance = new StreamerController(
    StreamerServiceInstance
);

const routes = (app) => {
    app.get("/", (req, res) => {
        res.json({ text: "Hola mundo!" });
    });

    app.get("/streamers", (req, res) =>
        StreamerControllerInstance.findAll(req, res)
    );
    app.get("/streamer/:_id", (req, res) =>
        StreamerControllerInstance.findById(req, res)
    );
    app.post("/streamer", (req, res) =>
        StreamerControllerInstance.create(req, res)
    );
    app.put("/streamer/:_id", (req, res) =>
        StreamerControllerInstance.updateById(req, res)
    );
    app.delete("/streamer/:_id", (req, res) =>
        StreamerControllerInstance.delete(req, res)
    );
};

module.exports = routes;
