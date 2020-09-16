let users = {
  alana_jones: {
    id: "alana_jones",
    name: "Alana Jones",
    avatarURL: "https://www.w3schools.com/w3images/avatar6.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "a",
      "6ni6ok3ym7mf1p33lnez": "a",
      am8ehyc8byjqgar0jgpub9: "b",
      loxhs1bqm25b708cmbf3g: "d",
    },
    polls: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  leidagoncalves: {
    id: "leidagoncalves",
    name: "Leida Goncalves",
    avatarURL: "https://www.w3schools.com/w3images/avatar5.png",
    answers: {
      vthrdm985a262al8qx3do: "a",
      xj352vofupe1dqz9emx13r: "a",
    },
    polls: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  john_batkin: {
    id: "john_batkin",
    name: "John Batkin",
    avatarURL: "https://www.w3schools.com/w3images/avatar2.png",
    answers: {
      xj352vofupe1dqz9emx13r: "a",
      vthrdm985a262al8qx3do: "d",
      "6ni6ok3ym7mf1p33lnez": "d",
    },
    polls: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
};

let polls = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    question: "Which of the following psychic ability you would like to have?",
    author: "alana_jones",
    timestamp: 1467166872634,
    a: {
      text: "Expert in poker",
      votes: ["alana_jones"],
    },
    b: {
      text: "‌Seeing past lives of anyone",
      votes: [],
    },
    c: {
      text: "‌Predict any sports match result",
      votes: [],
    },
    d: {
      text: "Hypnotizing anyone",
      votes: [],
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    question:
      "If you were to curse someone from the following options, which one you would choose?",
    author: "john_batkin",
    timestamp: 1468479767190,
    a: {
      text: "No taste sensation for lifetime",
      votes: ["alana_jones"],
    },
    b: {
      text: "Alone in a isolated island.",
      votes: [],
    },
    c: {
      text: "‌Barking while they speak",
      votes: [],
    },
    d: {
      text: "Never find love",
      votes: ["john_batkin"],
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    question:
      "If you could choose any age, to stay in for the rest of your life, which would it be?",
    author: "alana_jones",
    timestamp: 1488579767190,
    a: {
      text: "<15",
      votes: [],
    },
    b: {
      text: "16-30",
      votes: ["alana_jones"],
    },
    c: {
      text: "31-45",
      votes: [],
    },
    d: {
      text: "45+",
      votes: [],
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    question:
      "If you could have one of these superpowers, which one would you choose?",
    author: "leidagoncalves",
    timestamp: 1482579767190,
    a: {
      text: "Be invisible whenever you want",
      votes: [],
    },
    b: {
      text: "Read minds",
      votes: [],
    },
    c: {
      text: "Superhuman Strength",
      votes: [],
    },
    d: {
      text: "Be able to fly",
      votes: ["alana_jones"],
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    question: "If you could live anywhere in the world, where woult it be?",
    author: "leidagoncalves",
    timestamp: 1489579767190,
    a: {
      text: "Florida",
      votes: ["leidagoncalves"],
    },
    b: {
      text: "Hawaii",
      votes: [],
    },
    c: {
      text: "The Maldives",
      votes: [],
    },
    d: {
      text: "Other",
      votes: ["john_batkin"],
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    question:
      "What sport would be the funniest to watch if the players would be drunk?",
    author: "john_batkin",
    timestamp: 1493579767190,
    a: {
      text: "Football",
      votes: ["john_batkin"],
    },
    b: {
      text: "Basketball",
      votes: [],
    },
    c: {
      text: "Rugby",
      votes: ["leidagoncalves"],
    },
    d: {
      text: "Baseball",
      votes: [],
    },
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getPolls() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...polls }), 1000);
  });
}

function formatPoll(poll) {
  return {
    ...poll,
    id: generateUID(),
    timestamp: Date.now(),
    a: {
      text: poll.a,
      votes: [],
    },
    b: {
      text: poll.b,
      votes: [],
    },
    c: {
      text: poll.c,
      votes: [],
    },
    d: {
      text: poll.d,
      votes: [],
    },
  };
}

export function _savePoll(poll) {
  return new Promise((res, rej) => {
    const formattedPoll = formatPoll(poll);

    setTimeout(() => {
      polls = {
        ...polls,
        [formattedPoll.id]: formattedPoll,
      };

      res(formattedPoll);
    }, 1000);
  });
}

export function _savePollAnswer({ authedUser, id, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const user = users[authedUser];
      const poll = polls[id];

      users = {
        ...users,
        [authedUser]: {
          ...user,
          answers: {
            ...user.answers,
            [id]: answer,
          },
        },
      };

      polls = {
        ...polls,
        [id]: {
          ...poll,
          [answer]: {
            ...poll[answer],
            votes: poll[answer].votes.concat([authedUser]),
          },
        },
      };

      res();
    }, 500);
  });
}
