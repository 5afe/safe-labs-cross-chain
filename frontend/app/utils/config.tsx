import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { Chain, sepolia } from 'wagmi/chains'

const TITLE = "Safe • Scroll - Keystore demo"

const l2 = {
  rpc_endpoint: 'http://127.0.0.1:8545',
  chain_id: 31337,
  currency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  singletons: {
    safe_singleton_address: '0x41675C099F32341bf84BFc5382aF534df5C7461a',
    safe_proxyFactory_address: '0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67',
    multi_send_address: '0x38869bf66a61cF6bDB996A6aE40D5853Fd43B526',
    multi_send_call_only_address: '0x9641d764fc13c8B624c04430C7356C1C7C8102e2',
    fallback_handler_address: '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
    sign_nessage_lib_address: '0xd53cd0aB83D845Ac265BE939c57F53AD838012c9',
    create_call_address: '0x9b35Af71d77eaf8d7e40252370304687390A1A52',
    simulate_tx_accessor_address: '0x3d4BA2E0884aa488718476ca2FB8Efc291A46199',
    safe_keystore_module: "0x4A679253410272dd5232B3Ff7cF5dbB88f295319",
    safe_disable_local_keystore_guard: "0x7a2088a1bFc9d81c55368AE168C2C02570cB814F"
  }
}
// Local
// const l1 = {
//   rpc_endpoint: 'http://127.0.0.1:8545', // `https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`
//   chain_id: 31337, // 11155111
//   currency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
//   singletons: {
//     safe_singleton_address: '0x41675C099F32341bf84BFc5382aF534df5C7461a',
//     safe_proxyFactory_address: '0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67',
//     multi_send_address: '0x38869bf66a61cF6bDB996A6aE40D5853Fd43B526',
//     multi_send_call_only_address: '0x9641d764fc13c8B624c04430C7356C1C7C8102e2',
//     fallback_handler_address: '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99',
//     sign_nessage_lib_address: '0xd53cd0aB83D845Ac265BE939c57F53AD838012c9',
//     create_call_address: '0x9b35Af71d77eaf8d7e40252370304687390A1A52',
//     simulate_tx_accessor_address: '0x3d4BA2E0884aa488718476ca2FB8Efc291A46199',
//   }
// }
// Sepolia
const l1 = {
  rpc_endpoint: `https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`,
  chain_id: 11155111,
  currency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  singletons: {
    safe_singleton_address: '0x69f4D1788e39c87893C980c06EdF4b7f686e2938',
    safe_proxyFactory_address: '0xC22834581EbC8527d974F8a1c97E1bEA4EF910BC',
    multi_send_address: '0x998739BFdAAdde7C933B942a68053933098f9EDa',
    multi_send_call_only_address: '0xA1dabEF33b3B82c7814B6D82A79e50F4AC44102B',
    fallback_handler_address: '0x017062a1dE2FE6b99BE3d9d37841FeD19F573804',
    sign_nessage_lib_address: '0x98FFBBF51bb33A056B08ddf711f289936AafF717',
    create_call_address: '0xB19D6FFc2182150F8Eb585b79D4ABcd7C5640A9d',
    simulate_tx_accessor_address: '0x727a77a074D1E6c4530e814F89E618a3298FC044',
  }
}

export const wagmiConfig = getDefaultConfig({
  appName: TITLE,
  projectId: `${process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}`,
  chains: [{
    id: l2.chain_id,
    name: 'Scroll_devnet_Chain',
    nativeCurrency: l2.currency,
    rpcUrls: {
      default: { http: [l2.rpc_endpoint] },
    },
  }],
  ssr: true,
});

export default {
  page_title: TITLE,
  l1,
  l2
}