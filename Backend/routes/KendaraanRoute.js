import express from "express";
import {
  getKendaraan,
  getKendaraanById,
  createKendaraan,
  updateKendaraan,
  deleteKendaraan,
} from "../controllers/Kendaraan.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/kendaraan", verifyUser, getKendaraan);
router.get("/kendaraan/:id", verifyUser, getKendaraanById);
router.post("/kendaraan", verifyUser, createKendaraan);
router.patch("/kendaraan/:id", verifyUser, updateKendaraan);
router.delete("/kendaraan/:id", verifyUser, deleteKendaraan);

export default router;
