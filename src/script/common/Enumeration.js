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
    dialog: 21
}

export default Enumeration;