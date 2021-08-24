const Enumeration = Enumeration || {};

/**
 * trạng thải của form: Thêm mới, chỉnh sửa, Nhân bản
 * author: nlanh
 */
Enumeration.formMode = {
    ADD: 1,
    EDIT: 2,
    REPLICATION: 3
}
/**
 * trạng thái dialog: thông báo, xác nhận, cảnh báo
 * author: nlanh
 */
Enumeration.dialogMode = {
    CONFIRM: "confirm",
    INFO: "info",
    WARNING: "warning",
    DANGER: 'danger'
}
/**
 * Loại button success/default
 */
Enumeration.buttonType = {
    SUCCESS: "btn-success",
    DEFAULT: "btn-default"
}
/**
 * tabindex của dialog
 */
Enumeration.tabIndex = {
    dialog: 22
}

/**
 * Kiểu toast message
 */
Enumeration.toastMode = {
    SUCCESS: "success",
    DANGER: "danger",
    INFO: "info",
    WARNING: "warning"
}
/**
 * Mã code tự định nghĩa do server trả về
 */
Enumeration.MISAStatusCode = {
    MISAInvalidInput : 40,
    MISAInvalidValidate : 41,
    MISAInvalidInputRequired : 42,
    MISAInvalidInputUnique : 43,
    MISAServerError : 50,
    MISASuccess : 20,
    MISANotFound : 44
}
/**
 * Http status code
 */
Enumeration.StatusCode = {
    //Thành công
    SUCCESS: 200,
    //Thêm thành công
    SUCCESSINSERT: 201,
    //Lỗi server
    SERVERERROR: 500,
    //Không tìm thấy tài nguyên
    NOTFOUND: 404
}

Enumeration.InputValidate = {
    EMAIL: "email",
    PHONENUMBER: "phone",
    IDENTITY: "identity",
    NUMBER: "number"
}

export default Enumeration;