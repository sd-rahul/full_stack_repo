import * as mongoose from 'mongoose';
import SortStatsModel from './SortStatsModel';
import VersionableRepository from '../versionableSortStats/VersionableRepository';
import ISortStatsModel from '../sortStats/ISortStatsModel';

class SortStatsRepository extends VersionableRepository<ISortStatsModel, mongoose.Model<ISortStatsModel>> {
    constructor() {
        super(SortStatsModel)
    }

    create(data, options?: object) {
        return super.create(data, options);
    }

    update(query: object, data: object) {
        return super.update(query, data);
    }

    count() {
        return super.count();
    }

    findOne(query: object) {
        return super.findOne(query);
    }

    find(query: object) {
        return super.find(query);
    }

    list(query?: object) {
        return super.list(query);
    }
}

export default SortStatsRepository;
