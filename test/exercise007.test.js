const { 
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("check if digits are summed", () => {
        expect(sumDigits(123)).toBe(6)
        expect(sumDigits(1)).toBe(1)
        expect(sumDigits(0)).toBe(0)
        expect(sumDigits(9999)).toBe(36)
    })
    test("check function requires a number", () => {
        expect(() => {
            sumDigits()
        }).toThrow("n is required")
        expect(() => {
            sumDigits("teststring")
        }).toThrow("n must be a Number")
    })
})

describe("createRange", () => {
    test("check if range is created correctly with default step of 1", () => {
        expect(createRange(1,3)).toEqual([1,2,3])
        expect(createRange(5,8)).toEqual([5,6,7,8])
        expect(createRange(6,6)).toEqual([6])
    })
    test("check if range is created correctly with custom step", () => {
        expect(createRange(1,5,2)).toEqual([1,3,5])
        expect(createRange(8,10,2)).toEqual([8,10])
        expect(createRange(13,13,5)).toEqual([13])
    })
    test("check if range is created correctly with uneven step", () => {
        expect(createRange(1,5,3)).toEqual([1,4])
        expect(createRange(6,11,4)).toEqual([6,10])
    })
    test("check function requires number", () => {
        expect(() => {
            createRange()
        }).toThrow("start is required")
        expect(() => {
            createRange(5)
        }).toThrow("end is required")
        expect(() => {
            createRange("a", 5)
        }).toThrow("start must be a Number")
        expect(() => {
            createRange(5, "a")
        }).toThrow("end must be a Number")
        expect(() => {
            createRange(5, 5, "a")
        }).toThrow("step must be a Number")
        expect(() => {
            createRange(5, 4, 1)
        }).toThrow("end must greater than start")
        expect(() => {
            createRange(5, 6, 0)
        }).toThrow("step must be greater than 0")
        expect(() => {
            createRange(5, 6, -5)
        }).toThrow("step must be greater than 0")
    })
})

describe("getScreentimeAlertList", () => {
    test("check if correct single user returned for given date and set", () => {
        const r1 = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 90, whatsApp: 0, facebook: 0, safari: 31} },
                ]
            },
        ]
        expect(getScreentimeAlertList(r1,"2019-05-04")).toEqual(["beth_1234"])
        expect(getScreentimeAlertList(r1,"2019-05-01")).toEqual([])
        expect(getScreentimeAlertList(r1,"2019-06-14")).toEqual(["sam_j_1989"])
    })
    test("check if correct multiple users returned for given date and set", () => {
        const r2 = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-06-01", usage: { twitter: 58, instagram: 22, facebook: 40} },
                    { date: "2019-06-02", usage: { twitter: 56, instagram: 40, facebook: 31} }
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-01", usage: { mapMyRun: 98, whatsApp: 0, facebook: 0, safari: 10} }
                ]
            },
        ]
        expect(getScreentimeAlertList(r2,"2019-06-01")).toEqual(["beth_1234", "sam_j_1989"])
    })
    test("check function requires number", () => {
        expect(() => {
            getScreentimeAlertList()
        }).toThrow("users is required")
        expect(() => {
            getScreentimeAlertList([])
        }).toThrow("date is required")
        expect(() => {
            getScreentimeAlertList("a", "2020-08-30")
        }).toThrow("users is required to be an Array")
        expect(() => {
            getScreentimeAlertList([], 123)
        }).toThrow("date is required to be a String")
    })
})

describe("hexToRGB", () => {
    test("check if valid hex codes return correct rgb value", () => {
        expect(hexToRGB("FFFFFF")).toBe("rgb(255,255,255)")
        expect(hexToRGB("000000")).toBe("rgb(0,0,0)")
        expect(hexToRGB("E2C3F0")).toBe("rgb(226,195,240)")
    })
    test("check function validates hexcode ", () => {
        expect(() => {
            hexToRGB("FFCC")
        }).toThrow("hexStr must be 6 characters")
        expect(() => {
            hexToRGB("FFFFCCCC")
        }).toThrow("hexStr must be 6 characters")
        expect(() => {
            hexToRGB("ATOZCM")
        }).toThrow("hexStr must be hexadecimal characters")
        expect(() => {
            hexToRGB("!#@DS@")
        }).toThrow("hexStr must be hexadecimal characters")
    })
    test("check function validates string", () => {
        expect(() => {
            hexToRGB()
        }).toThrow("hexStr is required")
        expect(() => {
            hexToRGB(123)
        }).toThrow("hexStr is required to be a String")
    })
})

describe("findWinner", () => {
    test("check if correct winner is returned", () => {
        const g1 = [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ]
        expect(findWinner(g1)).toBe("X")

        const g2 = [
            ["0", "0", null],
            ["X", "0", "0"],
            ["X", "X", "X"]
        ]
        expect(findWinner(g2)).toBe("X")

        const g3 = [
            ["0", "0", null],
            ["X", "0", "0"],
            ["X", null, "0"]
        ]
        expect(findWinner(g3)).toBe("0")

        const g4 = [
            ["0", "0", "X"],
            ["X", "X", "0"],
            ["X", null, "0"]
        ]
        expect(findWinner(g4)).toBe("0")
    })
    test("check if no winner is correctly returned", () => {
        const gn1 = [
            ["0", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ]
        expect(findWinner(gn1)).toBe(null)

        const gn2 = [
            ["0", "0", null],
            ["X", "0", "0"],
            ["X", null, null]
        ]
        expect(findWinner(gn2)).toBe(null)
    })
    test("check function requires a formatted board", () => {
        expect(() => {
            findWinner()
        }).toThrow("board is required")
        expect(() => {
            findWinner("teststring")
        }).toThrow("board must be an Array")
        expect(() => {
            findWinner([])
        }).toThrow("board must contain a 3x3 array")

        const ex1 = [
            ["0", "0", null],
            ["X", "0", "0"],
            ["X", null]
        ]
        expect(() => {
            findWinner(ex1)
        }).toThrow("board must contain a 3x3 array")
    })
})