import { ProviderMetaMap } from '../types';

// @ts-ignore
import Web3DefaultLogo from '../logos/web3-default.svg';
// @ts-ignore
import MetaMaskLogo from '../logos/metamask.svg';
// @ts-ignore
import SafeLogo from '../logos/safe.svg';
// @ts-ignore
import NiftyWalletLogo from '../logos/niftyWallet.png';
// @ts-ignore
import TrustLogo from '../logos/trust.svg';
// @ts-ignore
import DapperLogo from '../logos/dapper.png';
// @ts-ignore
import CoinbaseLogo from '../logos/coinbase.svg';
// @ts-ignore
import CipherLogo from '../logos/cipher.svg';
// @ts-ignore
import imTokenLogo from '../logos/imtoken.svg';
// @ts-ignore
import StatusLogo from '../logos/status.svg';
// @ts-ignore
import TokenaryLogo from '../logos/tokenary.png';
// @ts-ignore
import OperaLogo from '../logos/opera.svg';
// @ts-ignore
import FrameLogo from '../logos/frame.svg';
// @ts-ignore
import LiqualityLogo from '../logos/liquality.png';
// @ts-ignore
import MathWalletLogo from '../logos/mathwallet.png';
// @ts-ignore
import RWalletLogo from '../logos/rwallet.svg';
// @ts-ignore
import BitpieLogo from '../logos/bitpie.svg';
// @ts-ignore
import XDEFILogo from '../logos/xdefi.svg';
// @ts-ignore
import CeloLogo from '../logos/celo.svg';

export const providers: ProviderMetaMap = {
  FALLBACK: {
    name: 'Web3',
    logo: Web3DefaultLogo,
    type: 'injected',
    check: 'isWeb3',
  },
  METAMASK: {
    name: 'MetaMask',
    logo: MetaMaskLogo,
    type: 'injected',
    check: 'isMetaMask',
  },
  SAFE: {
    name: 'Safe',
    logo: SafeLogo,
    type: 'injected',
    check: 'isSafe',
  },
  NIFTY: {
    name: 'Nifty',
    logo: NiftyWalletLogo,
    type: 'injected',
    check: 'isNiftyWallet',
  },
  DAPPER: {
    name: 'Dapper',
    logo: DapperLogo,
    type: 'injected',
    check: 'isDapper',
  },
  OPERA: {
    name: 'Opera',
    logo: OperaLogo,
    type: 'injected',
    check: 'isOpera',
  },
  TRUST: {
    name: 'Trust',
    logo: TrustLogo,
    type: 'injected',
    check: 'isTrust',
  },
  COINBASE: {
    name: 'Coinbase',
    logo: CoinbaseLogo,
    type: 'injected',
    check: 'isToshi',
  },
  CIPHER: {
    name: 'Cipher',
    logo: CipherLogo,
    type: 'injected',
    check: 'isCipher',
  },
  IMTOKEN: {
    name: 'imToken',
    logo: imTokenLogo,
    type: 'injected',
    check: 'isImToken',
  },
  STATUS: {
    name: 'Status',
    logo: StatusLogo,
    type: 'injected',
    check: 'isStatus',
  },
  TOKENARY: {
    name: 'Tokenary',
    logo: TokenaryLogo,
    type: 'injected',
    check: 'isTokenary',
  },
  FRAMEINJECTED: {
    name: 'Frame',
    logo: FrameLogo,
    type: 'injected',
    check: 'isFrame',
  },
  LIQUALITY: {
    name: 'Liquality',
    logo: LiqualityLogo,
    type: 'injected',
    check: 'isLiquality',
  },
  MATHWALLET: {
    name: 'Math Wallet',
    logo: MathWalletLogo,
    type: 'injected',
    check: 'isMathWallet',
  },
  RWALLET: {
    name: 'rWallet',
    logo: RWalletLogo,
    type: 'injected',
    check: 'isRWallet',
  },
  XDEFI: {
    name: 'XDEFI',
    logo: XDEFILogo,
    type: 'injected',
    check: '__XDEFI',
  },
  BITPIE: {
    name: 'Bitpie',
    logo: BitpieLogo,
    type: 'injected',
    check: 'isBitpie',
  },
  CELOINJECTED: {
    name: 'Celo extension wallet',
    logo: CeloLogo,
    type: 'injected',
    check: 'isCelo',
  },
};
