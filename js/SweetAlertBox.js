function Alert_Error(caption, msg)
{
    swal({ title: caption, text: msg, type: 'error', confirmButtonColor: '#518599', confirmButtonText: 'OK' });
}
function Alert_Success(caption, msg)
{
    swal({ title: caption, text: msg, type: 'success', confirmButtonColor: '#518599', confirmButtonText: 'Done' });
}
function Alert_Warning(caption, msg)
{
    swal({ title: caption, text: msg, type: 'warning', confirmButtonColor: '#518599', confirmButtonText: 'OK' });
}
function Alert_Invalid_ID_DOB(caption, msg)
{
    swal({ title: caption, text: msg, type: 'error', confirmButtonColor: '#518599', confirmButtonText: 'Fix it' }, function (isConfirm) { if (isConfirm) { window.location.href = 'products.aspx'; } });
}
function Alert_Error_ar(caption, msg) {
    swal({ title: caption, text: msg, type: 'error', confirmButtonColor: '#518599', confirmButtonText: 'موافق' });
}
function Alert_Success_ar(caption, msg) {
    swal({ title: caption, text: msg, type: 'success', confirmButtonColor: '#518599', confirmButtonText: 'تم' });
}
function Alert_Warning_ar(caption, msg) {
    swal({ title: caption, text: msg, type: 'warning', confirmButtonColor: '#518599', confirmButtonText: 'موافق' });
}
function Alert_Invalid_ID_DOB_ar(caption, msg)
{
    swal({ title: caption, text: msg, type: 'error', confirmButtonColor: '#518599', confirmButtonText: 'التعديل' }, function (isConfirm) { if (isConfirm) { window.location.href = 'products_ar.aspx'; } });
}

function Alert_Account(mobile_num)
{ 
    swal({ title: "You already have a username.", text: " Your mobile no. " + mobile_num + " . Do you want to reset your password? ", type: "warning", showCancelButton: true, confirmButtonColor: "#518599", confirmButtonText: "Reset Password!", cancelButtonText: "Cancel", closeOnConfirm: true, closeOnCancel: true }, function (isConfirm) { if (isConfirm) { window.location.href = 'account_password_reset.aspx'; } });
}

function Alert_Account_activate() {
    swal({ title: "User Has been Locked!", text: "The User Has been Locked, please go to forgot password to activate it.", type: "warning", showCancelButton: true, confirmButtonColor: "#518599", confirmButtonText: "Reset Password!", cancelButtonText: "Cancel", closeOnConfirm: true, closeOnCancel: true }, function (isConfirm) { if (isConfirm) { window.location.href = 'account_password_reset.aspx'; } });
}

function Alert_No_Mobile()
{
    swal({ title: "Please visit the branch", text: "To update your mobile number.", type: "warning", confirmButtonColor: "#518599", confirmButtonText: "OK!", closeOnConfirm: true }, function (isConfirm) { if (isConfirm) { window.location.href = 'index.aspx'; } });
}

function Alert_Registration()
{
    swal({ title: "", text: "You don't have a username. would you like to register ", type: "warning", showCancelButton: true, confirmButtonColor: "#518599", confirmButtonText: "Registration !", cancelButtonText: "Cansel", closeOnConfirm: true, closeOnCancel: true }, function (isConfirm) { if (isConfirm) { window.location.href = 'account_registration.aspx'; } });
}

function Alert_Registration_ar() {
    swal({ title: "", text: "ليس لديك حساب، هل تود تسجيل مستخدم جديد. ", type: "warning", showCancelButton: true, confirmButtonColor: "#518599", confirmButtonText: "تسجيل مستخدم جديد !", cancelButtonText: "الغاء", closeOnConfirm: true, closeOnCancel: true }, function (isConfirm) { if (isConfirm) { window.location.href = 'account_registration_ar.aspx'; } });
}

function Alert_Account_ar(mobile_num)
{
    swal({ title: "لديك بالفعل اسم مستخدم.", text: "رقم الجوال الخاص بك هو  " + mobile_num + " . هل ترغب في الحصول على كلمة المرور الخاصة بك؟", type: "warning", showCancelButton: true, confirmButtonColor: "#518599", confirmButtonText: "إستعادة كلمة المرور!", cancelButtonText: "الغاء", closeOnConfirm: true, closeOnCancel: true }, function (isConfirm) { if (isConfirm) { window.location.href = 'account_password_reset_ar.aspx'; } });
}

function Alert_Account_activate_ar() {
    swal({ title: "الحساب مجمد.", text: "لقد تم تجميد الحساب ،يرجى الدخول الى نسيت كلمة المرور لتفعيله", type: "warning", showCancelButton: true, confirmButtonColor: "#518599", confirmButtonText: "إستعادة كلمة المرور!", cancelButtonText: "الغاء", closeOnConfirm: true, closeOnCancel: true }, function (isConfirm) { if (isConfirm) { window.location.href = 'account_password_reset_ar.aspx'; } });
}

function Alert_No_Mobile_ar()
{
    swal({ title: "الرجاء زيارة الفرع", text: "لتحديث رقم الجوال الخاص بك.", type: "warning", confirmButtonColor: "#518599", confirmButtonText: "موافق!", closeOnConfirm: true }, function (isConfirm) { if (isConfirm) { window.location.href = 'index_ar.aspx'; } });
}

function showWaitMessage() {
    if (chkFormValide() == true) {
        $('#PleaseWait').css('visibility', 'visible');
        //$('#PleaseWait').modal('show');
    }
}

function hideWaitMessage() {
    $('#PleaseWait').css('visibility', 'hidden');
    //$('#PleaseWait').modal('hide');
}

function chkFormValide() {
    if ($('.contentAreaWide').find('span[style*="red"][style*="inline"]').length > 0) {
        return false;
    } else {
        return true;
    }
}