export default ($stateProvider) => {
    "ngInject";
    $stateProvider
    .state('app.home', {
        url: '/home',
        component: 'home',
        resolve: {
            astronauts: (SpaceService) => {
                'ngInject';
                return SpaceService.getAstronauts()
                .then((response) => {
                    return response.data;
            });
            }
        }
    });
};