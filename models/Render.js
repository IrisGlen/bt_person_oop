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
                  <button class="btn btn-danger">Xoá</button>
                  <button class="btn btn-warning">Sửa</button>
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

}