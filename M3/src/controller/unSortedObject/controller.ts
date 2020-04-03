import { Request, Response } from 'express';
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
      const { keyCount , depth } = req.body
      const data = await getObject(keyCount , depth)
      res.send(data)
    }
    catch (err) {
      next({ error: err.message, status: '500', message: 'error' })
    }
  }
}

async function getObject(keyCount , depth) {
  try {
    const response = await axios.post(`http://localhost:9000/M1/unSortedObject/`,{keyCount:keyCount ,  depth:depth})
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default SortController.getInstance();
