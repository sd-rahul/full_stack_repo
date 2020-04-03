import * as mongoose from 'mongoose';

export default interface IVersionableDocument extends mongoose.Document {
    originalId: string;
    deletedAt?: Date;
    sortDuration?: Number,
    sortingAlgorithm?: String
}