export const upload3DModel = (req: any, res: any) => {
  const filename = req.file.filename;
  res.status(200).send({filename: filename});
};
