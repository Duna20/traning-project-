const express = require ('express');
const router = express.Router();

const JController =require ('../controllers/JController.js')

router.get('/',JController.homepage);
router.get('/collection',JController.explpreCollection);
router.post('/search', JController.Jsearch);
router.get('/aboutus', JController.Jaboutus);

router.get('/Contact2',JController.JContact2);

router.get('/col1',JController.Jcol1);
router.get('/col2',JController.Jcol2);
router.get('/col3',JController.Jcol3);



module.exports=router;