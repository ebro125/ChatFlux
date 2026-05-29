const ChatInput = () => {
  return (
    <div className="border-t border-gray-800 bg-gray-900 p-4">
      <form className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 rounded-lg bg-gray-800 px-4 py-3 outline-none"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;