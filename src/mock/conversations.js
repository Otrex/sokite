export default [
  {
    conversation_id: 1,
    participants: {
      user_id: 1, name: 'Josh', username: '@Joshua', avatar: '', initials: 'JH',
    },
    messages: [
      {
        sender_id: 1,
        receiver_id: 2,
        message: 'Hello, Please I need to tell',
        read: false,
      },
      {
        sender_id: 2,
        receiver_id: 1,
        message: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',

      },
      {
        sender_id: 1,
        receiver_id: 2,
        message: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        read: true,

      },
      {
        sender_id: 1,
        receiver_id: 2,
        message: 'How Okay are you',
        read: false,
      },
      {
        sender_id: 2,
        receiver_id: 1,
        message: 'How are you',
      },
    ],
  },
  {
    conversation_id: 2,
    participants: {
      user_id: 1, name: 'Anas', username: '@anas', avatar: '', initials: 'JH',
    },
    messages: [
      {
        sender_id: 1,
        receiver_id: 2,
        message: 'Hello, Please I need to tell',
        read: true,
      },
      {
        sender_id: 2,
        receiver_id: 1,
        message: 'How are you',
      },
      {
        sender_id: 2,
        receiver_id: 1,
        message: 'How Okay are you',
      },
      {
        sender_id: 1,
        receiver_id: 2,
        message: 'How are you',
        read: false,
      },
    ],
  },
];
