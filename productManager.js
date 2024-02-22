class ProductManager {
    constructor(){

        this.products = [];
        this.id = 0;
    }

    getProducts(){
        return this.products;
    }
    

addProduct(title, description, price, thumbnail, code, stock){
    if(!title || !description || !price || !thumbnail || !code || !stock){
        console.log("todos los datos son obligatorios");
    } 

    let codeExist = this.products.some(product => product.code === code)

    if (codeExist){
        console.log("el codigo ingresado es incorrecto");
    } else{
        let product = {
            id : this.id,
            title : title,
            description:description,
            price:price,
            thumbnail:thumbnail,
            code:code,
            stock:stock
        }

        this.products.push(product);
        this.id ++;
    }
  }

getProductById(productId){
    let product = this.products.find(product => product.id === productId)

    if(product){
        return product;
    } else{
        console.log("Not found");
    }

}


}



const productManager = new ProductManager()

productManager.addProduct('t-shirt', 'white t-shirt', '100', 'img1.jpeg','1100', '10');
productManager.addProduct('shoe', 'sports shoes', '250', 'img2.jpeg','1101', '5');
productManager.addProduct('jeans', 'fashion white jeans', '200', 'img3.jpeg','1102', '3');


console.log(productManager.getProducts()
);

console.log(productManager.getProductById(1)
);

