class StreamerController {
    constructor(streamerService) {
        this.streamerService = streamerService;
    }

    async findAll(req, res) {
        const { query } = req;
        let select = "";

        if (query.select) {
            select = query.select.split(",");
            delete query.select;
        }

        const found = await this.streamerService.find(query, select);
        if (found) {
            return res.json(found);
        }
        return res.sendStatus(404);
    }

    async findById(req, res) {
        const { params, query } = req;
        const { _id } = params;

        let select = "";

        if (query.select) {
            select = query.select.split(",");
            delete query.select;
        }

        const found = await this.streamerService.findById(_id, select);
        if (found) {
            return res.json(found);
        }
        return res.sendStatus(404);
    }

    async create(req, res) {
        const { body } = req;
        try {
            const created = await this.streamerService.create(body);
            if (created) {
                return res.status(201).json(created);
            }
            return res.sendStatus(400);
        } catch (e) {
            return res.status(400).json(e.errors.name.properties);
        }
    }

    async updateById(req, res) {
        const { body, params } = req;
        const { _id } = params;

        const updated = await this.streamerService.updateById(_id, body);
        if (updated) {
            return res.status(200).json(updated);
        }
        return res.sendStatus(500);
    }

    async delete(req, res) {
        const { _id } = req.params;
        const deleted = await this.streamerService.deleteOne(_id);
        if (deleted) return res.sendStatus(200);
        return res.sendStatus(404);
    }
}

module.exports = StreamerController;
