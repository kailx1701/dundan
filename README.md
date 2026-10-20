# Đêm pháo hoa của Đủn 🎆

Website chúc mừng 20/10, viết bằng HTML/CSS/JavaScript thuần.

## Chạy trên máy

**Không nên double-click `index.html`.** Khi mở bằng `file://`, trình duyệt có thể chặn hoặc làm câm nhạc qua Web Audio, đồng thời video và các tài nguyên đa phương tiện hoạt động kém ổn định. Chạy `start.bat` trên Windows (hoặc `start.sh` trên macOS/Linux), rồi mở `http://localhost:8080`. Cần Python; nếu thiếu Python, script thử dùng `npx serve`. Có thể dùng VS Code Live Server thay thế.

Để xem thông tin chẩn đoán, thêm `?debug=1` vào địa chỉ, ví dụ `http://localhost:8080/?debug=1`. Bảng hiển thị protocol, trạng thái tải từng bài, trạng thái AudioContext, đường dẫn video, codec, error code, readyState và networkState.

## Kiểm tra trên điện thoại / deploy

Kéo thư mục dự án lên [Netlify Drop](https://app.netlify.com/drop), đợi deploy xong rồi mở URL HTTPS trên điện thoại. Đảm bảo các thư mục `assets`, `css`, `js` và file HTML cùng được tải lên. Đây cũng là cách kiểm tra video/âm thanh trong môi trường gần với deploy thật.

## Sửa 5 trang lời chúc

Mở `js/config.js` và chỉnh mảng `wishPages`. Mỗi phần tử có:

- `id`: mã trang ổn định.
- `label`: nhãn phía trên headline.
- `headline`: tiêu đề lớn. Có thể dùng emoji; chúng được tách riêng để giữ màu emoji.
- `lines`: các câu hiện lần lượt. Dùng `{friendPronoun}` / `{selfPronoun}` để lấy cách xưng hô từ cấu hình đầu file.
- `theme`: `background`, `accent`, `secondary`, `particles` để đổi màu sân khấu và pháo.
- `fx`: `burst`, `fire`, `grand`, `halo` hoặc `hearts`.
- `sound`: kiểu âm thanh tổng hợp lúc trang xuất hiện.

Công tắc `ui.showPageLabel`, `ui.showWishLines` và `ui.showEqualizer` bật/tắt nhãn trang, lời chúc và equalizer. Hiện cả 5 trang đều bật nhãn/lời chúc, equalizer đang tắt. Có thể thêm/bớt câu trong `lines`. `autoAdvance` bật/tắt tự chuyển trang và `autoAdvanceMs` chỉnh thời gian (mặc định 8200 ms). Bất kỳ thao tác điều hướng tay nào sẽ tắt tự chuyển trong lượt xem đó. Nút mở video xuất hiện sau khi hết câu ở trang 5. Thay `signature` để ghi tên người gửi; thay các câu có comment `TODO` bằng kỷ niệm riêng nếu muốn.

Điều hướng bằng **Trước/Tiếp**, năm chấm, vuốt ngang hoặc phím mũi tên trái/phải. Nút **Bỏ qua** đưa tới trang cuối.

## Media

- Nhạc: `assets/music/beauty-and-a-beat.mp3`, cấu hình tại `music.tracks` trong `js/config.js` (`startAt`, `bpm`, `gain`).
- Video: `assets/video/dun-dance.mp4`, cấu hình ở `video.src` và `video.sources`.
- Tất cả đường dẫn media tương đối với thư mục dự án. Đổi tên/tệp thì cập nhật đường dẫn trong config. MP4 H.264 + AAC có độ tương thích rộng.

Nhạc Justin Bieber có bản quyền; chỉ chia sẻ khi bạn có quyền sử dụng.
