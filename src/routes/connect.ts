import request from "request";

export function connected(
  type: any,
  path: any,
  port: any,
  data: any,
  headers: any
) {
  return new Promise((resolve, reject) => {
    const localhost = process.env.LOCALHOST || "http://127.0.0.1";
    var options = {
      method: type,
      url: localhost + ":" + port + path,
      form: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: headers.Authorization
      },
      rejectUnauthorized: false
    };

    request(options, function(error, response, body) {
      if (error) {
        console.log(error);
        return reject(error);
      } else {
        return resolve(body);
      }
    });
  });
}
