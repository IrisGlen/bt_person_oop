import Person from '../models/person.js';
import Render from '../models/render.js';

// sự kiện thêm 
let render = new Render();

render.layLocal();
// document.getElementById('btnThem').click = () => { document.getElementById('ma').disabled = false;
// document.getElementById("inputForm").reset(); 
//  }

document.getElementById('btnThemNV').addEventListener('click', () => {
  
  let arrInput = document.querySelectorAll(
        '#inputForm input, #inputForm select, #inputForm textarea'
      );
      console.log(arrInput);
    let person = new Person();
    for (let item of arrInput) {
        let { id, value } = item;
        person[id] = value;
      }
      
    render.themNguoi(person);
    render.renderLayout();
    render.luuLocal();
    document.getElementById('btnDong').click();
});

window.xoaNguoiDung = (ma) => {
  render.xoaNguoiDung(ma);
};

window.layThongTinNguoiDung = (ma) => {
  render.layThongTinNguoiDung(ma);
};

document.getElementById('btnEditUser').onclick = () => {
  // lấy dữ liệu người dùng
  let arrInput = document.querySelectorAll(
    '#inputForm input, #inputForm select, #inputForm textarea'
  );
  console.log(arrInput);
  let personEdit = new Person();
  // dùng vòng lặp để lấy dữ liệu từ arrInput và thêm vào đối tượng món ăn
  for (let item of arrInput) {
    let { id, value } = item;
    personEdit[id] = value;
  }
  console.log(personEdit);
  render.chinhSuaNguoiDung(personEdit);
};

window.timKiemUser = (event) => {
  let value = event.target.value;
  console.log(value);
  render.timKiemUser(value);
};