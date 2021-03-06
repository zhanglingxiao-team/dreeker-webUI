/**
* dreeker.restAPI Module
*
* Description
*/
dreeker.restAPI = angular.module('dreeker.restAPI', []);

dreeker.restAPI.factory('restService', ['$resource', function($resource){
	return function(serviceName, params, back, callbackObj){
		var data = $resource(serviceName, params).get(function(){
			if(data.result == 'suc') {
				if (callbackObj == null) {
					back(data.object);
				} else {
					//用apply传递closure
					back.apply(callbackObj, [data.object]);
				}
			} else if (data.result == 'login') {

			} else {

			}
		}, function(){
			alert("网络错误，请稍后再试");
		});
	};
}]);