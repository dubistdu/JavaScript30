// sort array by length and the ones including letter q to come before the rest 

names = ['qwe', 'question', 'qa', 'fd', 'dsfdghjkj', 'this', 'is', 'a']

// expected result 
['qa', 'qwe', 'question', 'a', 'fd', 'is', 'this', 'dsfdghjkj']

// unlike ruby without `?` js returns boolean value
names.sort((a, b) => {
  if (a.includes('q') && !b.includes('q')) {
    return -1
  }
  if (!a.includes('q') && b.includes('q')) {
    return 1
  }
  if (a.length < b.length) {
    return -1
  }
  if (a.length > b.length) {
    return 1
  }
  return 0
})
 