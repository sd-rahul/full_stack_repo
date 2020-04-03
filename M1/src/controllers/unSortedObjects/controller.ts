import { Request, Response } from 'express';
import { createObject, mergeResult } from '../../libs/utilities/helper'
import SortStatsRepository from '../../repositeries/sortStats/SortStatsRepository';
import UnSortedObjectRepository from '../../repositeries/unSortedObject/UnSortedObjectRepository';
let sizeof = require('object-sizeof')

const unSortedObjectRepository = new UnSortedObjectRepository();
const sortStatsRepository = new SortStatsRepository();

class ObjectController {
  static instance: ObjectController;
  static getInstance() {
    if (ObjectController.instance) {
      return ObjectController.instance;
    } else {
      ObjectController.instance = new ObjectController();
      return ObjectController.instance;
    }
  }

  create = async (req: Request, res: Response, next) => {
    try {
      const { keyCount, depth } = req.body

      const timeBeforeCreate: any = new Date();
      const data = await createObject(keyCount, depth)
      const timeAfterCreate: any = new Date();

      const generationTime: number = timeAfterCreate - timeBeforeCreate;

      if (Object.keys(data).length) {
        await unSortedObjectRepository.create({ objectData: data, keyCount: keyCount, depth: depth, size: sizeof(data), generationTime: generationTime })
      }
      const objectResult = await unSortedObjectRepository.list()
      const sortResult = await sortStatsRepository.list()

      //function to merge the objectResult and sortResult
      const result = await mergeResult(sortResult, objectResult);

      res.send(result);
    }
    catch (err) {
      next({ error: err.message, status: '500', message: 'error' })
    }
  }

  list = async (req: Request, res: Response, next) => {
    try {
      const objectList = await unSortedObjectRepository.list()
      res.send(objectList)
    }
    catch (err) {
      next({ error: err.message, status: '500', message: 'error' })
    }
  }

}

export default ObjectController.getInstance();
