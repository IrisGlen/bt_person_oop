import Person from '../models/person.js';
import Render from '../models/render.js';

// sự kiện thêm 
let render = new Render();

render.layLocal();

document.getElementById('btnThemNV').addEventListener('click', () => {
    let arrInput = document.querySelectorAll(
        '#myForm input, #myForm select, #myForm textarea'
      );
    let person = new Person();
    for (let item of arrInput) {
        // let id = item.id;
        // let value = item.value;
        let { id, value } = item;
        // id : foodID , value :10
        // monAn.foodID = 10;
        person[id] = value;
      }
      console.log(person);
    render.themNguoi(person);
    render.renderLayout();
    render.luuLocal();
    document.getElementById('btnDong').click();
});

// /** Dự án quản lý nhân viên
//  * Input : Du liẹu nguoi dung nhap vao: taiKhoan, Hoten.. (theo layout)
//  * 
//  * Output: xuất ra kết quả là thông tin nhân viên
//  */
// var arrNhanVien = [];

// getStorage();
// console.log(arrNhanVien);
// renderGiaoDien();

// function renderGiaoDien(){
//     var content ="";
//     // khi chúng ta gọi dữ liệu từ localStorge lên và sd, các obj bên trong mảng arrNhanVien đã bị mất đi các phương thức
//     //  idea là sẽ tạo ra một đối tượng mới từ lớp đối tượng NhanVien đang có và gán cho đối tượng đó tất cả thuộc tính đang có của từng obj bên trong arrNhanVien sau khi gọi getStorge

//     for (var i = 0; i < arrNhanVien.length; i++ ) {
//         var themNhanVien = new NhanVien();
//         console.log(themNhanVien);
//         var NhanVienItem = arrNhanVien[i];
//         console.log(NhanVienItem);
//         // Object.assign giúp clone ra 1 obj mới các thuộc tính 
//         Object.assign(themNhanVien, NhanVienItem);
//         var tinhTongLuong = themNhanVien.tinhTongLuong();
//         var xepLoai = themNhanVien.xepLoai();
//         content += `
//         <tr>
//             <td>${themNhanVien.taiKhoan}</td>
//             <td>${themNhanVien.hoTen}</td>
//             <td>${themNhanVien.email}</td>
//             <td>${themNhanVien.ngayLam}</td>
//             <td>${themNhanVien.chucVu}</td>
//             <td>${tinhTongLuong}</td>
//             <td>${xepLoai}</td>
//             <td>
//                 <button onclick="xoaNhanVien('${themNhanVien.taiKhoan}')" class="btn btn-danger">
//                 Delete
//                 </button>
//                 <button onclick="editNhanVien('${themNhanVien.taiKhoan}')" class="btn btn-warning" data-toggle="modal" data-target="#myModal">
//                 Edit
//                 </button>
//             </td>
//         </tr>
//         `;
//     }
//     document.getElementById("tableDanhSach").innerHTML = content;
//     // console.log(themNhanVien);
// }

// function themNhanVien(){
//     // lấy dữ liệu người dùng
//     nhanVien = layGiaTriInput();
//     console.log(nhanVien);
//     // nếu undefine thì chặn hành động bên dưới
//     if (nhanVien) {
//         // thêm sv vào mảng
//         arrNhanVien.push(nhanVien);
//         saveStorage(arrNhanVien);
//         // render giao diện
//         renderGiaoDien();
//         // reset input sau khi thêm thành công
//         // ganGiaTriChoInput("", "", "","", "", "", "", "");
//         document.getElementById("inputForm").reset();
//     }  
// }

// // chạy vòng lặp để duyệt mảng
// // vòng lặp check điều kiện, mã sv lúc bấm trùng mã sv bất kỳ, trả về index của ma sv, nếu ko thì trả về -1 (ko tìm thấy )
// // CRUD (create, read, delete, update)
// // xoá sv khỏi mảng

// function xoaNhanVien(taiKhoan) {
//     var index = timViTriSV(taiKhoan);
//     if (index != -1 ) {
//         arrNhanVien.splice(index, 1);
//         saveStorage(arrNhanVien);
//         renderGiaoDien();
//     } 
// }
// // tìm vị trí phần tử
// // cho nút cập nhật hiển thị
// // hiển thị thông tin cho người dùng chỉnh sửa 
// function editNhanVien(taiKhoan) {
//     var index = timViTriSV(taiKhoan);
//     // hiển thị button
//     // document.getElementById("btnSuaSV").style.display = "inline-block";
//     var nhanVien = arrNhanVien[index];
//     ganGiaTriChoInput(
//         nhanVien.taiKhoan,
//         nhanVien.hoTen,
//         nhanVien.email,
//         nhanVien.matKhau,
//         nhanVien.ngayLam,
//         nhanVien.luongCoBan,
//         nhanVien.chucVu,
//         nhanVien.gioLam,
//     );
//     document.getElementById("tknv").readOnly = true;
// }

// function capNhatThongTinSV(){
//     // lấy giá trị người dùng
//     NhanVienDaChinhSua = layGiaTriInput();
//     console.log(NhanVienDaChinhSua.taiKhoan);
//     // tìm vị trí sv
//     var index = timViTriSV(NhanVienDaChinhSua.taiKhoan);
    
//     console.log(NhanVienDaChinhSua);
//     // sau khi tìm được vi tri index cua Ptử trong mảng => thay thế giá trị mới
//     arrNhanVien[index] = NhanVienDaChinhSua;
//     saveStorage(arrNhanVien);
//     // render giao diện
//     renderGiaoDien();
// }
// // document.getElementById("btnSuaSV").onclick = capNhatThongTinSV();
