
// import axios from 'axois'

export const HitApi = (json, api) => {

  return new Promise(function (resolve, reject) {
    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(json)
    };

    console.log("REQUEST", requestOptions)
    fetch(api, requestOptions).then((res) => {
      console.log("res.kjinhn", res)
    })

      .then(
        (result) => {
          console.log('result===>', result);
          resolve(result);

        },
        (error) => {
          console.log("errpr", error)
          resolve(error);
        }
      ).catch((err) => {
        console.log(".catch+++", err)
        resolve(err)
      })
  })
}

export const NewHitApi = async (json, api) => {
  await axios.post(api, json, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token // if you use token
    }
  })
    .then(function (response) {
      console.log('response', response);
    })
    .catch(function (error) {
      console.log('error', error);
    });

}