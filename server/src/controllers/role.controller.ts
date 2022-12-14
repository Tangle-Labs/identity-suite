import { RolesService } from "@/services";
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

export const createNewRole = asyncHandler(async (req: Request, res: Response) => {
	const role = await RolesService.create({ ...req.body });
	res.status(201).json(role);
});

export const getAllRoles = asyncHandler(async (req: Request, res: Response) => {
	const roles = await RolesService.findMany({});
	res.json(roles);
});

export const updateRole = asyncHandler(async (req: Request, res: Response) => {
	const role = await RolesService.findByIdAndUpdate(req.params.id, { ...req.body });
	res.status(202).json(role);
});
