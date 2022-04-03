import axios, {AxiosRequestConfig} from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const axiosMockInstance = axios.create();

export const axiosMockAdapterInstance = new AxiosMockAdapter(axiosMockInstance, {delayResponse: 0});
export default axiosMockInstance;

axiosMockAdapterInstance
    .onGet('/api/v1/chats')
    .reply(() => {
        const chats = [{
            id: 1,
            title: 'wow',
            ttl: 12,
            tags: ['tag1', 'tag2'],
            creator: 'Kirill',
            lastMessages: [{
                sender: 'Kirill',
                message: 'I am loh'
            },
                {
                    sender: 'Kirill',
                    message: 'I am loh 2'
                }
            ]
        }]

        return [200, chats ];
    });

