import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import "../css/MainPageCss.css";
import KakaoMap from "./KakaoMap";
import "../css/KakaoMap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeartButton from "./HeartButton";

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

  const [isSkillVisible, setSkillVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");
  const [isCityVisible, setCityVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [isRecruitVisible, setRecruitVisible] = useState(false);
  const [selectedRecruit, setSelectedRecruit] = useState("");
  const [like, setLike] = useState(false);

  const toggleContentSkill = (skill) => {
    setSkillVisible(!isSkillVisible);
    setSelectedSkill(skill);
  };

  const toggleContentCity = (city) => {
    setCityVisible(!isCityVisible);
    setSelectedCity(city);
  };

  const toggleContentRecruit = (recruit) => {
    setRecruitVisible(!isRecruitVisible);
    setSelectedRecruit(recruit);
  };

  const cities = [
    " 강남/역삼/삼성",
    "신사/청담/압구정",
    "서초/교대/사당",
    " 잠실/송파/강동",
    " 을지로/명동/중구/동대문",
    " 서울역/이태원/용산",
    "종로/인사동",
    "홍대/합정/마포/서대문",
    "여의도",
    "구로/신도림/금천",
    "건대입구/성수/왕십리",
    "성북/강북/노원/도봉",
    "기타",
  ];

  const recruits = ["프로젝트", "스터디", "멘토/멘티"];

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <div className="Welcome">
      <div className="banner">
        <div className="banner_all">
          <KakaoMap />
        </div>
      </div>
      <br />
      <br />
      <br />
      <main className="main_board_list">
        <div>
          <div className="toggle_section">
            <div className="category_section">
              <div className="category_section_set">
                <div className="skill_toggle">
                  <button
                    className="skill_toggle_button"
                    type="button"
                    aria-expanded={isSkillVisible ? "true" : "false"}
                    onClick={() => toggleContentSkill("")}
                  >
                    기술스택
                  </button>
                </div>
                <div>
                  <button
                    className="region_toggle_button"
                    type="button"
                    aria-expanded={isCityVisible ? "true" : "false"}
                    onClick={() => toggleContentCity("")}
                  >
                    지역
                  </button>
                </div>
                <div>
                  <div className="recruit_toggle">
                    <button
                      className="recruit_toggle_button"
                      type="button"
                      aria-expanded={isRecruitVisible ? "true" : "false"}
                      onClick={() => toggleContentRecruit("")}
                    >
                      모집구분
                    </button>
                  </div>
                  <div
                    id="region_section"
                    className={
                      isCityVisible ? "city-content active" : "city-content"
                    }
                  >
                    {isCityVisible && (
                      <div className="region_section">
                        <ul className="region_seoul">
                          {cities.map((city) => (
                            <li
                              key={city}
                              className="seoulToggle"
                              onClick={() => toggleContentCity(city)}
                            >
                              {city}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div
                    id="skill_section"
                    className={
                      isSkillVisible ? "skill-content active" : "skill-content"
                    }
                  >
                    {isSkillVisible && (
                      <div className="skill_section">
                        <ul className="skill">
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={
                                process.env.PUBLIC_URL + "../img/Angular.png"
                              }
                              alt="skillLogo"
                            />
                            <span className="skill_text">Angular</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/C.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">C</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/C++.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">C++</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Django.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Django</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Docker.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Docker</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={
                                process.env.PUBLIC_URL + "../img/Express.png"
                              }
                              alt="skillLogo"
                            />
                            <span className="skill_text">Express</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Figma.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Figma</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={
                                process.env.PUBLIC_URL + "../img/Firebase.png"
                              }
                              alt="skillLogo"
                            />
                            <span className="skill_text">Firebase</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Flask.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Flask</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={
                                process.env.PUBLIC_URL + "../img/Flutter.png"
                              }
                              alt="skillLogo"
                            />
                            <span className="skill_text">Flutter</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Git.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Git</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Go.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Go</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={
                                process.env.PUBLIC_URL + "../img/GRAPH_QL.png"
                              }
                              alt="skillLogo"
                            />
                            <span className="skill_text">GraphQL</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={
                                process.env.PUBLIC_URL +
                                "../img/JAVA_SCRIPT.png"
                              }
                              alt="skillLogo"
                            />
                            <span className="skill_text">Java Script</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Java.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Java</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={
                                process.env.PUBLIC_URL + "../img/Kubernetes.png"
                              }
                              alt="skillLogo"
                            />
                            <span className="skill_text">Kubernetes</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={
                                process.env.PUBLIC_URL + "../img/MONGO_DB.png"
                              }
                              alt="skillLogo"
                            />
                            <span className="skill_text">MongoDB</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/mySql.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">mySql</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={
                                process.env.PUBLIC_URL + "../img/NEST_JS.png"
                              }
                              alt="skillLogo"
                            />
                            <span className="skill_text">NestJS</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={
                                process.env.PUBLIC_URL + "../img/NEXT_JS.png"
                              }
                              alt="skillLogo"
                            />
                            <span className="skill_text">NextJS</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={
                                process.env.PUBLIC_URL + "../img/NODE_JS.png"
                              }
                              alt="skillLogo"
                            />
                            <span className="skill_text">NodeJS</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Php.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Php</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Python.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Python</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/R.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">R</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/react.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">React</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={
                                process.env.PUBLIC_URL +
                                "../img/REACT_NATIVE.png"
                              }
                              alt="skillLogo"
                            />
                            <span className="skill_text">React Native</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Spring.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Spring</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Svelte.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Svelte</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Swift.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Swift</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={
                                process.env.PUBLIC_URL +
                                "../img/TYPE_SCRIPT.png"
                              }
                              alt="skillLogo"
                            />
                            <span className="skill_text">Type Script</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Unity.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Unity</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Vue.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Vue</span>
                          </li>
                          <li className="skillToggle">
                            <img
                              className="skill_logo"
                              src={process.env.PUBLIC_URL + "../img/Zeplin.png"}
                              alt="skillLogo"
                            />
                            <span className="skill_text">Zeplin</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  id="region_section"
                  className={
                    isRecruitVisible
                      ? "recurit-content active"
                      : "recruit-content"
                  }
                >
                  {isRecruitVisible && (
                    <div className="recurit_section">
                      <ul className="recurit">
                        {recruits.map((recurit) => (
                          <li
                            key={recurit}
                            className="recuritToggle"
                            onClick={() => toggleContentRecruit(recurit)}
                          >
                            {recurit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="skill_toggle">
                  <button className="skill_toggle_button">
                    <div className="skill">진행방식</div>
                  </button>
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
                <HeartButton like={like} onClick={toggleLike} />
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
