import { Controller, Example, Get, Route, Security } from "tsoa";
import { Test } from "../interfaces/Test";
import TestService from "../services/testService";

@Route("/api/test")
export class TestController extends Controller {
  @Example<Test>({
    id: "1",
  })
  @Security("api_key")
  @Get("/")
  public async get(): Promise<Test> {
    try {
      const testService = new TestService();
      return testService.getTest();
    } catch {
      return { id: "1" };
    }
  }
}
