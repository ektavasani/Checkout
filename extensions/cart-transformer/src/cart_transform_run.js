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

  const firstLine = input.cart.lines[0];
  const secondLine = input.cart.lines[1];

  if (!firstLine || !secondLine) {
    return NO_CHANGES;
  }

  return {
    operations: [
      {
        linesMerge: {
          cartLines:[
            {cartLineId:firstLine.id, quantity:firstLine.quantity},
            {cartLineId:secondLine.id, quantity:secondLine.quantity},
          ],
          title:"Combo Deal",
          parentVariantId:"gid://shopify/ProductVariant/53925450547475",
          price:{
            percentageDecrease:{
              value:25
            }
          },
         
        }
      }
    ],
  };
};

