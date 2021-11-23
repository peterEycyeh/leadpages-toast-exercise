// NOTE: Do not modify this file
import Chance from 'chance';

const chance = new Chance();
const callbacks = [];
function randomPercent() {
  return Math.floor(Math.random() * 100);
}

/**
 * When we get a message from the "server", the callback is executed
 * with the form data.
 *
 * @params {function} callback - The function called with form data.
 */
export function onMessage(callback) {
  callbacks.push(callback);
}

/**
 * Fetch all of the liked form submissions from the "server".
 *
 * @return {Promise} on success, resolve with list of form
 * submissions. We have a flaky server and it will fail 10
 * percent of the time.
 */
export async function fetchLikedFormSubmissions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // We have a really flaky server that has issues
      if (randomPercent() < 10) {
        reject({ status: 500, message: 'server error' });
        return;
      }

      try {
        resolve({
          status: 200,
          formSubmissions:
            JSON.parse(localStorage.getItem('formSubmissions')) || [],
        });
      } catch (e) {
        reject({ status: 500, message: e.message });
      }
    }, 3000 * (randomPercent() / 100));
  });
}

/**
 * Saves a form submission to the server.
 *
 * @params {FormSubmission} formSubmission
 */
export async function saveFormSubmission(formSubmission) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // We have a really flakey server that has issues
      if (randomPercent() < 10) {
        reject({ status: 500, message: 'server error' });
        return;
      }

      try {
        const submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
        const updatedSubmissions = [...submissions, formSubmission];

        localStorage.setItem(
          'formSubmissions',
          JSON.stringify(updatedSubmissions),
        );
        resolve({ status: 202, message: 'Success!' });
      } catch (e) {
        reject({ status: 500, message: e.message });
      }
    }, 3000 * (randomPercent() / 100));
  });
}

/**
 * Create a mock server response
 *
 * DON'T USE THIS FUNCTION.
 */
export function createMockFormSubmission() {
  const formSubmission = {
    id: chance.guid(),
    data: {
      email: chance.email(),
      firstName: chance.first(),
      lastName: chance.last(),
      liked: false,
    },
  };

  callbacks.forEach((cb) => cb(formSubmission));
}
