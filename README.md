# Phần Mềm Quản Lý Kế Hoạch Triển Khai & Onboarding — Phòng HCQT

Phần mềm WebApp chuyên nghiệp theo dõi tiến độ, phân công nhiệm vụ, quản lý tài liệu và đối soát chính sách triển khai giữa Phòng HCQT và Doanh nghiệp / Đối tác.

---

## 🚀 Cách khởi chạy ứng dụng

### Cách 1: Khởi chạy 1-Click (Khuyên dùng)
- Click đúp vào file **`start_app.bat`**.
- Hệ thống sẽ tự động khởi động máy chủ cục bộ và mở ứng dụng trên trình duyệt web mặc định của bạn tại địa chỉ:  
  👉 **`http://localhost:3000`**

### Cách 2: Mở trực tiếp file HTML (Không cần máy chủ)
- Click đúp vào file **`index.html`** để mở ngay lập tức trên Chrome, Edge, Cốc Cốc, Firefox,...

---

## 🌟 Các tính năng chính

1. **Tổng quan (Dashboard & KPI)**:
   - Theo dõi mốc Go-live mục tiêu và đếm ngược thời gian thực.
   - Vòng tròn tiến độ hoàn thành, số lượng công việc quá hạn, số hạng mục chờ đối tác xử lý, số tài liệu còn thiếu.
   - **Lịch tương tác tháng**: Chuyển tháng, xem các mốc quan trọng, lọc sự kiện theo ngày.
   - Tiến độ phân theo 5 giai đoạn và danh mục công việc sắp đến hạn.

2. **Kế hoạch triển khai (Swimlane & Tasklist)**:
   - **Sơ đồ luồng phối hợp (Swimlane Grid)**: Trực quan hóa các bước theo từng phòng ban và giai đoạn. Click vào từng bước để cuộn và highlight công việc tương ứng.
   - **Kéo-thả (Drag & Drop)**: Dễ dàng sắp xếp lại thứ tự ưu tiên các đầu việc.
   - **Tìm kiếm & Lọc**: Tìm kiếm nhanh theo tên việc, người phụ trách (PIC), lọc theo giai đoạn.
   - Đánh dấu mốc quan trọng (★), cập nhật trạng thái (Chưa bắt đầu, Đang làm, Hoàn thành, Vướng mắc).

3. **Dữ liệu & Chính sách khởi tạo**:
   - Tải về **Biểu mẫu khởi tạo hệ thống (.xlsx)** chuẩn hóa.
   - Ma trận định mức phòng khách sạn (Rank 1 - Rank 4 × Nhóm A - D).
   - Bảng chính sách vé máy bay (Hạng vé, ngân sách tối đa).
   - Thiết lập luồng phê duyệt đa cấp (Thêm / Xóa dòng linh hoạt).

4. **Quy trình hoá đơn & Đối soát**:
   - Quy định thời điểm xuất hoá đơn lưu trú và vé máy bay (T+1).
   - Bảng quy tắc xử lý giao dịch vắt ngang qua 2 kỳ.
   - Lịch chốt 2 kỳ đối soát trong tháng (Kỳ 1: 01-14, Kỳ 2: 15-cuối tháng).
   - Tải về **Mẫu bảng kê dịch vụ (.xlsx)**.
   - Bảng theo dõi hạn mức công nợ và các ngưỡng cảnh báo (70%, 85%, 95%, 100%).

5. **Cơ sở lưu trú & Thư giới thiệu**:
   - Quản lý danh sách khách sạn đối tác (hợp đồng giá, thư giới thiệu).

6. **Tài liệu & Giải đáp nghiệp vụ (FAQ)**:
   - Quản lý trạng thái các tài liệu Phòng HCQT và Đối tác bàn giao.
   - Bộ giải đáp nghiệp vụ thường gặp.

7. **Nội dung thống nhất**:
   - 4 nội dung cốt lõi cần chốt trước khi cấu hình.
   - Bảng ghi nhận biên bản và hành động phát sinh sau các buổi họp.

8. **Lưu trữ & Xuất nhập dữ liệu**:
   - **Tự động lưu (Auto-save)**: Mọi thao tác nhập liệu đều được tự động lưu vào trình duyệt (LocalStorage), không sợ mất dữ liệu khi F5 hay tắt máy.
   - **Lưu HTML**: Xuất toàn bộ phần mềm kèm theo dữ liệu đã nhập thành một file HTML hoàn chỉnh (có thể gửi qua email, Zalo, mở trên bất kỳ máy tính nào).
   - **Mở HTML**: Nhập lại dữ liệu từ file HTML hoặc file JSON đã lưu trước đó.
   - **In / PDF**: Định dạng báo cáo in ấn chuyên nghiệp qua nút "In / PDF".
