const SizeGuide = () => {
  return (
    <>
      <div className="newsletter fp size-guide" id="size-guide-form">
        <div className="bg"></div>
        <div className="center-box">
          <div className="newsletter-heading">
            <h3>SIZE GUIDE</h3>
            <button  className="btn-blank">
              <img
                src="./src/assets/images/icons/Cross-Button.png"
                className="close-btn-newsletter"
                alt=""
              />
            </button>
          </div>
          <div className="newsletter-body">
            <div className="product-info">
              <div className="row">
                <div className="col-12">
                  <div className="heading bg-light mt-20">
                    <h4 className="text-black">Men's Clothing Top Wear</h4>
                  </div>
                </div>
                <div className="col-md-5 col-5 mt-25">
                  <img
                    src="./src/assets/images/product_image.png"
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />
                </div>
                <div className="col-md-7 col-7 mt-25">
                  <div className="text">
                    <h5 className="text-black text-left">Versache Collection</h5>
                    <p className="text-left">Orange graphic print polo</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive mt-25">
                    <table className="table text-center">
                      <thead>
                        <tr>
                          <th>Standard</th>
                          <th>IT Size</th>
                          <th>Collar Size (IN)</th>
                          <th>UK/US/IN</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>XXS</td>
                          <td>42</td>
                          <td>12-12.5</td>
                          <td>32,33</td>
                        </tr>
                        <tr>
                          <td>XS</td>
                          <td>44</td>
                          <td>13-13.5</td>
                          <td>34,35</td>
                        </tr>
                        <tr>
                          <td>S</td>
                          <td>46</td>
                          <td>14-14.5</td>
                          <td>36,37</td>
                        </tr>
                        <tr>
                          <td>M</td>
                          <td>48</td>
                          <td>15-15.5</td>
                          <td>38,39</td>
                        </tr>
                        <tr>
                          <td>L</td>
                          <td>50</td>
                          <td>16-16.5</td>
                          <td>40,41</td>
                        </tr>
                        <tr>
                          <td>XL</td>
                          <td>52</td>
                          <td>17-17.5</td>
                          <td>42,43</td>
                        </tr>
                        <tr>
                          <td>XXL</td>
                          <td>54</td>
                          <td>18-18.5</td>
                          <td>44,45</td>
                        </tr>
                        <tr>
                          <td>XXXL</td>
                          <td>56</td>
                          <td>19-19.5</td>
                          <td>46,47</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-6 mx-auto">
                  <button
                    className="btn-primary mt-20"
                  >
                    VIEW FULL SIZE GUIDE
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="bt-blck"></div>
                </div>
                <div className="col-12">
                  <section className="contact-section">
                    <div className="container">
                      <div className="row">
                        <div className="contact-us-section">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-lg-4 col-md-6 col-6">
                                <div className="content-box">
                                  <h6 className="text-black">Whatsapp</h6>
                                  <img
                                    src="./src/assets/images/icons/Whatsapp.svg"
                                    className="d-block img-fluid mx-auto mb-3"
                                    alt="Whats App"
                                  />
                                  <p>
                                    <a
                                      href="https://wa.me/+918810420296"
                                      className="hidden-link"
                                    >
                                      +91 88104 20296
                                    </a>
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-6">
                                <div className="content-box br-none">
                                  <h6 className="text-black">Email</h6>
                                  <img
                                    src="./src/assets/images/icons/Email.svg"
                                    className="d-block img-fluid mx-auto mb-3"
                                    alt="Whats App"
                                  />
                                  <p>
                                    <a
                                      href="mailto:assistance@darveys.com"
                                      className="hidden-link"
                                    >
                                      assistance@darveys.com
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-md-8 mx-auto">
                  <div className="disclaimer-text">
                    <p className="text-black">
                      *Please note the measurements may vary according to
                      different brand and styles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter fp size-guide" id="size-guide-full-form">
        <div className="bg"></div>
        <div className="center-box">
          <div className="newsletter-heading">
            <h3>VIEW FULL SIZE GUIDE</h3>
            <button  className="btn-blank">
              <img
                src="./src/assets/images/icons/left-arrow-black.svg"
                className="back-btn-newsletter"
                alt=""
              />
            </button>
            <button className="btn-blank">
              <img
                src="./src/assets/images/icons/Cross-Button.png"
                className="close-btn-newsletter"
                alt=""
              />
            </button>
          </div>
          <div className="newsletter-body">
            <div className="accordion" id="sizeGuideFullMain">
              <div className="accordion-item">
                <h2 className="accordion-header" id="MenSizeGuide">
                  <button
                    className="accordion-button collapsed text-underline"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#MenSizeGuideCollapse"
                    aria-expanded="false"
                    aria-controls="MenSizeGuideCollapse"
                  >
                    Men
                  </button>
                </h2>
                <div
                  id="MenSizeGuideCollapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="MenSizeGuide"
                  data-bs-parent="#sizeGuideFullMain"
                >
                  <div className="accordion-body">
                    <div className="accordion" id="Meninner">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="topwear">
                          <button
                            className="accordion-button text-grey"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#topwearcollapse"
                            aria-expanded="true"
                            aria-controls="topwearcollapse"
                          >
                            Topwear
                          </button>
                        </h2>
                        <div
                          id="topwearcollapse"
                          className="accordion-collapse collapse show"
                          aria-labelledby="topwear"
                          data-bs-parent="#Meninner"
                        >
                          <div className="accordion-body">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="table-responsive mt-25">
                                  <table className="table text-center">
                                    <thead>
                                      <tr>
                                        <th>Standard</th>
                                        <th>IT Size</th>
                                        <th>Collar Size (IN)</th>
                                        <th>UK/US/IN</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>XXS</td>
                                        <td>42</td>
                                        <td>12-12.5</td>
                                        <td>32,33</td>
                                      </tr>
                                      <tr>
                                        <td>XS</td>
                                        <td>44</td>
                                        <td>13-13.5</td>
                                        <td>34,35</td>
                                      </tr>
                                      <tr>
                                        <td>S</td>
                                        <td>46</td>
                                        <td>14-14.5</td>
                                        <td>36,37</td>
                                      </tr>
                                      <tr>
                                        <td>M</td>
                                        <td>48</td>
                                        <td>15-15.5</td>
                                        <td>38,39</td>
                                      </tr>
                                      <tr>
                                        <td>L</td>
                                        <td>50</td>
                                        <td>16-16.5</td>
                                        <td>40,41</td>
                                      </tr>
                                      <tr>
                                        <td>XL</td>
                                        <td>52</td>
                                        <td>17-17.5</td>
                                        <td>42,43</td>
                                      </tr>
                                      <tr>
                                        <td>XXL</td>
                                        <td>54</td>
                                        <td>18-18.5</td>
                                        <td>44,45</td>
                                      </tr>
                                      <tr>
                                        <td>XXXL</td>
                                        <td>56</td>
                                        <td>19-19.5</td>
                                        <td>46,47</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="bottomwear">
                          <button
                            className="accordion-button text-grey collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#bottomwearcollapse"
                            aria-expanded="false"
                            aria-controls="bottomwearcollapse"
                          >
                            Bottomwear
                          </button>
                        </h2>
                        <div
                          id="bottomwearcollapse"
                          className="accordion-collapse collapse"
                          aria-labelledby="bottomwear"
                          data-bs-parent="#Meninner"
                        >
                          <div className="accordion-body">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="table-responsive mt-25">
                                  <table className="table text-center">
                                    <thead>
                                      <tr>
                                        <th>Standard</th>
                                        <th>IT Size</th>
                                        <th>Collar Size (IN)</th>
                                        <th>UK/US/IN</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>XXS</td>
                                        <td>42</td>
                                        <td>12-12.5</td>
                                        <td>32,33</td>
                                      </tr>
                                      <tr>
                                        <td>XS</td>
                                        <td>44</td>
                                        <td>13-13.5</td>
                                        <td>34,35</td>
                                      </tr>
                                      <tr>
                                        <td>S</td>
                                        <td>46</td>
                                        <td>14-14.5</td>
                                        <td>36,37</td>
                                      </tr>
                                      <tr>
                                        <td>M</td>
                                        <td>48</td>
                                        <td>15-15.5</td>
                                        <td>38,39</td>
                                      </tr>
                                      <tr>
                                        <td>L</td>
                                        <td>50</td>
                                        <td>16-16.5</td>
                                        <td>40,41</td>
                                      </tr>
                                      <tr>
                                        <td>XL</td>
                                        <td>52</td>
                                        <td>17-17.5</td>
                                        <td>42,43</td>
                                      </tr>
                                      <tr>
                                        <td>XXL</td>
                                        <td>54</td>
                                        <td>18-18.5</td>
                                        <td>44,45</td>
                                      </tr>
                                      <tr>
                                        <td>XXXL</td>
                                        <td>56</td>
                                        <td>19-19.5</td>
                                        <td>46,47</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="activewear">
                          <button
                            className="accordion-button collapsed text-grey"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#activewearcollapse"
                            aria-expanded="false"
                            aria-controls="activewearcollapse"
                          >
                            Activewear
                          </button>
                        </h2>
                        <div
                          id="activewearcollapse"
                          className="accordion-collapse collapse"
                          aria-labelledby="activewear"
                          data-bs-parent="#Meninner"
                        >
                          <div className="accordion-body">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="table-responsive mt-25">
                                  <table className="table text-center">
                                    <thead>
                                      <tr>
                                        <th>Standard</th>
                                        <th>IT Size</th>
                                        <th>Collar Size (IN)</th>
                                        <th>UK/US/IN</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>XXS</td>
                                        <td>42</td>
                                        <td>12-12.5</td>
                                        <td>32,33</td>
                                      </tr>
                                      <tr>
                                        <td>XS</td>
                                        <td>44</td>
                                        <td>13-13.5</td>
                                        <td>34,35</td>
                                      </tr>
                                      <tr>
                                        <td>S</td>
                                        <td>46</td>
                                        <td>14-14.5</td>
                                        <td>36,37</td>
                                      </tr>
                                      <tr>
                                        <td>M</td>
                                        <td>48</td>
                                        <td>15-15.5</td>
                                        <td>38,39</td>
                                      </tr>
                                      <tr>
                                        <td>L</td>
                                        <td>50</td>
                                        <td>16-16.5</td>
                                        <td>40,41</td>
                                      </tr>
                                      <tr>
                                        <td>XL</td>
                                        <td>52</td>
                                        <td>17-17.5</td>
                                        <td>42,43</td>
                                      </tr>
                                      <tr>
                                        <td>XXL</td>
                                        <td>54</td>
                                        <td>18-18.5</td>
                                        <td>44,45</td>
                                      </tr>
                                      <tr>
                                        <td>XXXL</td>
                                        <td>56</td>
                                        <td>19-19.5</td>
                                        <td>46,47</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="WomenSizeGuide">
                  <button
                    className="accordion-button collapsed text-underline"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#WomenSizeGuideCollapse"
                    aria-expanded="false"
                    aria-controls="WomenSizeGuideCollapse"
                  >
                    Women
                  </button>
                </h2>
                <div
                  id="WomenSizeGuideCollapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="WomenSizeGuide"
                  data-bs-parent="#sizeGuideFullMain"
                >
                  <div className="accordion-body">
                    <p className="text-black">
                      Lorem ipsum, dolor sit amet consectetur, adipisicing elit.
                      Magni totam, atque nisi alias illum velit itaque,
                      repudiandae possimus cupiditate voluptas veniam modi,
                      accusamus at eveniet saepe esse quos libero error nobis
                      quis! Aliquid quibusdam similique qui tempora eum beatae
                      enim at, numquam veritatis ducimus cupiditate dolor earum
                      tempore placeat inventore modi atque. Laboriosam id iste
                      modi sed, dolorem optio obcaecati eveniet aliquid incidunt
                      nostrum eum quidem perspiciatis earum animi nisi ducimus
                      aliquam et assumenda dolorum sapiente voluptas, cumque,
                      excepturi ex laborum aut! Adipisci optio laudantium ex
                      quibusdam totam quam cumque, soluta magni id doloremque
                      libero unde debitis distinctio sint repudiandae sed. Amet
                      dicta quas delectus ratione enim deleniti officiis,
                      tempore impedit tempora nisi nesciunt perspiciatis ipsum
                      fugiat commodi expedita dolores!
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="KidsSizeGuide">
                  <button
                    className="accordion-button collapsed text-underline"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#KidsSizeGuideCollapse"
                    aria-expanded="false"
                    aria-controls="KidsSizeGuideCollapse"
                  >
                    Kids
                  </button>
                </h2>
                <div
                  id="KidsSizeGuideCollapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="KidsSizeGuide"
                  data-bs-parent="#sizeGuideFullMain"
                >
                  <div className="accordion-body">
                    <p className="text-black">
                      Lorem ipsum, dolor sit amet consectetur, adipisicing elit.
                      Magni totam, atque nisi alias illum velit itaque,
                      repudiandae possimus cupiditate voluptas veniam modi,
                      accusamus at eveniet saepe esse quos libero error nobis
                      quis! Aliquid quibusdam similique qui tempora eum beatae
                      enim at, numquam veritatis ducimus cupiditate dolor earum
                      tempore placeat inventore modi atque. Laboriosam id iste
                      modi sed, dolorem optio obcaecati eveniet aliquid incidunt
                      nostrum eum quidem perspiciatis earum animi nisi ducimus
                      aliquam et assumenda dolorum sapiente voluptas, cumque,
                      excepturi ex laborum aut! Adipisci optio laudantium ex
                      quibusdam totam quam cumque, soluta magni id doloremque
                      libero unde debitis distinctio sint repudiandae sed. Amet
                      dicta quas delectus ratione enim deleniti officiis,
                      tempore impedit tempora nisi nesciunt perspiciatis ipsum
                      fugiat commodi expedita dolores!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="bt-blck"></div>
              </div>
              <div className="col-md-8 mx-auto">
                <div className="disclaimer-text">
                  <p className="text-black">
                    *Please note the measurements may vary according to
                    different brand and styles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SizeGuide;
