const SizeGuide = () => {
  return (
    <>
      <div class="newsletter fp size-guide" id="size-guide-form">
        <div class="bg"></div>
        <div class="center-box">
          <div class="newsletter-heading">
            <h3>SIZE GUIDE</h3>
            <button onclick="sizeGuideCloseFunction()" class="btn-blank">
              <img
                src="./src/assets/images/icons/Cross-Button.png"
                class="close-btn-newsletter"
                alt=""
              />
            </button>
          </div>
          <div class="newsletter-body">
            <div class="product-info">
              <div class="row">
                <div class="col-12">
                  <div class="heading bg-light mt-20">
                    <h4 class="text-black">Men's Clothing Top Wear</h4>
                  </div>
                </div>
                <div class="col-md-5 col-5 mt-25">
                  <img
                    src="./src/assets/images/product_image.png"
                    class="img-fluid mx-auto d-block"
                    alt=""
                  />
                </div>
                <div class="col-md-7 col-7 mt-25">
                  <div class="text">
                    <h5 class="text-black text-left">Versache Collection</h5>
                    <p class="text-left">Orange graphic print polo</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="table-responsive mt-25">
                    <table class="table text-center">
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
                <div class="col-md-6 mx-auto">
                  <button
                    onclick="sizeGuideFullFunction()"
                    class="btn-primary mt-20"
                  >
                    VIEW FULL SIZE GUIDE
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-10 mx-auto">
                  <div class="bt-blck"></div>
                </div>
                <div class="col-12">
                  <section class="contact-section">
                    <div class="container">
                      <div class="row">
                        <div class="contact-us-section">
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-lg-4 col-md-6 col-6">
                                <div class="content-box">
                                  <h6 class="text-black">Whatsapp</h6>
                                  <img
                                    src="./src/assets/images/icons/Whatsapp.svg"
                                    class="d-block img-fluid mx-auto mb-3"
                                    alt="Whats App"
                                  />
                                  <p>
                                    <a
                                      href="https://wa.me/+918810420296"
                                      class="hidden-link"
                                    >
                                      +91 88104 20296
                                    </a>
                                  </p>
                                </div>
                              </div>
                              <div class="col-lg-4 col-md-6 col-6">
                                <div class="content-box br-none">
                                  <h6 class="text-black">Email</h6>
                                  <img
                                    src="./src/assets/images/icons/Email.svg"
                                    class="d-block img-fluid mx-auto mb-3"
                                    alt="Whats App"
                                  />
                                  <p>
                                    <a
                                      href="mailto:assistance@darveys.com"
                                      class="hidden-link"
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
                <div class="col-md-8 mx-auto">
                  <div class="disclaimer-text">
                    <p class="text-black">
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

      <div class="newsletter fp size-guide" id="size-guide-full-form">
        <div class="bg"></div>
        <div class="center-box">
          <div class="newsletter-heading">
            <h3>VIEW FULL SIZE GUIDE</h3>
            <button onclick="sizeGuideFullBackFunction()" class="btn-blank">
              <img
                src="./src/assets/images/icons/left-arrow-black.svg"
                class="back-btn-newsletter"
                alt=""
              />
            </button>
            <button onclick="sizeGuideFullCloseFunction()" class="btn-blank">
              <img
                src="./src/assets/images/icons/Cross-Button.png"
                class="close-btn-newsletter"
                alt=""
              />
            </button>
          </div>
          <div class="newsletter-body">
            <div class="accordion" id="sizeGuideFullMain">
              <div class="accordion-item">
                <h2 class="accordion-header" id="MenSizeGuide">
                  <button
                    class="accordion-button collapsed text-underline"
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
                  class="accordion-collapse collapse"
                  aria-labelledby="MenSizeGuide"
                  data-bs-parent="#sizeGuideFullMain"
                >
                  <div class="accordion-body">
                    <div class="accordion" id="Meninner">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="topwear">
                          <button
                            class="accordion-button text-grey"
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
                          class="accordion-collapse collapse show"
                          aria-labelledby="topwear"
                          data-bs-parent="#Meninner"
                        >
                          <div class="accordion-body">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="table-responsive mt-25">
                                  <table class="table text-center">
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
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="bottomwear">
                          <button
                            class="accordion-button text-grey collapsed"
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
                          class="accordion-collapse collapse"
                          aria-labelledby="bottomwear"
                          data-bs-parent="#Meninner"
                        >
                          <div class="accordion-body">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="table-responsive mt-25">
                                  <table class="table text-center">
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
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="activewear">
                          <button
                            class="accordion-button collapsed text-grey"
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
                          class="accordion-collapse collapse"
                          aria-labelledby="activewear"
                          data-bs-parent="#Meninner"
                        >
                          <div class="accordion-body">
                            <div class="row">
                              <div class="col-md-12">
                                <div class="table-responsive mt-25">
                                  <table class="table text-center">
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
              <div class="accordion-item">
                <h2 class="accordion-header" id="WomenSizeGuide">
                  <button
                    class="accordion-button collapsed text-underline"
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
                  class="accordion-collapse collapse"
                  aria-labelledby="WomenSizeGuide"
                  data-bs-parent="#sizeGuideFullMain"
                >
                  <div class="accordion-body">
                    <p class="text-black">
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
              <div class="accordion-item">
                <h2 class="accordion-header" id="KidsSizeGuide">
                  <button
                    class="accordion-button collapsed text-underline"
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
                  class="accordion-collapse collapse"
                  aria-labelledby="KidsSizeGuide"
                  data-bs-parent="#sizeGuideFullMain"
                >
                  <div class="accordion-body">
                    <p class="text-black">
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
            <div class="row">
              <div class="col-md-10 mx-auto">
                <div class="bt-blck"></div>
              </div>
              <div class="col-md-8 mx-auto">
                <div class="disclaimer-text">
                  <p class="text-black">
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
