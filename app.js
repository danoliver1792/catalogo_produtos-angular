// criando um modulo AngularJS
var app = angular.module('catalogApp', []);

// definindo o controller
app.controller('catalogController', function($scope) {
    // criando um array de objetos que representa os produtos no catálogo
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

    // inicializa uma variável como nula
    $scope.selectedProduct = null;

    // função que é chamada quando um produto é clicado para mostrar seus detalhes
    $scope.showProductDetails = function(product) {
        $scope.selectedProduct = product;
    };
});
