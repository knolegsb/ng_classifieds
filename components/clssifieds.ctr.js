(function () {
    "use strict";

    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", function ($scope) {
            $scope.name = {
                first: "Sean",
                last: "You"
            };

            $scope.message = "Hello World!!!";
        });
})();