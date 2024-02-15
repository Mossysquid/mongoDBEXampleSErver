const mongoDB_URL= process.env.monogoDBURL || 'mongodb://localhost:27017/mtech'
module.exports ={ mongoURI: mongoDB_URL}