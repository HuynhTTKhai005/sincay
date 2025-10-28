"use client"
import { useState, useEffect } from 'react';
import menuData from "../../../public/data/menuData";
import Image from "next/image";


export default function Menu() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== "undefined") {
      const GLightbox = require("glightbox");
      const lightbox = GLightbox({ selector: ".glightbox" });

      // Cleanup: chỉ destroy khi lightbox tồn tại
      return () => {
        if (lightbox && typeof lightbox.destroy === "function") {
          lightbox.destroy();
        }
      };
    }
  }, []);

  return (
    <>
      <section id="menu" className="menu section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <p>
            <span className="description-title">THỰC ĐƠN </span>
          </p>
          <h2>Thực đơn tại nhà hàng Sincay</h2>
        </div>
        {/* End Section Title */}
        <div className="container">
          <ul className="nav d-flex justify-content-center" role="tablist" data-aos="fade-up" data-aos-delay={100}>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active show"
                data-bs-toggle="tab"
                data-bs-target="#menu-appetizer"
                aria-selected={!isMounted ? "true" : "true"}
                role="tab"
                tabIndex={!isMounted ? 0 : 0}
              >
                <h4>Khai vị</h4>
              </a>
            </li>
            {/* End tab nav item */}
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#menu-spicy"
                role="tab"
                aria-selected={!isMounted ? "false" : "false"}
                tabIndex={!isMounted ? -1 : -1}
              >
                <h4>Mì Cay</h4>
              </a>
            </li>
            {/* End tab nav item */}
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#menu-hotpot"
                aria-selected={!isMounted ? "false" : "false"}
                role="tab"
                tabIndex={!isMounted ? -1 : -1}
              >
                <h4>Lẩu</h4>
              </a>
            </li>
            {/* End tab nav item */}
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#menu-drink"
                aria-selected={!isMounted ? "false" : "false"}
                role="tab"
                tabIndex={!isMounted ? -1 : -1}
              >
                <h4>Đồ uống</h4>
              </a>
            </li>
            {/* End tab nav item */}
          </ul>

          <div className="tab-content" data-aos="fade-up" data-aos-delay={200}>
            {/* Khai vị */}
            <div className="tab-pane fade active show" id="menu-appetizer" role="tabpanel">
              <div className="tab-header text-center">
                <p>Thực đơn</p>
                <h3>Khai vị</h3>
              </div>
              <div className="row gy-5">
                {menuData
                  .filter((item) => item.category === "appetizer")
                  .map((item, index) => (
                    <div key={item.id || index} className="col-lg-4 menu-item" role="presentation">
                      <a href={item.image} className="glightbox">
                        <Image src={item.image} className="menu-img img-fluid" alt={item.name} width={416} height={300} />
                      </a>
                      <h4>{item.name}</h4>
                      <p className="ingredients">{item.description}</p>
                      <p className="price">{item.price}</p>
                    </div>
                  ))}
              </div>
            </div>
            {/* Mì cay */}
            <div className="tab-pane fade" id="menu-spicy" role="tabpanel">
              <div className="tab-header text-center">
                <p>Thực đơn</p>
                <h3>Mì Cay</h3>
              </div>
              <div className="row gy-5">
                {menuData
                  .filter((item) => item.category === "spicy")
                  .map((item) => (
                    <div key={item.id} className="col-lg-4 menu-item" role="presentation">
                      <a href={item.image} className="glightbox">
                        <Image src={item.image} alt={item.name} width={416} height={300} className="menu-img img-fluid" />
                      </a>
                      <h4>{item.name}</h4>
                      <p className="ingredients">{item.description}</p>
                      <p className="price">{item.price}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Lẩu */}
            <div className="tab-pane fade" id="menu-hotpot" role="tabpanel">
              <div className="tab-header text-center">
                <p>Thực đơn</p>
                <h3>Lẩu</h3>
              </div>
              <div className="row gy-5">
                {menuData
                  .filter((item) => item.category === "hotpot")
                  .map((item) => (
                    <div key={item.id} className="col-lg-4 menu-item" role="presentation">
                      <a href={item.image} className="glightbox">
                        <Image src={item.image} alt={item.name} width={416} height={300} className="menu-img img-fluid" />
                      </a>
                      <h4>{item.name}</h4>
                      <p className="ingredients">{item.description}</p>
                      <p className="price">{item.price}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Đồ uống */}
            <div className="tab-pane fade" id="menu-drink" role="tabpanel">
              <div className="tab-header text-center">
                <p>Thực đơn</p>
                <h3>Đồ uống</h3>
              </div>
              <div className="row gy-5">
                {menuData
                  .filter((item) => item.category === "drink")
                  .map((item) => (
                    <div key={item.id} className="col-lg-4 menu-item" role="presentation">
                      <a href={item.image} className="glightbox">
                        <Image src={item.image} alt={item.name} width={416} height={300} className="menu-img img-fluid" />
                      </a>
                      <h4>{item.name}</h4>
                      <p className="ingredients">{item.description}</p>
                      <p className="price">{item.price}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Menu Section */}
    </>
  );
}