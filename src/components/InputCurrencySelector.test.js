const rewire = require("rewire")
const InputCurrencySelector = rewire("./InputCurrencySelector")
const mapStateToProps = InputCurrencySelector.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ currency: { currency: { IN: "array" }, rates: { key4: 0 } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ currency: { currency: { IN: "number" }, rates: { key4: -100 } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ currency: { currency: { IN: "string" }, rates: { key4: -5.48 } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ currency: { currency: { IN: "array" }, rates: { key4: -100 } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ currency: { currency: { IN: "object" }, rates: { key4: -5.48 } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
