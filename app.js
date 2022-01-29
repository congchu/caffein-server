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
    field: "데이터분석",
    skill: "Excel",
    startDate: "2021-03-13",
    thumbnail: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
  },
  {
    id: 2,
    name: "React 실무 프로젝트로 역량 업그레이드",
    type: "popular",
    status: "모집중",
    field: "데이터분석",
    skill: "Excel",
    startDate: "2021-03-13",
    thumbnail: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
  },
  {
    id: 3,
    name: "개발자 없이 SQL로 데이터 추출하고 대시보드 만들기",
    type: "popular",
    status: "모집중",
    field: "데이터분석",
    skill: "Excel",
    startDate: "2021-03-13",
    thumbnail: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
  },
  {
    id: 4,
    name: "쉽지만 강력한 엑셀로 데이터 분석과 업무 자동화까지",
    type: "popular",
    status: "모집중",
    field: "데이터분석",
    skill: "Excel",
    startDate: "2021-03-13",
    thumbnail: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
  },
  {
    id: 3,
    name: "개발자 없이 SQL로 데이터 추출하고 대시보드 만들기",
    type: "popular",
    status: "모집중",
    field: "데이터분석",
    skill: "Excel",
    startDate: "2021-03-13",
    thumbnail: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
  },
  {
    id: 5,
    name: "쉽지만 강력한 엑셀로 데이터 분석과 업무 자동화까지",
    type: "sale",
    status: "모집중",
    field: "데이터분석",
    skill: "Excel",
    startDate: "2021-03-13",
    thumbnail: "https://cdn.comento.kr/images/pt/tmp/prefix_44UsYDVNuM.jpg",
  },
];

const communityMock = [
  {
    id: 21,
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
        content: "za",
        nickname: "멘토1234",
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
