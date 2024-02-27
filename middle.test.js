const { mode, mean, median } = require("./middle");

describe("#mode", function () {
    it("finds mode", function () {
        expect(mode([2, 3, 4, 4, 4, 5, 6])).toEqual(4);
    });
});

describe("#mean", function () {
    it("finds the mean", function () {
        expect(mean([1, 2, 3, 4, 5])).toEqual(3);
    });
});

describe("#median", function () {
    it("finds the median", function () {
        expect(median([1, 2, 3, 4, 5])).toEqual(3);
    });
});
