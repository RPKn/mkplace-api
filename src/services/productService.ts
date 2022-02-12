import ProductRepository from "../repository/productRepository";

class ProductService {

    getFiltered(product) {
        return ProductRepository.find(product);
    }

    getBySlug(slug) {
        return ProductRepository.find({ prodslug: slug });
    }

    create(product) {
        return ProductRepository.create(product);
    }
}

export default new ProductService();