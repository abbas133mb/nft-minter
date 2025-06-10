export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-5xl font-bold text-blue-400 mb-4">CRYSTAL</h1>
      <h2 className="text-4xl font-bold text-blue-300 mb-10">AIRDROP</h2>

      <div className="border border-blue-500 rounded-xl p-10 mb-8">
        <img src="/crystal.png" alt="Crystal NFT" className="w-40 h-40 object-contain" />
      </div>

      <div className="flex gap-4 mb-6">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white text-lg font-semibold">
          Connect Wallet
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white text-lg font-semibold">
          Mint NFT
        </button>
      </div>

      <p className="text-lg mb-2">0 / 5000</p>
      <div className="w-full max-w-md bg-gray-800 rounded-full h-2 mb-4">
        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '2%' }}></div>
      </div>

      <p className="text-sm text-blue-300 mt-4">
        Price per NFT &gt; 30 MATIC • Automady listed <span className="text-blue-400">OpenSea</span>
      </p>
    </main>
  );
}
