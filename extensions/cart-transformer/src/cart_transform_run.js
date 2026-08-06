// @ts-check

/**
 * @typedef {import("../generated/api").CartTransformRunInput} CartTransformRunInput
 * @typedef {import("../generated/api").CartTransformRunResult} CartTransformRunResult
 */

/**
 * @type {CartTransformRunResult}
 */
const NO_CHANGES = {
  operations: [],
};

/**
 * @param {CartTransformRunInput} input
 * @returns {CartTransformRunResult}
 */
export function cartTransformRun(input) {
  const firstItem = input.cart.lines[0];
  return {
    operations: [
      {
        lineUpdate: {
          cartLineId:firstItem.id,
          title:"Hello From my function",
        }
      }
    ],
  };
};