// kiểm tra người dùng có nhập vào hay ko?
function kiemTraRong(checkInput, idThongBao) {
    if (checkInput) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).style.display = "none";
        return true;
    } else {
        // alert("Vui long nhap truong du lieu nay");
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Vui long nhap truong du lieu nay";
        return false;
    }
}

function kiemTraEmail(checkInput, idThongBao) {
    var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // sử dụng phương thức .test để kiểm tra email có phù hợp ko 
    // khi sử dụng .test sẽ trả về giá trị true hoặc false
    var hopLe = regexEmail.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).style.display = "none";
        return true;
    } else {
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Vui long nhap dung Email";
        return false;
    }
}

function kiemTraTK(checkInput, idThongBao) {
    if (!checkInput) {
        return;
    }
    var regexTK = /^[0-9]{4,6}$/i;
    var hopLe = regexTK.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).style.display = "none";
        return true;
    } else {
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Vui long nhap dung TK (tu 4 den 6 so)";
        return false;
    }
}

function kiemTraName(checkInput, idThongBao) {
    if (!checkInput) {
        return;
    }
    var regexName = /^[a-zA-Z]*$/i;
    var hopLe = regexName.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).style.display = "none";
        return true;
    } else {
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Vui long nhap ky tu chu";
        return false;
    }
}

function kiemTraPass(checkInput, idThongBao) {
    if (!checkInput) {
        return;
    }
    var regexP = /^(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,10}$/i;
    var hopLe = regexP.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).style.display = "none";
        return true;
    } else {
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Vui long nhap 6-10 ky tu (1 so, 1 in hoa, 1 dac biet)";
        return false;
    }
}

function kiemTraDate(checkInput, idThongBao) {
    if (!checkInput) {
        return;
    }
    var regexD = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/i;
    var hopLe = regexD.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).style.display = "none";
        return true;
    } else {
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Vui long nhap kieu date dd/mm/yyyy";
        return false;
    }
}

function kiemTraLuong(checkInput, idThongBao) {
    if (!checkInput) {
        return;
    }
    var regexLuong = /^(100000\d|10000[1-9]\d|1000[1-9]\d{2}|100[1-9]\d{3}|10[1-9]\d{4}|1[1-9]\d{5}|[2-9]\d{6}|1\d{7}|20000000)$/i;
    var hopLe = regexLuong.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).style.display = "none";
        return true;
    } else {
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Vui long nhap luong tu 1000000 den 20000000";
        return false;
    }
}

function kiemTraGioLam(checkInput, idThongBao) {
    if (!checkInput) {
        return;
    }
    var regexGioLam = /^(8[0-9]|9[0-9]|1[0-9]{2}|200)$/i;
    var hopLe = regexGioLam.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        document.getElementById(idThongBao).style.display = "none";
        return true;
    } else {
        document.getElementById(idThongBao).style.display = "block";
        document.getElementById(idThongBao).innerHTML = "Vui long nhap gio lam tu 80 den 200";
        return false;
    }
}