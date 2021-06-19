const paginatedResults = async (
    model,
    req,
    res,
    sort_by = { createdAt: -1 }
) => {
    const match = req.query.match || {}
    const page = parseInt(req.query.page) || 1
    let limit
    if (req.query.limit == 'all') {
        limit = await model.countDocuments().exec()
    } else {
        limit = parseInt(req.query.limit) || 12
    }
    // const limit = parseInt(req.query.limit) || 10
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const itemCount = await model.countDocuments().exec()

    try {
        const results = {
            itemCount: itemCount,
            currentPage: page,
            prevPage: page > 1 ? page - 1 : null,
            nextPage: endIndex < itemCount ? page + 1 : null,
            perPage: limit,
            totalPages: Math.ceil(itemCount / limit),
            itemsList: await model
                .find(match)
                .populate(['Event', 'mini', 'brochure', 'item'])
                .lean()
                .sort(sort_by)
                .limit(limit)
                .skip(startIndex)
                .exec(),
        }

        return results
    } catch (error) {
        return res.error(error)
    }
}

const paginatedResultsBySort = async (model, sort_by = { createdAt: -1 }) => {
    return new Promise(async (resolve, reject) => {
        const page = parseInt(req.query.page) || 1
        let limit
        if (req.query.limit == 'all') {
            limit = await model.countDocuments().exec()
        } else {
            limit = parseInt(req.query.limit) || 10
        }
        // const limit = parseInt(req.query.limit) || 10
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const itemCount = await model.countDocuments().exec()

        try {
            const results = {
                itemCount: itemCount,
                currentPage: page,
                prevPage: page > 1 ? page - 1 : null,
                nextPage: endIndex < itemCount ? page + 1 : null,
                perPage: limit,
                totalPages: Math.ceil(itemCount / limit),
                itemsList: await model
                    .find()
                    .sort(sort_by)
                    .limit(limit)
                    .skip(startIndex)
                    .exec(),
            }

            resolve(results)
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = {
    paginatedResults,
    paginatedResultsBySort,
}