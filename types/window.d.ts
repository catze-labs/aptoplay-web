declare global {
  interface Window {
    // foo: string;
    klaytn: any;
  }
}

// export const foo = window.foo
export const klaytn = window.klaytn;
