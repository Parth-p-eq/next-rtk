import React from 'react'

const Footer = () => {
  return (
    <div>
        <section className="footer-section">
      <div className="footer-section-wrapper">
        <div className="2xl:container mx-auto py-15 ">
          <div className="footer-top grid grid-cols-4 px-30 lg:px-30 md:px-6 max-sm:px-6 py-15 max-md:grid-cols-1 gap-5 border-t-1 border-[#E5E7EB]">
            <div className="flex flex-col gap-5">
              <div className="logo">
                <h1 className="text-[32px] leading-[32px] font-semibold">Nexton</h1>
                <span className="block text-[14px] pl-6 font-semibold"
                  >eCommerce</span>
              </div>
              <nav className="navbar">
                <ul className="nav-list flex flex-col gap-3">
                  <li className="nav-item">
                    <a href="#" className="flex gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2104_2311)">
                          <path
                            d="M11.4999 19.8676V12.9412H13.8087L14.2499 10.0588H11.4999V8.20586C11.4999 7.41174 11.8822 6.64704 13.1175 6.64704H14.3675V4.20586C13.6126 4.0784 12.8724 4.01468 12.1469 4.01468C9.88224 4.01468 8.39694 5.39704 8.39694 7.88233V10.0588H5.88224V12.9412H8.39694V19.8676C3.66165 19.1323 0.0292969 15.0147 0.0292969 10.0588C0.0292969 4.58821 4.47047 0.132324 9.95577 0.132324C15.4264 0.132324 19.8822 4.58821 19.8822 10.0588C19.8822 15.0147 16.2499 19.1323 11.4999 19.8676Z"
                            fill="#4676ED"
                          />
                          <path
                            d="M11.5 12.9412V19.8677C11 19.946 10.4853 19.9853 9.95585 19.9853C9.42644 19.9853 8.90684 19.946 8.39703 19.8677V12.9412H5.88232V10.0588H8.39703V7.88236C8.39703 5.39706 9.88232 4.01471 12.147 4.01471C12.8725 4.01471 13.6127 4.07843 14.3676 4.20589V6.64706H13.1176C11.8823 6.64706 11.5 7.41177 11.5 8.20589V10.0588H14.25L13.8088 12.9412H11.5Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2104_2311">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>Facebook</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="flex gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2126_2317)">
                          <path
                            d="M19.9135 10C19.9135 15.467 15.4752 19.92 9.99349 19.92C4.51177 19.92 0.0734863 15.467 0.0734863 10C0.0734863 4.5183 4.51177 0.0800171 9.99349 0.0800171C15.4752 0.0800171 19.9135 4.5183 19.9135 10Z"
                            fill="#DA0000"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.6068 10C16.6068 11.4304 16.5138 12.4886 16.3276 13.1744C16.1806 13.7476 15.725 14.1884 15.1666 14.3501C14.4709 14.5363 12.7466 14.6293 9.99346 14.6293C7.24036 14.6293 5.51598 14.5363 4.82036 14.3501C4.2619 14.1884 3.80632 13.7476 3.65936 13.1744C3.47321 12.4886 3.38013 11.4304 3.38013 10C3.38013 8.55976 3.47321 7.49674 3.65936 6.8109C3.80632 6.23775 4.2619 5.79686 4.82036 5.6352C5.51598 5.45884 7.24036 5.37067 9.99346 5.37067C12.7466 5.37067 14.4709 5.45884 15.1666 5.6352C15.725 5.79686 16.1806 6.23775 16.3276 6.8109C16.5138 7.49674 16.6068 8.55976 16.6068 10ZM12.1097 10L8.67079 8.016V11.984L12.1097 10Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2126_2317">
                            <rect
                              width="19.987"
                              height="19.84"
                              fill="white"
                              transform="translate(0 0.0800171)"
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      Youtube
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="flex gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2126_2322)">
                          <path
                            d="M9.97066 19.8824C4.50007 19.8824 0.0441895 15.4265 0.0441895 9.95589C0.0441895 4.47059 4.50007 0.0294189 9.97066 0.0294189C15.456 0.0294189 19.8971 4.47059 19.8971 9.95589C19.8971 15.4265 15.456 19.8824 9.97066 19.8824Z"
                            fill="url(#paint0_linear_2126_2322)"
                          />
                          <path
                            d="M6.80877 9.83824L13.3676 6.76471L10.7499 11.7941C9.19112 13.4216 8.35778 14.2353 8.24994 14.2353C8.1421 14.2353 8.03916 14.1373 7.94112 13.9412L6.76465 10.6765L6.80877 9.83824Z"
                            fill="#C8DAEA"
                          />
                          <path
                            d="M10.1912 12.6029C9.72061 12.9853 9.24021 13.4216 8.75002 13.9118C8.25983 14.402 8.04414 14.402 8.10296 13.9118L8.32355 11.5147L10.1912 12.6029Z"
                            fill="#A9C6D8"
                          />
                          <path
                            d="M6.79424 10.7941L4.36777 10C4.1717 9.92157 4.10796 9.79413 4.17659 9.61766C4.1913 9.55883 4.23542 9.5147 4.33836 9.44117C4.70111 9.18627 8.01483 7.93138 14.2795 5.67648C14.456 5.61765 14.5982 5.60785 14.706 5.64707C14.7795 5.67648 14.8237 5.70589 14.8531 5.82354C14.8678 5.86765 14.8825 5.95589 14.8825 6.04413C14.8825 6.10295 14.8678 6.16177 14.8678 6.25001C14.8285 6.86765 14.2354 9.4706 13.0884 14.0588C13.0295 14.3333 12.8776 14.4755 12.6325 14.4853C12.4854 14.4853 12.3237 14.4559 12.1325 14.2941C11.4119 13.6765 8.92659 12 8.36777 11.6324C8.33836 11.6029 8.33836 11.5882 8.32365 11.5588C8.32365 11.5294 8.33836 11.5 8.36777 11.4706C11.2599 8.90196 12.7403 7.48039 12.8089 7.20589C12.8237 7.17648 12.7942 7.16177 12.7501 7.17648C12.456 7.27942 7.47071 10.4412 6.91189 10.7794C6.89228 10.799 6.85306 10.8039 6.79424 10.7941Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_2126_2322"
                            x1="-0.249928"
                            y1="19.8824"
                            x2="-0.249928"
                            y2="0.0294189"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#1D93D2" />
                            <stop offset="1" stopColor="#38B0E3" />
                          </linearGradient>
                          <clipPath id="clip0_2126_2322">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Telegram
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="flex gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2126_2329)">
                          <path
                            d="M19.9706 10.0588C19.9706 15.5441 15.5294 19.9853 10.0441 19.9853C4.57356 19.9853 0.117676 15.5441 0.117676 10.0588C0.117676 4.58821 4.57356 0.132324 10.0441 0.132324C15.5294 0.132324 19.9706 4.58821 19.9706 10.0588Z"
                            fill="#5A99EC"
                          />
                          <path
                            d="M4 14.603C4.20588 14.6226 4.41666 14.6324 4.63235 14.6324C5.86765 14.6324 7 14.2206 7.91176 13.5C6.75 13.4853 5.77941 12.7206 5.44118 11.6765C5.59804 11.7059 5.76471 11.7206 5.94118 11.7206C6.17647 11.7206 6.40685 11.6912 6.63235 11.6324C5.42647 11.3824 4.51471 10.3236 4.51471 9.04414C4.51471 9.03433 4.51471 9.02452 4.51471 9.01473C4.86765 9.2059 5.27941 9.32355 5.70588 9.33826C5 8.86767 4.54412 8.05885 4.54412 7.14708C4.54412 6.66179 4.67647 6.22061 4.89706 5.82355C6.19118 7.41179 8.13235 8.47061 10.3235 8.57355C10.2843 8.38727 10.2647 8.1863 10.2647 7.97061C10.2647 6.51473 11.4412 5.33826 12.8971 5.33826C13.6618 5.33826 14.3382 5.66179 14.8235 6.17649C15.4265 6.05885 15.9853 5.83826 16.5 5.52943C16.2941 6.14708 15.8824 6.66179 15.3382 6.98532C15.8676 6.92649 16.3824 6.79414 16.8529 6.57355C16.5 7.10296 16.0441 7.57355 15.5294 7.9412C15.5393 8.05885 15.5441 8.17158 15.5441 8.27943C15.5441 11.7647 12.8971 15.7794 8.04412 15.7794C6.55882 15.7794 5.16176 15.353 4 14.603Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2126_2329">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Twitter
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-5">
              <div className="heading font-semibold">
                <h6>Getting started</h6>
              </div>
              <div className="navbar">
                <ul className="nav-list flex flex-col gap-3.5">
                  <li className="nav-item"><a href="#">Release Notes</a></li>
                  <li className="nav-item"><a href="#">Upgrade Guide</a></li>
                  <li className="nav-item"><a href="#">Browser Support</a></li>
                  <li className="nav-item"><a href="#">Dark Mode</a></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="heading font-semibold">
                <h6>Explore</h6>
              </div>
              <div className="navbar">
                <ul className="nav-list flex flex-col gap-3.5">
                  <li className="nav-item"><a href="#">Prototyping</a></li>
                  <li className="nav-item"><a href="#">Design systems</a></li>
                  <li className="nav-item"><a href="#">Pricing</a></li>
                  <li className="nav-item"><a href="#">Security</a></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="heading font-semibold">
                <h6>Community</h6>
              </div>
              <div className="navbar">
                <ul className="nav-list flex flex-col gap-3.5">
                  <li className="nav-item"><a href="#">Discussion Forums</a></li>
                  <li className="nav-item"><a href="#">Code of Conduct</a></li>
                  <li className="nav-item"><a href="#">Contributing</a></li>
                  <li className="nav-item"><a href="#">API Reference</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom flex justify-between items-center px-30 md:px-6 lg:px-30 max-sm:px-6 py-8 max-sm:block border-t-1 border-[#E5E7EB]">
            <div className="left max-sm:text-center mb-3">
              <a href="#">Nexton eCommerce. © 2024</a>
            </div>
            <div className="right flex justify-center items-center gap-2">
              <img src="/images/footer img/paypal.png" alt="" />
              <img src="/images/footer img/stripe.png" alt="" />
              <img src="/images/footer img/verisign.png" alt="" />
              <img src="/images/footer img/visa.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Footer