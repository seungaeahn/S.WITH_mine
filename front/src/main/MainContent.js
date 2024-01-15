import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import "../css/MainPageCss.css";

function MainContent() {
  const boardsData = [
    {
      id: 1,
      category: "스터디",
      deadline: "2024.03.01",
      title: "같이 성장하실 백엔드 개발자 모집합니다.",
      skill: "React, Node.js",
      profileImg:
        "https://i.pinimg.com/originals/1d/31/ed/1d31ed10d5c74bcf4f7af6471732ba2f.jpg",
      username: "작성자아이디",
      commentCount: 11,
    },
    {
      id: 2,
      category: "프로젝트",
      deadline: "2024.03.15",
      title: "프론트엔드 개발자 찾습니다.",
      skill: "JavaScript, Vue.js",
      profileImg: "https://example.com/profile2.jpg",
      username: "anotherUsername",
      commentCount: 7,
    },
    {
      id: 3,
      category: "프로젝트",
      deadline: "2024.03.15",
      title: "프론트엔드 개발자 찾습니다.",
      skill: "JavaScript, Vue.js",
      profileImg: "https://example.com/profile2.jpg",
      username: "anotherUsername",
      commentCount: 7,
    },
    {
      id: 4,
      category: "프로젝트",
      deadline: "2024.03.15",
      title: "프론트엔드 개발자 찾습니다.",
      skill: "JavaScript, Vue.js",
      profileImg: "https://example.com/profile2.jpg",
      username: "anotherUsername",
      commentCount: 7,
    },
    {
      id: 5,
      category: "프로젝트",
      deadline: "2024.03.15",
      title: "프론트엔드 개발자 찾습니다.",
      skill: "JavaScript, Vue.js",
      profileImg: "https://example.com/profile2.jpg",
      username: "anotherUsername",
      commentCount: 7,
    },
    {
      id: 6,
      category: "프로젝트",
      deadline: "2024.03.15",
      title: "프론트엔드 개발자 찾습니다.",
      skill: "JavaScript, Vue.js",
      profileImg: "https://example.com/profile2.jpg",
      username: "anotherUsername",
      commentCount: 7,
    },
  ];

  return (
    <div className="Welcome">
      <h1>메인페이지</h1>
      <div>배너</div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <main className="main_board_list">
        <div>
          <div className="toggle_section">
            <div className="category_section">
              <div className="category_section_set">
                <div className="skill_toggle">
                  <button className="skill_toggle_button">기술스택</button>
                </div>
                <div className="region_toggle">
                  <button
                    className="region_toggle_button"
                    type="button"
                    aria-expanded="false"
                  >
                    지역
                  </button>
                  <div className="region_section">
                    <ul className="region">
                      <li>
                        <button
                          className="region_toggle_button"
                          type="button"
                          aria-expanded="false"
                        >
                          지역
                        </button>
                      </li>
                      <il>
                        <button
                          className="region_toggle_button"
                          type="button"
                          aria-expanded="false"
                        >
                          서울시
                        </button>
                      </il>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="board_box_section">
            {boardsData.map((board) => (
              <a
                key={board.id}
                className="board_box"
                href="/" /* Add link URL */
              >
                <li>
                  <div className="study_sort_badge">
                    <div className="study_sort_badge_content">
                      {board.category}
                    </div>
                  </div>
                  <div className="study_schedule">
                    <p className="">마감일</p>
                    <p>|</p>
                    <p>{board.deadline}</p>
                  </div>
                  <div>
                    <h1 className="board_title">{board.title}</h1>
                  </div>
                  <ul className="skill_icon_section">
                    <li>{board.skill}</li>
                  </ul>
                  <div className="board_content_border"></div>
                  <section className="board_info_section">
                    <div className="board_info_left">
                      <div className="user_profile_img">
                        <img
                          className="user_profile_img_set"
                          width="30px"
                          height="30px"
                          src={board.profileImg}
                          alt="Profile"
                        />
                      </div>
                      <div>{board.username}</div>
                    </div>
                    <div className="board_info_right">
                      <div className="comment_count_sectiom">
                        <p>댓글아이콘</p>
                        <p>{board.commentCount}</p>
                      </div>
                    </div>
                  </section>
                </li>
                <img className="zzim_button" src="./img/zzim.png" alt="zzim" />
              </a>
            ))}
          </ul>
        </div>
        <div></div>
      </main>
    </div>
  );
}

export default MainContent;
