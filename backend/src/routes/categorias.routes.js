import { Router } from 'express';
import { methodsHTTP as categoriaController } from '../controller/categoria.controllers.js';
import proxyMedicoEspecialidad from '../middlewares/proxyMedicoEspecialidad.js';
import proxyProximaCita from '../middlewares/proxyProximaCita.js';
import proxiPacientesMedico from '../middlewares/proxyPacientesMedico.js';
import proxyCitaPaciente from '../middlewares/poxyCitaPaciente.js';
import proxyCitaFecha from '../middlewares/proxyCitaFecha.js';
import proxyCantidadCitas from '../middlewares/ProxyCantidadCitas.js';
import proxyConsultorioPaciente from '../middlewares/proxyConsultorioPaciente.js';
import proxyCitasAtendidasGenero from '../middlewares/proxyCitasAtendidasGenero.js';
import proxyNuevoPaciente from '../middlewares/proxyNuevoPaciente.js';
const router = Router();

export default router;

//1. Obtener todos los pacientes alfabéticamente
router.get("/getUsuarios", categoriaController.getUsuarios);

// 2. Obtener todas las citas alfabéticamente
router.get("/getCitas", categoriaController.getDates);

//3. Obtener todos los médicos de una especialidad específica
router.get("/getSpecialist", proxyMedicoEspecialidad, categoriaController.getSpecialist);

//4. Encontrar la próxima cita para un paciente específico 
router.get("/getNextMeet", proxyProximaCita, categoriaController.getNextMeet);

//5. Encontrar todos los pacientes que tienen citas con un médico específico )
router.get("/getPatients", proxiPacientesMedico, categoriaController.getPatients);

//6. Obtener las consultorías para un paciente específico
router.get("/getMeetPatient", proxyCitaPaciente, categoriaController.getMeetPatient);

//7. Encontrar todas las citas para un día específico
router.get("/getMeetsDate", proxyCitaFecha, categoriaController.getMeetsDate);

//8. Obtener los médicos y sus consultorios
router.get("/getMedicsAndConsultories", categoriaController.getMedicsAndConsultories);

//9. Contar el número de citas que un médico tiene en un día específico
router.get("/getMeetsAmount", proxyCantidadCitas, categoriaController.getMeetsAmount);

//10.Obtener los consultorio donde se aplicó las citas de un paciente
router.get("/getMeetConsultory", proxyConsultorioPaciente, categoriaController.getMeetConsultory);

//11.Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendida
router.get("/getMeetGender", proxyCitasAtendidasGenero, categoriaController.getMeetGender);

//12.Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.
router.post("/postPatient", proxyNuevoPaciente, categoriaController.postPatient);

//13.Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.
router.get("/rejectedMeets", categoriaController.rejectedMeets);








