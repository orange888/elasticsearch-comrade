import { GET, POST } from "../requests";

export default {
  methods: {
    async listRepos() {
      this.$store.commit("startLoading");
      const response = await GET("/api/v1/snapshot/list_repos");
      this.$store.commit("stopLoading");
      return response;
    },
    async listSnapshots(repo) {
      this.$store.commit("startLoading");
      const response = await GET(`/api/v1/snapshot/${repo}/list`);
      this.$store.commit("stopLoading");
      return response;
    },
    async restore(repo, snapshot, body) {
      await POST(`/api/v1/snapshot/restore/${repo}/${snapshot}`, body);
    },
    async createSnapshot(repo, snapshot, body) {
      await POST(`/api/v1/snapshot/create/${repo}/${snapshot}`, body);
    }
  }
};
