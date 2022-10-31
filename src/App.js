import React, { useEffect, useCallback, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import $ from 'jquery';

import Main2 from './Main2';
import Main4 from './Main4';
import Page0 from './pages/page_0';
import Page1 from './pages/page_1';
import Page2 from './pages/page_2';
import Page3 from './pages/page_3';
import Page4 from './pages/page_4';
import Page5 from './pages/page_5';
import Page6 from './pages/page_6';

function App() {
  useEffect(() => function hide() {
    let main2 = $('div#main_2');
    let main3 = $('div#main_3');

    main2.on('click', function () {
      main3.hide();
    })
  })
  return (
    <>
      <BrowserRouter>
        <div id="headerwrap">
          <header>
            <p id="btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
            <article>
              <h1>
                <a href="nespresso.html"><img src="img/logo2.jpg" alt="logo" /></a>
              </h1>
            </article>

            <nav className="btn1">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                    <p>로그인 하기</p>
                  </a>
                </li>
                <li><a href="#"><i className="fa fa-shopping-bag fa-2x" aria-hidden="true"></i>
                  <p>장바구니</p>
                </a></li>
                <li><a href="#"><i className="fa fa-search fa-2x" aria-hidden="true"></i>
                  <p>검색하기</p>
                </a></li>
              </ul>
            </nav>

            <aside>
              <h2 className="hide">네비게이션</h2>
              <ul>
                <li>
                  <a href="./index.html">
                    <i className="fa fa-coffee fa-2x" aria-hidden="true"></i>
                    <p>커피</p>
                  </a>
                </li>
                <li>
                  <a href="./nespresso2.html">
                    <i className="fa fa-beer fa-2x" aria-hidden="true"></i>
                    <p>머신</p>
                  </a>
                </li>
                <li><a href="#"><i className="fa fa-coffee fa-2x" aria-hidden="true"></i>
                  <p>액세서리<br /> / 재활용백</p>
                </a></li>
                <li><a href="#"><i className="fa fa-line-chart fa-2x" aria-hidden="true"></i>
                  <p>지속가능성</p>
                </a></li>
                <li><a href="#"><i className="fa fa-bell-o fa-2x" aria-hidden="true"></i>
                  <p>서비스</p>
                </a></li>
                <li><a href="#"><i className="fa fa-question-circle-o fa-2x" aria-hidden="true"></i>
                  <p>고객지원</p>
                </a></li>
                <li><a href="#"><i className="fa fa-star fa-2x" aria-hidden="true"></i>
                  <p>뉴스</p>
                </a></li>
                <li><a href="#"><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                  <p>매장찾기</p>
                </a></li>
                <li><a href="#"><i className="fa fa-handshake-o fa-2x" aria-hidden="true"></i>
                  <p>프로패셔널<br />(기업용)</p>
                </a></li>
              </ul>
            </aside>
          </header>
        </div>
        <div id="main_1">
          <h3>네스프레소 커피</h3>
        </div>
        <div id="main_2">
          <Main2 />
        </div>
        <div id="main_3">
          <article className="point">
            <img src="./img/potint1.png" alt="prev" />
          </article>

          <article className="main">
            <section className="all">
              <section>
                <figure>
                  <img src="./img3/ice-leggero_L (1).png" alt="coffee1" />
                  <figcaption>콜드</figcaption>
                </figure>

                <figure>
                  <img src="./img3/espressos-range-altissio_L.png" alt="coffee2" />
                  <figcaption>에스프레소</figcaption>
                </figure>

                <figure>
                  <img src="./img3/craft-brew-carafe-pour-over-style_L.png" alt="coffee3" />
                  <figcaption>크래프트 브루</figcaption>
                </figure>

                <figure>
                  <img src="./img3/melozio_L.png" alt="coffee4" />
                  <figcaption>커피</figcaption>
                </figure>

                <figure>
                  <img src="./img3/colombia_L.png" alt="coffee5" />
                  <figcaption>마스터 오리진</figcaption>
                </figure>

                <figure>
                  <img src="./img3/freddo-forte_L.png" alt="coffee6" />
                  <figcaption>바리스타 크리에이션</figcaption>
                </figure>

                <figure>
                  <img src="./img3/paris-espresso-L.png" alt="coffee7" />
                  <figcaption>New 오리지널 커피</figcaption>
                </figure>

                <figure>
                  <img src="./img3/vienna-linizio-lungo_L.png" alt="coffee8" />
                  <figcaption>월드 익스플로레이션</figcaption>
                </figure>
              </section>
            </section>
          </article>
          <article className="next">
            <img src="./img/point2.png" alt="next" />
          </article>
        </div>
        <div id="main_4">

          <Main4>
            <Routes>
              <Route path="/" element={<Page0 />} />
              <Route path="/list01" element={<Page1 />} />
              <Route path="/list02" element={<Page2 />} />
              <Route path="/list03" element={<Page3 />} />
              <Route path="/list04" element={<Page4 />} />
              <Route path="/list05" element={<Page5 />} />
              <Route path="/list06" element={<Page6 />} />
            </Routes>
          </Main4>

        </div>

        <footer>
          <dl>
            <dt>
              <img src="img/logo1.jpg" alt="logo" />
            </dt>
            <dd>
              <dl>
                <dt>고객문의</dt>
                <dd>고객지원</dd>
                <dd>자주 묻는 질문</dd>
                <dd>문의하기</dd>
                <dd>배송조회</dd>
                <dd>교환환불</dd>
              </dl>
              <dl>
                <dt>쇼핑하기</dt>
                <dd>쇼핑하기</dd>
                <dd>전화 주문</dd>
                <dd>기프트 카드</dd>
                <dd>결제옵션</dd>
              </dl>
              <dl>
                <dt>서비스</dt>
                <dd>배송 서비스</dd>
                <dd>고객지원</dd>
                <dd>네스프레소 프로페셔널</dd>
              </dl>
            </dd>
          </dl>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
