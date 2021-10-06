/*
- Đầu vào:
Nhập lương một ngày
Nhập số ngày làm
1 nút Tính
 
- Xử lý:
B1: Tạo hàm tính lương
B2: Tạo và gán biến luongNgay bằng với giá trị của ô lương 1 ngày 
B3: Tạo và gán biến ngayLam bằng với giá trị của ô ngày làm
B4: Tạo và gán biến luong = luongNgay * ngayLam 
B5: Xuất biến luong vào ô tổng lương
B4: Gán sự kiến cho nút Tính lương

- Đầu ra:
Tổng lương nhận được 
*/
//B1
function TinhLuong() {
    // B2
    var luongMotNgay = document.getElementById("txtLuongMotNgay").value;
    console.log(luongMotNgay);

    // B3
    var soNgay = document.getElementById("txtSoNgayLam").value;
    console.log(soNgay);

    //B4
    var ketQuaLuong = luongMotNgay * soNgay;
    console.log(ketQuaLuong);

    //B5
    document.getElementById("txtKetQuaLuong").value = ketQuaLuong;
}

//B6
document.getElementById("btnTinh").onclick = TinhLuong;