# React Redux Toolkit Boilerplate

This is a simple boilerplate that I made to speed up the creation of a web app with react and redux toolkit as global state manager.

Just fork the repo and do `npm i` to build on top of if.

# File structure

- `src/index.js` where the store is mounted througth a provider
- `src/redux/store.js` script for creating the store collections the reducers
- `src/redux/peopleSlice.js` script for craeting the slice with an async thunk for api call and some selectors as example
- `src/redux/peopleSlice.js` constants states (enum) for fetchRequests
- `src/components/PeopleList.js` script that has the logic for call the api and get the data. It also react to changing of fetchRequest and people
- `src/components/PersonUpdater.js` script that dispatch the updatePeronName reducer
