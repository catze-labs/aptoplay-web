interface ServerErrorResponse {
  statusCode: number;
  message: string;
  data?: Record<string, unknown>;
  error?: string;
}
