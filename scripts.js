

/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }
  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

/**
 * Skilar lengsta orði í streng.
 * @param {string} str Strengur sem skal skoða.
 * @returns {string} Lengsta orðið.
 */
function longest(str) {
  const words = split(str);
  return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}

/**
 * Skilar stysta orði í streng.
 * @param {string} str Strengur sem skal skoða.
 * @returns {string} Stysta orðið.
 */
function shortest(str) {
  const words = split(str);
  return words.reduce((shortest, word) => word.length < shortest.length ? word : shortest, words[0] || '');
}

/**
 * Skilar strengnum öfugum.
 * @param {string} str Strengur sem skal snúa.
 * @returns {string} Öfugur strengur.
 */
function reverse(str) {
  return isString(str) ? str.split('').reverse().join('') : '';
}

/**
 * Athugar hvort strengur sé samhverfur (palindrome).
 * @param {string} str Strengur til að athuga.
 * @returns {boolean} `true` ef strengur er samhverfur, annars `false`.
 */
function palindrome(str) {
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  return cleanedStr === reverse(cleanedStr);
}

/**
 * Skilar fjölda sérhljóða í streng.
 * @param {string} str Strengur til að telja.
 * @returns {number} Fjöldi sérhljóða.
 */
function vowels(str) {
  return isString(str) ? Array.from(str).filter(char => VOWELS.includes(char.toLowerCase())).length : 0;
}

/**
 * Skilar fjölda samhljóða í streng.
 * @param {string} str Strengur til að telja.
 * @returns {number} Fjöldi samhljóða.
 */
function consonants(str) {
  return isString(str) ? Array.from(str).filter(char => CONSONANTS.includes(char.toLowerCase())).length : 0;
}

//------------------------------------------------------------------------------
// Leiðbeint ferli

/**
 * Byrjar leiðbeint ferli fyrir strengjagreinir.
 */
function start() {
  const str = prompt('Sláðu inn streng:');
  if (!isString(str)) {
    console.error('Ekki gilt gildi, sláðu inn streng.');
    return;
  }

  console.log(`Lengsta orð: ${longest(str)}`);
  console.log(`Stysta orð: ${shortest(str)}`);
  console.log(`Öfugur strengur: ${reverse(str)}`);
  console.log(`Samhverfur: ${palindrome(str) ? 'Já' : 'Nei'}`);
  console.log(`Fjöldi sérhljóða: ${vowels(str)}`);
  console.log(`Fjöldi samhljóða: ${consonants(str)}`);
}

//------------------------------------------------------------------------------
// Test cases for each function

console.assert(longest('hello world') === 'world', 'longest: skilar ekki réttum lengsta orði');
console.assert(shortest('hello world') === 'hello', 'shortest: skilar ekki réttum stysta orði');
console.assert(reverse('hello') === 'olleh', 'reverse: skilar ekki réttum öfugum streng');
console.assert(palindrome('anna') === true, 'palindrome: skilar ekki rétt fyrir samhverfan streng');
console.assert(vowels('hello world') === 3, 'vowels: skilar ekki rétta fjölda sérhljóða');
console.assert(consonants('hello world') === 7, 'consonants: skilar ekki rétta fjölda samhljóða');
