angular
  .module('schoolCheck')
  .controller('SchoolController', function($scope, $http){

    var vm = this;
    

    vm.setSchool = function(school){
            if(vm.school != school)
                vm.school = school;
            else
                vm.school = undefined;

        };

    $scope.filterOptions = [];

    $scope.schoolCheck = [];

   $http.get('assets/php/query.json').then(function(schools){
        $scope.schoolCheck = schools.data;
        $scope.filterOptions = schools.data;
   });

    $scope.customFilter = function(data){
      var shouldShow = true;
      var filters = ['district','specials','concept','basis'];

      for(var i = 0; i < filters.length; i++){
        if($scope.filterDict && $scope.filterDict[filters[i]]){
          var filterValue = $scope.filterDict[filters[i]];
          shouldShow = shouldShow && (filterValue == data[filters[i]] || filterValue == null);

          if(!shouldShow){
            return false;
          }
        }
      }
      return shouldShow;
    };
      
    $scope.favoriteSchool = [];
    
    $scope.toggleFavorite = function(currentSchool){
     var curr = $scope.favoriteSchool.indexOf(currentSchool);
       if(curr >= 0){
        $scope.favoriteSchool.splice(curr,1);
       }else if(curr < 0){
        $scope.favoriteSchool.push(currentSchool);
     }
    };
    
    
  });
  
  
