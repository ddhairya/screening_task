import http from "../http-common";

class AuthDataService {
  
  create(data) {
    return http.post("/auth/signup", data);
  }

  login(data) {
    return http.post("/auth/signin", data);
  }

}

export default new AuthDataService();