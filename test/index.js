import assert from 'assert';
import { ping, getInputData, writeAnswer } from '../client/index.js';
import { output } from '../output/index.js';

const expectedInput = {
    K: 10,
    Muls: [1, 4],
    Sums: [1.01, 2.02]
}

describe("Ping", function() {
    it("Get ping", async function() {
        assert.deepStrictEqual(await ping(), true);
    });
})
describe("InputData", function() {
    it("Get input", async function() {
        assert.deepStrictEqual(await getInputData(), expectedInput);
    });
})
describe("WriteAnswer", function() {
    it("Post answer", async function() {
        let outputResult = output(expectedInput)
        assert.deepStrictEqual(await writeAnswer(outputResult), true);
    });
})