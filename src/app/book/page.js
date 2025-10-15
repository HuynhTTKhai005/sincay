export default function Book() {
  return (
    <>
      <section id="book-a-table" className="book-a-table section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <p>
            <span className="description-title">ĐẶT BÀN</span>
          </p>
          <h2>Điền thông tin đặt bàn tại đây</h2>
        </div>

        <div className="container">
          <div className="row g-0" data-aos="fade-up" data-aos-delay={100}>
            {/* Image Section */}
            <div
              className="col-lg-7 reservation-img shadow-lg"
              style={{ backgroundImage: "url(/img/book_1.jpg)" }}
              role="img"
              aria-label="Không gian nhà hàng Sincay"
            />

            {/* Form Section */}
            <div className="col-lg-5 d-flex align-items-center reservation-form-bg" data-aos="fade-up" data-aos-delay={200}>
              <form action="forms/book-a-table " method="post" role="form" className="php-email-form">
                <div className="row gy-4">
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Tên"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Số điện thoại"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      id="date"
                      placeholder="Ngày"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="time"
                      className="form-control"
                      name="time"
                      id="time"
                      placeholder="Giờ"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      name="people"
                      id="people"
                      placeholder="Số lượng khách"
                      min="1"
                      max="20"
                      required
                    />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Ghi chú đặc biệt, yêu cầu về chỗ ngồi, dịp kỷ niệm..."
                    defaultValue={""}
                  />
                </div>

                <div className="text-center mt-3">
                  <div className="loading">Đang xử lý...</div>
                  <div className="error-message" ></div>
                  <div className="sent-message">
                    Yêu cầu đặt bàn của bạn đã được gửi. Chúng tôi sẽ gọi điện hoặc gửi email để xác nhận. Cảm ơn bạn!
                  </div>
                  <button type="submit">Đặt bàn</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}