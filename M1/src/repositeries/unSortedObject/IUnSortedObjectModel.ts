import * as mongoose from 'mongoose';

export default interface IUnSortedObjectModel extends mongoose.Document {
    _id: string;
    objectData: Object;
    keyCount: Number;
    depth: Number;
    size: Number;
    generationTime: Number;
}