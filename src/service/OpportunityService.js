import http from "../http-common";

class OpportunityService {
  getAll() {
    return http.get("/opportunities/21");
  }

  get(id) {
    return http.get(`/opportunities/${id}`);
  }

  create(data) {
    return http.post("/opportunities/create", data);
  }

  update(data) {
    return http.post("/opportunities/update", data);
  }

  delete(id) {
    return http.delete(`/opportunities/delete/${id}`);
  }

}

export default new OpportunityService();
