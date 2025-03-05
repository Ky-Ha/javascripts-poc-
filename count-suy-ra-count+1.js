let count = 0 // Initial state

// Simulate React's `setcount` updater function
function setcount(updater) {
  // The updater function receives the latest state value and returns the new state
//   updater(count)
  count = updater(count)
  console.log("count: ", count)
}

// Simulate multiple state updates
setcount((count) => count + 1) // 1
setcount((a) => a + 1) // 2
console.log("count: ", count)
setcount((b) => b + 1) // 3
setcount((c) => c + 1) // 4

console.log("Final count:", count) // Output: 4
