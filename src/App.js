import "./App.css";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import Pusher from "pusher-js";
import axios from "./axios";
import { useEffect, useState } from "react";
function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);
  useEffect(() => {
    const pusher = new Pusher("4673122f86d0db3e5363", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("message");
    channel.bind("inserted", function (newMessage) {
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
