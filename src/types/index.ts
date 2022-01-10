export interface ProviderCheck {
  check: string;
}
export interface ProviderMeta extends ProviderCheck {
  type: string;
  name: string;
  logo: string;
}

export interface ProviderMetaMap {
  [id: string]: ProviderMeta;
}

export interface ProviderCheckMap {
  injectedAvailable: boolean;
  [check: string]: boolean;
}
