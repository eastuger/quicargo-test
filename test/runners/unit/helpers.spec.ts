import "mocha"
import {expect} from "chai";
import {degToRad, getDistance} from "../../../src/helpers";

describe("Test helpers", () => {
    describe('Function degToRad', () => {
        it('should return radians', () => {
            const rad = degToRad(2)

            expect(rad).to.eq(0.0349)
        });
    })

    describe('Function getDistance', () =>  {
        it('should return the rounded distance between two locations', () => {
            const distance = getDistance(4.895168, 52.970216, 4.895168, 50.370216)

            expect(distance).to.eq(15.487)
        });
    })
})