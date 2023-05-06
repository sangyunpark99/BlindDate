export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "추연석",
        major: "메카",
        schoolID: 2018,
        age: 23,
      },
      content: "안녕하세요! 추연석이라고 합니다..! 반갑습니다.",
      Images: [
        {
          src: "https://t1.daumcdn.net/cafeattach/1IHuH/6022f455c168625c58048475b682478aabbb8f88",
        },
      ],
    },
    {
      id: 2,
      User: {
        id: 1,
        nickname: "추연석",
        major: "메카",
        schoolID: 2018,
        age: 23,
      },
      content: "안녕하세요! 추연석이라고 합니다..! 반갑습니다.",
      Images: [
        {
          src: "https://t1.daumcdn.net/cafeattach/1IHuH/6022f455c168625c58048475b682478aabbb8f88",
        },
      ],
    },
    {
      id: 3,
      User: {
        id: 1,
        nickname: "추연석",
        major: "메카",
        schoolID: 2018,
        age: 23,
      },
      content: "안녕하세요! 추연석이라고 합니다..! 반갑습니다.",
      Images: [
        {
          src: "https://t1.daumcdn.net/cafeattach/1IHuH/6022f455c168625c58048475b682478aabbb8f88",
        },
      ],
    },
    {
      id: 4,
      User: {
        id: 1,
        nickname: "추연석",
        major: "메카",
        schoolID: 2018,
        age: 23,
      },
      content: "안녕하세요! 추연석이라고 합니다..! 반갑습니다.",
      Images: [
        {
          src: "https://t1.daumcdn.net/cafeattach/1IHuH/6022f455c168625c58048475b682478aabbb8f88",
        },
      ],
    },
    {
      id: 5,
      User: {
        id: 1,
        nickname: "추연석",
        major: "메카",
        schoolID: 2018,
        age: 23,
      },
      content: "안녕하세요! 추연석이라고 합니다..! 반갑습니다.",
      Images: [
        {
          src: "https://t1.daumcdn.net/cafeattach/1IHuH/6022f455c168625c58048475b682478aabbb8f88",
        },
      ],
    },
    {
      id: 6,
      User: {
        id: 1,
        nickname: "추연석",
        major: "메카",
        schoolID: 2018,
        age: 23,
      },
      content: "안녕하세요! 추연석이라고 합니다..! 반갑습니다.",
      Images: [
        {
          src: "https://t1.daumcdn.net/cafeattach/1IHuH/6022f455c168625c58048475b682478aabbb8f88",
        },
      ],
    },
  ],
};

const ADD_POST = "ADD_POST";

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "박상윤",
  },
  content: "안녕하세요! 박상윤이라고 합니다..! 반갑습니다.",
  Images: [
    {
      src: "https://images-kr.girlstyle.com/wp-content/uploads/2019/10/4d5493befe514989a79783e20643122c.jpg",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [...state.mainPosts, dummyPost],
      };

    default:
      return state;
  }
};

export default reducer;
