import { Address } from "viem"

enum  EXCHANGE_STATE { NOT_CONNECTED,
                       MISSING_SELL_AMOUNT,
                       INSUFFICIENT_BALANCE,
                       APPROVE,
                       PENDING,
                       SWAP }

enum  TRANSACTION_TYPE { SELL_EXACT_OUT, BUY_EXACT_IN }
enum  FEED_TYPE { TOKEN_LIST, AGENT_WALLETS, RECIPIENT_WALLETS }

interface PriceRequestParams {
  sellToken: Address|string;
  buyToken: Address|string;
  buyAmount: string;
  sellAmount: string;
  connectedAccountAddr?: string;
}

type AccountRecord = {
  address: Address|string;
  name: string;
  symbol: string;
  img: string;
  url: string;
}

type ContractRecs = {
  nameRec:any,
  symbolRec:any,
  decimalRec:any,
  totalSupplyRec:any
}

type TokenContract = {
  chainId : number | undefined,
  address : any,
  name :string | undefined,
  symbol :string | undefined,
  decimals : number | undefined,
  totalSupply : any,
  img: string | undefined;
}

type NetworkElement = {
  chainId: number;
  name: string;
  symbol: string;
  img: string;
  url: string;
}

type TradeData = {
  transactionType:TRANSACTION_TYPE;
  sellAmount:bigint;
  sellBalanceOf:bigint;
  formattedSellAmount:string;
  buyAmount:bigint;
  buyBalanceOf:bigint;
  formattedBuyAmount:string;
  slippage: string;
}

type ExchangeContext = {
  network: NetworkElement;
  recipientAccount: AccountRecord;
  agentAccount: AccountRecord;
  sellTokenContract: TokenContract;
  buyTokenContract: TokenContract;
  tradeData: TradeData;
  activeContainerId:string;
  test : {dumpContextButton:boolean};
}

type ErrorMessage ={ 
  source:string,
  errCode:number,
  msg:string | undefined
  // msgArr:string[] | undefined
  // msgObj:{} | undefined
}

export {
  EXCHANGE_STATE,
  TRANSACTION_TYPE,
  FEED_TYPE
}

export type {
  AccountRecord,
  ContractRecs,
  ErrorMessage,
  ExchangeContext,
  NetworkElement,
  PriceRequestParams,
  TokenContract,
  TradeData,
}

