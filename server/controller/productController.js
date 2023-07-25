import { response } from "express";
import Products from "../model/productSchema.js"

export const getProduts = async(request, response) => {
    try {
        const products = await Products.find({});
        response.status(200).json(products)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const getProductDetails = async(request, response) => {
    try {
        const id = request.params.id;
        const productDetails = await Products.findOne({'id': id});
        response.status(200).json(productDetails)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}