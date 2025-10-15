import Link from "next/link";

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container   d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Link href="#hero" className="logo d-flex me-auto me-xl-0">
          SINCAY
        </Link>

        {/* Navigation */}
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="#about">Về chúng tôi</a>
            </li>
            <li>
              <a href="#menu">Thực đơn</a>
            </li>
            <li>
              <a href="#events">Sự kiện</a>
            </li>
            <li>
              <a href="#gallery">Không gian</a>
            </li>
            <li>
              <a href="#contact">Liên hệ</a>
            </li>
          </ul>

          {/* Menu mobile */}
          <i className="mobile-nav-toggle d-xl-none bi bi-list" aria-label="Toggle menu" />
        </nav>

        {/*Button Book */}
        <a className="btn-getstarted" href="#book-a-table">
          Đặt bàn
        </a>
      </div>
    </header>
  );
}