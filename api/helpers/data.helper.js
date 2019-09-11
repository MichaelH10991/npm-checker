
exports.filter = (res) => {
    ver = []
    ver.push(res.versions.version)


    const obj = {
        name: res.name,
        description: res.description,
        latest_version: ver[0]
    }
    return obj
} 