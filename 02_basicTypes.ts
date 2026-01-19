/**
 * Exercice 02: Basic Types
 *
 * Créer quatre fonctions:
 *
 * 1. `add(a, b)` : additionne deux nombres et retourne un nombre
 *    Exemple: add(2, 3) => 5
 *
 * 2. `isAdult(age)` : retourne true si l'âge est >= 18, false sinon
 *    Exemple: isAdult(20) => true, isAdult(15) => false
 *
 * 3. `getFullName(firstName, lastName)` : concatène prénom et nom avec un espace
 *    Exemple: getFullName("John", "Doe") => "John Doe"
 *
 * 4. `greet(name?)` : retourne "Hello, {name}!" si un nom est fourni,
 *    ou "Hello!" si aucun nom n'est donné (paramètre optionnel)
 *    Exemple: greet("Alice") => "Hello, Alice!", greet() => "Hello!"
 */

// TODO: Implémenter les fonctions

export function add(a: any, b: any): any {
  return a + b;
  throw new Error("Not implemented");
}

console.log(add(1, 2));

export function isAdult(age: any): any {
  return age >= 18 ? "true" : "false";
  throw new Error("Not implemented");
}

console.log(isAdult(15));

export function getFullName(firstName: any, lastName: any): any {
  return firstName + " " + lastName;
  throw new Error("Not implemented");
}

console.log(getFullName("jean", "dupond"));

export function greet(name: any): any {
  return name ? "Hello " + name : "Hello";
  throw new Error("Not implemented");
}
console.log(greet(""));
