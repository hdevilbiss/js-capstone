import { v4 as uuidv4 } from "uuid";
function MakeCards() {
  return [
    {
      name: "Palindrome",
      id: uuidv4(),
      heading: "Palindrome Tester",
      promptLink: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker",
      inputLabel: "Input a word",
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
      jsPath: "",
      scssPath: "",
      heading: "Palindrome Tester",
      promptLink: "",
      inputLabel: "",
      submitButtonText: "",
      clearButtonText: "",
      bgArtistLink: "",
      bgArtistName: "",
      bgPhotoLink: "",
      bgPhotoVendor: "Unsplash"
    }
  ];
}

export default MakeCards;
