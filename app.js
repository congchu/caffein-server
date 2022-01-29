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
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        content: "안녕하세요. 먼저 합격 축하드립니다.",
        nickname: "Jacob",
      },
      {
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        content: "메일의 서문을 시작할 때는 이렇게 해주세요.",
        nickname: "KMJ",
      },
    ],
  },
  {
    id: 18,
    tags: ["야호", "정말"],
    title: "합격 메일 답장 어떻게 할까요?",
    content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
    comments: [
      {
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        content: "와우",
        nickname: "멘토1234",
      },
    ],
  },
  {
    id: 15,
    tags: ["야호", "정말"],
    title: "합격 메일 답장 어떻게 할까요?",
    content: "고칠 부분이 있는지 봐주시면 감사하겠습니다!",
    comments: [
      {
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        content: "와우",
        nickname: "멘토1234",
      },
      {
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        content: "와우",
        nickname: "멘토1234",
      },
    ],
  },
  {
    id: 6,
    tags: ["야호", "정말"],
    title: "합격 메일 답장 어떻게 할까요?",
    content:
      "고칠 부분이 있는지 봐주시면 감사하겠습니다! 봐주시면 감사하겠습니다! 봐주시면 감사하겠습니다!봐주시면 감사하겠습니다!",
    comments: [
      {
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        content: "와우",
        nickname: "멘토1234",
      },
      {
        profile: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
        content: "와우",
        nickname: "멘토1234",
      },
    ],
  },
];
