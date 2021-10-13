const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://lokesh:lokesh@cluster0.9wtgw.mongodb.net/test", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
