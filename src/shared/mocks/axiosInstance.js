import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

const axiosMockInstance = axios.create();

export const axiosMockAdapterInstance = new AxiosMockAdapter(
  axiosMockInstance,
  { delayResponse: 0 }
);
export default axiosMockInstance;

axiosMockAdapterInstance.onGet("/api/v1/chats").reply(() => {
  const chats = [
    {
      id: 22,
      title: "Обсуждаем бэкенд",
      ttl: 12,
      color: "blue",
      tags: ["tag1", "tag2"],
      creator: "Kirill",
      lastMessages: [
        {
          sender: "Kirill",
          message: "Штош",
          sentAt: "123"
        },
        {
          sender: "Kirill",
          message: "Очередное невероятно длинное сообщение",
          sentAt: "123"
        },
      ],
    },
    {
      id: 32,
      title: "Какое-то очень-очень длинное название чата",
      ttl: 12,
      color: "red",
      tags: ["tag3", "tag2"],
      creator: "Kirill",
      lastMessages: [
        {
          sender: "Dana",
          message: "Он нам не нужен",
          sentAt: "123"
        },
        {
          sender: "Vika",
          message: "Ну да, ну да...",
          sentAt: "123"
        },
      ],
    },
  ];

  return [200, chats];
});

axiosMockAdapterInstance.onGet("/api/v1/tags").reply(() => {
  const tags = [
    'tag1', 'tag2', 'tag3', 'tag4',  'tag5', 'tag6', 'tag7', 'tag8',  'tag9', 'tag10', 'tag11', 'tag12',
    'tag13', 'tag14', 'tag15', 'tag16',  'tag17', 'tag18', 'tag19', 'tag20',  'tag21', 'tag22', 'tag23', 'tag24',
  ];

  return [200, tags];
});


axiosMockAdapterInstance.onGet("/api/v1/chats/1/messages").reply(() => {
  const chatMessages = [
    {
      sender: "Vika",
      message: "Очень длинное сообщение Очень длинное сообщение Очень длинное сообщение",
      sentAt: "123"
    },
    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "1232"
    },
    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "1233"
    },
    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "1235"
    },    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "123"
    },
    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "1232"
    },
    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "1233"
    },
    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "1235"
    },
    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "123"
    },
    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "1232"
    },
    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "1233"
    },
    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "1235"
    },
    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "123"
    },
    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "1232"
    },
    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "1233"
    },
    {
      sender: "Vika",
      message: "Ну да, ну да...",
      sentAt: "1235"
    }
  ];

  return [200, chatMessages];
});
