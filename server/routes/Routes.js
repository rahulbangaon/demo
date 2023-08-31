import expresss from 'express';

import { addStudent, getStudents, getStudent, editStudent, deleteStudent } from '../controller/controller.js';

const router = expresss.Router();

router.post("/addStudent",addStudent);

router.get("/getStudents",getStudents);

router.get("/getStudent/:id",getStudent);

router.post("/editStudent/:id",editStudent);

router.delete("/deleteStudent/:id",deleteStudent);

export default router;

