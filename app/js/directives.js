'use strict';

/* Directives */


angular.module("costcoop.directives", [])
	.directive("enter", function() {
    return function(scome, element, attrs) {
    	element.bind("mouseenter", funtion() {
    		element.addClass(attrs.enter);
    	})
    }
])
	.directive("leave", function() {
    return function(scome, element, attrs) {
    	element.bind("mouseleave", funtion() {
    		element.removeClass(attrs.enter);
    	})
    }
]);
