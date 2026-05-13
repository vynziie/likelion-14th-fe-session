import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import poster1 from '../image/poster1.png';
import poster2 from '../image/poster2.png';
import poster3 from '../image/poster3.png';
import poster4 from '../image/poster4.png';
import poster5 from '../image/poster5.png';

export default function Landing() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { question: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?", answer: "넷플릭스는 훌륭한 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 다양한 넷플릭스 오리지널 작품을 보유하고 있습니다." },
    { question: "넷플릭스란 무엇인가요?", answer: "넷플릭스는 인터넷 연결 지원 디바이스에서 다양한 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등을 시청할 수 있는 스트리밍 서비스입니다." },
    { question: "넷플릭스 요금은 얼마인가요?", answer: "스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등에서 월정액 요금으로 넷플릭스를 시청하세요. 멤버십 요금은 월 5,500원부터 17,000원까지 다양합니다." },
    { question: "어디에서 시청할 수 있나요?", answer: "언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 스마트폰, 태블릿 등에서도 가능합니다." },
    { question: "멤버십을 해지하려면 어떻게 하나요?", answer: "넷플릭스는 부담 없이 이용할 수 있습니다. 성가신 계약도, 약정도 없습니다. 클릭 두 번이면 온라인에서 쉽게 해지할 수 있습니다." }
  ];
const trendingMovies = [
  {
    id: 1,
    title: "기리고",
    imgUrl: poster1
  },
  {
    id: 2,
    title: "사냥개들",
    imgUrl: poster2
  },
  {
    id: 3,
    title: "멋진 신세계",
    imgUrl: poster3
  },
  {
    id: 4,
    title: "모두가...",
    imgUrl: poster4
  },
  {
    id: 5,
    title: "신입사관...",
    imgUrl: poster5
  }
];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="landing-wrapper">
      <div className="landing-hero">
        <div className="background-overlay"></div>
        <header className="landing-header">
          <h1 className="netflix-logo">NETFLIX</h1>
          <div className="header-actions">
            <select className="lang-select">
              <option>한국어</option>
              <option>English</option>
            </select>
            <button className="sign-in-btn" onClick={() => navigate('/login')}>로그인</button>
          </div>
        </header>

        <main className="hero-content">
          <h1 className="hero-title">영화, 시리즈 등을 무제한으로</h1>
          <p className="hero-subtitle">7,000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.</p>
          <p className="hero-text">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
          <div className="email-form">
            <input type="email" placeholder="이메일 주소" className="email-input" />
            <button className="start-btn">시작하기 {'>'}</button>
          </div>
        </main>
      </div>

      <div className="landing-section banner-section">
        <div className="promo-banner">
          <div className="promo-icon">🍿</div>
          <div className="promo-text">
            <h3>7,000원이면 만날 수 있는 넷플릭스.</h3>
            <p>가장 경제적인 광고형 멤버십을 이용해 보세요.</p>
          </div>
          <button className="promo-btn">자세히 알아보기</button>
        </div>
      </div>

      <div className="landing-section trending-section">
        <h2>지금 뜨는 콘텐츠</h2>
        <div className="trending-grid">
          {trendingMovies.map((movie, index) => (
            <div key={movie.id} className="trending-card">
              <div className="trending-number">{index + 1}</div>
              <img 
                src={movie.imgUrl} 
                alt={movie.title} 
                className="trending-poster-img" 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="landing-section reasons-section">
        <h2>가입해야 하는 또 다른 이유</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            <h3>TV로 즐기세요</h3>
            <p>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</p>
          </div>
          <div className="reason-card">
            <h3>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요</h3>
            <p>간편하게 저장하고 빈틈없이 즐겨보세요.</p>
          </div>
          <div className="reason-card">
            <h3>다양한 디바이스로 시청하세요</h3>
            <p>각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.</p>
          </div>
          <div className="reason-card">
            <h3>어린이 전용 프로필을 만들어 보세요</h3>
            <p>자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요.</p>
          </div>
        </div>
      </div>

      <div className="landing-section faq-section">
        <h2>자주 묻는 질문</h2>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                {faq.question}
                <span className="faq-icon">{openFaq === index ? '✕' : '+'}</span>
              </button>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
        
        <div className="bottom-email">
          <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
          <div className="email-form">
            <input type="email" placeholder="이메일 주소" className="email-input" />
            <button className="start-btn">시작하기 {'>'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}