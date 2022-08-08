import * as mongoose from 'mongoose';
import { UnSortedObjectModel } from './UnSortedObjectModel';
import SortStatsRepository from '../../repositeries/sortStats/SortStatsRepository';

const sortStatsRepository = new SortStatsRepository();


class UnSortedObjectRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private unSortedObjectModel;
    constructor() {
        this.unSortedObjectModel = UnSortedObjectModel;
    }

    async count() {
        return this.unSortedObjectModel.countDocuments({ deletedAt: undefined });
    }

    private static generatedObjectId(): string {
        return String(mongoose.Types.ObjectId());
    }

    async findOne(query) {
        return await this.unSortedObjectModel.findOne({ ...query });
    }

    async list(query?: object) {
        const result = await this.unSortedObjectModel.find();
        return result;
    }

    public async create(data) {
        const id = UnSortedObjectRepository.generatedObjectId();
        await sortStatsRepository.create({ objectId: id })
        await this.unSortedObjectModel.create({
            _id: id,
            ...data,
        });
        return id
    }
}

export default UnSortedObjectRepository;
