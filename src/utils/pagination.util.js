const getLimitAndOffset = (page, pageSize) => {
    return {
        offset: (page - 1) * pageSize,
        limit: pageSize
    }
}

module.exports = {
    getLimitAndOffset
}