const Scripts = () => {
  return (
    <>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        referrerPolicy="no-referrer"
        strategy="lazyOnload"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
        integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        strategy="lazyOnload"
      ></script>

      <script strategy="lazyOnload"
        dangerouslySetInnerHTML = {{
          __html: `
            const header = document.querySelector(".header");
            const navBtn = document.querySelector(".navBtn");
            const nav = document.querySelector(".nav");
    
            window.onscroll = function () {
              scroll();
            };
            function scroll() {
              if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
              ) {
                header.classList.add("active");
              } else [header.classList.remove("active")];
            }
    
            navBtn.addEventListener("click", () => {
              nav.classList.toggle("nav-active");
            });
            $(document).ready(function () {
              $(".slick-slider").slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 3,
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                speed: 2000,
                customPaging: function (slider, i) {
                  return '<span className="slick-dot"></span>';
                },
              });
            });
          `
        }}
        />
    </>
  )
}

const Footer = () => {
  return (
    <>
      <footer className="py-12 text-fourth px-3" style={{ backgroundColor: "#dffbef" }}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 xl:w-1/4 order-2 md:order-1">
              <h6 className="text-fourth font-bold text-xl mb-6">Safe Deal</h6>
              <p>All rights reserved @2021</p>
            </div>
            <div
              className="w-full md:w-1/2 xl:w-1/4 order-1 md:order-2 mb-10 md:mb-0"
            >
              <h6 className="text-fourth font-bold text-xl mb-6">Download Free</h6>
              <div className="flex">
                <ul className="mr-6">
                  <li><a href="#" className="mb-2 block text-lg">Opera</a></li>
                  <li>
                    <a href="#" className="mb-2 block text-lg">Microsoft Edge</a>
                  </li>
                  <li>
                    <a href="#" className="mb-2 block text-lg">Yandex Browser</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#" className="mb-2 block text-lg">Google Chrome</a>
                  </li>
                  <li>
                    <a href="#" className="mb-2 block text-lg">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="mb-2 block text-lg">User Agreement</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Scripts />
    </>
  )
}

export default Footer;