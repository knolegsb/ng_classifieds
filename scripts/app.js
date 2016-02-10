angular
    .module("ngClassifieds", [])
    //.config(function ($mdThemingProvider) {

    //    $mdThemingProvider.theme('default')
    //        .primaryPallete('teal')
    //        .accentPalette('orange');
    //})

.directive("helloWorld", function () {
    return {
        template: "<h1>{{message}}</h1>"
    }
});
