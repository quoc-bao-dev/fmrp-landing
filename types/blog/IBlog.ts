// ✅ Interface cho Tag
interface IBlogTag {
    id: number;
    name: string;
    color: string; // Màu nền tag
}

// ✅ Interface cho BlogItem
interface IBlogItem {
    id: string; // uuid dạng string
    image: string; // Đường dẫn hình ảnh
    title: string; // Tiêu đề bài viết
    type_blog: IBlogTag[]; // Mảng các tag
    created_date: string; // Ngày tạo bài viết (định dạng dd/mm/yyyy)
    time_read: string; // Thời gian đọc
}

interface IFilterBlog {
    id: string,
    name: string,
    active: number,
    created_at: null,
    countBlog: number


}

export type { IBlogItem, IBlogTag, IFilterBlog }