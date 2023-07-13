import { Router } from 'express';
import { methodsHTTP as categoriaController } from '../controller/categoria.controllers.js';
const router = Router();

export default router;

//1. Obtener todos los pacientes alfabéticamente
router.get("/getUsuarios", categoriaController.getUsuarios);

// 2. Obtener todas las citas alfabéticamente
router.get("/getCitas", categoriaController.getDates);

//3. Obtener todos los médicos de una especialidad específica
router.get("/getSpecialist", categoriaController.getSpecialist);


