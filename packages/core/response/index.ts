import { type Response } from "express";

type ResponseDTO = {
  code?: number;
  success?: boolean;
  message?: string;
  data?: any;
};

const response = (res: Response, data: ResponseDTO) => {
  let payload: any = {
    success: data.success == undefined ? true : data.success,
  };

  if (data.message) {
    payload.message = data.message;
  }
  if (data.data) {
    payload.data = data.data;
  }

  return res.status(data.code || 200).json(payload);
};

const exceptionResponse = (res: Response, error: any) => {
  const payload = {} as any;

  let statusCode = 500;

  if (typeof error.code === "number") {
    statusCode = error.code;
  } else if (error.response && error.response.status) {
    statusCode = error.response.status;
  } else if (error.code === "ERR_BAD_REQUEST") {
    statusCode = 400;
  } else if (error.code === "ERR_CONFLICT") {
    statusCode = 401;
  }

  if (error.message) payload.message = error.message;

  return res.status(statusCode).json({
    ...payload,
    success: false,
  });
};

export { type ResponseDTO, response, exceptionResponse };
