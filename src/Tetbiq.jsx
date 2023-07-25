import React, { useEffect } from "react";

function Tetbiq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="tetbiq">
      <div className="left">
        <h1>Tətbiqi yükləmək</h1>
        <p className="about">
          Hörmətli istifadəçi! Təəssüf ki, birbank.az saytı artıq fəaliyyət
          göstərmir. Narahat olmayın, profiliniz və ona bağlı məhsullar Birbank
          tətbiqində mövcuddur. QR kodu skan edərək tətbiqi yükləyə bilərsiniz.
        </p>
        <img
          className="qrcode"
          src="https://birbank.az/_next/image?url=%2Fimages%2Fpng%2Fqr.png&w=128&q=75"
          alt=""
        />
        <p className="social">
          <a href="https://apps.apple.com/us/app/birbank/id1293207342">
            <button className="apps-item">
              <i class="fa-brands fa-app-store-ios"></i>
              <p>
                App Store
                <pre></pre>
                <span>mobil tətbiqi yüklə</span>
              </p>
            </button>
          </a>

          <a href="https://play.google.com/store/apps/details?id=az.kapitalbank.mbanking">
            <button className="apps-item">
              <i class="fa-brands fa-google-play"></i>
              <p>
                Google Play
                <pre></pre>
                <span>mobil tətbiqi yüklə</span>
              </p>
            </button>
          </a>

          <a href="https://appgallery.huawei.com/#/app/C102156391">
            <button className="apps-item">
              <i class="fa-solid fa-mobile"></i>
              <p>
                AppGallery
                <pre></pre>
                <span>ilə kəşf edin</span>
              </p>
            </button>
          </a>
        </p>
      </div>
      <div className="right">
        <img
          src="https://birbank.az/_next/image?url=%2Fimages%2Fpng%2Flogin.png&w=1080&q=75"
          alt=""
        />
      </div>
    </div>
  );
}

export default Tetbiq;
