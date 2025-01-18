import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Register from './Register';
import Login from './Login';
import { useLocation } from 'react-router-dom';


const AuthModal = ({ handleClose, open }) => {
    const location = useLocation()
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, bgcolor: 'background.paper', boxShadow: 24, p: 4, outline: 'none', borderRadius: 2 }}>
                    { location.pathname === "/login" ?  <Login /> : <Register /> }
                </Box>
            </Modal>
        </div>
    );
}

export default AuthModal

