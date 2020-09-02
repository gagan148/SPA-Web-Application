import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle('Details');
    }

    async getHtml() {
        return `
            <div class="not_found">
                <h1>404</h1>
                <p>Page Not Found</p>
            </div>
        `;
    }

}