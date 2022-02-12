import * as express from "express";
import * as bodyParser from 'body-parser';

import Database from "./infra/db";
import ProductController from "./controller/productController";

class StartUp {
    public app: express.Application;

    private _db: Database;

    constructor() {
        this.app = express();
        this._db = new Database();
        this._db.createConnection();
        this.middler();
        this.routes();
    }

    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ version: '0.1' })
        });

        this.app.route("/api/products").get(ProductController.getFiltered);
        this.app.route("/api/products/:slug").get(ProductController.getBySlug);
        this.app.route("/api/products").post(ProductController.create);

    }

}

export default new StartUp();