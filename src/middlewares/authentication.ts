export function expressAuthentication(
  request: Request,
  securityName: string,
  scopes?: string[]
): Promise<any> {
  if (securityName === "api_key") {
    let token;
    const headers: any = request.headers;
    if (headers && headers["x-user"]) {
      token = headers["x-user"];
    }

    if (token === "user") {
      return Promise.resolve({
        id: 1,
        name: "user",
        scopes,
      });
    } else {
      return Promise.reject({ message: "Un Authorized" });
    }
  }
  return Promise.reject({});
}
