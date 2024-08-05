export const generateRandomUsername = (firstName, lastName) => {
  const firstNameParts = firstName.toLowerCase().trim().split(" ");
  const lastNameParts = lastName.toLowerCase().trim().split(" ");
  const username = [...firstNameParts, ...lastNameParts].join("");

  const randomNumber = Math.floor(Math.random() * 10000);
  const finalUsername = `${username}${randomNumber}`;

  return finalUsername;
};
