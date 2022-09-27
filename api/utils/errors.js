export const errorHandler = (status, msg) => {
  const err = new Error();
  err.status = status;
  err.messsage = msg;
  return err;
};
