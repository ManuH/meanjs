angular.module('app').controller('mvMainCtrl', function($scope) {
    $scope.courses = [
        {name: 'C# for Sociopaths', featured: true, published: new Date('1/1/2015')},
        {name: 'C# for Non-Sociopaths', featured: false, published: new Date('1/4/2013')},
        {name: 'C# for experts Sociopaths', featured: true, published: new Date('1/12/2015')},
        {name: 'PHP', featured: false, published: new Date('1/2/2015')},
        {name: 'MySQL', featured: true, published: new Date('3/1/2013')},
        {name: 'Mongo', featured: false, published: new Date('6/1/2017')},
        {name: 'JS', featured: false, published: new Date('1/4/2013')},
        {name: 'JS for', featured: true, published: new Date('1/12/2015')},
        {name: 'Apex', featured: false, published: new Date('1/2/2015')},
        {name: 'English', featured: true, published: new Date('3/1/2013')},
        {name: 'Mongo', featured: false, published: new Date('6/1/2017')},
        {name: 'English', featured: true, published: new Date('3/1/2013')},
    ]
});