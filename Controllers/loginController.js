 angular.module("BankModule", []).controller("loginController", function ($scope) {

    $scope.login = {};

    //clear function
    $scope.clear = function () {

        //$scope.login= {};
        location.reload();

    }



    $scope.login = function () {

        //username and password is hardcoded 
        //username :- abc
        //password :- 123

        if ($scope.login.username == 'user01' && $scope.login.password == '1qaz2wsx') {

            //show sucess message
            swal({
                title: "Successfully logged in",
                type: "success",
                timer: 4000,
                showConfirmButton: false
            }, function () {
                swal.close();
            });

            //Go the next page
            location.replace("view/selectCustomer.html");

        } else {

            swal({
                title: "UserName or Password Incorrect.",
                type: "error",
                timer: 1250,
                showConfirmButton: false
            }, function () {
                swal.close();
            });



        }





    }




});