import fetch from 'node-fetch';
import redis from 'redis';
import { promisify } from 'util';

export default class ProductRepository {

  constructor() {
    this.client = redis.createClient(process.env.REDIS_URL);
    this.getAsync = promisify(this.client.get).bind(this.client);
  }

  randomError() {
    const max = 100
    const min = 1
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  retryFetch (url, fetchOptions = {}) {
    return new Promise((resolve, reject) => {
      const wrapper = () => {
        let uri = url
        if(this.randomError() < 15) {
          uri = ''; 
        }
        fetch(uri, fetchOptions)
          .then(res => {  
            return res.json()
          })
          .then(res => {
            resolve(res)
          }) 
          .catch(async err => {
            console.log('reintentar...');
            wrapper()
          })
      }
      wrapper()
    })
  }

  async getProductFromApi() {
    return await Promise.all([
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220518'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220519'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220520'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220521'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220522'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220523'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220524'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220525'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220526'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220527'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220528'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220529'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220530'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220531'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220532'),
      this.retryFetch('https://simple.ripley.cl/api/v2/products/by-id/4220533'),
    ]);
  }


  async getProductFromCache(uid) {
    try {
      const rs = await this.getAsync(uid)
      if (rs) {
        return JSON.parse(rs)
      } else {
        return null
      }
    } catch (e) {
      throw new Error(e)
    }
  }

  async setProductCache(uid, products) {
    try {
      return await this.client.set(uid, JSON.stringify(products), 'EX', 120)
    } catch (e) {
      throw new Error(e)
    }
  }

}