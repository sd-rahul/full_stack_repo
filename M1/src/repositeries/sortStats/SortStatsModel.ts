import * as mongoose from 'mongoose';
import SortStatsSchema from './SortStatsSchema';
import ISortStatsModel from './ISortStatsModel';

const toConvert = {
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret._v;
    }
};

const sortStatsSchema = new SortStatsSchema(
    {
        collection: 'Users',
        toJSON: toConvert,
        toObject: toConvert
    });

const SortStatsModel: mongoose.Model<ISortStatsModel> = mongoose.model<ISortStatsModel>('sortStat', sortStatsSchema, 'SortStats', true);

export default SortStatsModel;