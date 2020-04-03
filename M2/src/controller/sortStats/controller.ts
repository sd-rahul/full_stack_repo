import { Request, Response } from 'express';
import { sortAlgorithm } from '../../libs/utilities/helper'
let sizeof = require('object-sizeof')
const axios = require('axios');

class SortController {
  static instance: SortController;
  static getInstance() {
    if (SortController.instance) {
      return SortController.instance;
    } else {
      SortController.instance = new SortController();
      return SortController.instance;
    }
  }

  create = async (req: Request, res: Response, next) => {
    try {
      const { id, data, algo } = req.body
      const sortResult = await sortAlgorithm(data, algo);
      await sendinfo(id, algo, sortResult[1])
      res.send({ sortDuration: sortResult[1] })
    }
    catch (err) {
      next({ error: err.message, status: '500', message: 'error' })
    }
  }
}

async function sendinfo(id, algo, sortDuration) {
  try {
    await axios.put('http://localhost:9000/M1/m/sortStats', {
      id: id,
      algo: algo,
      sortDuration: sortDuration
    })
  } catch (error) {
    console.error(error);
  }
}

export default SortController.getInstance();
