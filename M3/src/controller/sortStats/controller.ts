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
      const { id, algo } = req.body
      const data = await getUserData(id)
      const sortDuration = await getSortDuration(id, data['objectData'], algo)
      res.send({ sortDuration: sortDuration })
    }
    catch (err) {
      next({ error: err.message, status: '500', message: 'error' })
    }
  }

  list = async (req: Request, res: Response, next) => {
    try {
      const { condition } = req.query;
      const data = await getObjectList()
      if (condition) {
        data.map((object) => {
          if (object[condition] === undefined) {
            getSortDuration(object.id, object.objectData, 'bubbleSort')
          }
        })
      }
      else {
        data.map((object) => {
          getSortDuration(object.id, object.objectData, 'bubbleSort')
        })
      }
      res.send()
    }
    catch (err) {
      next({ error: err.message, status: '500', message: 'error' })
    }
  }
}

async function getUserData(id) {
  try {
    const response = await axios.get(`http://localhost:9000/M1/m/sortStats/?id=${id}`)
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getSortDuration(id, data, algo) {
  try {
    const response = await axios.post('http://localhost:9001/M2/sort/', {
      id: id,
      data: data,
      algo: algo,
    })
    return response.data['sortDuration'];
  } catch (error) {
    console.error(error);
  }
}

async function getObjectList(keyCount = undefined, depth = undefined) {
  try {
    const response = await axios.post(`http://localhost:9000/M1/unSortedObject/`, { keyCount: keyCount, depth: depth })
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default SortController.getInstance();
