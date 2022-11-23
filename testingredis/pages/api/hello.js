// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongomodel from "../../database/model"
import connectDB from "../../database/connect"
import axios from "axios"
export default async function handler(req, res) {
  connectDB()
  // const data = await axios.get("https://jsonplaceholder.typicode.com/posts").then(res => res.data).catch(err => console.log(err))
  const test = await mongomodel.find() // console.log(data);
  res.send(test);
}
