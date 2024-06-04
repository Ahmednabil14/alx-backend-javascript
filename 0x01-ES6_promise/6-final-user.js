import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return signUpUser(firstName, lastName)
    .then((p1) => uploadPhoto(fileName)
      .then((p2) => [{ status: p1.status, value: p1.value },
        { status: p2.status, value: p2.value }]));
}
