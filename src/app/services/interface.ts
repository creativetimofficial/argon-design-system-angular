export interface LoginOptions {
    username: string;
    password: string;
  }
  
  export interface Forgot {
    username: string;
  }
  export interface Otp {
    otp: string;
  }
  
  export interface Reset {
    password: string;
    confpassword: string;

  }
  