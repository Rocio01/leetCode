// Create a dedupe function which takes an array of Object instances and returns a new array with no 
// items that have the same item.id value, but if there's any duplicate items the data for them should be merged
//  into a single object. All of this keeping the original array's order as closely as possible (see the test case 
//   for an example of the expected output).

// You can check the test file (with a couple of example cases) in the filesystem tab to your left.
function dedupe(list) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    let exists = false;
    for (j = 0; j < result.length; j++) {
      if (list[i].id === result[j].id) {
        exists = true;
        result[j] = Object.assign({}, result[j], list[i])
        break;
      }
    }
    if (!exists) {
      result.push(list[i]);
    }
  }
  console.log(result)
  return result;
}

dedupe(
  [
    {
      id: 2,
      name: 'John Doe'
    },
    {
      id: 1,
      name: 'Jane Doe'
    },
    {
      id: 3,
      name: 'Samuel Soe',
      phone: '+12223334444'
    },
    {
      id: 1,
      phone: "+222222222"
    },
    {
      id: 4,
      name: 'John Doe'
    }
  ])