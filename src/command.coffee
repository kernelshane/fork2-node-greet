greet = require("../lib/index")
args = require("minimist")(process.argv.slice(2))
module.exports = ->
    console.log(greet(args._, args.drunk))
