import * as mongoose from 'mongoose';

export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private modelType: M;
    constructor(modelType) {
        this.modelType = modelType;
    }

    private static generatedObjectId(): string {
        return String(mongoose.Types.ObjectId());
    }

    public async create(data, options?: object): Promise<D> {
        const id = VersionableRepository.generatedObjectId();
        console.log(options)
        return this.modelType.create({
            _id: id,
            originalId: id,
            ...data,
            ...options
        });
    }

    async count() {
        return this.modelType.countDocuments({ deletedAt: undefined });
    }

    async update(query: object, options?: object): Promise<D> {
        const record: any = await this.findOne(query);
        await this.delete(query);
        delete record._id;
        return this.create({
            ...record,
            ...options,
        });
    }

    findOne(query): mongoose.DocumentQuery<D | null, D> {
        return this.modelType.findOne({ ...query, 'deletedAt': undefined }).lean();
    }

    find(query) {
        return this.modelType.find({ ...query }).lean();
    }

    async list(query?: object) {
        const data = await this.modelType.find({ ...query, 'deletedAt': undefined }).lean();
        return data;
    }

    async delete(query: object) {
        return this.modelType.updateOne({ ...query, deletedAt: undefined }, { deletedAt: new Date() });
    }
}
