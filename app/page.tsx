const getData = async () => {
  await new Promise((res) => setTimeout(() => res(0), 2000))
  return { data: [1, 23, 4] }
}

const Home = async () => {
  const data = await getData()
  return <>home page </>
}

export default Home
