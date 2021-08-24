const Resources = Resources || {};

Resources.Gender = {
    Male: "Nam",
    Female: "Nữ",
    Other: "Khác"
}

Resources.PageSizeOptions = {
    10: '10 bản ghi trên 1 trang',
    20: '20 bản ghi trên 1 trang',
    30: '30 bản ghi trên 1 trang',
    50: '50 bản ghi trên 1 trang',
    100: '100 bản ghi trên 1 trang'
}

/**
 * Tên các cột của bảng nhân viên
 */
Resources.TableColumn = {
    EmployeeCode: "Mã nhân viên",
    EmployeeName: "Tên nhân viên",
    Gender: "Giới tính",
    DateOfBirth: "Ngày sinh",
    IdentityNumber: "Số CMND",
    Position: "Chức danh",
    DepartmentName: "Tên đơn vị",
    BankAccountNumber: "Số tài khoản",
    BankName: "Tên ngân hàng",
    BankBranchName: "Chi nhánh TK ngân hàng",
    Function: "Chức năng"
}

/**
 * Resource cho form nhân viên
 */
Resources.EmployeeForm = {
    Title: "Thông tin nhân viên",
    TooltipClose: "Đóng",
    TooltipHelp: "Giúp",
    EmployeeCode: "Mã",
    EmployeeName: "Tên",
    Gender: "Giới tính",
    DateOfBirth: "Ngày sinh",
    IdentityNumber: "Số CMND",
    IdentityDate: "Ngày cấp",
    IdentityPlace: "Nơi cấp",
    Address: "Địa chỉ",
    PhoneNumber: "ĐT di động",
    TelephoneNumber: "ĐT cố định",
    FullPhoneNumber: "Điện thoại di động",
    FullTelephoneNumber: "Điện thoại cố định",
    Email: "Email",
    Position: "Chức danh",
    DepartmentName: "Đơn vị",
    BankAccountNumber: "Tài khoản ngân hàng",
    BankName: "Tên ngân hàng",
    BankBranchName: "Chi nhánh",
    IsCustomer: "Là khách hàng",
    IsProvider: "Là nhà cung cấp"
}
/**
 * Resource cho button trong form nhân viên
 */
Resources.EmployeeFormButton = {
    Save: "Cất",
    SaveAndCreate: "Cất và thêm",
    Cancel: "Hủy"
}
/**
 * Button trong dialog confirm 
 */
Resources.DialogConfirmButton = {
    Confirm: "Có",
    UnConfirm: "Không",
    Cancel: "Hủy"
}
/**
 * Button trong dialog info
 */
Resources.DialogInfoButton = {
    Confirm: "Đồng ý"
}
/**
 * Button trong dialog danger
 */
Resources.DialogDangerButton = {
    Confirm: "Đóng"
}
/**
 * button trong dialog warning
 */
Resources.DialogWarningButton = {
    Confirm: "Có",
    UnConfirm: "Không"
}
/**
 * Message hiện toast
 */
Resources.Message = {
    SuccessAddEmployee: "Thêm mới nhân viên thành công",
    SuccessEditEmployee: "Sửa nhân viên thành công",
    SuccessDeleteEmployee: "Xóa nhân viên thành công",
    FailDeleteEmployee: "Xóa nhân viên thất bại",
    ServerErrorMessage: "Đã có lỗi xảy ra, vui lòng liên hệ MISA"
}
/**
 * Resource trong trang employee
 */
Resources.Employee = {
    AddNewBtn: "Thêm mới nhân viên",
    SearchPlaceholder: "Tìm theo mã, tên nhân viên hoặc số điện thoại" ,
    TooltipRefresh: "Lấy lại dữ liệu",
    Title: "Nhân viên"
}
/**
 * Message trong dialog
 */
Resources.DialogMessage = {
    ChangeData: "Dữ liệu đã bị thay đổi. Bạn có muốn cất không?",
    DeleteEmployee: "bạn có thực sự muốn xóa Nhân viên <%%> không?"
}

Resources.Menu = {
    DashBoard: "Tổng quan",
    Cash: "Tiền mặt",
    Bank: "Tiền gửi",
    Buy: "Mua hàng",
    Sell: "Bán hàng",
    Invoice: "Quản lý đơn",
    Stock: "Kho",
    Tool: "Công cụ dụng cụ",
    FixedAssets: "Tài sản cố định",
    Tax: "Thuế",
    Price: "Giá thành",
    General: "Tổng hợp",
    Budget: "Ngân sách",
    Report: "Báo cáo",
    Finance: "Phân tích tài chính"
}

Resources.ComboboxError = "Dữ liệu %% không tồn tại trong hệ thống";
Resources.ValidateError = {
    Require: "%% không được để trống",
    PhoneNumber: "Số điện thoại không đúng định dạng",
    IdentityNumber: "Số CMND phải có 9 hoặc 12 chữ số",
    Email: "Emailkhông đúng định dạng"
}

Resources.Paging = {
    Prev: "Trước",
    Next: "Sau",
    Total: "Tổng số",
    Record: "bản ghi"
}

Resources.EmployeeContext = {
    Replication: "Nhân bản",
    Delete: "Xóa",
    StopUse: "Ngừng sử dụng"
}
export default Resources;