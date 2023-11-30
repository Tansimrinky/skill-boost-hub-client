import SectionTitle from "../SectionTitle/SectionTilte";

const Help = () => {
  return (
    <div>
        <SectionTitle heading={"We are always here to help you"}></SectionTitle>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          Student
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">I have a Question?</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://i.ibb.co/FWMCYG4/download-3.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          Mentor
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">What is it? We are always here to help you..</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>
  );
};

export default Help;
