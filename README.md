<h1>Catalogo de Produtos</h1>
<p>Projeto básico que simula um catálogo de produtos feito em AngularJS para treinamento com o framework. No exemplo, foi criado um 
catálogo com produtos fictícios onde o usuário poderá visualizar os detalhes ao clicar em um deles por meio de um HTML simples. Foi 
utilizado a diretiva ng-repeat para iterar sobre a lista e a função showProductDetails para mostrar os detalhes do produto selecionado.</p>
<h3>Sobre o arquivo app.js</h3>
<ul>
  <li>var app = angular.module("catalogApp", []); -> cria um módulo AngularJS que é utilizado para organizar e configurar partes de uma aplicação AngularJS.</li>
  <li>app.controller("CatalogController", function($scope){}); -> define um controlador dentro do módulo "catalogApp. Os controladores são usados para controlar 
  a lógica e os dados de uma parte específica da aplicação.</li>
  <li>$scope.products = [] -> cria uma variável $scope chamada products que contém uma lista de objetos, representado os produtos do catálogo. Cada objeto tem 
  propriedades como nome, preço e descrição.</li>
  <li>$scope.selectedProduct = null -> inicializa uma variável $scope chamada "selectecProduct" como nula. Esta variável será usada para armazenar o produto selecionado 
  pelo usuário.</li>
  <li>$scope.showProductDetails = function(product){} -> define uma função que recebe um produto como argumento. Essa função é chamada quando um produto é clicado na lista. 
  Ela atualiza a variável "selectedProduct" com o produto clicado, permitindo a exibição dos detalhes desse produto na página.</li>
</ul>
<hr/>
<img src="https://github.com/danoliver1792/catalogo_produtos-angular/assets/99451711/86740acb-702b-49f1-beeb-b16ac11ba955">
