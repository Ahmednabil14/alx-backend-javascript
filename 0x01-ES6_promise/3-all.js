import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto()
    .then((body) => createUser()
      .then((resolve) => {
        console.log(`${body.body} ${resolve.firstName} ${resolve.lastName}`);
      }))
    .catch(() => {
      console.log('Signup system offline');
    });
}
