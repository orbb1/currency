export default ($stateProvider) => {
    "ngInject";
    $stateProvider.state(
        'app.about', {
            url: '/about',
            component: 'about'
        }
    )
}