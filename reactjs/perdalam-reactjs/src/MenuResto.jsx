function MenuResto() {
  const styleMenu = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    borderRadius: "10px",
  };

  const menuMakanan = [
    { namaMenu: "Nasi Goreng", harga: 15000 },
    { namaMenu: "Ayam Bakar", harga: 18000 },
    { namaMenu: "Mie Goreng", harga: 8000 },
    { namaMenu: "Nasi Pecel Lele", harga: 8000 },
    { namaMenu: "Nasi Padang", harga: 10000 },
    { namaMenu: "Rendang", harga: 10000 },
  ];

  const menuMinuman = [
    { namaMenu: "Air Putih", harga: 2000 },
    { namaMenu: "Es Teh", harga: 3000 },
    { namaMenu: "Kopi", harga: 5000 },
    { namaMenu: "Susu", harga: 6000 },
    { namaMenu: "Es Jeruk", harga: 5000 },
  ];

  return (
    <div style={styleMenu}>
      <h1>Menu Kami :</h1>
      <ul>
        {menuMakanan.map((item, i) => {
          return (
            <li key={i}>
              {item.namaMenu} : Rp. {item.harga}
            </li>
          );
        })}
      </ul>
      <h2>Menu Minuman :</h2>
      <ul>
        {menuMinuman.map((item, i) => {
          return (
            <li key={i}>
              {item.namaMenu} : Rp. {item.harga}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuResto;
