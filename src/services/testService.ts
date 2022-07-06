import { Test } from "../interfaces/Test";

export default class TestService {
  public async getTest(): Promise<Test> {
    return Promise.resolve({ id: "1" });
  }
}
