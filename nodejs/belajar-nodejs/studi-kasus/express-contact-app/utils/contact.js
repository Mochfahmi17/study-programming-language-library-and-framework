import fs, { existsSync } from "fs";

// Membuat folder data jika belum ada
const dirPath = "./data";
if (!existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

export const loadContact = () => {
  const fileBuffer = fs.readFileSync(dataPath, "utf-8");
  const contacts = JSON.parse(fileBuffer);

  return contacts;
};

export const findContact = (nama) => {
  const fileBuffer = fs.readFileSync(dataPath, "utf-8");
  const contacts = JSON.parse(fileBuffer);

  const contact = contacts.find((contact) => contact.nama === nama);

  return contact;
};
