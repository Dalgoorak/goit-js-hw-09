import { Notify } from 'notiflix';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(element) {
  element.preventDefault();

  let delay = Number(element.currentTarget.delay.value);
  const step = Number(element.currentTarget.step.value);
  const amount = Number(element.currentTarget.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(
          () =>
            Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`),
          delay
        );
      })
      .catch(({ position, delay }) => {
        setTimeout(
          () => Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`),
          delay
        );
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  let promiseValue = { position, delay };

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(promiseValue);
    }
    reject(promiseValue);
  });
}
