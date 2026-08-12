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

  let firstFound = null;
  let secondFound = null;

  const lines = input.cart.lines;
  for (const line of lines) {
    const tag = line.attribute?.value;
    if(!tag)
      continue;

    if(!firstFound){
      firstFound = line;
    } else if(firstFound.attribute?.value === tag){
      secondFound = line;
      break;
    }
  }


  if(!firstFound || !secondFound){
    return NO_CHANGES;
  }

  return {
    operations: [
      {
        linesMerge:{
          cartLines:[
            {
              cartLineId: firstFound.id, quantity: firstFound.quantity 
            },
            {
              cartLineId: secondFound.id, quantity: secondFound.quantity 
            },
          ],
          title:"Due package",
          parentVariantId: "gid://shopify/ProductVariant/53925450547475",
          price: {
            percentageDecrease: { value: 15 },
          },
        }
      }
    ]
  }

};

