import http from "../http-common";

class AuthDataService {
  getAll() {
    return http.get("/auth");
  }

  get(id) {
    return http.get(`/auth/${id}`);
  }

  create(data) {
    return http.post("/auth/signup", data);
  }

  login(data) {
    return http.post("/auth/signin", data);
  }

  update(id, data) {
    return http.put(`/auth/${id}`, data);
  }

  delete(id) {
    return http.delete(`/auth/${id}`);
  }

  deleteAll() {
    return http.delete(`/auth`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new AuthDataService();