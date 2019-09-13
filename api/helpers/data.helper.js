
exports.filter = (res) => {
    ver = []
    ver.push(res.versions.version)

    const obj = {
        name: res.name,
        description: res.description,
        keywords: res.keywords
    }
    return obj
} 