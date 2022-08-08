import UnSortedObjectRepository from '../repositeries/unSortedObject/UnSortedObjectRepository';

const unSortedObjectRepository = new UnSortedObjectRepository();
export default async () => { 
    const unSortedObject = {
        objectData: {
        khjsdf789345kflhs: {
            sfdhk453sdf: 'jkhdsjkfsdf',
            sdufzi: {
                kjhkwjdfs: {},
            },
        },
        DSFnk348975tdfg: 45,
        Asdflkjfsd984: {
            lkjhkfhgkjldfg: {
                dfgkljdf: 'sdfjkgsfd',
            },
            sdfhkjhsdf: true,
        },
        '00FSGsdflis': false,
        fdsskhj5379: [],
    },
    keyCount: 6,
    depth: 3,
    size: 233,
    generationTime: 0
 };

    const countResult = await unSortedObjectRepository.count();

    if (countResult === 0) {
        await unSortedObjectRepository.create(unSortedObject);
        console.log('Data Seeded Successfully in both Collection');
    } else {
        console.log('Data is Already Seeded in both Collection');
    }
};