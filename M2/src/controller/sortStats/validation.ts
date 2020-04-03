export default {
    create: {
        id: {
            required: false,
            in: ['body'],
            string: true,
        },
        algo: {
            required: true,
            in: ['body'],
            string: true,
        },
        data: {
            required: true,
            in: ['body'],
            object: true,
        
        }
    }
};