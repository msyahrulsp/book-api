import { Request, ResponseToolkit } from '@hapi/hapi';

interface IRoutes {
  method: string;
  path: string;
  handler: (request: Request, reply: ResponseToolkit) => Promise<any> | any;
}

export default IRoutes;
