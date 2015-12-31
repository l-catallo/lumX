/* global angular */
'use strict'; // jshint ignore:line


angular.module('lumx.utils.utils', [])
    .service('LxUtils', ['$window', function($window)
    {
        function generateUUID()
        {
            var d = new Date().getTime();

            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
            {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8))
                    .toString(16);
            });

            return uuid.toUpperCase();
        }

        function getEmSize(el)
        {
            return Number($window.getComputedStyle(el, "").fontSize.match(/(\d+)px/)[1]);
        }

        return {
            generateUUID: generateUUID,
            getEmSize: getEmSize
        };
    }]);
