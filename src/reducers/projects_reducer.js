import { ADD_PROJECT, FETCH_PROJECTS, EDIT_PROJECT, DELETE_PROJECT } from '../actions';
const list_start = [
  {
    name: 'rotunda',
    location: 'Warszawa',
    date_start: new Date(1999,12,12),
    date_end: new Date(2020,5,8),
    procedures: [
      {
        name: 'Procedura budowy fundamentów',
        toDoList: [
          {text: 'Wykop wykonany na głębokość minimum 1m',status: true},
          {text: 'Wykop wykonany na szerokość od 50 cm do 100 cm',status: false},
          {text: 'Brak wód gruntowych',status: false},
        ]
      },
      {
        name: 'Procedura budowy dachu',
        toDoList: [
          {text: 'Konstrukcja zgodna z projektem',status: false},
          {text: 'Belki zabezpieczone przed wilgocią',status: false},
          {text: 'Nachylenie dachu przynajmniej 10%',status: false},
        ]
      }
    ],
    failure: []
  },
  {
    name: 'Pałac kultury',
    location: 'Warszawa',
    date_start:  new Date(1950,12,2),
    date_end:  new Date(1970,10,5),
    procedures: [],
    failure: []
  },
  {
    name: 'osiedle "Nowe" Gdynia',
    location: 'Gdynia',
    date_start: new Date(2018,1,17),
    date_end: new Date(2018,11,17),
    procedures: [],
    failure: []
  },
  {
    name: 'dom Kowalskich',
    location: 'Kisielice',
    date_start: new Date(2019,9,11),
    date_end:  new Date(2024,12,11),
    procedures: [],
    failure: []
  }
];

export default function(state = list_start,action){
  switch(action.type){
    case ADD_PROJECT:
      console.log("adding a project");
      return [...state, action.payload];
    case EDIT_PROJECT:
      console.log("editing a project");
      var newState = state;
      newState[action.payload.id] = action.payload.project;
      return newState;
    case DELETE_PROJECT:
      console.log("deleting a project");
      var newState = state;
      newState.splice(action.payload,1);
      return newState;
    case FETCH_PROJECTS:
      return state;
    default:
      return state;
  }
}
