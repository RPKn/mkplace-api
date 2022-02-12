import ProductService from "../services/productService";
import slugify from "slugify";
import * as HttpStatus from "http-status";

import Helper from "../infra/helper";

class ProductController {
    sendResponse = function (res, statusCode, data) {
        res.status(statusCode).json({ result: data });
    }

    getFiltered(req, res) {
        const params = req.query ?? null;
        ProductService.getFiltered(params)
            .then(product => Helper.sendResponse(res, HttpStatus.OK, product))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    getBySlug(req, res) {
        const slug = req.params.slug;
        ProductService.getBySlug(slug)
            .then(product => Helper.sendResponse(res, HttpStatus.OK, product))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    create(req, res) {
        let { prodname, prodbrand, prodseller, prodprice } = req.body;
        let prodslug = slugify(`${Date.now()} ${prodname}`);
        let productinfo = { prodname, prodbrand, prodseller, prodprice, prodslug };
        ProductService.create(productinfo)
            .then(product =>
                Helper.sendResponse(res, HttpStatus.OK, "Product successfully registered!")
            )
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}

export default new ProductController();