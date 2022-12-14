import { OrganizationService } from "@/services/organization.service";
import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";

export const isAuthenticated = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		if (!req.user) throw new Error("401::Bad session / missing token");
		const { owner } = await OrganizationService.loadConfig();
		if (!req.user.isActive && req.user.id !== owner) throw new Error("403::User has been banned");
		return next();
	}
);

export const isStaff = (req: Request, res: Response, next: NextFunction) => {
	if (!req.user.isSuperUser) throw new Error("404::Resource not found");
	next();
};

export const hasPermission = (permissionProp: string) => {
	return asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
		const { owner } = await OrganizationService.loadConfig();

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		if ((req.user.Role && req.user.Role[permissionProp]) || req.user.id === owner) return next();
		throw new Error("403::Forbidden");
	});
};
