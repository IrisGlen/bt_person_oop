import Person from './person.js';


export default class Render {
    constructor() {
      this.arrListNguoi = [];
    }
    themNguoi(person) {
      this.arrListNguoi.push(person);
      console.log(this.arrListNguoi);
    }
    renderLayout() {
      let content = this.arrListNguoi.map((item, index) => {
        let person = new Person();
        Object.assign(person, item);
        console.log(person);
        // console.log(item);
        let {
          ma,
          hoTen,
          diaChi,
          email
        } = person;
  
        return `
        <tr>
                  <td>${ma}</td>
                  <td>${hoTen}</td>
                  <td>${diaChi}</td>
                  <td>${email}</td>
                 
                  <td>
                  <button class="btn btn-danger" onclick="xoaNguoiDung('${ma}')">Xoá</button>
                  <button class="btn btn-warning" onclick="layThongTinNguoiDung('${ma}')">Sửa</button>
                  </td>
        </tr>
        `;
      });
      document.getElementById('tableDanhSach').innerHTML = content;
    }


luuLocal() {
  localStorage.setItem('arrListNguoi', JSON.stringify(this.arrListNguoi));
}
layLocal() {
  let menuLocal = JSON.parse(localStorage.getItem('arrListNguoi'));
  // kiểm tra xem có value bên dưới local hay không, nếu có mới gán giá trị vào mảng arrMenu
  if (menuLocal) {
    this.arrListNguoi = [...menuLocal];
    this.renderLayout();
  }
}
xoaNguoiDung(ma) {
  // dùng hàm findIndex để tìm vị trí của món ăn cần xoá trong mảng và sau đó dùng hàm splice để xoá
  let index = this.arrListNguoi.findIndex((item) => item.ma == ma);
  if (index != -1) {
    this.arrListNguoi.splice(index, 1);
    this.renderLayout();
    this.luuLocal();
  }
}
layThongTinNguoiDung(ma) {
  // dùng hàm find để tìm ra phần tử bên trong array
  let user = this.arrListNguoi.find((item) => item.ma == ma);
  if (user) {
    // dom tới nút button thêm món ăn để mở modal sau đó hiển thị dữ liệu lên các input cho người chỉnh sửa
    document.getElementById('btnThem').click();
    let arrInput = document.querySelectorAll(
      '#inputForm input, #inputForm select, #inputForm textarea'
    );
    for (let item of arrInput) {
      // let id = item.id
      let { id } = item;
      // item sẽ có id là foodID , item.value = monAn.foodID
      item.value = user[id];
    }
    document.getElementById('ma').disabled = true;
  }
}
chinhSuaNguoiDung(user) {
  let index = this.arrListNguoi.findIndex((item) => item.ma == user.ma);
  console.log(index);
  if (index != -1) {
    this.arrListNguoi[index] = user;
    this.renderLayout();
    this.luuLocal();
    document.getElementById("inputForm").reset();  
    document.getElementById('btnDong').click();
  } else {
    alert ("Khong the chinh sua");
  }
}
}