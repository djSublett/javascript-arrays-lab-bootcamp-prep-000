var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

// adding a kitten to the end of the kittens array
// while leaving the original array unchanged
function appendKitten(name) {
  return [...kittens, name];
}

//adding a kitten to the beginning of the array
function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1)
}
