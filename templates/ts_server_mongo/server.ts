import app from "./app";

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});