/*
Đầu vào 
- Nhập tiền cần đổi 
- Nhấn tính để xuất ra số tiền đã được quy đổi

Xử lý
B1 Tạo hàm liên chuyển đổi USD sang VND
B2 Tạo biến tienUSD và nhận giá trị từ ô tiền đầu vào
B3 Tạo biến hằng TIGIA_USD_VND = 23500 và để ngoài hàm
B3 Tạo biến tienVND = tienUSD * TIGIA_USD_VND
B4 Xuất giá trị của tienVND vào ô kết quả
B5 Gán sự kiện cho nút tính

Đầu ra 
- Số tiền quy đổi ra VND
*/
//B3
const TIGIA_USD_VND = Number(23500);

//B1
function QuyDoiTien() {
    //B2
    var tienUSD = document.getElementById("txtTienUSD").value;

    //B3
    var tienVND = Number(tienUSD) * TIGIA_USD_VND;

    //B4
    document.getElementById("txtTienVND").value = tienVND;

}

// B5
document.getElementById("btnTinh").onclick = QuyDoiTien;
