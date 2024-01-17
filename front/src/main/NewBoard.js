import React from "react";
import Header from "./Header";
import "../css/NewBoard.css";

function NewBoard() {
  return (
    <div>
      <Header />
      <h1 className="title">새 S.With 작성하기</h1>
      <div className="section_1">
        <section>
          <div className="post_1">
            <span className="post_1_title">1</span>
            <h2 className="post_title">S.With 기본 정보를 입력해주세요.</h2>
          </div>
          <ul className="post_form">
            <li className="post_form_box">
              <label className="box_label">모집구분</label>
              <div className="">
                <span
                  aria-live="polite"
                  aria-atomic="false"
                  aria-relevant="additions text"
                  class="box_span"
                ></span>
                <div>
                  <div></div>
                  <div></div>
                </div>
                <input />
              </div>
            </li>
            <li className="post_form_box">
              <label className="box_label">진행방식</label>
              <div className="">
                <span
                  aria-live="polite"
                  aria-atomic="false"
                  aria-relevant="additions text"
                  class="box_span"
                ></span>
                <div>
                  <div></div>
                  <div></div>
                </div>
                <input />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default NewBoard;
