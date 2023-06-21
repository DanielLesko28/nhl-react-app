export const menuStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "200px",
  height: "100vh",
  backgroundColor: "#fff",
  zIndex: 10,
  transition: "transform 0.3s ease-in",
};

export const closeButtonStyle = {
  position: "absolute",
  top: "4px",
  right: "4px",
  cursor: "pointer",
};

export const headingStyle = {
  fontSize: "2xl",
  padding: "16px",
};

export const listStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "1rem 0.5rem 1rem 0.5rem",
  color: "#333",
  maxHeight: "calc(100vh)",
  overflowY: "auto",
};

export const itemStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "xl",
  padding: "16px 0",
};

export const iconStyle = {
  marginRight: "8px",
};

export const endpoint = "https://statsapi.web.nhl.com/api/v1/teams";
