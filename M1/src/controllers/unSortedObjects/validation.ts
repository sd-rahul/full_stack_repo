export default {
    create: {
        keyCount: {
            required: false,
            in: ['body'],
            number: true,
        },
        depth: {
            required: false,
            in: ['body'],
            number: true,
        }
    }
};