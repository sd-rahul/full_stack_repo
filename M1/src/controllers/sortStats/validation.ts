export default {
    create: {
        id: {
            required: true,
            in: ['body'],
            string: true,
        },
        algo: {
            required: true,
            in: ['body'],
            string: true,
        }
    },
    get: {
        id: {
            required: true,
            in: ['query'],
            string: true,
        },
    }
};