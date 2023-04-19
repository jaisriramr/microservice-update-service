const DB_URL = process.env.DB_URL;
const invoke = require("../../lib/http/invoke");

let updateService = async (query) => {
    try {

        var queryObject = {
            url: query.url,
            database: query.cluster,
            client: query.client,
            docType: 0,
            query: query.query
        }
        let response = await invoke.makeHttpCall("post", "update", queryObject);
        return response.data.statusMessage;

    }catch(err) {
        console.log(err)
        return err;
    }
}

module.exports = {
    updateService
}