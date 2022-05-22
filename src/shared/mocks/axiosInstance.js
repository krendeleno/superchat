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
          message: "...",
          sentAt: "123"
        },
      ],
    },
    {
      id: 32,
      title: "Где дизайн??",
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
    'tag1', 'tag2', 'tag3', 'tag4'
  ];

  return [200, tags];
});


axiosMockAdapterInstance.onGet("/api/v1/chats/1/messages").reply(() => {
  const chatMessages = [
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
