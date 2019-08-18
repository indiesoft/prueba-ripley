import ProductService from '../services/product.service'

export default (app) => {

  app.get('/products', async (req, res) => {
    const productService = new ProductService();
    const uid = app.get('uid');
    try {
      const  products = await productService.getProducts(uid);
      return res.status(200).json(products)
    } catch (err) {
      return res.status(500).json({ status: 'NOT_OK' })
    }
  })

}   