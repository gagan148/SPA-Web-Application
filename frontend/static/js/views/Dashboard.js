import AbstractView from "./AbstractView.js";
import * as json from "../products.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Dashboard');
    }

    showRating(rating) {
        return `<i class="fa fa-star"></i>`;
    }

    showData(data) {
        return `<li>
        <figure><a href="/product/${data.id}" data-link>
            <img src="${data.image.small}">
            <figcaption>
                <h3>${data.name}</h3>
            </figcaption></a>
        </figure>

        <div class="category">${data.category}</div>
        <div class="price">$${data.price}</div>
        <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
        </div>
        <div class="cart-btn">
            <i class="fa fa-cart-plus"></i>
        </div>
    </li>`
    }

    async getHtml() {
        return `
            <div>
                <a href="javascript:" onclick="$('#filters').toggleClass('expanded')" class="filter_btn">
                    <i class="fa fa-filter filter_icon"></i>
                </a>
                <div id="filters" class="expanded">
                    <p class="category">FILTER BY</p>
                    <form>
                        <div class="form-control">
                            <select class="dropdown">
                                <option value="">Collection</option>
                                <option value="collection1">Collection1</option>
                                <option value="collection2">Collection2</option>
                            </select>
                        </div>
                        <div class="form-control">
                            <select class="dropdown">
                                <option value="">Color</option>
                                <option value="color1">Color1</option>
                                <option value="color2">Color2</option>
                            </select>
                        </div>
                        <div class="form-control">
                            <select class="dropdown">
                                <option value="">Category</option>
                                <option value="category1">Category1</option>
                                <option value="category2">Category2</option>
                            </select>
                        </div>
                        <div class="form-control">
                            <br>
                            <label for="amount">Price range</label>
                            <div id="slider-range"></div>
                            <br>
                            <p readonly style="border:0;font-size: 12px;color: #797979;">
                                <span id="min" style="float: left;"></span><span id="max" style="float: right;"></span>
                            </p>
                        </div>
                        <div class="form-control"></div>
                    </form>
                </div>
                <div id="products">
                    <section class="products" id="products">
                        <ul>
                            ${json.data.map(this.showData).join("")}
                        </ul>
                    </section>
                </div>
            </div>  
        `;
    }

}