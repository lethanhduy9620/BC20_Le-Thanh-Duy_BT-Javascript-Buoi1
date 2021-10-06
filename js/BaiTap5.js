/*
Đầu vào 
- Nhập vào một số có 2 chữ số vào ô nhập giá trị
- Nhấn nút tính

Xử lý
B1: Tạo hàm TinhTong2KySo
B2: Tạo biến so và gán giá trị cho biến so từ ô nhập giá trị 
B3: Tạo biến chuc và chuc = so/10 để lấy được giá trị ở hàng chục
B4: Tạo biến donVi và donVi = so%10 để lấy giá trị ở hàng đơn vị
B5: Tạo biến tong và tong = chuc + donVi
B6: Xuất kết quả của tổng vào ô kết quả 
B7: Tạo sự kiện cho nút Tính

Đầu ra 
- Xuất kết quả của tổng 2 chữ số vào ô kết quả
*/
//B1
function TinhTong2KySo() {
    //B2
    var so = document.getElementById("txtSo").value;

    //B3
    var chuc = Math.floor(so / 10);

    //B4
    var donVi = so % 10;

    //B5
    var tong = Number(chuc) + Number(donVi);

    //B6
    document.getElementById("txtKetQua").value = tong

}

//B7
document.getElementById("btnTinh").onclick = TinhTong2KySo;