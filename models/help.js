// hàm giúp gán giá trị mới cho input
function ganGiaTriChoInput(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam) {
    document.getElementById("tknv").value = taiKhoan;
    document.getElementById("name").value = hoTen;
    document.getElementById("email").value = email;
    document.getElementById("password").value = matKhau;
    document.getElementById("datepicker").value = ngayLam;
    document.getElementById("luongCB").value = luongCoBan;
    document.getElementById("chucVu").value = chucVu;
    document.getElementById("gioLam").value = gioLam;
}

// hàm tìm vị trí sv dựa vào mã sv
function timViTriSV(taiKhoan) {
    var viTri = -1;
    arrNhanVien.forEach(function (item, index) {
        if (item.taiKhoan == taiKhoan) {
            viTri = index;
        }
    });
    return viTri;
}

// lấy giá trị input
function layGiaTriInput() {
    // lấy giá trị input
    var _taiKhoan = document.getElementById("tknv").value;
    console.log(_taiKhoan);
    var _hoTen = document.getElementById("name").value;
    console.log(_hoTen);
    var _email = document.getElementById("email").value;
    console.log(_email);
    var _matKhau = document.getElementById("password").value;
    console.log(_matKhau);
    var _ngayLam = document.getElementById("datepicker").value;
    console.log(_ngayLam);
    var _luongCoBan = document.getElementById("luongCB").value * 1;
    console.log(_luongCoBan);
    var _chucVu = document.getElementById("chucVu").value;
    console.log(_chucVu);
    var _gioLam = document.getElementById("gioLam").value * 1;
    console.log(_gioLam);

    var valid = true;

    
        // let x = document.forms["myForm"]["tk"].value;
        // if (x == "") {
        //     // document.getElementById("tbTKNV").style.display = '';
        //     document.getElementById("tbTKNV").style.visibility = "visible";
        //     document.getElementById("tbTKNV").innerHTML = "Vui long input";
        //   return false;
        // }
      
    valid = kiemTraRong(_taiKhoan, "tb_tk") &
        kiemTraRong(_hoTen, "tbTen") &
        kiemTraRong(_email, "tbEmail") &
        kiemTraRong(_matKhau, "tbMatKhau") &
        kiemTraRong(_ngayLam, "tbNgay") &
        kiemTraRong(_luongCoBan, "tbLuongCB") &
        kiemTraRong(_chucVu, "tbChucVu") &
        kiemTraRong(_gioLam, "tbGiolam");

    valid = kiemTraTK(_taiKhoan, "tb_tk");
    valid = kiemTraName(_hoTen, "tbTen");
    valid = kiemTraEmail(_email, "tbEmail");
    valid = kiemTraPass(_matKhau, "tbMatKhau");
    valid = kiemTraDate(_ngayLam, "tbNgay");
    valid = kiemTraLuong(_luongCoBan, "tbLuongCB");
    valid = kiemTraGioLam(_gioLam, "tbGiolam");
    // kiểm tra valid, nếu valid là false thì return

    if (!valid) {
        return;
    }
    
    var themNhanVien = new NhanVien(
        _taiKhoan,
        _hoTen,
        _email,
        _matKhau,
        _ngayLam,
        _luongCoBan,
        _chucVu,
        _gioLam,
    );
    return themNhanVien;
    console.log(themNhanVien);
}

// hàm lưu dữ liệu xuống local
function saveStorage(arrNhanVien) {
    localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
}

// hàm lấy giá trị từ local lên và sd
function getStorage(arrNhanVien) {
    // check điều kiện nếu như key gọi tới ko có dưới local
    var arrNhanVienLocal = localStorage.getItem("arrNhanVien");
    // nếu như arrNhanVienLocal có giá trị sẽ lấy giá trị đó gán mới vào mảng arrNhanVien
    if (arrNhanVienLocal != null) {
        arrNhanVien = arrNhanVienLocal;
    }
}

// function searchNV(arrNhanVien) {
//     var str = document.getElementById("searchName").value;
//     var pos     = str.search('freetuts.net');
// }