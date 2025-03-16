import { NextFunction, Request, Response } from "express"

type SessionOption = {
}

let storeIsReady = false

export const initialize = async (req: Request, res: Response, next: NextFunction) => {
	if (req.session) {
		return next()
	}

	if (!storeIsReady) {
		next()
		return
	}
}