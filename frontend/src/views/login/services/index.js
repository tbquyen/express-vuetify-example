import axios from "@/plugins/axios.config";

class Service {
  async login(data) {
    const response = await axios.post("/login", data);
    return response.data;
  }
}

export default new Service();
