angular.module('starter.controllers', [])
.controller('RecommendCtrl',function($scope,ImgList){
        ImgList.allImg.success(function(img){
            $scope.imgList=processData(img);
        });
        function processData(list){
            var arr=[];
            for(var i =0;i<list.length;i++){
                    arr[i]=list[i]['attachmentPath'];
            }
            return arr;
        }
    })
.controller('InvestmentCtrl',function($scope){


    })
.controller('AccountCtrl',function($scope){
    })
.controller('MoreCtrl',function($scope,MoreList){
        $scope.items = MoreList.all();
    });