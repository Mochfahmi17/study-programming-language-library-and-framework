import { MongoClient, ObjectId } from "mongodb";

async function run() {
  // Connection URL
  const uri = "mongodb://127.0.0.1:27017";
  const dbName = "coba";

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db(dbName);
    const students = database.collection("students");

    // Menambahkan 1 data ke collection students
    // const query = { nama: "Wahyu", email: "swahyu22@gmail.com" };
    // await students.insertOne(query);

    // Menambahkan lebih dari 1 data
    // const query = [
    //   { nama: "Wahyudi", email: "wahyuseptiawan@gmail.com" },
    //   { nama: "Indri", alamat: "indriati@gmail.com" },
    // ];
    // await students.insertMany(query);

    // Menampilkan semua data di collection 'students'
    // const allStudents = await students.find().toArray();
    // console.log(allStudents);

    // Menamilkan semua data berdasarkan kriteria yang ada di collection 'students'
    // const allStudents = await students.find({ _id: new ObjectId("674c1e7e0f59ccd7e5893bf8") }).toArray();
    // console.log(allStudents);

    // Mengubah data berdasarkan id
    // await students.updateOne({ _id: new ObjectId("674c8b4aa0a62a104001ac55") }, { $set: { nama: "Eko Setiawan" } });

    // Mengubah data lebih dari 1, berdasarkan kriteria
    // await students.updateMany({ nama: "Indri" }, { $set: { nama: "Roni" } });

    // Menghapus 1 data
    // await students
    //   .deleteOne({ _id: new ObjectId("674c958cca2ac5b9c2e4fc70") })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Menghapus lebih dari satu data
    await students
      .deleteMany({ nama: "Roni" })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log("Koneksi gagal!", error);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
