var app = angular.module('myApp', []);

app.factory('LinkService', function() {
    return {
        getLinks: function() {
            return linkName;
        }
    };
});

app.controller('myController', function($scope, $window, LinkService) {

    $scope.count = 0;

    $scope.links = LinkService.getLinks();

    $scope.checkCondition = function() {
        var storedPassword = localStorage.getItem('userName');

        if (storedPassword) {
            $scope.userName = storedPassword;
        } else {
            console.log("Redirecting to index.html");
            $window.location.href = 'index.html';
        }
    };

    $scope.incrementCount = function() {
        $scope.count++;
        if ($scope.count <= 10) {
            for (var i = 0; i < $scope.links.length; i++) {
                $window.open($scope.links[i].link, '_blank');
            }
        } else {
            $scope.showLogoutButton = true;
        }

        if ($scope.count == 10) {
            alert("TODAY'S SESSION OVER : LOG OUT PLEASE")
        }
    };

    $scope.logout = function() {
        localStorage.clear();
        $window.location.href = 'index.html';
    };

});
 
