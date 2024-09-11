export const shortenText = (originalText, wordLimit) =>
    originalText.split(" ").splice(0, wordLimit).join(" ");
