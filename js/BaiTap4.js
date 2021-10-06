/*
Đầu vào 
- Nhập chiều dài, chiều rộng của hình chữ nhật
- Nhấn nút tính để chương trình xuất ra chu vi, diện tích của hình chữ nhật

Xử lý
B1 Tạo hàm TinhDienTichChuVi

B2 
Tạo biến chieuDai và gán giá trị từ ô chiều dài
Tạo biến chieuRong và gán giá trị từ ô chiều rộng

B3
chuViHCN = (chieuDai + chieuRong) * 2 
dienTichHCN = chieuDai * chieuRong

B4
Xuất kết quả của diện tích và chu vi hình chữ nhật vào ô kết quả  

B5
Gán sự kiện vào nút tính gọi đến hàm TinhDienTichChuVi

Đầu ra 
- Xuất ra kết quả của phép toán

*/
//B1
function TinhDienTichChuVi() {
    //B2
    var chieuDai = document.getElementById("txtChieuDai").value;
    var chieuRong = document.getElementById("txtChieuRong").value;

    //B3
    var chuViHCN = (Number(chieuDai) + Number(chieuRong)) * 2;
    var dienTichHCN = chieuDai * chieuRong;

    //B4
    document.getElementById("txtKetQua").value = "Chu Vi: " + chuViHCN + "m ; " + "Diện tích: " + dienTichHCN + "m2 ; ";
}

//B5
document.getElementById("btnTinh").onclick = TinhDienTichChuVi;