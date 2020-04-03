import * as mongoose from 'mongoose';
import VersionableSchema from '../versionableSortStats/VersionableSchema';

class SortStatsSchema extends VersionableSchema {
    constructor(options) {
        const sortStatsSchema = {
            _id: String,
            objectId: String,

        }
        super(sortStatsSchema,options);
    }
}

export default SortStatsSchema;