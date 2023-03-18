const { ValidationError } = require("../utils/errors");


const ActivityTypes = {
    transaction: 'transaction',
    purchase: 'purchase',
}
const ActivityTypesEnum = Object.values(ActivityTypes)

const buildMakeActivity = (ID) => {

    return function makeParentUser({
        id = ID.makeId(),
        type,
        createdAt = new Date(),
        updatedAt = new Date()
    }) {





        return Object.freeze({
            id,
            type,
            createdAt,
            updatedAt
        })
    }
}



module.exports = Object.freeze({
    buildMakeActivity,
    ActivityTypes,
    ActivityTypesEnum
})


