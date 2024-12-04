import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

function Home() {
  const allProducts = [
    {
      id: 1,
      name: "Lego City 60106 - Bộ cứu hỏa khởi đầu",
      price: "319.000₫",
      image:
        "https://media3.scdn.vn/img4/2022/01_01/k0gs8kX4Hv1KXpbK2xj5_simg_de2fe0_250x250_maxb.jpg",
      category: "City",
      region: "Miền Trung",
      availability: "Còn hàng",
    },
    {
      id: 2,
      name: "Lego Friends 41123 - Trạm tắm ngựa",
      price: "407.000₫",
      image:
        "https://bizweb.dktcdn.net/thumb/2048x2048/100/004/338/products/do-choi-lego-friends-41123-tram-tam-ngua.png?v=1468568165127",
      category: "Friends",
      region: "Miền Nam", 
      availability: "Còn hàng", 
    },
    {
      id: 3,
      name: "Lego Technic 42164-Xe đua địa hình ",
      price: "405.000₫",
      image: "https://img-cache.coccoc.com/image2?i=1&l=4/301832907",
      category: "Technic",
      region: "Miền Bắc", 
      availability: "Hết hàng", 
    },
    {
      id: 4,
      name: "Lego Ninjago 74912-Cỗ xe sấm set của Jay",
      price: "599.000₫",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRF0CIhQjL_zjWHSDlGiflMC4YjZmuqRtIpw&s",
      category: "Ninjago",
      region: "Miền Nam",
      availability: "Còn hàng", 
    },
    {
      id: 5,
      name: "Lego Minecraft 23678-Ốc đảo sa mạc",
      price: "509.000₫",
      image: "https://img-cache.coccoc.com/image2?i=1&l=0/301858273",
      category: "Minecraft",
      region: "Miền Trung",
      availability: "Còn hàng", 
    },
    {
      id: 6,
      name: "Lego Khủng Long 10965-Tiếng gầm cổ đại",
      price: "409.000₫",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtprfhLSO6YeFA4-mGdUeKWImFFDkJArN2KQ&s",
      category: "Khủng long",
      region: "Miền Bắc", 
      availability: "Còn hàng",
    },
    {
      id: 7,
      name: "Lego Harry Potter 45456-Trường pháp thuật",
      price: "699.000₫",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmQ33fNiMTzTv9z3eshhS0LWgYp1rRxIKkg&s",
      category: "Harry Potter",
      region: "Miền Trung",
      availability: "Còn hàng", 
    },
    {
      id: 8,
      name: "Lego Star Wars 67812-Bóng ma",
      price: "599.000₫",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/004/338/products/lego-star-wars-75048-bong-ma.jpg?v=1442198045923",
      category: "Star Wars",
      region: "Miền Nam", 
      availability: "Còn hàng", 
    },
    {
      id: 9,
      name: "Lego Super Mario 43713-Cùng phiêu lưu nào",
      price: "400.000₫",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-sjmJFGFlp7WfFlHjTTcqEfJVnTuIyasqg&s",
      category: "Mario",
      region: "Miền Bắc", 
      availability: "Còn hàng", 
    },
    {
      id: 10,
      name: "Lego Creator 37890-Người bạn thân thiết",
      price: "300.000₫",
      image: "https://img-cache.coccoc.com/image2?i=1&l=34/1105219596",
      category: "Creator",
      region: "Miền Trung", 
      availability: "Hết hàng", 
    },
    {
      id: 11,
      name: "Lego Disney Princess 13654-Lâu đài băng giá",
      price: "599.000₫",
      image: "https://img-cache.coccoc.com/image2?i=2&l=49/1117912108",
      category: "Disney",
      region: "Miền Nam",
      availability: "Còn hàng", 
    },
    {
      id: 12,
      name: "Lego Architecture 34876-Hejimi",
      price: "877.000₫",
      image: "https://img-cache.coccoc.com/image2?i=2&l=48/1066023973",
      category: "Architecture",
      region: "Miền Bắc",
      availability: "Còn hàng",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const itemsPerPage = 6;

  // Lọc sản phẩm theo tên hoặc thể loại từ khóa tìm kiếm
  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Phân trang sau khi lọc
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Hàm chọn sản phẩm và hiển thị thông tin chi tiết
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="home">
      {/* Thêm phần chào mừng ở trên */}
      <div className="welcome-banner">
        <span className="welcome-text">
          <center>
            CHÀO MỪNG MỌI NGƯỜI ĐẾN VỚI TRANG WEB BÁN SẢN PHẨM LEGO CHÍNH HÃNG
          </center>
        </span>
      </div>

      <h1 className="title">Cửa hàng Lego</h1>
      <SearchBar setSearchTerm={setSearchTerm} />

      {/* Hiển thị sản phẩm đã chọn nếu có */}
      {selectedProduct ? (
        <div className="product-details">
          <h2>{selectedProduct.name}</h2>
          <p>Khu vực: {selectedProduct.region}</p>
          <p>Giá: {selectedProduct.price}</p>
          <p>Tình trạng: {selectedProduct.availability}</p>
          <button>Mua ngay</button>
        </div>
      ) : null}

      <ProductList
        products={paginatedProducts}
        onProductClick={handleProductClick} 
      />

      <div className="pagination">
        <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
          Trang 1
        </button>
        <button onClick={() => setCurrentPage(2)} disabled={currentPage === 2}>
          Trang 2
        </button>
      </div>
    </div>
  );
}

export default Home;
