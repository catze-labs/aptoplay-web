interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  playFabId: string;
  sessionTicket: string;
}

interface RegisterPayload {
  email: string;
  password: string;
}

interface RegisterResponse {
  playFabId: string;
  sessionTicket: string;
}

declare global {
  declare namespace Login {
    type Payload = LoginPayload;
    type Response = LoginResponse;
  }

  declare namespace Register {
    type Payload = RegisterPayload;
    type Response = RegisterResponse;
  }
}
