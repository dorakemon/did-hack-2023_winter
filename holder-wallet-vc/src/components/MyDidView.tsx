export const MyDidView = ({ did }: { did: string }) => {
  return (
    <div
      style={{
        width: "90%",
        lineHeight: "1.5",
        padding: "20px",
        margin: "10px auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3>自分のDID</h3>
      <textarea
        style={{
          width: "100%",
          height: "calc(1.5em * 8)",
          overflowY: "auto",
          padding: "10px",
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "monospace",
          fontSize: "16px",
          lineHeight: "1.5",
          wordWrap: "break-word",
          resize: "none", // リサイズハンドルを無効化
        }}
        value={did}
        readOnly // 編集不可にする
      />
    </div>
  );
};
