angular.module('starter.controllers', [])
.controller('RecommendCtrl',function($scope,ImgList, $ionicSlideBoxDelegate){
        ImgList.allImg.success(function(img){
            $scope.imgList=processData(img.data);
        });
        function processData(list){
            var arr=[];
            for(var i =0;i<list.length;i++){
                    arr[i]=list[i]['attachmentPath'];
            }
            return arr;
        }
        $ionicSlideBoxDelegate.$getByHandle('Slide').update();
    })
.controller('InvestmentCtrl',function($scope){


    })
.controller('AccountCtrl',function($scope){
    })
.controller('MoreCtrl',function($scope,MoreList){
        $scope.items = MoreList.all();
    });