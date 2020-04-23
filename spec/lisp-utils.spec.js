describe("lisp-utils", function () {

    let constants = {
        TEST_isParenthesised: "Test isParenthesised() ",
        RETURN_FALSE: "Return False with input: ",
        RETURN_TRUE: "Return True with input: ",

        TEST_CASE_1: "()",
        TEST_CASE_2: "(",
        TEST_CASE_3: "(H))",
        TEST_CASE_4: "(}",
        TEST_CASE_5: "(HELLO)",
        TEST_CASE_6: "(HELLO I'm Eric!)",
        TEST_CASE_7: "(())()",
        TEST_CASE_8: "(()H)Hello ( )",
        TEST_CASE_9: "(())Hello ( ))",
    };

    it(constants.TEST_isParenthesised + constants.RETURN_TRUE + constants.TEST_CASE_1, function () {
        expect(lispUtils.isParenthesised(constants.TEST_CASE_1)).toBe(true);
    });

    it(constants.TEST_isParenthesised + constants.RETURN_FALSE + constants.TEST_CASE_2, function () {
        expect(lispUtils.isParenthesised(constants.TEST_CASE_2)).toBe(false);
    });

    it(constants.TEST_isParenthesised + constants.RETURN_FALSE + constants.TEST_CASE_3, function () {
        expect(lispUtils.isParenthesised(constants.TEST_CASE_3)).toBe(false);
    });

    it(constants.TEST_isParenthesised + constants.RETURN_FALSE + constants.TEST_CASE_4, function () {
        expect(lispUtils.isParenthesised(constants.TEST_CASE_4)).toBe(false);
    });

    it(constants.TEST_isParenthesised + constants.RETURN_TRUE + constants.TEST_CASE_5, function () {
        expect(lispUtils.isParenthesised(constants.TEST_CASE_5)).toBe(true);
    });

    it(constants.TEST_isParenthesised + constants.RETURN_TRUE + constants.TEST_CASE_6, function () {
        expect(lispUtils.isParenthesised(constants.TEST_CASE_6)).toBe(true);
    });

    it(constants.TEST_isParenthesised + constants.RETURN_TRUE + constants.TEST_CASE_7, function () {
        expect(lispUtils.isParenthesised(constants.TEST_CASE_7)).toBe(true);
    });

    it(constants.TEST_isParenthesised + constants.RETURN_TRUE + constants.TEST_CASE_8, function () {
        expect(lispUtils.isParenthesised(constants.TEST_CASE_8)).toBe(true);
    });

    it(constants.TEST_isParenthesised + constants.RETURN_FALSE + constants.TEST_CASE_9, function () {
        expect(lispUtils.isParenthesised(constants.TEST_CASE_9)).toBe(false);
    });
});