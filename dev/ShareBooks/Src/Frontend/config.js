
app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        // enable html5Mode for pushstate ('#'-less URLs)
        $locationProvider.html5Mode(true);
        $routeProvider.
    when('/', {
        templateUrl: 'app/views/home/home.html'
    })
    .when('/account/:page', {

        templateUrl: 'app/views/account/account.html',
        controller: 'accountController'
    })
        .otherwise({
            redirectTo: '/'
        });
    }
]);