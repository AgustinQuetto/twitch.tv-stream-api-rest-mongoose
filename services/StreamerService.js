class StreamerService {
    constructor(streamerModel) {
        this.streamerModel = streamerModel;
    }

    create(data) {
        const streamer = new this.streamerModel(data);
        return streamer.save();
    }

    find(data = {}, select = "", params = { lean: true }) {
        const results = this.streamerModel.find(data).select(select).exec();
        return results;
    }

    findById(_id, select = "", params = { lean: true }) {
        const result = this.streamerModel.findById(_id).select(select).exec();
        return result;
    }

    deleteOne(_id) {
        const result = this.streamerModel.deleteOne({ _id: _id });
        return result;
    }

    updateById(_id, data = {}, params = { new: true }) {
        const result = this.streamerModel.findByIdAndUpdate(_id, data, params);
        return result;
    }
}

module.exports = StreamerService;
