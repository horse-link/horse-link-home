import React, { useState } from "react";
import api from "../api/api";
import { PageLayout, Button } from "../components";

const TwitterSocial: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [tweetUrl, setTweetUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string>();
  const [error, setError] = useState<string>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ walletAddress, tweetUrl });
    setMsg(undefined);
    setError(undefined);
    setLoading(true);

    try {
      const res = await api.register(phoneNumber, walletAddress);
      setMsg(res);
    } catch (e) {
      console.error(e);
      // we know what the error will be, so we just have a flag here
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <PageLayout>
      <div className="m-3">
        <h1>Social Media</h1>
        <p>Share horse.link on social media and get a rewarded</p>
        <p>submitting your tweet url to claim your reward</p>
        <form onSubmit={handleSubmit}>
          <div className="w-fit">
            <div className="m-3 flex justify-between">
              <label htmlFor="tweetUrl">Tweet Url</label>
              <input
                type="text"
                className="w-[30rem]"
                id="tweetUrl"
                placeholder="https://twitter.com/yourusername/status/123456789"
                value={tweetUrl}
                onChange={e => setTweetUrl(e.currentTarget.value)}
              />
            </div>
            <div className="m-3 flex justify-between">
              <label htmlFor="walletAddress">wallet address</label>
              <input
                type="text"
                className="ml-3 w-[30rem]"
                id="walletAddress"
                placeholder="0x00000000000000000000"
                value={walletAddress}
                onChange={e => setWalletAddress(e.currentTarget.value)}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-48 p-4"
            disabled={!tweetUrl || !walletAddress}
          >
            Submit
          </Button>
        </form>
      </div>
    </PageLayout>
  );
};

export default TwitterSocial;
