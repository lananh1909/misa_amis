import Resources from '../script/common/resource-vi'

const data = {
    /**
     * Giới tính
     */
    genders: [
        {
            value: 1,
            text: Resources.Gender.Male
        },
        {
            value: 0,
            text: Resources.Gender.Female
        },
        {
            value: 2,
            text: Resources.Gender.Other
        }
    ],
    /**
     * Lựa chọn kích thước trang
     */
    pageSizeOptions: [
        {
            value: 10,
            text: Resources.PageSizeOptions[10]
        },
        {
            value: 20,
            text: Resources.PageSizeOptions[20]
        },
        {
            value: 30,
            text: Resources.PageSizeOptions[30]
        },
        {
            value: 50,
            text: Resources.PageSizeOptions[50]
        },
        {
            value: 100,
            text: Resources.PageSizeOptions[100]
        },
    ]
}

export default data;