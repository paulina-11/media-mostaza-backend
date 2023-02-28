import Product from "../../models/Product";
const Query = {
  async getProducts() {
    const products = await Product.find();
    return products;
  },
};

export default Query;