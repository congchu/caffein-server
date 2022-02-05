var express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Ccamp APIs
app.get("/api/camps/:camp_id", (req, res) => {
  const camp_id = req.params.camp_id;
  const camp = campsMock.find((camp) => camp.id == camp_id);
  res.json({ data: camp });
});

app.get("/api/camps", (req, res) => {
  let result = campsMock;

  const type = req.query && req.query.type;
  if (type) {
    result = result.filter((camp) => camp.type == type);
  }

  res.json({ data: result });
});

// Community APIs

app.get("/api/communities", (req, res) => {
  res.json({ data: communityMock });
});

app.get("/api/communities/:community_id", (req, res) => {
  res.json({ data: campsMock });
});

app.get("/", function (req, res) {
  res.send("Hello, This is API Server for Caffein");
});

app.listen(PORT, function () {
  console.log("start! express server on port 5000");
});

//임시 데이터
const users = [
  { id: 1, name: "유저1" },
  { id: 2, name: "유저2" },
  { id: 3, name: "유저3" },
];

const campsMock = [
  {
    id: 1,
    name: "업무 단순화 & 자동화로 엑셀을 실무에 더 적극 활용하기",
    type: "popular",
    status: "모집중",
    field: "IT",
    skill: "자동화",
    startDate: "2022-02-06",
    thumbnail: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
  },
  {
    id: 3,
    name: "React 실무 프로젝트로 역량 업그레이드",
    type: "popular",
    status: "모집중",
    field: "IT",
    skill: "프론트엔드",
    startDate: "2022-02-9",
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849804__340.jpg",
  },
  {
    id: 5,
    name: "직접 해보는 페이스북 마케팅 실무",
    type: "popular",
    status: "모집중",
    field: "마케팅",
    skill: "퍼포먼스",
    startDate: "2022-02-10",
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090__340.jpg",
  },
  {
    id: 4,
    name: "쉽지만 강력한 엑셀로 데이터 분석과 업무 자동화까지",
    type: "popular",
    status: "모집중",
    field: "데이터분석",
    skill: "Excel",
    startDate: "2021-02-17",
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822__340.jpg",
  },
  {
    id: 3,
    name: "개발자 없이 SQL로 데이터 추출하고 대시보드 만들기",
    type: "sale",
    status: "모집중",
    field: "IT",
    skill: "SQL",
    startDate: "2021-02-20",
    thumbnail:
      "https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270__340.jpg",
  },
  {
    id: 5,
    name: "IT 대기업 현업 개발자와 함께 하는 백엔드 개발 실무",
    type: "sale",
    status: "모집중",
    field: "IT",
    skill: "백엔드",
    startDate: "2021-03-05",
    thumbnail:
      "https://cdn.pixabay.com/photo/2017/08/01/00/38/man-2562325__340.jpg",
  },
  {
    id: 5,
    name: "인공지능을 활용한 챗봇 구축 기획부터 설계, 구현 A to Z",
    type: "sale",
    status: "모집중",
    field: "IT",
    skill: "인공지능",
    startDate: "2021-03-10",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__340.jpg",
  },
  {
    id: 5,
    name: " 클라우드 AWS 구축부터 운영까지 실무 AtoZ",
    type: "sale",
    status: "모집중",
    field: "IT",
    skill: "백엔드",
    startDate: "2021-03-13",
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__480.jpg",
  },
];
const campDetailMock = {
  tags: ["프로그래밍", "React"],
  name: "[2기 모집] React 초보자를 위한 실무 프로젝트로 역량 업그레이드",
  desc: "입문자 대상 베이직 클래스입니다.",
  startDate: "22.02.20(일) 12:00",
  process: "6주, 온라인 LIVE",
  seat: "8명 소수정예",
  reviewMaterial: ["복습VOD", "PDF강의자료"],
  headerImage:
    "https://raw.githubusercontent.com/congchu/caffein-server/master/assets/images/camp_header.png",
  images: [
    "https://raw.githubusercontent.com/congchu/caffein-server/master/assets/images/camp_1.png",
    "https://raw.githubusercontent.com/congchu/caffein-server/master/assets/images/camp_2.png",
    "https://raw.githubusercontent.com/congchu/caffein-server/master/assets/images/camp_3.png",
  ],

  reviews: [
    {
      content:
        "저는 완전히 모르는 상태에서 시작했고 기대도<br/>높지 않았는데, <b>끝까지 해내고 보니 굉장히<br/>성장한</b> 느낌이에요.<br/>직장 다니면서 뭔가 끝까지 해본 게 처음이라..<br/><br/><b>'아무것도 모르는 사람도 할 수 있어요'라는 문구가 진짜 거짓이 아니었네요.</b>",
      reviewer: "수료생 김태희님",
    },
    {
      content:
        "매주 받는 <b>강의 자료랑 과제 내용이 업무에서<br/>흔하게 일어날 수 있는 상황 중심</b>이어서,<br/>'우리 회사라면 이런 식으로 해볼 수 있겠다.'<br/>라고 생각하며 수업을 들었구요.<br/>이론도 실무랑 연계되는 내용으로 알려주셔서<br/><b>바로 업무에 적용</b>할 수 있었어요.<br/>",
      reviewer: "수료생 김태형님",
    },
    {
      content:
        "라이브니까, 공부하면서 궁금한 걸 바로바로<br/>물어볼 수 있는게 제일 좋았어요!<br/>VOD 강의 많이 들어봤지만 VOD는 궁금한 걸<br/>물어볼 수도 없고, 물어볼 수 있다고 해도<br/>답변 받는데 진짜 오래 걸렸거든요.<br/>소통이 즉각적이라는 게 가장 좋았어요.<br/>",
      reviewer: " 수료생 임미성님",
    },
    {
      content:
        "멘토님도 퇴근하고 강의하시느라 힘드실 텐데<br/><b>라이브 강의 때마다 정말 정성스럽게<br/>과제 리뷰랑 피드백</b>을 너무 잘 해주셨구요.<br/>꼭 강의 때가 아니더라도 <b>어려운 거 있을 때마다<br/>하나하나 같이 해주시고 질문도 잘 받아주셔서</b><br/>더 열심히 할 수 있었어요.",
      reviewer: "수료생 김태희님",
    },
  ],
  faqs: [
    {
      question: "React 경험이 없는데 참여할 수 있나요?",
      answer:
        "React 경험이 있는 분들이 협업 관점에서 업그레이드 할 수 있게 도와드리는데 목적이 있는 클래스입니다. React 기초 강의는 제공하지 않기 때문에 따로 React 공부 하실 수 있는 분들께 추천드립니다.",
    },
    {
      question: " 실무PT, 직무부트캠프와 어떤 차이점이 있나요?",
      answer:
        "실무PT는 직무체험을 넘어 현업에 실무 스킬을 적용할 수 있도록 최적화된 프로그램입니다. 직무를 경험하는 것에 초점이 맞춰진 직무부트캠프와 달리 멘토와의 1: 1 질의응답, 정기 스터디세션, 이론강의 등 실무 맞춤형 과정이 더 제공되어 현업에 적용할 수 있을 때까지 도와드립니다.",
    },
  ],
};

const communityMock = [
  {
    id: 21,
    tags: ["조회수 TOP", "취업 고민"],
    title: "합격 메일 답장 어떻게 할까요?",
    content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
    comments: [
      {
        profile:
          "https://cdn.pixabay.com/photo/2022/01/19/19/41/san-francisco-6950837_960_720.jpg",
        content: "안녕하세요. 먼저 합격 축하드립니다.",
        nickname: "Jacob",
      },
      {
        profile:
          "https://cdn.pixabay.com/photo/2021/07/25/12/22/tourist-attraction-6491734__340.jpg",
        content: "메일의 서문을 시작할 때는 이렇게 해주세요.",
        nickname: "KMJ",
      },
    ],
  },

  {
    id: 18,
    tags: ["조회수 TOP", "취업 고민"],
    title: "OO 마트 신입 초봉",
    content:
      "안녕하세요! OO 마트 대졸 신입공채 초봉 문의드립니다!! 3000만원으로 알고 있는데 맞나요?? 아니면 조금 올랐는지요!",
    comments: [
      {
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        content: "조금 오른 것으로 알고 있습니다. 작년 대비 500정도",
        nickname: "김민수",
      },
      {
        profile:
          "https://cdn.pixabay.com/photo/2013/07/18/10/56/smiley-163510__340.jpg",
        content:
          "안녕하세요. AA 마트 현직자입니다. 친구가 몇몇 있어 답변 드립니다.",
        nickname: "김민수",
      },
    ],
  },
  {
    id: 15,
    tags: ["조회수 TOP", "취업 고민"],
    title: "C회사 분위기가 궁금합니다!~",
    content:
      "안녕하십니까 선배님 C회사 HA사업본부 안에 총 3가지 부서가 있는것으로 알고있습니다. 기구계발직무 분위기가 궁금합니다. ",
    comments: [
      {
        profile:
          "https://cdn.pixabay.com/photo/2016/06/13/13/46/shark-1454245__340.png",
        nickname: "꼬깔콘",
        content: "본부 안에 제품별로 부서가 나뉩니다.",
      },
      {
        profile:
          "https://cdn.pixabay.com/photo/2022/01/06/00/49/coffee-6918354__340.png",
        content: "HA사업본부는 작년부터 부서가 다르게 나뉘었습니다.",
        nickname: "파란다리10",
      },
    ],
  },
  {
    id: 6,
    tags: ["조회수 TOP", "취업 고민"],
    title: "채용 검진 결과 문제 있을까요?",
    content:
      "채용 검진 결과 고혈압 기준에 들어간다고 하네요. 합불에 영향이 없을거라도 말씀하시긴 했지만 걱정이 되서요. 회사에서 안좋게 보는지 궁금합니다.",
    comments: [
      {
        profile:
          "https://cdn.pixabay.com/photo/2017/10/05/10/26/lion-cub-2818957__340.jpg",
        nickname: "금요일조아",
        content:
          "혈당을 낮출수 약을 드시고 다시 검진을 받으시는 걸 추천드려요.",
      },
      {
        profile:
          "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__480.jpg",
        nickname: "보도송송",
        content:
          "안녕하세요. BB회사 현직자입니다. 저도 같은 사례였는데 전혀 문제 없었어요.",
      },
    ],
  },
];
