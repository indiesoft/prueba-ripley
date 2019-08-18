import ProductRepository from '../repository/product.repository';

export default class ProductService {

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getProducts(uid) {
    try {
      let products = await this.productRepository.getProductFromCache(uid)
      if (!products) {
        products = await this.productRepository.getProductFromApi()
        await this.productRepository.setProductCache(uid, products)
      }
      return products
    } catch (e) {
      console.error(e)
      throw new Error(e)
    }
  }

}