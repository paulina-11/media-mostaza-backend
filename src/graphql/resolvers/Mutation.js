import Product from "../../models/Product";
const Mutation = {
  async createProduct(_, { input }) {
    return await Product.create(input);
  },
};

export default Mutation;
