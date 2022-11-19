 angular.module("BankModule", []).controller("selectCustomerController", function ($scope) {

     $scope.Customers = [
	{
      "S_No": "1",
      "Beneficiary_Acc_No": "420934037092302",
      "Beneficiary_Name": "Dhanuka Perera",
      "IFSC_Code": "IBON001250",
      "Available_Amount": 50000.34,
      "Branch": "Colombo",
      "TransactionStatus": "Transaction Pass",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "2",
      "Beneficiary_Acc_No": "424386330076686",
      "Beneficiary_Name": "Amanda Fernando",
      "IFSC_Code": "IBONO04522",
      "Available_Amount": 750000.50,
      "Branch": "Kandy",
      "TransactionStatus": "Transaction Fail",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "3",
      "Beneficiary_Acc_No": "104350472783319",
      "Beneficiary_Name": "Champika Anuradha",
      "IFSC_Code": "CIUB007794",
      "Available_Amount": 25000.00,
      "Branch": "Kegalle",
      "TransactionStatus": "Transaction Pass",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "4",
      "Beneficiary_Acc_No": "441437323080708",
      "Beneficiary_Name": "Mahendra Bandara",
      "IFSC_Code": "HDFC0011066",
      "Available_Amount": 42000.50,
      "Branch": "Kurunegala",
      "TransactionStatus": "Transaction Pass",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "5",
      "Beneficiary_Acc_No": "452309267046294",
      "Beneficiary_Name": "Dilshani Hansika",
      "IFSC_Code": "IBON0014338",
      "Available_Amount": 125300.45,
      "Branch": "Mathale",
      "TransactionStatus": "Transaction Fail",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "6",
      "Beneficiary_Acc_No": "453354047052483",
      "Beneficiary_Name": "Indika Bandara",
      "IFSC_Code": "CIUB0017610",
      "Available_Amount": 18500.00,
      "Branch": "Peradeniya",
      "TransactionStatus": "Transaction Pass",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "7",
      "Beneficiary_Acc_No": "454825200052803",
      "Beneficiary_Name": "Gihan Perera",
      "IFSC_Code": "INDB0020882",
      "Available_Amount": 2450.00,
      "Branch": "Kandy",
      "TransactionStatus": "Transaction Fail",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "8",
      "Beneficiary_Acc_No": "463254235076154",
      "Beneficiary_Name": "Uvindu Inuwara",
      "IFSC_Code": "HDFC0024154",
      "Available_Amount": 150000.00,
      "Branch": "Colombo",
      "TransactionStatus": "Transaction Pass",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "9",
      "Beneficiary_Acc_No": "463922339071681",
      "Beneficiary_Name": "Uditha Kasun",
      "IFSC_Code": "INDB0027426",
      "Available_Amount": 423831.54,
      "Branch": "Badulla",
      "TransactionStatus": "Transaction Fail",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "10",
      "Beneficiary_Acc_No": "468945202069674",
      "Beneficiary_Name": "Sachini Fernando",
      "IFSC_Code": "IBON0030698",
      "Available_Amount": 10000.00,
      "Branch": "Galle",
      "TransactionStatus": "Transaction Pass",
      "Mail": "sakilad.online@gmail.com"
    }
    ];
	
	$scope.CustomersDownload = {
  "customer": [
    {
      "S_No": "1",
      "Beneficiary_Acc_No": "420934037092302",
      "Beneficiary_Name": "Dhanuka Perera",
      "IFSC_Code": "IBON001250",
      "Available_Amount": 50000.34,
      "Branch": "Colombo",
      "TransactionStatus": "Transaction Pass",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "2",
      "Beneficiary_Acc_No": "424386330076686",
      "Beneficiary_Name": "Amanda Fernando",
      "IFSC_Code": "IBONO04522",
      "Available_Amount": 750000.50,
      "Branch": "Kandy",
      "TransactionStatus": "Transaction Fail",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "3",
      "Beneficiary_Acc_No": "104350472783319",
      "Beneficiary_Name": "Champika Anuradha",
      "IFSC_Code": "CIUB007794",
      "Available_Amount": 25000.00,
      "Branch": "Kegalle",
      "TransactionStatus": "Transaction Pass",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "4",
      "Beneficiary_Acc_No": "441437323080708",
      "Beneficiary_Name": "Mahendra Bandara",
      "IFSC_Code": "HDFC0011066",
      "Available_Amount": 42000.50,
      "Branch": "Kurunegala",
      "TransactionStatus": "Transaction Pass",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "5",
      "Beneficiary_Acc_No": "452309267046294",
      "Beneficiary_Name": "Dilshani Hansika",
      "IFSC_Code": "IBON0014338",
      "Available_Amount": 125300.45,
      "Branch": "Mathale",
      "TransactionStatus": "Transaction Fail",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "6",
      "Beneficiary_Acc_No": "453354047052483",
      "Beneficiary_Name": "Indika Bandara",
      "IFSC_Code": "CIUB0017610",
      "Available_Amount": 18500.00,
      "Branch": "Peradeniya",
      "TransactionStatus": "Transaction Pass",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "7",
      "Beneficiary_Acc_No": "454825200052803",
      "Beneficiary_Name": "Gihan Perera",
      "IFSC_Code": "INDB0020882",
      "Available_Amount": 2450.00,
      "Branch": "Kandy",
      "TransactionStatus": "Transaction Fail",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "8",
      "Beneficiary_Acc_No": "463254235076154",
      "Beneficiary_Name": "Uvindu Inuwara",
      "IFSC_Code": "HDFC0024154",
      "Available_Amount": 150000.00,
      "Branch": "Colombo",
      "TransactionStatus": "Transaction Pass",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "9",
      "Beneficiary_Acc_No": "463922339071681",
      "Beneficiary_Name": "Uditha Kasun",
      "IFSC_Code": "INDB0027426",
      "Available_Amount": 423831.54,
      "Branch": "Badulla",
      "TransactionStatus": "Transaction Fail",
      "Mail": "sakilad.online@gmail.com"
    },
    {
      "S_No": "10",
      "Beneficiary_Acc_No": "468945202069674",
      "Beneficiary_Name": "Sachini Fernando",
      "IFSC_Code": "IBON0030698",
      "Available_Amount": 10000.00,
      "Branch": "Galle",
      "TransactionStatus": "Transaction Pass",
      "Mail": "sakilad.online@gmail.com"
    }
  ]
}
	

     //initialize the transaction

     $scope.transaction = {

         'Amount': null,
         'Type': null,
         'traAccNo': null

     };


     $scope.radio = {
         'depoType': null
     }

     $scope.newCustomer = {};
     var deduct = false;
     var depoStatus = true;
     var accError = false;
     var balError = false;
     var index = 0;
     $scope.errorvalue = true;


     $scope.proceedTransaction = function (Customer, depoType) {


         depoStatus=true;
         
         if ($scope.transaction.Amount != 0 && $scope.transaction.Amount > 0) {


             if ($scope.transaction.Type == 'deposit') {


                 if (depoType == 'anotherAccount') {


                     if ($scope.transaction.traAccNo != null) {

                         

                         for (var i = 0; i < $scope.Customers.length; i++) {

                             if ($scope.Customers[i].Beneficiary_Acc_No.trim() == $scope.transaction.traAccNo.trim()) {

                                 console.log('No Acc Error');
                                 accError = true;

                                 //check employee amount is larger thatn requested amount
                                 if ($scope.Customers[i].Available_Amount > $scope.transaction.Amount) {

                                     balError = true;
                                     deduct = true;
                                     //current index
                                     index = i;
                                 }



                             }

                         }

                         //print errors

                         if (!accError) {

                             depoStatus = false;

                             swal({
                                 title: "Enter Correct Transaction Account Number",
                                 type: "error",
                                 timer: 2000,
                                 showConfirmButton: false
                             }, function () {
                                 swal.close();
                             });

                         } else if (!balError) {
                             depoStatus = false;

                             swal({
                                 title: "Employee account balance is insufficient",
                                 type: "error",
                                 timer: 2000,
                                 showConfirmButton: false
                             }, function () {
                                 swal.close();
                             });
                             
                             
                            var val = confirm("Please try again later.");
                     
                             if(val){

                                 $('#myModal').modal('toggle');

                             }
                         }




                     } else {

                         depoStatus = false;

                         swal({
                             title: "Enter employee account number in order to do transaction",
                             type: "error",
                             timer: 1250,
                             showConfirmButton: false
                         }, function () {
                             swal.close();
                         });
                         
                         $('#myModal').modal('toggle');

                     }

                 }


                 if (depoStatus) {

                     //show message

                     var val = confirm("Rs " + $scope.transaction.Amount + ".00 amount " + $scope.transaction.Type + " To account");


                     if (val) {

                         if (deduct) {
                             //reduce the salary from the employee account
                             $scope.Customers[index].Available_Amount = $scope.Customers[index].Available_Amount - $scope.transaction.Amount;
                         }

                         //add amount to current amount
                         Customer.Available_Amount = Customer.Available_Amount + $scope.transaction.Amount;

                         //update
                         for (var i = 0; i < $scope.Customers.length; i++) {

                             if (Customer.Beneficiary_Acc_No == $scope.Customers[i].Beneficiary_Acc_No) {

                                 $scope.Customers[i].Available_Amount = Customer.Available_Amount;

                                 $scope.Customers[i].TransactionStatus='Transaction Success';
                             }

                         }


                         //print the message
                         swal({
                             title: "Transaction successfully completed.",
                             type: "success",
                             timer: 1250,
                             showConfirmButton: false
                         }, function () {
                             swal.close();
                         });


                         //clean data
                         $scope.transaction = {

                             'Amount': null,
                             'Type': null,
                             'traAccNo': null
                         };




                         $('#myModal').modal('toggle');


                     } else {

                         //clean data
                         $scope.transaction = {

                             'Amount': null,
                             'Type': null,
                             'traAccNo': null
                         };

                         

                     }
                     
                     depoStatus=false;
                     accError=false;
                     balError=false;
                     
                 }




             } else {


                 //check requested ammount is smaller than current amount
                 if (Customer.Available_Amount > $scope.transaction.Amount) {


                     //show message
                     var val = confirm("Rs " + $scope.transaction.Amount + ".00 amount " + $scope.transaction.Type + " from account");

                     if (val) {

                         //reduce the amount from current salary
                         Customer.Available_Amount = Customer.Available_Amount - $scope.transaction.Amount;

                         //update
                         for (var i = 0; i < $scope.Customers.length; i++) {

                             if (Customer.Beneficiary_Acc_No == $scope.Customers[i].Beneficiary_Acc_No) {

                                 $scope.Customers[i].Available_Amount = Customer.Available_Amount;

                             }

                         }




                         // swal("Transaction Successful", "Transaction successfully completed.", "success");

                         //print the message
                         swal({
                             title: "Transaction successfully completed.",
                             type: "success",
                             timer: 1250,
                             showConfirmButton: false
                         }, function () {
                             swal.close();
                         });


                         //clean data
                         $scope.transaction = {

                             'Amount': null,
                             'Type': null,
                             'traAccNo': null
                         };


                         $('#myModal').modal('toggle');



                     } else {

                         //clean data
                         $scope.transaction = {

                             'Amount': null,
                             'Type': null,
                             'traAccNo': null
                         };



                     }






                 } else {

                     $scope.errorvalue = false;

                     swal({
                         title: "Balance is insufficient",
                         type: "error",
                         timer: 1250,
                         showConfirmButton: false
                     }, function () {
                         swal.close();
                     });
                     
                     
                     var val = confirm("Please try again later.");
                     
                     if(val){
                        
                         $('#myModal').modal('toggle');
                     
                     }
                     
                     
                 }

             }


         } else {

             swal({
                 title: "Please fill the transaction data",
                 type: "error",
                 timer: 1250,
                 showConfirmButton: false
             }, function () {
                 swal.close();
             });

            var val = confirm("Please try again later.");
                     
                     if(val){
                        
                         $('#myModal').modal('toggle');
                     
                     }
         }





     }






     $scope.claerData = function () {

         $scope.transaction = {
             'Amount': null,
             'Type': null,
             'traAccNo': null
         };

         $scope.depoType = null;

     }


     //create customer object

     $scope.transactionPage = function (customer) {

         $scope.newCustomer = {
             'S_No': customer.S_No,
             'Beneficiary_Acc_No': customer.Beneficiary_Acc_No,
             'Beneficiary_Name': customer.Beneficiary_Name,
             'IFSC_Code': customer.IFSC_Code,
             'Available_Amount': customer.Available_Amount,

         }

         $scope.transaction = {

             'traAccNo': customer.EmployeeAccNo

         }

     }


     //    $scope.closeModal = function(){
     //       $uibModalInstance.close();
     //    }

     $scope.download = function () {
         
         
         $scope.savedJSON = angular.toJson($scope.CustomersDownload, true);
         var blob = new Blob([$scope.savedJSON], {
             type: "application/json;charset=utf-8;"
         });
         var downloadLink = document.createElement('a');
         downloadLink.setAttribute('download', 'CustomerDataJSON.txt');
         downloadLink.setAttribute('href', window.URL.createObjectURL(blob));
         downloadLink.click();
         
     }


 });