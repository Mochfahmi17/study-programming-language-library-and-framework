import { Router } from "express";
import database from "../database.js";

let router = Router();

//* GET /Read
router.get("/", async (req, res) => {
  let db = await database.init();
  res.json(db.menu);
});

//* POST /Create
router.post("/", async (req, res) => {
  let db = await database.init();
  console.log(req.body);
  db.menu[0].makanan.push(req.body);
  await database.save(db);
  res.status(200).json(db.menu);
});

//* PUT /Update
router.put("/", async (req, res) => {
  const db = await database.init();
  //   Find the index of the item
  let indexToUpdate = db.menu[0].makanan.findIndex((makanan) => makanan.namaMakanan === req.body.namaMakanan);
  db.menu[0].makanan[indexToUpdate] = req.body;
  await database.save(db);
  res.status(200).json(db.menu);
});

//* DELETE /Delete
router.delete("/:namaMakanan", async (req, res) => {
  const db = await database.init();
  //   Find the index of the item
  let namaMakanan = req.params.namaMakanan;
  let indexToDelete = db.menu[0].makanan.findIndex((makanan) => makanan.namaMakanan === namaMakanan);
  db.menu[0].makanan.splice(indexToDelete, 1);
  await database.save(db);
  res.status(200).json(db.menu);
});

export default router;
