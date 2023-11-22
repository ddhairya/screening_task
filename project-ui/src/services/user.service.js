import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/users",{headers: { 'x-access-token': localStorage.getItem('token') } });
  }

}

export default new UserDataService();