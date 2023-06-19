export default function testHandler(_, res: any) {
  return res.status(200).json({ status: "success" });
}
