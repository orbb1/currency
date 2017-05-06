import template from './dashboard.html';
import './dashboard.scss';

let dashboardComponent = {
    template,
    bindings: {
        astronauts: "<"
    }
}

export default dashboardComponent;