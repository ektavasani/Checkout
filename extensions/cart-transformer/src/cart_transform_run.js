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
          price:{
            adjustment:{
              fixedPricePerUnit:{
                amount: 20,
              }
            }
          },
          image:{
            url:"https://cdn.shopify.com/s/files/1/0979/8215/2979/files/theme_cover_image.jpg?v=1773046626"
          }
        }
      }
    ],
  };
};
