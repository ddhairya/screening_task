import http from "../http-common";

class CampaignDataService {
  getAll() {
    return http.get("/campaigns", {headers: { 'x-access-token': localStorage.getItem('token') } });
  }

  update(id, data) {
    return http.put(`/campaigns/${id}`, data, {headers: { 'x-access-token': localStorage.getItem('token') } });
  }

  create(data) {
    return http.post("/campaigns", data, {headers: { 'x-access-token': localStorage.getItem('token') } });
  } 

}

export default new CampaignDataService();