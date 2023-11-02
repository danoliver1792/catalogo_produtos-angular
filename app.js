var app = angular.module('catalogApp', []);

app.controller('catalogController', function($scope) {
    $scope.products = [
        {
            name: 'Produto 1',
            price: 19.99,
            description: 'Descrição do Produto 1',
        },
        {
            name: 'Produto 2',
            price: 29.99,
            description: 'Descrição do Produto 2',
        },
        {
            name: 'Produto 3',
            price: 39.99,
            description: 'Descrição do Produto 3',
        },
    ];

    $scope.selectedProduct = null;

    $scope.showProductDetails = function(product) {
        $scope.selectedProduct = product;
    };
});
