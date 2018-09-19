declare global {
  namespace NodeJS {
    interface Global {
      fetch: (input?: string | Request, init?: RequestInit) => Promise<Response>
    }
  }
}
