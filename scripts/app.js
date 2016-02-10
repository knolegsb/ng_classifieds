angular
    .module("ngClassifieds", ["ngMaterial"])
    .config(function ($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPallete('teal')
            .accentPalette('orange');
    });
