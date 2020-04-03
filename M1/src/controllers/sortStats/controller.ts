import { Request, Response } from 'express';
import SortStatsRepository from '../../repositeries/sortStats/SortStatsRepository';
import UnSortedObjectRepository from '../../repositeries/unSortedObject/UnSortedObjectRepository';
let sizeof = require('object-sizeof')

const sortStatsRepository = new SortStatsRepository();
const unSortedObjectRepository = new UnSortedObjectRepository();

class SortStatsController {
  static instance: SortStatsController;
  static getInstance() {
    if (SortStatsController.instance) {
      return SortStatsController.instance;
    } else {
      SortStatsController.instance = new SortStatsController();
      return SortStatsController.instance;
    }
  }

  get = async (req: Request, res: Response, next) => {
    try {
      const { id } = req.query;
      const data = await unSortedObjectRepository.findOne({ '_id': id });
      res.send(data);
    } catch (err) {
      next({ error: err.message, status: '500', message: 'error' })
    }
  }

  list = async (req: Request, res: Response, next) => {
    try {
      const { id } = req.body;
      const sortStats = await sortStatsRepository.find({ 'objectId': id })
      res.send(sortStats)
    } catch (err) {
      next({ error: err.message, status: '500', message: 'error' })
    }
  }

  update = async (req: Request, res: Response, next) => {
    try {
      const { id, algo, sortDuration } = req.body;
      await sortStatsRepository.update({ objectId: id }, { sortingAlgorithm: algo, sortDuration: sortDuration })
      res.send({ message: 'sortStats updated succussfully' });
    }
    catch (err) {
      next({ error: err.message, status: '500', message: 'error' });
    }
  }
}

export default SortStatsController.getInstance();
