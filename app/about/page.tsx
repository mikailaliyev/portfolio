async function About() {
  const data = await fetch(
    "https://test-fastapi-app.vercel.app/88"
  );
  const pageName= await data.json();
  console.log(pageName);
  return (
    <>
      <title>About</title>
      <h1>About me</h1>
      <h2>{pageName}</h2>
    </>
  );
}
export default About;
