declare global {
  // tslint:disable-next-line
  interface Window {
    ethereum: any;
    web3: any;
    celo: any;
  }
}

export * from './providers';
export * from './utils';
export * from './types';
