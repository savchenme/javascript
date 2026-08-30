let name = prompt('Введите имя:');
if (name) {
    console.log(`Hello, ${name}!`);
} 

else {
    console.log ('' || 'Hello, Guest!');
}