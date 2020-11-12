// @flow
import React from "react";

const KEY_WORDS_CLASS_MAPPING = [
  {
    keywords: ["function", "class"],
    classMatch: "key-declare",
  },
  {
    keywords: ["const", "let", "var"],
    classMatch: "key-variable-declare",
  },
  {
    keywords: ["return"],
    classMatch: "key-return",
  },
  {
    keywords: [
      "console",
      "window",
      "document",
      "URL",
      "Blob",
      "Object",
      "Date",
      "Math",
      "JSON",
      "Array",
    ],
    classMatch: "key-global-objects",
  },
  {
    keywords: [
      "log",
      "getElementById",
      "round",
      "random",
      "parse",
      "stringify",
      "map",
      "forEach",
      ".then",
    ],
    classMatch: "key-methods",
  },
  {
    keywords: ["if", "else", "for", "while", "await", "async"],
    classMatch: "key-main-words",
  },
  {
    keywords: ["throw", "catch"],
    classMatch: "key-functions",
  },
];

const deepChecking = (currentIndex, array) => {
  console.log(`deepChecking: Calling with index ${currentIndex}`);

  if (currentIndex === 0) {
    console.log(`deepChecking: currentIndex is 0`);
    return;
  }

  if (array[currentIndex - 1] === "") {
    return deepChecking(currentIndex - 1, array);
  } else if (array[currentIndex - 1] === "{") {
    console.log(
      `deepChecking: Found previous { symbol returning index ${
        currentIndex - 1
      }`
    );
    return currentIndex - 1;
  } else if (
    typeof array[currentIndex - 1] === "object" &&
    array[currentIndex - 1].props.children[0] === "{"
  ) {
    console.log(
      `deepChecking: Found previous { symbol in span wrapper returning index ${
        currentIndex - 1
      }`
    );
    return currentIndex - 1;
  } else {
    console.log(`deepChecking: Values don't match conditions`);
    return;
  }
};

const recursiveFindIsFunctionPrevious = (currentIndex, array) => {
  console.log(
    `recursiveFindIsFunctionPrevious: Calling with index ${currentIndex}`
  );

  if (currentIndex === 0) {
    console.log(`deepChecking: currentIndex is 0`);
    return;
  }
};

const deepCheckingWords = (currentIndex, array) => {
  console.log(`deepChecking: Calling with index ${currentIndex}`);

  if (currentIndex === 0) {
    console.log(`deepChecking: currentIndex is 0`);
    return;
  }

  if (array[currentIndex - 1] === "") {
    return deepChecking(currentIndex - 1, array);
  } else if (
    array[currentIndex - 1] !== "" &&
    typeof array[currentIndex - 1] !== "object"
  ) {
    console.log(
      `deepChecking: Found previous word returning index ${currentIndex - 1}`
    );
    return currentIndex - 1;
  } else if (
    typeof array[currentIndex - 1] === "object" &&
    array[currentIndex - 1].props.children[0] !== ""
  ) {
    console.log(
      `deepChecking: Found previous { symbol in span wrapper returning index ${
        currentIndex - 1
      }`
    );
    return currentIndex - 1;
  } else {
    console.log(`deepChecking: Values don't match conditions`);
    return;
  }
};

const spaceChecker = (currentIndex, array) => {
  console.log(`spaceChecker: Calling with index ${currentIndex}`);

  if (currentIndex === 0) {
    console.log(`spaceChecker: currentIndex is 0`);
    return false;
  }

  if (
    array[currentIndex - 1] !== "" &&
    typeof array[currentIndex - 1] !== "object"
  ) {
    if (array[currentIndex] !== "" && typeof array[currentIndex] !== "object") {
      return true;
    } else return false;
  }

  if (
    array[currentIndex + 1] !== "" &&
    typeof array[currentIndex + 1] !== "object"
  ) {
    if (array[currentIndex] !== "" && typeof array[currentIndex] !== "object") {
      return true;
    } else return false;
  }

  if (
    array[currentIndex + 1] !== "" &&
    typeof array[currentIndex + 1] !== "object"
  ) {
    if (array[currentIndex] !== "" && typeof array[currentIndex] !== "object") {
      return true;
    } else return false;
  }
};

export const ProcessCodeText = ({ rawCode }) => {
  const rawCodeSource = rawCode;
  let arrStrings = rawCode.split("\n");

  let arrWords = [];
  arrStrings.forEach((el) => {
    el.split(" ").forEach((word) => {
      arrWords.push(word);
    });
  });
  console.log(arrWords);

  if (rawCode) {
    arrWords.forEach((word, idx) => {
      let findIdx;
      for (let i = 0; i < KEY_WORDS_CLASS_MAPPING.length; i++) {
        KEY_WORDS_CLASS_MAPPING[i].keywords.forEach((keyWord) => {
          //console.log(`Checking word |${word}| index: ${idx}`);
          if (word === keyWord) {
            findIdx = deepChecking(idx, arrWords);
            if (findIdx) {
              console.log(`founded index: ${findIdx}`);
              arrWords[idx] = (
                <span className={KEY_WORDS_CLASS_MAPPING[i].classMatch}>
                  {" "}
                  {word}{" "}
                </span>
              );
            } else {
              arrWords[idx] = (
                <span className={KEY_WORDS_CLASS_MAPPING[i].classMatch}>
                  {word}{" "}
                </span>
              );
            }
          }
          if (word === "{") {
            arrWords[idx] = (
              <span>
                {word} <br />
              </span>
            );
          }
          if (word === "}") {
            arrWords[idx] = (
              <span>
                <br /> {word}
                <br />
              </span>
            );
          }
        });
      }
    });

    //console.log(`arrWords:`);
    //console.log(arrWords);

    arrWords.forEach((word, idx) => {
      if (spaceChecker(idx, arrWords)) {
        arrWords[idx] = <span> {word}</span>;
      }
    });

    console.log(`arrWords: after processing`);
    console.log(arrWords);
    // console.log(arrWords.join(' ').split('  ').join('\n'))
    // console.log(arrWords.reduce((accu, elem) => {
    //     return accu === null ? [elem] : [...accu, ' ', elem]
    // }, null))

    return <pre className="code-javascript">{arrWords}</pre>;
  } else return false;
};
