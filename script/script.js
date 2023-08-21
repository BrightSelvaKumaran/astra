
var app = angular.module('myApp', []); 

app.controller('myController', function($scope, $window) { 

    $scope.userData = [
        { userName: "bright@email.com", password: "bright" },
        { userName: "brijitjoy@email.com", password: "brijitjoy" }
    ];

    $scope.checkLocalStorage = function() {
        var storedEmail = localStorage.getItem('userEmail');
        var storedPassword = localStorage.getItem('userPassword');

        if (storedEmail && storedPassword) {
            var userMatch = $scope.userData.some(function(user) {
                return user.userName === storedEmail && user.password === storedPassword;
            });

            if (userMatch) {
                $window.location.href = 'dashboard.html';
            }
        }
    };

    $scope.login = function() {       

        var email = $scope.typeEmailX;
        var password = $scope.typePasswordX;

        var userMatch = $scope.userData.some(function(user) {
            return user.userName === email && user.password === password;
        });

        console.log("USER MATCH: ", userMatch);
        if (userMatch) {
            console.log('Login successful!');

            function encodeBase64(text) {
                return btoa(text); 
              }
              
              function decodeBase64(encodedText) {
                return atob(encodedText); 
              }
              
            const encodedPassword = encodeBase64(password);
            const decodedPassword = decodeBase64(encodedPassword);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', encodedPassword);
            localStorage.setItem('userName', decodedPassword);
            $window.location.href = 'dashboard.html';
        } else {
            console.log('ERROR LOGGING IN CHECK THE CREDENTIALS');
            alert('ERROR LOGGING IN CHECK THE CREDENTIALS');
        }
    };
});
