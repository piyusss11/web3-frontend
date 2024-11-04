import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useWallet } from "@/utils/useWallet";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { fetchTitles } from "@/services/fetchTitles";
import Navbar from "./Navbar";

const Home = () => {
  const { walletAddress, connectWallet } = useWallet();
  const [subject, setSubject] = useState("");
  const [titles, setTitles] = useState<Ititle[]>([]);
  const token = localStorage.getItem("authToken");
  const { toast } = useToast();

  const handleAddTitle = async () => {
    if (subject && walletAddress) {
      try {
        await axios.post(
          `${process.env.LocalHost}/api/v1/title`,
          {
            title: subject,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        toast({
          description: `${subject} added successfully`,
          title: "Title Added",
          variant: "default",
          color: "green",
        });
        setSubject("");
      } catch (error) {
        console.log("Error adding title:", error);
      }
    }
  };

  const handleDeleteTitle = (uuid: string, titleHeading: string) => {
    const updatedTitles: Ititle[] = titles.filter(
      (title) => title.uuid !== uuid
    );

    setTitles(updatedTitles);
    toast({
      description: `${titleHeading} deleted successfully`,
      title: "Title deleted",
      variant: "destructive",
    });
  };

  useEffect(() => {
    (async () => {
      const data = await fetchTitles();
      setTitles(data);
      console.log(titles);
    })();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-6 w-full min-h-screen">
      <Navbar />

      <div className="flex items-center justify-between w-full p-4">
        {!walletAddress ? (
          <Button onClick={connectWallet}>Connect Wallet</Button>
        ) : (
          <p>Wallet Address: {walletAddress}</p>
        )}
      </div>

      <Card className="w-full max-w-2xl p-6 shadow-lg">
        <CardHeader>
          <CardTitle>Add a New Title</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <Label>Subject</Label>
          <Input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <Button onClick={handleAddTitle} disabled={!walletAddress}>
            Add Title
          </Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {titles.map((title) => (
          <Card
            key={title.uuid}
            className="shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105"
          >
            <div className="flex-grow flex items-center justify-center">
              <CardTitle className="mb-2 h-12 font-semibold text-center text-xl text-gray-800">
                {title.title}
              </CardTitle>
            </div>
            <Button
              onClick={() => handleDeleteTitle(title.uuid, title.title)}
              className="mt-2"
              disabled={!walletAddress}
            >
              Delete
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
