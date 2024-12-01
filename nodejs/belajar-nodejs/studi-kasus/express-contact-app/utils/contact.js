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

// Menuliskan atau menimpa file contacts.json dengan data yang baru
const saveContact = (contacts) => {
  fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2), "utf-8");
};

// Menambahkan data contact baru
export const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);

  saveContact(contacts);
};

// cek nama yang duplikat
export const cekDuplikat = (nama) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
};

// Hapus contact
export const deleteContact = (nama) => {
  const contacts = loadContact();
  const filteredContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase());

  saveContact(filteredContacts);
};

// mengubah data contact
export const updateContacts = (contactBaru) => {
  const contacts = loadContact();
  // Hilangkan contact lama yang namanya sama dengan oldNama
  const filteredContacts = contacts.filter((contact) => contactBaru.oldNama.toLowerCase() !== contact.nama.toLowerCase());
  delete contactBaru.oldNama;
  filteredContacts.push(contactBaru);
  saveContact(filteredContacts);
};
