// criando o módulo AngularJS
var app = angular.module("catalogApp", []);

// definindo o controller
app.controller("CatalogController", function($scope) {
    // criando o array de objetos que representa os produtos no catálogo
    $scope.products = [
        {
            name: "Televisão",
            price: 1999.99,
            description: "Televisão de 32 polegadas"
        },
        {
            name: "Geladeira",
            price: 2999.99,
            description: "Geladeira frost free"
        },
        {
            name: "Mesa de Jantar",
            price: 899.99,
            description: "Mesa de jantar com seis cadeiras"
        }
    ];

    // inicializando uma variável como nula
    $scope.selectedProduct = null;

    // função que é chamada quando um produto é clicado para mostrar seus detalhes
    $scope.showProductDetails = function(product) {
        $scope.selectedProduct = product;
    }
});
