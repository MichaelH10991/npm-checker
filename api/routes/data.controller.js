const npmFetch = require('npm-registry-fetch')
const helper = require('../helpers/data.helper')

exports.reg = async (req, res) => {
    let name = req.params.name
    let response = await npmFetch.json(name)
    console.log(response)
    // gets the stuff we're interested in
    let data = helper.filter(response)

    return res.send(data)
}


