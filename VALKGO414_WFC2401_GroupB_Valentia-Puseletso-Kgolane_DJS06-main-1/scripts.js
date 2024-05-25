// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Exercise Solutions

// 1. ForEach Basics
// Log each name and each province to the console
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));

// Log each name with a matching province in the format "Name (Province)"
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 2. Uppercase Transformation
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// 3. Name Lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4. Sorting
const sortedProvinces = [...provinces].sort(); // Using spread operator to avoid mutating original array
console.log(sortedProvinces);

// 5. Filtering Cape
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(nonCapeProvinces.length);

// 6. Finding 'S'
const containsS = names.map(name => name.includes('S'));
console.log(containsS);

// 7. Creating Object Mapping
const namesToProvinces = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(namesToProvinces);

// Advanced Exercises (Single console.log Execution)

// 1. Log Products
console.log(products.forEach(product => console.log(product.product)));

// 2. Filter by Name Length
console.log(products.filter(product => product.product.length <= 5));

// 3. Price Manipulation
const validProducts = products.filter(product => product.price.trim() !== '');
const totalPrice = validProducts.reduce((total, product) => total + Number(product.price), 0);
console.log(totalPrice);

// 4. Concatenate Product Names
const concatenatedNames = products.reduce((acc, product) => acc + product.product, '');
console.log(concatenatedNames);

// 5. Find Extremes in Prices
const validProductPrices = products.filter(product => product.price.trim() !== '');
const prices = validProductPrices.map(product => Number(product.price));
const highestPrice = Math.max(...prices);
const lowestPrice = Math.min(...prices);
console.log(`Highest: ${highestPrice}. Lowest: ${lowestPrice}.`);

// 6. Object Transformation
const transformedProducts = Object.entries(products).reduce((acc, [index, product]) => {
  acc[index] = { name: product.product, cost: product.price };
  return acc;
}, {});
console.log(transformedProducts);
