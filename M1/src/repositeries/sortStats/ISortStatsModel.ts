import * as mongoose from 'mongoose';
import IVersionableDocument from '../versionableSortStats/IVersionableDocument';

export default interface ISortStatsModel extends IVersionableDocument {
    _id: string;
    objectId: String;
    sortDuration: Number;
    sortingAlgorithm: String
}