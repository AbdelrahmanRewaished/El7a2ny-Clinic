import { useState,useEffect} from 'react';
import { storage } from '../../../utils/firebase.config';
import { ref, deleteObject } from "firebase/storage";
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import Box from '@mui/material/Box';
import Modal from '@mui/joy/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { EnhancedTableToolbar } from './components/tableToolBar';
import { EnhancedTableHead } from './components/tableHead';
import { CircularProgress, Divider, IconButton, Stack,Typography } from '@mui/material';
import image from '../../../assets/medicalDoc2.png'
import { saveAs } from 'file-saver';
import FileViewer from 'react-file-viewer'
import UploadHealthRecordModal from './components/uploadHealthRecord';
import TableLoadingSkeleton from '../../../components/tableLoadingSkeleton';
import { config } from "../../../configuration";
import {FileViewModalStyle} from './medicalHistoryCSS'

export interface IHealthRecord {
  name:string,
  url:string,
  createdAt:string|Date,
  recordType:string,
  fileType?:string
}
const MedicalHistory:React.FC=()=> {
  const [files,setFiles] = useState<Array<IHealthRecord>>([])
  const [tableLoading, setTableLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [upload,setUpload] = useState(false)
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [viewFileModal,setViewFileModal] = useState(false)
  const [fileType,setFileType] = useState<string>()
  const [viewFileUrl,setViewFileUrl] = useState<string>()
  const [viewFileName,setViewFileName] = useState<string>()

  useEffect(()=>{
      getAllFiles()
  },[])

  const getAllFiles=()=>{
    try{
      axios.get(`${config.serverUri}/patients/health-records`).then(res=>{setFiles(res.data);setTableLoading(false)})
    }catch(error){
      
    }
  }

  const addFileToTable = async (healthrecord?:IHealthRecord)=>{
    if(healthrecord)
      setFiles((old)=>{
        return [...old,healthrecord]
      })
    setUpload(false)
  } 

  const downloadFile= async (url:string,fileName:string)=>{
    const response = await fetch(url,{mode:'cors'});
    const blob = await response.blob();
    saveAs(blob, fileName);
  }
  
  const deleteFile = async (fileUrl:string,index:number)=>{
    //setDeleteLoading(true)
    const refd =ref(storage,fileUrl)
    try{
      await  deleteObject(refd)
      await axios.delete(`${config.serverUri}/patients/health-records`,{params:{fileUrl:fileUrl}})
    }catch(error){
      console.log(error)
    }
    
    setFiles((oldFiles)=>{
      return [...oldFiles.slice(0, index), ...oldFiles.slice(index + 1)];
    })
    //setDeleteLoading(false)

  }
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = files?.map((n,index) => index);
      setSelected(newSelected||[]);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected: readonly number[] = [];

      if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
      );
      }
      setSelected(newSelected);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const openViewFileModal = (file:IHealthRecord)=>{
    setViewFileName(file.name);setViewFileUrl(file.url);
    setFileType(file.fileType?.split('/')[1]);
    setViewFileModal(true)
  }
    
  return (
      <Stack position='relative' direction="row" justifyContent='center' sx={{ width: '100%' }}>
        {upload && <UploadHealthRecordModal openUpload={true} close={addFileToTable}/>}
      <Paper sx={{mb: 2 ,width:'80%' }}>
      
          <EnhancedTableToolbar numSelected={selected.length} openModal={()=>{setUpload(true)}} />
          <TableContainer>
          <Box
            component="img"
            className='my-img'
            alt="The house from the offer."
            src={image}
            />
          <Table
              sx={{ minWidth: 750, }}
              aria-labelledby="tableTitle"
              size={'medium'}
          >
              <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={files?.length||0}
              />
              <TableBody>
              {tableLoading ? (<TableLoadingSkeleton/>):
              files?.map((file, index) => (
                  <TableRow
                  role="checkbox"
                      hover
                      onClick={() =>openViewFileModal(file)}
                      aria-checked={isSelected(index)}
                      tabIndex={-1}
                      key={index}
                      selected={isSelected(index)}
                      sx={{
                        '&.Mui-selected, &.Mui-selected:hover': {
                          backgroundColor: '#1039394D', // Change this to your desired color
                          cursor:'pointer'
                        },
                      }}
                  >
                     
                    <TableCell padding="checkbox">
                      <Checkbox
                          onClick={(event) => handleClick(event,index)}
                          role="checkbox"
                          color="primary"
                          checked={isSelected(index)}
                          inputProps={{
                          'aria-labelledby': `enhanced-table-checkbox-${index}`,
                          }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={"enhanced-table-checkbox-"+index}
                      scope="row"
                      padding="none"
                    >
                      {file.name}
                    </TableCell>
                    <TableCell align="center">    
                      {file.recordType}  
                    </TableCell>
                    <TableCell align="center">    
                      {file.fileType}  
                    </TableCell>
                    <TableCell align="center">    
                    {new Date(file.createdAt).toDateString()}  
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" justifyContent='center' divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                          <IconButton onClick={(e)=>{e.stopPropagation();downloadFile(file.url,file.name)}}>
                            <DownloadIcon color='action' sx={{color:'#103939'}}/>
                          </IconButton>    
                          <IconButton onClick={(e) =>{e.stopPropagation();deleteFile(file.url,index)}}>
                            {deleteLoading ? <CircularProgress size={24} /> : <DeleteIcon  />}
                          </IconButton>
                      </Stack>
                    </TableCell>
                </TableRow>
                  
              ))} 
              </TableBody>
          </Table>
          </TableContainer>
      </Paper>
      <Modal          
        open={viewFileModal}
        onClose={()=>{setViewFileModal(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={FileViewModalStyle}>
          <Typography align='center' color="#103939" fontFamily="Inter" id="modal-modal-title" variant="h6" component="h2">
            {viewFileName}
          </Typography>
          <FileViewer
            fileType={fileType}
            filePath={viewFileUrl}
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
      </Modal>
      </Stack>

  )
}
export default MedicalHistory
