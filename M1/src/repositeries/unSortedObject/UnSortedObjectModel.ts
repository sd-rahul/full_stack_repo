import * as mongoose from 'mongoose';
import UnSortedObjectSchema from './UnSortedObjectSchema';
import IUnSortedObjectModel from './IUnSortedObjectModel';

const toConvert = {
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret._v;
    }
};

const unSortedObjectSchema = new UnSortedObjectSchema(
    {
        collection: 'Users',
        toJSON: toConvert,
        toObject: toConvert
    });

const UnSortedObjectModel: mongoose.Model<IUnSortedObjectModel> = mongoose.model<IUnSortedObjectModel>('UnSortedObject', unSortedObjectSchema, 'UnSortedObjects', true);

export {UnSortedObjectModel};