import AbstractView from "./AbstractView.js";
import * as json from "../products.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Details');
    }

    async getHtml() {
        let product = json.data.find(match => match.id == this.params.id);
        if(product) {
            return `
                <div class="details">
                    <div class="slider">
                        <img src="${product.image.large}" />
                    </div>
                    <div class="data">
                        <p class="category">${product.category}</p>
                        <h3>${product.name}</h3>
                        <p class="description">${product.description}</p>
                        <br>
                        <p class="category">Color</p>
                        <i class="fa fa-check-circle" style="color: #6a6a6d;"></i> <i class="fa fa-circle" class="color: #263671;"></i>
                        <br><br>
                        <p class="category">Price per unit</p>
                        <p class="big_font">$${product.price} <button class="btn">Buy Now</button></p>
                    </div>
                </div>
            `;
        }else {
            return `Product Not Found`;
        }
    }

}