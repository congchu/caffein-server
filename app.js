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
