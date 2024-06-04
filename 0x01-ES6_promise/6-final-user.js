import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const list = [];
      for (const res of results) {
        list.push({ status: res.status, value: res.value });
      }
      console.log(list);
      return list;
    });
}
