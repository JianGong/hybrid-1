angular.module('starter.services', [])
    .factory("MoreList", function () {
        var more_list = [
            { id: 1, title: '公告新闻', icon: 'img/news_log.png'},
            { id: 2, title: '关于我们', icon: 'img/about.png'},
            { id: 3, title: '帮助中心', icon: 'img/help.png'},
            { id: 4, title: '分享', icon: 'img/share.png'},
            { id: 5, title: '联系我们', icon: 'img/lianxiwomen.png'}
        ];
        return {
            all: function () {
                return more_list;
            }
        }
    })
    .factory("ImgList", function ($http) {
        var ImgList =
            $http.get("http://api.loanedai.com:8090/query/ad/indexAdList.html?channelCode=4301");
        return {
            allImg: ImgList
        }
    });
