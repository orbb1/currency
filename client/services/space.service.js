import { OPEN_NOTIFY_API } from '../configs/config';

class SpaceService {
    constructor($http) {
        "ngInject";
        this.http = $http;
        this.getAstronauts = this.getAstronauts.bind(this);
    };
    getAstronauts = () => {
        return this.http({
            method: 'get',
            url: OPEN_NOTIFY_API
        })
    }
}

export default SpaceService;