import template from './home.html';
import controller from './home.controller';

let homeComponent = {
    template,
    controller,
    bindings: {
        astronauts: "<"
    }
};

export default homeComponent;