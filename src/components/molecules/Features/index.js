import React from 'react'

const Features = () => {
  return (
    <section className="features-tiles section">
      <div className="container">
        <div className="features-tiles-inner section-inner">
          <div className="tiles-wrap">
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="
													features-tiles-item-image
													mb-16
												">
                    <img src="images/programmer.jpg" alt="Feature tile icon 01" width={64} height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Programmer
                  </h4>
                  <p className="m-0 text-sm">
                  Programmer merupakan profesi yang diminati 
                  oleh kalangan muda saat ini. Di samping itu, 
                  profesi ini dianggap mempunyai prospek masa depan. 
                  Kata “keren” dan “gaji besar” sering dilontarkan kepada 
                  programmer.
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay={200}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="
													features-tiles-item-image
													mb-16
												">
                    <img src="images/digital marketing.jpg" alt="Feature tile icon 02" width={64} height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Digital Marketing
                  </h4>
                  <p className="m-0 text-sm">
                  Pemasaran digital adalah suatu usaha untuk 
                  mempromosikan sebuah merek dengan menggunakan 
                  media digital yang dapat menjangkau konsumen secara 
                  tepat waktu, pribadi, dan relevan. Tipe pemasaran 
                  digital mencakup banyak teknik dan praktik yang terkandung 
                  dalam kategori pemasaran internet.
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay={400}>
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="
													features-tiles-item-image
													mb-16
												">
                    <img src="images/data analisis.jpg" alt="Feature tile icon 03" width={64} height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Data Analisis
                  </h4>
                  <p className="m-0 text-sm">
                  Analisis data adalah proses inspeksi, 
                  pembersihan dan pemodelan data dengan 
                  tujuan menemukan informasi yang berguna, 
                  menginformasikan kesimpulan dan mendukung 
                  pengambilan keputusan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;
