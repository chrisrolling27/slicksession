

const initialData = {

  sessions: {
    'session-1': {id: 'session-1', content: 'Hello switcher' },
    'session-2': {id: 'session-2', content: 'Swiper no swiping' },
    'session-3': {id: 'session-3', content: 'Jezebel was innocent' },
    'session-4': {id: 'session-4', content: 'One more time with feeling' },
  },

  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Ideas',
      sessionIds: ['session-1', 'session-2', 'session-3', 'session-4'],
    },
  },
    columnOrder: ['column-1'],

};

export default initialData;



