'use strict'

var lispUtils = (function () {

    let constants = {
        OPEN_PARENTHESIS: "(",
        CLOSE_PARENTHESIS: ")",
        EMPTY: "",
        UNDEFINED_STRING: "undefined",
        STRING: "string",
    };

    let utils = {

        /**
         * @description Return true if the given object is null OR empty string OR 
         *  undefined OR "undefined", else return false.
         * @param {*} obj 
         */
        exist: function (obj) {
            return (typeof obj !== undefined ||
                null !== obj ||
                constants.EMPTY !== obj ||
                constants.UNDEFINED_STRING !== obj);
        },

        /**
         * @description Return true if the given object is a string, else false.
         * @param {string} input 
         */
        isString: function (input) {
            return (utils.exist(input) && typeof input === constants.STRING);
        },

        /**
         * @description Return true if the given char contains an open bracket "(",
         *  else return false.
         * @param {string} input 
         */
        isOpenBracket: function (input) {
            let result = false;
            if (utils.exist(input) && utils.isString(input)) {
                result = constants.OPEN_PARENTHESIS.indexOf(input[0]) > -1;
            }
            return result;
        },

        /**
         * @description Return true if the given char contains one of the brackets
         *  (open or close bracket), else return false.
         * @param {string} input 
         */
        isValidBrackets: function (input) {
            let result = false;
            if (utils.exist(input) && utils.isString(input)) {
                const str = constants.OPEN_PARENTHESIS + constants.CLOSE_PARENTHESIS;
                result = str.indexOf(input[0]) > -1;
            }
            return result;
        }
    };

    /**
     * @description Returns true if all the parentheses in the given string are properly 
     *  closed and nested.
     * @param {string} inputString - contains LISP code
     */
    function isParenthesised(inputString) {
        let stack = [];

        for (var i = 0; i < inputString.length; i++) {
            if (utils.isValidBrackets(inputString[i])) {
                if (utils.isOpenBracket(inputString[i]) || stack.length === 0) {
                    stack.push(inputString[i]);
                } else {
                    stack.pop();
                }
            }
        }

        return stack.length === 0;
    }

    return {
        isParenthesised: isParenthesised
    }
})();