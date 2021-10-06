/*
Đầu vào:
Nhập 5 số vào 5 ô giá trị và nhấp nút tính 

Xử lý:
B1: Tạo hàm tính kết quả bao gồm:
B2: Lấy giá trị của 5 số từ 5 ô số ở đầu vào và gán cho các biến number1, number2, number3, number4, number5
B3: Tính trung bình cộng của 5 số average = (Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5)) / 5
B4: Xuất kết quả ra ô kết quả 
B5: Tạo sự kiện cho nút tính trung bình

Đầu ra:
Xuất ra kết quả trung bình của 5 số ở ô kết quả
*/

//B1
function TinhTrungBinhNamSo() {
    //B2
    var number1 = document.getElementById("txtSo1").value;
    var number2 = document.getElementById("txtSo2").value;
    var number3 = document.getElementById("txtSo3").value;
    var number4 = document.getElementById("txtSo4").value;
    var number5 = document.getElementById("txtSo5").value;

    //B3
    var average = (Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5)) / 5;

    //B4
    document.getElementById("txtKetQua").value = average;
}

//B5
document.getElementById("btnTinh").onclick = TinhTrungBinhNamSo;