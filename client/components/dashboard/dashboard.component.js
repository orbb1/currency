import template from './dashboard.html';
import './dashboard.css';

let dashboardComponent = {
    template,
    bindings: {
        astronauts: "<"
    }
}

export default dashboardComponent;