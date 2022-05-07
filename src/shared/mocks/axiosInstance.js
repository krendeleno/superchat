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
      color: "#eb4034",
      tags: ["tag1", "tag2"],
      creator: "Kirill",
      lastMessages: [
        {
          sender: "Kirill",
          message: "Штош",
        },
        {
          sender: "Kirill",
          message: "...",
        },
      ],
    },
    {
      id: 32,
      title: "Где дизайн??",
      ttl: 12,
      color: "#9fd1ff",
      tags: ["tag3", "tag2"],
      creator: "Kirill",
      lastMessages: [
        {
          sender: "Dana",
          message: "Он нам не нужен",
        },
        {
          sender: "Vika",
          message: "Ну да, ну да...",
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
