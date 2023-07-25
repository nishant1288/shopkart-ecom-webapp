import express from 'express';

import {signUpDetails, loginDetails} from "../controller/userController.js";
import { getProduts, getProductDetails } from '../controller/productController.js';

const router = express.Router();

router.post('/signup', signUpDetails);
router.post('/login', loginDetails);

router.get('/products', getProduts);
router.get('/product/:id', getProductDetails);



export default router;