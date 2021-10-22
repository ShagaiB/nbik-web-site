// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
console.log("Hello");
export default function helloAPI(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
