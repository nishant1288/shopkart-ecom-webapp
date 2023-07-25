import products from "./constants/data.js";
import Products from "./model/productSchema.js";

const DefaultData = async() => {
    try {
        await Products.insertMany(products);
        console.log("Data inserted succusfully")
    } catch (error) {
        console.log("Error while inserting default data", error)
    }
}

export default DefaultData;