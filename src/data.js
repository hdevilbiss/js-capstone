import { v4 as uuidv4 } from "uuid";
function MakeCards() {
  return [
    {
      name: "Palindrome",
      id: uuidv4(),
      heading: "Palindrome Tester",
      promptLink: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker",
      inputLabel: "Input a word to check whether it is a palindrome",
      inputType: "text",
      submitButtonText: "Test the word",
      clearButtonText: "Clear output",
      validation: [
        {
          regex: /^\w{2,20}$/,
          message: "Must be between 2 and 20 characters"
        }
      ],
      bgArtistLink: "https://unsplash.com/@andyjh07?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
      bgArtistName: "Andy Holmes",
      bgPhotoLink: "https://unsplash.com/s/photos/night-sky?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
      bgPhotoVendor: "Unsplash"
    },
    {
      name: "Roman",
      id: uuidv4(),
      heading: "Roman Numeral Converter",
      promptLink: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter",
      inputLabel: "Enter a number from 1 to 9999 to convert it to Roman numerals",
      inputType: "number",
      submitButtonText: "Convert Number",
      clearButtonText: "Clear output",
      validation: [
        {
          regex: /\d{1,4}/,
          message: "A number from 1 to 9999"
        }
      ],
      bgArtistLink: "https://unsplash.com/@lilianovich?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
      bgArtistName: "Lilian Dibbern",
      bgPhotoLink: "https://unsplash.com/s/photos/roman?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
      bgPhotoVendor: "Unsplash"
    },
    {
      name: "Rot",
      id: uuidv4(),
      heading: "ROT13 Cipher Decoder",
      promptLink: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher",
      inputLabel: "Enter an UPPERCASE rot13-encoded string to decode it",
      inputType: "text",
      submitButtonText: "Decode string",
      clearButtonText: "Clear output",
      validation: [
        {
          regex: /[A-Z]/,
          message: "UPPERCASE from A to Z"
        }
      ],
      bgArtistLink: "https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
      bgArtistName: "Markus Spiske",
      bgPhotoLink: "https://unsplash.com/s/photos/binary?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
      bgPhotoVendor: "Unsplash"
    },
    {
      name: "Telephone",
      id: uuidv4(),
      heading: "USA Telephone Validator",
      promptLink: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator",
      inputLabel: "Enter a US phone number to check it",
      inputType: "text",
      submitButtonText: "Check phone number",
      clearButtonText: "Clear output",
      validation: [
        {
          regex: /\w/,
          message: ""
        }
      ],
      bgArtistLink: "https://unsplash.com/@trine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      bgArtistName: "Katrin Hauf",
      bgPhotoLink: "https://unsplash.com/s/photos/telephone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      bgPhotoVendor: "Unsplash"
    },
    {
      name: "Cash Register",
      id: uuidv4(),
      heading: "Cash Register",
      promptLink: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register",
      bgArtistLink: "https://unsplash.com/@thisisramiro?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
      bgArtistName: "Ramiro Mendes",
      bgPhotoLink: "https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
      bgPhotoVendor: "Unsplash"
    }
  ];
}

export default MakeCards;
